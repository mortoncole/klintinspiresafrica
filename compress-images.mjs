import sharp from 'sharp'
import { readdirSync, statSync, readFileSync, writeFileSync } from 'fs'
import { join, extname } from 'path'

const MAX_WIDTH = 1600
const QUALITY = 82

async function compressDir(dir) {
  const entries = readdirSync(dir)
  for (const entry of entries) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      await compressDir(full)
      continue
    }
    const ext = extname(entry).toLowerCase()
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue

    const before = statSync(full).size
    try {
      const inputBuf = readFileSync(full)
      const img = sharp(inputBuf)
      const meta = await img.metadata()
      const pipeline = meta.width > MAX_WIDTH ? img.resize(MAX_WIDTH) : img
      const buf = ext === '.png'
        ? await pipeline.png({ compressionLevel: 9 }).toBuffer()
        : await pipeline.jpeg({ quality: QUALITY, mozjpeg: true }).toBuffer()

      if (buf.length < before) {
        writeFileSync(full, buf)
        console.log(`✓ ${full.replace(process.cwd(), '')} ${(before/1024).toFixed(0)}KB → ${(buf.length/1024).toFixed(0)}KB`)
      } else {
        console.log(`- ${full.replace(process.cwd(), '')} already optimal`)
      }
    } catch (e) {
      console.log(`✗ ${entry}: ${e.message}`)
    }
  }
}

await compressDir(join(process.cwd(), 'public'))
console.log('\nDone.')

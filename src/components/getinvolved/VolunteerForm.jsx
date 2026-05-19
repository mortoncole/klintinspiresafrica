import { useState } from 'react'

const SKILLS = [
  'Teaching / Mentoring', 'Healthcare', 'Photography / Videography',
  'Social Media / Marketing', 'Event Planning', 'Logistics / Transport',
  'Graphic Design', 'Music / Entertainment', 'General Labour',
]

const AVAILABILITY = ['Weekdays', 'Weekends', 'Both', 'Flexible']

const initial = { name: '', phone: '', email: '', location: '', skills: [], availability: '', message: '' }

export default function VolunteerForm() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const toggleSkill = (skill) => {
    setForm((f) => ({
      ...f,
      skills: f.skills.includes(skill) ? f.skills.filter((s) => s !== skill) : [...f.skills, skill],
    }))
    setErrors((e) => ({ ...e, skills: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Required.'
    if (!form.phone.trim()) e.phone = 'Required.'
    if (!form.email.trim()) e.email = 'Required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email.'
    if (!form.location.trim()) e.location = 'Required.'
    if (!form.skills.length) e.skills = 'Pick at least one skill.'
    if (!form.availability) e.availability = 'Required.'
    return e
  }

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    setErrors((err) => ({ ...err, [e.target.name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/mgoqovyv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, skills: form.skills.join(', ') }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok) { setStatus('success'); setForm(initial) }
      else { setStatus('error'); setErrors((e) => ({ ...e, _server: data?.error || `Error ${res.status}` })) }
    } catch (err) { setStatus('error'); setErrors((e) => ({ ...e, _server: err.message })) }
  }

  const inputCls = (f) =>
    `w-full rounded-xl border px-4 py-3 text-sm text-brand-navy placeholder-gray-400 outline-none
     transition-all duration-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 bg-white
     ${errors[f] ? 'border-red-400' : 'border-gray-200'}`

  if (status === 'success') return (
    <div className="flex flex-col items-center justify-center text-center py-16 gap-5">
      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-2xl font-extrabold text-brand-navy">You're In!</h3>
      <p className="text-gray-500 text-sm max-w-xs leading-relaxed">Thanks for signing up. We'll be in touch with next steps soon.</p>
      <button onClick={() => setStatus('idle')} className="px-6 py-2.5 rounded-full bg-brand-orange text-white font-bold text-sm hover:bg-brand-orange-dark transition-colors">
        Sign Up Again
      </button>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-brand-navy mb-1.5">Full Name <span className="text-brand-orange">*</span></label>
          <input name="name" placeholder="Your full name" value={form.name} onChange={handleChange} className={inputCls('name')} />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-brand-navy mb-1.5">Phone Number <span className="text-brand-orange">*</span></label>
          <input name="phone" type="tel" placeholder="0XX XXX XXXX" value={form.phone} onChange={handleChange} className={inputCls('phone')} />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-brand-navy mb-1.5">Email Address <span className="text-brand-orange">*</span></label>
          <input name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} className={inputCls('email')} />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-brand-navy mb-1.5">Location / Area <span className="text-brand-orange">*</span></label>
          <input name="location" placeholder="e.g. Obuasi, Accra" value={form.location} onChange={handleChange} className={inputCls('location')} />
          {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
        </div>
      </div>

      {/* Skills */}
      <div>
        <label className="block text-sm font-semibold text-brand-navy mb-3">
          Skills / Interests <span className="text-brand-orange">*</span>
          <span className="text-gray-400 font-normal ml-1">(select all that apply)</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((skill) => {
            const active = form.skills.includes(skill)
            return (
              <button type="button" key={skill} onClick={() => toggleSkill(skill)}
                className={`px-4 py-2 rounded-full text-xs font-bold border transition-all duration-200 ${
                  active ? 'bg-brand-orange border-brand-orange text-white shadow' : 'bg-white border-gray-200 text-gray-600 hover:border-brand-orange hover:text-brand-orange'
                }`}>
                {skill}
              </button>
            )
          })}
        </div>
        {errors.skills && <p className="text-red-500 text-xs mt-2">{errors.skills}</p>}
      </div>

      {/* Availability */}
      <div>
        <label className="block text-sm font-semibold text-brand-navy mb-3">Availability <span className="text-brand-orange">*</span></label>
        <div className="flex flex-wrap gap-2">
          {AVAILABILITY.map((opt) => (
            <button type="button" key={opt}
              onClick={() => { setForm((f) => ({ ...f, availability: opt })); setErrors((e) => ({ ...e, availability: undefined })) }}
              className={`px-5 py-2 rounded-full text-xs font-bold border transition-all duration-200 ${
                form.availability === opt ? 'bg-brand-orange border-brand-orange text-white shadow' : 'bg-white border-gray-200 text-gray-600 hover:border-brand-orange hover:text-brand-orange'
              }`}>
              {opt}
            </button>
          ))}
        </div>
        {errors.availability && <p className="text-red-500 text-xs mt-2">{errors.availability}</p>}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-brand-navy mb-1.5">Why do you want to volunteer? <span className="text-gray-400 font-normal">(optional)</span></label>
        <textarea name="message" rows={4} placeholder="Tell us a little about your motivation…" value={form.message} onChange={handleChange}
          className={`${inputCls('message')} resize-none`} />
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          Something went wrong. {errors._server && <span className="font-semibold">{errors._server}</span>}
        </p>
      )}

      <button type="submit" disabled={status === 'sending'}
        className="self-start flex items-center gap-2 px-8 py-4 rounded-full bg-brand-orange hover:bg-brand-orange-dark
                   disabled:opacity-60 text-white font-bold text-sm uppercase tracking-wide transition-colors duration-200 shadow-lg">
        {status === 'sending' ? (
          <><svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg> Submitting…</>
        ) : (
          <><span>Sign Me Up</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg></>
        )}
      </button>
    </form>
  )
}

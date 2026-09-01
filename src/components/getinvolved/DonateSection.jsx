import { useState } from 'react'

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button
      onClick={copy}
      className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-200 ${
        copied
          ? 'bg-green-100 text-green-600'
          : 'bg-brand-orange/10 text-brand-orange hover:bg-brand-orange hover:text-white'
      }`}
    >
      {copied ? (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
          </svg>
          Copy
        </>
      )}
    </button>
  )
}

function DetailRow({ label, value }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
      <span className="text-gray-500 text-sm font-medium">{label}</span>
      <div className="flex items-center gap-3">
        <span className="text-brand-navy font-bold text-sm">{value}</span>
        <CopyButton text={value} />
      </div>
    </div>
  )
}

const methods = [
  {
    id: 'momo',
    network: 'MTN Mobile Money',
    color: 'from-yellow-400 to-yellow-600',
    details: [
      { label: 'Number', value: '0544411364' },
      { label: 'Name', value: 'CLINTON OSEI ADDO' },
      { label: 'Reference', value: 'KLINT INSPIRES' },
    ],
  },
  {
    id: 'bank',
    network: 'Bank Transfer',
    color: 'from-brand-navy to-slate-700',
    details: [
      { label: 'Bank', value: 'GCB' },
      { label: 'Account Name', value: 'Klint Inspires Africa Foundation' },
      { label: 'Account No.', value: '0000000000' },
    ],
  },
]

export default function DonateSection() {
  return (
    <section id="donate" className="bg-white py-20 px-4 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-0.5 bg-brand-orange rounded-full" />
          <span className="text-brand-orange font-bold text-xs uppercase tracking-widest">Give</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">Make a Donation</h2>
        <p className="text-gray-500 text-base leading-relaxed max-w-xl mb-12">
          Your gift, big or small, goes directly into the hands of those who need it most. Every cedi counts.
        </p>

        {/* Impact strip */}
        <div className="grid grid-cols-3 gap-4 mb-14">
          {[
            { amount: 'GH₵ 50', impact: 'Feeds 5 children' },
            { amount: 'GH₵ 100', impact: 'Provides a school kit' },
            { amount: 'GH₵ 500', impact: 'Sponsors an outreach' },
          ].map(({ amount, impact }) => (
            <div key={amount} className="text-center p-5 rounded-2xl bg-brand-orange/5 border border-brand-orange/20">
              <p className="text-brand-orange font-extrabold text-xl mb-1">{amount}</p>
              <p className="text-brand-navy text-xs font-semibold">{impact}</p>
            </div>
          ))}
        </div>

        {/* Payment methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {methods.map((method) => (
            <div key={method.id} className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              {/* Header */}
              <div className={`bg-gradient-to-r ${method.color} p-5 flex items-center gap-3`}>
                <p className="text-white font-extrabold text-base">{method.network}</p>
              </div>
              {/* Details */}
              <div className="p-6">
                {method.details.map((d) => (
                  <DetailRow key={d.label} {...d} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-gray-400 text-xs text-center mt-6 italic">
          After donating, send a screenshot to <span className="text-brand-orange font-semibold">klintinspiresafrica@gmail.com</span> for confirmation.
        </p>
      </div>
    </section>
  )
}

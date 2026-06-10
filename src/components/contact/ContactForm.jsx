import { useState } from 'react'

const SUBJECTS = [
  'General Enquiry',
  'Partnership / Collaboration',
  'Donation',
  'Volunteering',
  'Media & Press',
  'Other',
]

const initialState = { name: '', email: '', subject: '', message: '', agreedToTerms: false }

function InputField({ label, id, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-brand-navy font-semibold text-sm">
        {label} <span className="text-brand-orange">*</span>
      </label>
      {children}
      {error && <p className="text-red-500 text-xs font-medium">{error}</p>}
    </div>
  )
}

function ConsentCheckbox({ label, id, error, checked, onChange }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="flex items-start gap-3 cursor-pointer">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="w-4 h-4 mt-1 rounded border-gray-300 text-brand-orange focus:ring-brand-orange/50 cursor-pointer"
        />
        <span className="text-brand-navy text-sm leading-relaxed">
          I agree to the <a href="/terms" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-orange hover:underline">Terms of Service</a> and{' '}
          <a href="/privacy" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-orange hover:underline">Privacy Policy</a> <span className="text-brand-orange">*</span>
        </span>
      </label>
      {error && <p className="text-red-500 text-xs font-medium ml-7">{error}</p>}
    </div>
  )
}

export default function ContactForm() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Full name is required.'
    if (!form.email.trim()) e.email = 'Email address is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.'
    if (!form.subject) e.subject = 'Please select a subject.'
    if (!form.message.trim()) e.message = 'Message cannot be empty.'
    else if (form.message.trim().length < 20) e.message = 'Message must be at least 20 characters.'
    if (!form.agreedToTerms) e.agreedToTerms = 'You must agree to the Terms and Privacy Policy.'
    return e
  }

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    setErrors((err) => ({ ...err, [e.target.name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const e_ = validate()
    if (Object.keys(e_).length) { setErrors(e_); return }

    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/mojbjvjq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm(initialState)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  // ── Success state ──────────────────────────────────────────────────────────
  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 gap-5">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-green-500" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-extrabold text-brand-navy">Message Sent!</h3>
        <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
          Thank you for reaching out. We'll get back to you within 24 – 48 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-2 px-6 py-2.5 rounded-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-sm transition-colors duration-200"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  // ── Form ──────────────────────────────────────────────────────────────────
  const inputClass = (field) =>
    `w-full rounded-xl border px-4 py-3 text-sm text-brand-navy placeholder-gray-400
     outline-none transition-all duration-200
     focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 bg-white
     ${errors[field] ? 'border-red-400' : 'border-gray-200'}`

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField label="Full Name" id="name" error={errors.name}>
          <input
            id="name" name="name" type="text"
            placeholder="Clinton Osei Addo"
            value={form.name} onChange={handleChange}
            className={inputClass('name')}
          />
        </InputField>

        <InputField label="Email Address" id="email" error={errors.email}>
          <input
            id="email" name="email" type="email"
            placeholder="you@example.com"
            value={form.email} onChange={handleChange}
            className={inputClass('email')}
          />
        </InputField>
      </div>

      {/* Subject */}
      <InputField label="Subject" id="subject" error={errors.subject}>
        <select
          id="subject" name="subject"
          value={form.subject} onChange={handleChange}
          className={`${inputClass('subject')} cursor-pointer`}
        >
          <option value="">Select a subject…</option>
          {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </InputField>

      {/* Message */}
      <InputField label="Message" id="message" error={errors.message}>
        <textarea
          id="message" name="message" rows={6}
          placeholder="Tell us how we can help or how you'd like to get involved…"
          value={form.message} onChange={handleChange}
          className={`${inputClass('message')} resize-none`}
        />
      </InputField>

      {/* Consent Checkbox */}
      <ConsentCheckbox
        label="I agree to the Terms and Privacy Policy"
        id="agreedToTerms"
        error={errors.agreedToTerms}
        checked={form.agreedToTerms}
        onChange={(e) => {
          setForm((f) => ({ ...f, agreedToTerms: e.target.checked }))
          setErrors((err) => ({ ...err, agreedToTerms: undefined }))
        }}
      />

      {/* Error banner */}
      {status === 'error' && (
        <p className="text-red-500 text-sm font-medium bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-orange
                   hover:bg-brand-orange-dark disabled:opacity-60 disabled:cursor-not-allowed
                   text-white font-bold text-sm uppercase tracking-wide
                   transition-colors duration-200 shadow-lg animate-pulse_cta self-start"
      >
        {status === 'sending' ? (
          <>
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
            Sending…
          </>
        ) : (
          <>
            Send Message
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </>
        )}
      </button>
    </form>
  )
}

import { useState } from 'react'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import logoUrl from '../glamhublogo.jpeg'

const CONTACT_EMAIL = 'info@glamhubelite.co.za'

const serviceOptions = [
  'Event Management',
  'Business Support',
  'Branding & Marketing',
  'GlamHubStudio',
  'Tech & Innovation',
  'Partnership / Sponsorship',
  'General Enquiry',
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', organisation: '', email: '', phone: '', service: '', message: '' })
  const [submissionState, setSubmissionState] = useState('idle')

  const updateField = (event) => setForm({ ...form, [event.target.name]: event.target.value })

  const submitForm = async (event) => {
    event.preventDefault()
    const subject = `${form.service || 'General'} enquiry from ${form.name}`
    setSubmissionState('sending')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, _subject: subject, _captcha: 'false' }),
      })

      if (!response.ok) throw new Error('Email service rejected the request')
      setSubmissionState('sent')
      setForm({ name: '', organisation: '', email: '', phone: '', service: '', message: '' })
    } catch {
      setSubmissionState('error')
    }
  }

  return <div className="contact-page">
    <header className="contact-page-nav">
      <Link to="/" className="contact-brand" aria-label="Back to Glam Hub home"><img src={logoUrl} alt="Glam Hub" /><span>Glam <em>Hub</em></span></Link>
      <Link className="contact-back-link" to="/"><ArrowLeft size={17} /> <span>Back home</span></Link>
    </header>
    <section className="contact-intro">
      <div className="contact-intro-inner">
        <div className="contact-eyebrow">Contact</div>
        <h1>Let's talk about what<br /><i>you're building.</i></h1>
        <p>Enquire about a service, request a quote,<br className="desktop-break" /> register for an event or partner with Glam Hub.</p>
      </div>
    </section>
    <section className="contact-form-surface">
      <main className="contact-form-wrap">
        <div className="contact-form-heading"><h2>Send an enquiry</h2><span /></div>
        <form onSubmit={submitForm}>
          <ContactField label="Name" name="name" value={form.name} onChange={updateField} required />
          <ContactField label="Business / Organisation" name="organisation" value={form.organisation} onChange={updateField} required />
          <ContactField label="Email" name="email" type="email" value={form.email} onChange={updateField} required />
          <ContactField label="Phone / WhatsApp" name="phone" type="tel" value={form.phone} onChange={updateField} required />
          <label className="contact-field"><span>Service Required</span><select name="service" value={form.service} onChange={updateField} required><option value="">Select a service</option>{serviceOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
          <label className="contact-field"><span>Message</span><textarea name="message" rows="7" value={form.message} onChange={updateField} required /></label>
          <button className="contact-submit" type="submit" disabled={submissionState === 'sending'}>{submissionState === 'sending' ? 'Sending...' : 'Send via Email'} <ArrowUpRight size={18} /></button>
        </form>
        {submissionState === 'sent' && <div className="contact-success" role="status">Email sent successfully.</div>}
        {submissionState === 'error' && <div className="contact-error" role="alert">We could not send the email. Please try again.</div>}
        <p className="contact-form-note">We usually respond within one business day.</p>
      </main>
    </section>
  </div>
}

function ContactField({ label, name, type = 'text', value, onChange, required }) {
  return <label className="contact-field"><span>{label}</span><input name={name} type={type} value={value} onChange={onChange} required={required} /></label>
}

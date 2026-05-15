import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { PERSONAL_INFO, SOCIAL_LINKS } from '../utils/constants'
import FadeIn from '../animations/FadeIn'
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Loader, ArrowRight } from 'lucide-react'

// ✅ Replace these with your actual EmailJS credentials from https://dashboard.emailjs.com
const SERVICE_ID  = 'service_k2d1rej'   // EmailJS → Email Services → Service ID
const TEMPLATE_ID = 'template_qujyabt'  // EmailJS → Email Templates → Template ID
const PUBLIC_KEY  = 'Sd4iHTwEBiWWCCa-r' // EmailJS → Account → Public Key

const Contact = () => {
  const [form, setForm] = useState({ from_name: '', from_email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  form.from_name,
          from_email: form.from_email,
          subject:    form.subject,
          message:    form.message,
          to_email:   PERSONAL_INFO.email,
          reply_to:   form.from_email,
        },
        { publicKey: PUBLIC_KEY }
      )
      if (result.status === 200) {
        setStatus('success')
        setForm({ from_name: '', from_email: '', subject: '', message: '' })
        setTimeout(() => setStatus(null), 6000)
      } else {
        throw new Error(`Unexpected status: ${result.status}`)
      }
    } catch (err) {
      const msg = err?.text || err?.message || 'Unknown error'
      console.error('EmailJS error:', msg, err)
      setErrorMsg(msg)
      setStatus('error')
      setTimeout(() => setStatus(null), 8000)
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-5 relative">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="inline-block text-blue-400 font-bold text-sm uppercase tracking-wider px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4">Contact</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
              Let's <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-slate-400 text-xl mt-6 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how I can help bring your ideas to life.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — Contact Info */}
          <FadeIn delay={200} direction="right">
            <div className="space-y-8">
              <div className="space-y-4">
                {[
                  { Icon: Mail,  label: 'Email',    value: PERSONAL_INFO.email,    href: `mailto:${PERSONAL_INFO.email}`, subtext: 'Best way to reach me' },
                  { Icon: Phone, label: 'Phone',    value: PERSONAL_INFO.phone,    href: `tel:${PERSONAL_INFO.phone}`,   subtext: 'Available on WhatsApp' },
                  { Icon: MapPin,label: 'Location', value: PERSONAL_INFO.location, href: null,                           subtext: 'Based in Nepal' },
                ].map(({ Icon, label, value, href, subtext }) => {
                  const Tag = href ? 'a' : 'div'
                  return (
                    <Tag key={label} href={href}
                      className="group flex items-start gap-4 p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-blue-500/20 rounded-2xl hover:border-blue-400/50 hover:from-blue-500/10 hover:to-slate-900/50 transition-all">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 border border-blue-400/30 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-slate-500 text-sm font-medium mb-1">{label}</p>
                        <p className="text-white font-semibold text-lg group-hover:text-blue-300 transition-colors">{value}</p>
                        <p className="text-slate-400 text-xs mt-1">{subtext}</p>
                      </div>
                      {href && <ArrowRight className="w-5 h-5 text-blue-400/0 group-hover:text-blue-400 transition-all group-hover:translate-x-1" />}
                    </Tag>
                  )
                })}
              </div>

              <div className="pt-6 border-t border-slate-700">
                <p className="text-slate-500 text-sm font-medium mb-4">Connect on Social Media</p>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((social) => {
                    const Icon = social.icon
                    return (
                      <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer"
                        title={social.label}
                        className={`p-3 bg-slate-800/50 border border-blue-500/20 rounded-lg hover:border-blue-400/50 transition-all hover:scale-110 flex items-center justify-center ${social.color}`}>
                        <Icon className="w-5 h-5" />
                      </a>
                    )
                  })}
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl">
                <div className="flex gap-3 items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <div>
                    <p className="text-blue-300 font-semibold text-sm mb-1">Quick Response</p>
                    <p className="text-blue-200/70 text-sm leading-relaxed">
                      Messages go directly to <span className="text-blue-300 font-medium">ashokkumarkarki5@gmail.com</span>. I typically respond within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right — Form */}
          <FadeIn delay={300} direction="left">
            <div className="p-8 md:p-12 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-blue-500/20 rounded-3xl hover:border-blue-400/30 transition-all">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Your Name *</label>
                    <input type="text" name="from_name" value={form.from_name} onChange={handleChange} required
                    
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/60 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Your Email *</label>
                    <input type="email" name="from_email" value={form.from_email} onChange={handleChange} required

                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/60 transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Subject *</label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange} required
                    placeholder="Project inquiry"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/60 transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={6}
                    placeholder="Tell me about your project, timeline, and budget..."
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/60 transition-all resize-none" />
                </div>

                {status === 'success' && (
                  <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 animate-fadeIn">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span className="text-sm font-medium">✅ Message sent to ashokkumarkarki5@gmail.com!</span>
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 animate-fadeIn">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium">Failed to send message.</p>
                      {errorMsg && <p className="text-red-300/70 mt-1 text-xs break-all">{errorMsg}</p>}
                      <p className="text-red-300/70 mt-1 text-xs">Check browser console for details or email directly: <span className="font-medium">{PERSONAL_INFO.email}</span></p>
                    </div>
                  </div>
                )}

                <button type="submit" disabled={status === 'loading'}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 disabled:opacity-60 text-white font-semibold text-lg rounded-xl transition-all flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-blue-500/30">
                  {status === 'loading'
                    ? <><Loader className="w-5 h-5 animate-spin" /> Sending...</>
                    : <><Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> Send Message</>
                  }
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default Contact

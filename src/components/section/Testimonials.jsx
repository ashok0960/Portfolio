import React, { useState, useEffect } from 'react'
import { testimonials as initialTestimonials } from '../data/testimonials'
import FadeIn from '../animations/FadeIn'
import { Star, Send } from 'lucide-react'

const STORAGE_KEY = "portfolio_testimonials"

const TestimonialCard = ({ t }) => (
  <div className="relative p-8 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-slate-800/60 to-slate-900/60 hover:-translate-y-1 transition-all overflow-hidden">

    {/* glow */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full" />

    <div className="relative space-y-5">

      {/* Top row */}
      <div className="flex justify-between items-center">
        <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
          {t.tag}
        </span>

        <span className="text-[10px] px-2 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 uppercase">
          {t.category}
        </span>
      </div>

      {/* Rating */}
      <div className="flex gap-1">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-slate-300 text-sm leading-relaxed">
        "{t.quote}"
      </p>

      {/* Project */}
      <p className="text-xs text-slate-500 italic">
        Project: <span className="text-slate-400">{t.project}</span>
      </p>

      <div className="h-px bg-blue-500/20" />

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold`}>
          {t.avatar}
        </div>

        <div>
          <p className="text-white font-bold">{t.name}</p>
          <p className="text-slate-400 text-xs">
            {t.role} · {t.company}
          </p>
        </div>
      </div>

    </div>
  </div>
)

const Testimonials = () => {

  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : initialTestimonials
  })

  const [form, setForm] = useState({
    name: '',
    role: '',
    company: '',
    project: '',
    message: '',
    rating: 5,
    category: 'Frontend Developer'
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews))
  }, [reviews])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (!form.name || !form.message) return

    const newReview = {
      id: Date.now(),

      name: form.name,
      role: form.role || "Developer",
      company: form.company || "Freelance",
      project: form.project || "Personal Project",

      avatar: form.name
        .split(" ")
        .map(n => n[0])
        .join("")
        .toUpperCase(),

      color: "from-blue-500 to-cyan-500",

      quote: form.message,

      rating: Number(form.rating),

      category: form.category,

      tag: form.category
    }

    setReviews([newReview, ...reviews])

    setForm({
      name: '',
      role: '',
      company: '',
      project: '',
      message: '',
      rating: 5,
      category: 'Frontend Developer'
    })
  }

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">

      <div className="max-w-[1200px] mx-auto px-5">

        {/* HEADER */}
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold">
              What <span className="text-blue-400">People Say</span>
            </h2>
            <p className="text-slate-400 mt-4">
              Share your experience — it will be saved locally in your browser
            </p>
          </div>
        </FadeIn>

        {/* FORM */}
        <FadeIn delay={100}>
          <div className="bg-slate-900/60 border border-blue-500/20 p-6 rounded-2xl mb-12 space-y-4">

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700"
            />

            <input
              name="role"
              value={form.role}
              onChange={handleChange}
              placeholder="Your Role (e.g. Frontend Developer)"
              className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700"
            />

            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company / Freelance"
              className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700"
            />

            <input
              name="project"
              value={form.project}
              onChange={handleChange}
              placeholder="Project Name"
              className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your experience..."
              rows="4"
              className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700"
            />

            {/* CATEGORY */}
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700"
            >
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
            </select>

            {/* RATING + BUTTON */}
            <div className="flex justify-between items-center flex-wrap gap-4">

              <select
                name="rating"
                value={form.rating}
                onChange={handleChange}
                className="p-3 rounded-lg bg-slate-800 text-white border border-slate-700"
              >
                {[5, 4, 3, 2, 1].map(r => (
                  <option key={r} value={r}>{r} Star</option>
                ))}
              </select>

              <button
                onClick={handleSubmit}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition"
              >
                <Send className="w-4 h-4" />
                Post Comment
              </button>

            </div>

          </div>
        </FadeIn>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((t) => (
            <FadeIn key={t.id}>
              <TestimonialCard t={t} />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials
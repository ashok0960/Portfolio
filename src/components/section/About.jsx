import React from 'react'
import { PERSONAL_INFO, ABOUT_STATS } from '../utils/constants'
import FadeIn from '../animations/FadeIn'
import { Award, Users, Briefcase, Zap, Mail, MapPin } from 'lucide-react'

const highlights = [
  'Expert in React.js ecosystem and modern JavaScript',
  'Full-stack development with Django and REST APIs',
  'Database design and optimization with PostgreSQL',
  'UI/UX focused development with Tailwind CSS',
  'Agile development and version control with Git',
]

const iconMap = { 0: Award, 1: Users, 2: Briefcase, 3: Zap }

const About = () => (
  <section id="about" className="relative py-24 md:py-32 overflow-hidden">
    <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
    <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

    <div className="max-w-[1320px] mx-auto px-5 relative">
      <FadeIn>
        <div className="text-center mb-20">
          <span className="inline-block text-blue-400 font-bold text-sm uppercase tracking-wider px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4">About Me</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            Who <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">I Am</span>
          </h2>
          <p className="text-slate-400 text-xl mt-6 max-w-2xl mx-auto">
            A passionate developer with a mission to build beautiful, functional digital experiences
          </p>
        </div>
      </FadeIn>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left - Bio */}
        <FadeIn delay={200} direction="right">
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold">
              I'm <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>
            </h3>

            <div className="space-y-5">
              {PERSONAL_INFO.bio.map((paragraph, index) => (
                <p key={index} className="text-slate-300 leading-relaxed text-lg font-light">{paragraph}</p>
              ))}
            </div>

            <div className="space-y-3 py-6 border-y border-slate-700">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 group-hover:scale-150 transition-transform flex-shrink-0" />
                  <span className="text-slate-300 group-hover:text-white transition-colors">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg hover:border-blue-500/40 transition-all">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="text-sm text-white truncate">{PERSONAL_INFO.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg hover:border-blue-500/40 transition-all">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="text-sm text-white truncate">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>

            <a href="#projects" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold group">
              View my work
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </FadeIn>

        {/* Right - Stats */}
        <FadeIn delay={400} direction="left">
          <div className="grid grid-cols-2 gap-6">
            {ABOUT_STATS.map((stat, index) => {
              const Icon = iconMap[index]
              return (
                <FadeIn key={index} delay={500 + index * 100}>
                  <div className="group p-6 md:p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-blue-500/20 rounded-2xl hover:border-blue-400/50 hover:from-blue-500/10 hover:to-slate-900/50 transition-all cursor-pointer">
                    <div className="relative mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-all">
                      <Icon className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-2 group-hover:scale-105 transition-transform origin-left">
                      {stat.value}
                    </div>
                    <div className="text-slate-400 text-sm md:text-base font-medium group-hover:text-slate-300 transition-colors">
                      {stat.label}
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
)

export default About

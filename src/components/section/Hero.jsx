import React, { useState } from 'react'
import { ArrowRight, Sparkles, ArrowDown, Eye } from 'lucide-react'
import { PERSONAL_INFO, SOCIAL_LINKS, STATS } from '../utils/constants'
import FadeIn from '../animations/FadeIn'
import TypingText from '../animations/TypingText'

const Hero = () => {
  const [imgError, setImgError] = useState(false)
  const [showTitle, setShowTitle] = useState(false)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_60%)]" />

        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative max-w-[1300px] mx-auto px-6 py-20">
        {/* FIX: increased gap for better spacing */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <FadeIn direction="right">
            <div className="space-y-7">

              <FadeIn delay={100}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
                  <span className="text-sm text-blue-300">
                    Open to opportunities
                  </span>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div>
                  <p className="text-blue-400 font-medium mb-2">
                    Welcome to my portfolio
                  </p>
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    <span className="text-white">I'm </span>
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                      <TypingText text={PERSONAL_INFO.name} speed={150} onComplete={() => setShowTitle(true)} />
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-slate-400 mt-3">
                    {showTitle && (
                      <TypingText
                        text={PERSONAL_INFO.shortTitle}
                        speed={80}
                      />
                    )}
                  </p>

                </div>
              </FadeIn>

              <FadeIn delay={300}>
                <p className="text-slate-300 max-w-lg leading-relaxed">
                  {PERSONAL_INFO.tagline}
                </p>
              </FadeIn>

              <FadeIn delay={400}>
                <div className="flex flex-wrap gap-4 pt-4">

                  <a
                    href="#contact"
                    className="group px-7 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-blue-500/40 transition"
                  >
                    Let's Collaborate
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                  </a>

                  <a
                    href={PERSONAL_INFO.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3.5 border border-blue-400/40 text-blue-300 rounded-full flex items-center gap-2 hover:bg-blue-500/10 transition"
                  >
                    <Eye className="w-5 h-5" />
                    View CV
                  </a>

                </div>
              </FadeIn>

              <FadeIn delay={500}>
                <div className="flex gap-4 pt-5">
                  {SOCIAL_LINKS.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 flex items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/5 hover:bg-blue-500/15 hover:scale-110 transition"
                      >
                        <Icon className="w-5 h-5 text-blue-300" />
                      </a>
                    )
                  })}
                </div>
              </FadeIn>

              <FadeIn delay={600}>
                <div className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-700">
                  {STATS.slice(0, 2).map((stat, i) => (
                    <div key={i}>
                      <div className="text-3xl font-bold text-blue-400">
                        {stat.value}
                      </div>
                      <p className="text-sm text-slate-400 mt-1">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>

            </div>
          </FadeIn>

          {/* RIGHT PROFILE — FIXED */}
          <FadeIn direction="left">
            {/* FIX: alignment + spacing */}
            <div className="flex justify-center lg:justify-end lg:pr-10">
              <div className="relative w-72 md:w-96 aspect-square">

                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse" />

                <div className="relative w-full h-full rounded-full overflow-hidden border border-blue-400/30 bg-slate-900">

                  {!imgError ? (
                    <img
                      src="/images/profile.jpg"
                      alt={PERSONAL_INFO.name}
                      className="w-full h-full object-cover"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text">
                      {PERSONAL_INFO.name
                        .split(' ')
                        .map(n => n[0])
                        .join('')}
                    </div>
                  )}

                </div>
              </div>
            </div>
          </FadeIn>

        </div>

        {/* Bottom Stats */}
        <FadeIn delay={700}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-slate-700">
            {STATS.map((stat, i) => (
              <div key={i} className="hover:-translate-y-1 transition text-center md:text-left">
                <div className="text-3xl font-bold text-blue-400">
                  {stat.value}
                </div>
                <p className="text-sm text-slate-400 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-slate-500 text-xs">
          Scroll
          <ArrowDown className="w-4 h-4 text-blue-400 mt-1" />
        </div>
      </div>
    </section>
  )
}

export default Hero
import React, { useState } from 'react'
import { skills, skillsCategories } from '../data/skills'
import FadeIn from '../animations/FadeIn'
import { Code2, Database, Layout, Server, Palette, GitBranch, Zap, Terminal, Box } from 'lucide-react'

const iconMap = { Code2, Database, Layout, Server, Palette, GitBranch, Zap, Terminal, Box }

const categoryColor = { Frontend: 'from-blue-400 to-cyan-400', Backend: 'from-purple-400 to-pink-400', Tools: 'from-amber-400 to-orange-400' }

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const filtered = activeCategory === 'All' ? skills : skills.filter(s => s.category === activeCategory)

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-40 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-5 relative">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="inline-block text-blue-400 font-bold text-sm uppercase tracking-wider px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4">My Expertise</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
              Skills & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-slate-400 text-xl mt-6 max-w-2xl mx-auto">
              A comprehensive set of tools and technologies to build full-stack applications
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {skillsCategories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-slate-800/50 text-slate-300 border border-slate-700 hover:border-blue-400/50 hover:text-white'
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((skill, index) => {
            const Icon = iconMap[skill.icon]
            return (
              <FadeIn key={skill.id} delay={200 + index * 50}>
                <div className="group h-full p-6 md:p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-blue-500/20 rounded-2xl hover:border-blue-400/50 hover:from-blue-500/10 hover:to-slate-900/50 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 border border-blue-400/30 group-hover:border-blue-400/60 transition-all">
                      {Icon && <Icon className="w-6 h-6 md:w-7 md:h-7 text-blue-400 group-hover:scale-110 transition-transform" />}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${categoryColor[skill.category] || categoryColor.Frontend} bg-clip-text text-transparent border border-white/10`}>
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-slate-400 mb-4">{skill.description}</p>

                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-700/50">
                    <span className="text-sm text-slate-400">Experience</span>
                    <span className="text-sm font-semibold text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full">
                      {skill.experience}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500 font-medium">Proficiency</span>
                      <span className="text-xs font-bold text-blue-400">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-700"
                        style={{ width: `${skill.proficiency}%` }} />
                    </div>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn delay={400}>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mt-20 pt-16 border-t border-slate-700">
            {[
              { value: `${skills.length}+`, label: 'Technologies', color: 'text-blue-400' },
              { value: skills.filter(s => s.category === 'Frontend').length, label: 'Frontend', color: 'text-purple-400' },
              { value: skills.filter(s => s.category === 'Backend').length, label: 'Backend', color: 'text-pink-400' },
              { value: skills.filter(s => s.category === 'Tools').length, label: 'Tools', color: 'text-cyan-400' },
              { value: '90+', label: 'Avg Level', color: 'text-green-400' },
            ].map((stat, i) => (
              <div key={i} className={`text-center ${i >= 3 ? 'hidden md:block' : ''}`}>
                <div className={`text-3xl md:text-4xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                <p className="text-xs md:text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default Skills

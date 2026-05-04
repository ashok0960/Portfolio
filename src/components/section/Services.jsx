import React from 'react'
import { services } from '../data/services'
import FadeIn from '../animations/FadeIn'
import { Code2, Server, Layout, Zap, Shield, GitBranch, ArrowRight, CheckCircle } from 'lucide-react'

const iconMap = { Code2, Server, Layout, Zap, Shield, GitBranch }

const Services = () => (
  <section id="services" className="relative py-24 md:py-32 overflow-hidden">
    <div className="absolute top-20 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
    <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

    <div className="max-w-[1320px] mx-auto px-5 relative">
      <FadeIn>
        <div className="text-center mb-20">
          <span className="inline-block text-blue-400 font-bold text-sm uppercase tracking-wider px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4">Services</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            What I <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-slate-400 text-xl mt-6 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your project needs and business goals
          </p>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon]
          return (
            <FadeIn key={service.id} delay={200 + index * 100}>
              <div className="group relative h-full p-8 md:p-10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-blue-500/20 rounded-2xl hover:border-blue-400/50 hover:from-blue-500/10 hover:to-slate-900/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl group-hover:from-blue-500/15 group-hover:to-purple-500/15 transition-all pointer-events-none" />

                <div className="relative space-y-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-500/30 to-cyan-500/30 border border-blue-400/30 rounded-xl group-hover:border-blue-400/60 group-hover:scale-110 transition-all">
                    {Icon && <Icon className="w-8 h-8 text-blue-400" />}
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{service.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{service.description}</p>
                  </div>

                  <div className="space-y-3 py-4 border-y border-slate-700/50">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-slate-500">Typical Duration</span>
                    <span className="text-sm font-semibold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">{service.duration}</span>
                  </div>

                  <a href="#contact" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold group/link">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </FadeIn>
          )
        })}
      </div>

      <FadeIn delay={600}>
        <div className="mt-20 pt-16 border-t border-slate-700">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Let's Start Your <span className="text-blue-400">Project</span>
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Whether you need a simple landing page or a complex full-stack application, I'm here to help bring your vision to life.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                Get in Touch <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '25+', label: 'Projects Delivered', color: 'blue' },
                { value: '18+', label: 'Happy Clients',      color: 'purple' },
                { value: '3+',  label: 'Years Experience',   color: 'cyan' },
                { value: '100%',label: 'Satisfaction',       color: 'green' },
              ].map(({ value, label, color }) => (
                <div key={label} className={`p-6 bg-${color}-500/10 border border-${color}-500/30 rounded-xl text-center hover:border-${color}-500/50 transition-all`}>
                  <div className={`text-3xl font-bold text-${color}-400 mb-2`}>{value}</div>
                  <p className="text-slate-400 text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
)

export default Services

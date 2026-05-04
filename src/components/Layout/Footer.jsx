import React from 'react'
import { PERSONAL_INFO, SOCIAL_LINKS, NAV_LINKS } from '../utils/constants'
import { Heart, ArrowUp } from 'lucide-react'
import { scrollToSection } from '../hooks/useScrollSpy'

const Footer = () => (
  <footer className="relative bg-black border-t border-white/10">
    <div className="max-w-[1320px] mx-auto px-5 py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
            {PERSONAL_INFO.name.split(' ')[0]}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">{PERSONAL_INFO.title}</p>
          <div className="flex gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon
              return (
                <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-white/5 hover:border-blue-500/50 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {NAV_LINKS.map(link => (
              <li key={link.id}>
                <button onClick={() => scrollToSection(link.id)}
                  className="text-gray-400 hover:text-white transition-colors text-sm">
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Frontend Development</li>
            <li>Backend with Django</li>
            <li>Full Stack Apps</li>
            <li>REST API Design</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>{PERSONAL_INFO.email}</li>
            <li>{PERSONAL_INFO.location}</li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm flex items-center gap-1">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 mx-1" /> in Nepal
        </p>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-white/5 hover:border-blue-500/50 transition-all"
          aria-label="Scroll to top">
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </div>
  </footer>
)

export default Footer

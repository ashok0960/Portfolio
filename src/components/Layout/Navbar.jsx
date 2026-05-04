import React, { useEffect, useState } from 'react'
import { Menu, X, Moon, Zap } from 'lucide-react'
import { NAV_LINKS } from '../utils/constants'
import { scrollToSection, useScrollSpy } from '../hooks/useScrollSpy'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const { theme, toggleTheme } = useTheme()
  const activeSection = useScrollSpy(NAV_LINKS.map(l => l.id))
  const isBlue = theme === 'blue'

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (id) => {
    scrollToSection(id)
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? isBlue
            ? 'bg-[#020c1b]/90 backdrop-blur-xl border-b border-blue-500/20'
            : 'bg-black/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-5 py-4 flex items-center justify-between">

        {/* 🔥 FIXED LOGO CLICK */}
        <button
          onClick={() => handleNavClick('home')}
          className={`text-2xl font-bold bg-gradient-to-r ${
            isBlue
              ? 'from-cyan-400 via-blue-300 to-blue-200'
              : 'from-blue-500 via-blue-400 to-cyan-300'
          } bg-clip-text text-transparent hover:opacity-80 transition`}
        >
          Ashok
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`relative text-sm font-medium transition-all duration-300 group ${
                activeSection === link.id
                  ? 'text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {link.label}

              {/* 🔥 Active underline FIXED */}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-300 ${
                  isBlue ? 'bg-cyan-400' : 'bg-blue-400'
                } ${
                  activeSection === link.id
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }`}
              />
            </button>
          ))}

          {/* Right side */}
          <div className="flex items-center gap-3">

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`relative flex items-center w-16 h-8 rounded-full p-1 transition-all duration-500 border ${
                isBlue
                  ? 'bg-gradient-to-r from-blue-600/40 to-cyan-600/40 border-blue-400/50'
                  : 'bg-white/10 border-white/20'
              }`}
            >
              <Moon className={`absolute left-1.5 w-3.5 h-3.5 ${
                isBlue ? 'opacity-20' : 'opacity-90'
              }`} />
              <Zap className={`absolute right-1.5 w-3.5 h-3.5 ${
                isBlue ? 'opacity-90 text-cyan-300' : 'opacity-20'
              }`} />

              <span
                className={`absolute w-4 h-5 rounded-full transition-all duration-500 ${
                  isBlue
                    ? 'translate-x-8 bg-gradient-to-br from-cyan-400 to-blue-500'
                    : 'translate-x-0 bg-white'
                }`}
              />
            </button>

            {/* Hire Me */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-2.5 text-sm font-semibold rounded-full transition ${
                isBlue
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                  : 'bg-white text-black'
              }`}
            >
              Hire Me
            </button>

          </div>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <button onClick={toggleTheme}>
            {isBlue ? <Zap /> : <Moon />}
          </button>

          <button onClick={() => setIsMenuOpen(o => !o)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-5 py-5 space-y-1 border-t bg-black/95">
          {NAV_LINKS.map(link => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-xl ${
                activeSection === link.id
                  ? 'text-white bg-white/10'
                  : 'text-white/60'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
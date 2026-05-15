import React from 'react'
import { ThemeProvider, useTheme } from './components/context/ThemeContext'
import WhatsAppButton from './components/ui/WhatsAppButton'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import Hero from './components/section/Hero'
import About from './components/section/About'
import Skills from './components/section/Skills'
import Projects from './components/section/Projects'
import Services from './components/section/Services'
import Testimonials from './components/section/Testimonials'
import Contact from './components/section/Contact'

const Divider = ({ theme }) => (
  <div className="max-w-[1320px] mx-auto px-5">
    <div className={`h-px bg-gradient-to-r from-transparent ${theme === 'blue' ? 'via-blue-500/20' : 'via-white/10'} to-transparent`} />
  </div>
)

const AppContent = () => {
  const { theme } = useTheme()
  const isBlue = theme === 'blue'

  return (
    <div className={`min-h-screen transition-colors duration-700 ${isBlue ? 'bg-[#020c1b]' : 'bg-black'} text-white`}>
      <Navbar />
      <main>
        <Hero />
        <Divider theme={theme} />
        <About />
        <Divider theme={theme} />
        <Skills />
        <Divider theme={theme} />
        <Projects />
        <Divider theme={theme} />
        <Services />
        <Divider theme={theme} />
        <Testimonials />
        <Divider theme={theme} />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
)

export default App

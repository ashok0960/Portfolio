import { useEffect, useState } from 'react'

export const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

export const useScrollSpy = (sectionIds) => {
  const [active, setActive] = useState(sectionIds[0])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120 // offset for navbar height

      let current = sectionIds[0]

      for (let i = 0; i < sectionIds.length; i++) {
        const section = document.getElementById(sectionIds[i])
        if (section && section.offsetTop <= scrollY) {
          current = sectionIds[i]
        }
      }

      setActive(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // run once on load

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds])

  return active
}
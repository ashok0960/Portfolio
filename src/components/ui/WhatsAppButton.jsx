import React, { useState } from 'react'
import { PERSONAL_INFO } from '../utils/constants'

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false)

  const phone = PERSONAL_INFO.phone.replace(/[\s\-+]/g, '')
  const message = encodeURIComponent(
    `Hi ${PERSONAL_INFO.name.split(' ')[0]}! I visited your portfolio and I'd like to connect with you.`
  )
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-8 right-6 z-50 flex items-center gap-3"
    >
      {/* Tooltip */}
      <span
        className={`whitespace-nowrap text-sm font-medium text-white bg-[#1a1a1a] border border-white/10 px-4 py-2 rounded-full shadow-lg transition-all duration-300 ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
      >
        Chat on WhatsApp
      </span>

      {/* Button */}
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        <div className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/40 hover:shadow-[#25D366]/60 hover:scale-110 transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7 fill-white">
            <path d="M16.003 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.64 4.64 1.853 6.64L2.667 29.333l6.88-1.813A13.28 13.28 0 0 0 16.003 29.333c7.36 0 13.33-5.973 13.33-13.333S23.363 2.667 16.003 2.667zm0 24c-2.107 0-4.16-.56-5.947-1.627l-.427-.253-4.08 1.067 1.093-3.973-.28-.44A10.613 10.613 0 0 1 5.333 16c0-5.88 4.787-10.667 10.667-10.667S26.667 10.12 26.667 16 21.88 26.667 16.003 26.667zm5.84-7.987c-.32-.16-1.893-.933-2.187-1.04-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-.987 1.253-.16.213-.347.24-.667.08-.32-.16-1.347-.493-2.56-1.573-.947-.84-1.587-1.88-1.773-2.2-.187-.32-.02-.493.14-.653.147-.147.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.253-.613-.52-.533-.72-.547h-.613c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667s1.147 3.093 1.307 3.307c.16.213 2.253 3.44 5.467 4.827.76.333 1.36.533 1.827.68.76.24 1.453.213 2 .133.613-.093 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
          </svg>
        </div>
      </div>
    </a>
  )
}

export default WhatsAppButton

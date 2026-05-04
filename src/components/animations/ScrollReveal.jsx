import React from 'react'
import { useScrollReveal } from '../hooks/useScrollSpy'

const ScrollReveal = ({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 700,
  threshold = 0.15,
  stagger = false
}) => {
  const { ref, isVisible } = useScrollReveal({ threshold });

  const animationMap = {
    fadeUp: 'translate-y-12 opacity-0',
    fadeDown: '-translate-y-12 opacity-0',
    fadeLeft: 'translate-x-12 opacity-0',
    fadeRight: '-translate-x-12 opacity-0',
    scaleIn: 'scale-95 opacity-0',
    flipIn: 'perspective-1000',
    slideUp: 'translate-y-16 opacity-0',
    slideDown: '-translate-y-16 opacity-0',
  };

  const visibleClasses = 'opacity-100 translate-y-0 translate-x-0 scale-100';

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${
        isVisible
          ? visibleClasses
          : animationMap[animation] || animationMap.fadeUp
      }`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  )
}

export default ScrollReveal

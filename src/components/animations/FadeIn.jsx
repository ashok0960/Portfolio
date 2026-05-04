import React, { useEffect, useRef, useState } from 'react'

const FadeIn = ({ children, delay = 0, duration = 600, threshold = 0.15, direction = 'up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -30px 0px'
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    }
  }, [threshold, isVisible]);

  const getDirectionClasses = () => {
    const directions = {
      up: 'translate-y-12 opacity-0',
      down: '-translate-y-12 opacity-0',
      left: 'translate-x-12 opacity-0',
      right: '-translate-x-12 opacity-0',
      scale: 'scale-95 opacity-0',
    };
    return directions[direction] || directions.up;
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all ease-out ${isVisible ? 'translate-y-0 translate-x-0 scale-100 opacity-100' : getDirectionClasses()}`}
      style={{
        animationDelay: isVisible ? `${delay}ms` : '0ms',
        transitionDuration: `${duration}ms`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  )
}

export default FadeIn

import React, { useEffect, useState } from 'react'

const TypingText = ({ text, speed = 100, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[index])
        setIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else {
      onComplete && onComplete() // 👈 trigger when done
    }
  }, [index, text, speed, onComplete])

  return (
    <span>
      {displayedText}
      <span className="animate-pulse"></span>
    </span>
  )
}

export default TypingText
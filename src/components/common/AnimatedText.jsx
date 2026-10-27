import React from 'react'

// Splits text into words that slide up one after another.
// Usage: <AnimatedText as="h1" text="Hello world" className="..." delay={0.2} />
const AnimatedText = ({ text, as: Tag = 'span', className = '', delay = 0 }) => {
  return (
    <Tag className={className} aria-label={text}>
      {text.split(' ').map((word, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="inline-block overflow-hidden align-bottom pb-[0.22em] -mb-[0.22em]"
        >
          <span
            className="anim-word inline-block"
            style={{ animationDelay: `${delay + i * 0.09}s` }}
          >
            {word}
            {' '}
          </span>
        </span>
      ))}
    </Tag>
  )
}

export default AnimatedText
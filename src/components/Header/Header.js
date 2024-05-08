import React from 'react'

export default function Header({active, setActive}) {
  return (
    <nav>
      <div className="burger-btn" onClick={() => setActive(!active)}>
        <span />
      </div>
    </nav>
  )
}

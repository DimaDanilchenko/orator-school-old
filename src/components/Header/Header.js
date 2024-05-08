import React from 'react';
import "./Header.css";

export default function Header({active, setActive}) {
  return (
    <nav>
      <div className="burger-btn" onClick={() => setActive(!active)}>
        <span />
      </div>
    </nav>
  )
}

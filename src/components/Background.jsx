import { useEffect, useState } from 'react'

export default function Background() {
  const [dots, setDots] = useState([])
  useEffect(() => {
    setDots(Array.from({ length: 24 }, (_, id) => ({
      id, left: `${(id * 37) % 100}%`, top: `${(id * 61) % 100}%`,
      delay: `${(id % 8) * -.65}s`, size: `${3 + (id % 4) * 2}px`,
    })))
  }, [])
  return (
    <div className="background" aria-hidden="true">
      <div className="orb orb-one" /><div className="orb orb-two" /><div className="grid" />
      {dots.map(dot => <i className="particle" key={dot.id} style={{ left: dot.left, top: dot.top, animationDelay: dot.delay, width: dot.size, height: dot.size }} />)}
    </div>
  )
}

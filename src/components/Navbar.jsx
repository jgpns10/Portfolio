import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const links = [['/', 'Início'], ['/skills', 'Skills'], ['/projetos', 'Projetos'], ['/contato', 'Contato']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav-wrap">
      <nav className="navbar glass">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)} aria-label="Ir ao início"><span>JG</span><b>.</b></NavLink>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Abrir menu" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(([to, label]) => <NavLink key={to} to={to} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>)}
        </div>
      </nav>
    </header>
  )
}

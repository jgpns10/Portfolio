import { ArrowUpRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { profile } from '../data/portfolio'

export default function Home() {
  return (
    <section className="container hero">
      <div className="hero-copy reveal">
        <p className="kicker"><Sparkles size={16} /> Olá, eu sou</p>
        <h1>{profile.name}</h1>
        <h2>Eu crio <span>experiências digitais</span> que conectam.</h2>
        <p className="hero-about">{profile.about}</p>
        <div className="hero-actions">
          <Link className="button primary" to="/projetos">Ver projetos <ArrowUpRight size={19} /></Link>
        </div>
        <div className="quick-facts">
          <div><b>{profile.age}</b><span>Idade</span></div><div><b>ADS</b><span>Formação</span></div><div><b>8+</b><span>Tecnologias</span></div>
        </div>
      </div>
      <div className="portrait-wrap reveal delay-1">
        <div className="portrait-ring"><div className="portrait glass"><img src={profile.photo} alt={`Foto de ${profile.name}`} /></div></div>
        <div className="floating-tag tag-role glass"><div><small>Atuação</small><b>{profile.role}</b></div></div>
        <div className="floating-tag tag-place glass"><div><small>Localização</small><b>{profile.location}</b></div></div>
      </div>
    </section>
  )
}

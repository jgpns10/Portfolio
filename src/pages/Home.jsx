import { useState } from 'react'
import {
  ArrowUpRight,
  ChevronDown,
  UserRound,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { profile } from '../data/portfolio'

export default function Home() {
  const [showAbout, setShowAbout] = useState(false)

  return (
    <section className="container hero">
      <div className="hero-copy reveal">
        <button
          type="button"
          className={`kicker intro-trigger ${showAbout ? 'open' : ''}`}
          onClick={() => setShowAbout((current) => !current)}
          aria-expanded={showAbout}
          aria-controls="about-introduction"
        >
          <UserRound size={17} />

          <span>Olá, eu sou</span>

          <small>
            {showAbout ? 'Fechar' : 'Quem sou?'}
          </small>

          <ChevronDown
            className="intro-chevron"
            size={16}
          />
        </button>

        <h1>{profile.name}</h1>

        <h2>
          Eu crio <span>experiências digitais</span> que conectam.
        </h2>

        <div
          id="about-introduction"
          className={`intro-card ${showAbout ? 'show' : ''}`}
          aria-hidden={!showAbout}
        >
          <p>{profile.about}</p>
        </div>

        <div className="hero-actions">
          <Link
            className="button primary"
            to="/projetos"
          >
            Ver projetos
            <ArrowUpRight size={19} />
          </Link>
        </div>

        <div className="quick-facts">
          <div>
            <b>{profile.age}</b>
            <span>Idade</span>
          </div>

          <div>
            <b>ADS</b>
            <span>Formação</span>
          </div>

          <div>
            <b>8+</b>
            <span>Tecnologias</span>
          </div>
        </div>
      </div>

      <div className="portrait-wrap reveal delay-1">
        <div className="portrait-ring">
          <div className="portrait glass">
            <img
              src={profile.photo}
              alt={`Foto de ${profile.name}`}
            />
          </div>
        </div>

        <div className="floating-tag tag-role glass">
          <div>
            <small>Atuação</small>
            <b>{profile.role}</b>
          </div>
        </div>

        <div className="floating-tag tag-place glass">
          <div>
            <small>Localização</small>
            <b>{profile.location}</b>
          </div>
        </div>
      </div>
    </section>
  )
}
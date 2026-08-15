import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const links = [
  ['/', 'Início'],
  ['/skills', 'Skills'],
  ['/projetos', 'Projetos'],
  ['/contato', 'Contato'],
]

const words = ['dev', 'coding', 'engineer']

const navbarPhrases = [
  'Desenvolvedor Full Stack',
  'React • Javascript • TypeScript',
  'Disponível para projetos',
]

function NavbarPhrase() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [phraseText, setPhraseText] = useState('')
  const [isDeletingPhrase, setIsDeletingPhrase] = useState(false)

  useEffect(() => {
    const currentPhrase = navbarPhrases[phraseIndex]

    let delay = isDeletingPhrase ? 30 : 55
    let timer

    if (
      !isDeletingPhrase &&
      phraseText === currentPhrase
    ) {
      timer = setTimeout(() => {
        setIsDeletingPhrase(true)
      }, 1600)
    } else if (
      isDeletingPhrase &&
      phraseText === ''
    ) {
      timer = setTimeout(() => {
        setIsDeletingPhrase(false)

        setPhraseIndex((currentIndex) => {
          return (
            (currentIndex + 1) %
            navbarPhrases.length
          )
        })
      }, 300)
    } else {
      timer = setTimeout(() => {
        const nextLength =
          phraseText.length +
          (isDeletingPhrase ? -1 : 1)

        setPhraseText(
          currentPhrase.slice(0, nextLength)
        )
      }, delay)
    }

    return () => clearTimeout(timer)
  }, [
    phraseText,
    isDeletingPhrase,
    phraseIndex,
  ])

  return (
    <div
      className="navbar-phrase"
      aria-hidden="true"
    >
      <span>{phraseText}</span>
      <i />
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]

    let delay = isDeleting ? 55 : 100
    let timer

    if (
      !isDeleting &&
      typedText === currentWord
    ) {
      timer = setTimeout(() => {
        setIsDeleting(true)
      }, 1200)
    } else if (
      isDeleting &&
      typedText === ''
    ) {
      timer = setTimeout(() => {
        setIsDeleting(false)

        setWordIndex((currentIndex) => {
          return (
            (currentIndex + 1) %
            words.length
          )
        })
      }, 250)
    } else {
      timer = setTimeout(() => {
        const nextLength =
          typedText.length +
          (isDeleting ? -1 : 1)

        setTypedText(
          currentWord.slice(0, nextLength)
        )
      }, delay)
    }

    return () => clearTimeout(timer)
  }, [typedText, isDeleting, wordIndex])

  return (
    <header className="nav-wrap">
      <nav className="navbar glass">
        <NavLink
          to="/"
          className="brand"
          onClick={() => setOpen(false)}
          aria-label="João Gabriel — Desenvolvedor"
        >
          <span className="brand-initials">
            JG
          </span>

          <span className="brand-typed">
            .{typedText}
          </span>

          <span
            className="typing-cursor"
            aria-hidden="true"
          />
        </NavLink>

        <NavbarPhrase />

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>

        <div
          className={`nav-links ${open ? 'open' : ''
            }`}
        >
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? 'active' : ''
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
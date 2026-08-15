import {
  Award,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
} from 'lucide-react'

import {
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaReact,
} from 'react-icons/fa'

import {
  SiFigma,
  SiMysql,
  SiTypescript,
} from 'react-icons/si'

import PageHeader from '../components/PageHeader'
import { skills } from '../data/portfolio'

const skillIcons = {
  HTML5: {
    icon: FaHtml5,
    color: '#e34f26',
  },
  CSS3: {
    icon: FaCss3Alt,
    color: '#1572b6',
  },
  MySQL: {
    icon: SiMysql,
    color: '#4479a1',
  },
  JavaScript: {
    icon: FaJs,
    color: '#f7df1e',
  },
  Figma: {
    icon: SiFigma,
    color: '#a259ff',
  },
  'React.js': {
    icon: FaReact,
    color: '#61dafb',
  },
  Typescript: {
    icon: SiTypescript,
    color: '#3178c6',
  },
}

export default function Skills() {
  const sortedSkills = [...skills].sort(
    (firstSkill, secondSkill) =>
      secondSkill.level - firstSkill.level
  )

  return (
    <section className="container page-section">
      <PageHeader
        eyebrow="Minha bagagem"
        title="Skills & trajetória"
        text="Tecnologia, criatividade e aprendizado contínuo para construir produtos digitais completos."
      />

      <div className="skills-layout">
        <div className="skill-grid">
          {sortedSkills.map((skill, index) => {
            const skillConfig = skillIcons[skill.name]
            const SkillIcon =
              skillConfig?.icon ?? Code2

            return (
              <article
                className="skill-card glass reveal"
                style={{
                  animationDelay: `${index * 0.06}s`,
                  '--skill-color':
                    skillConfig?.color ??
                    'var(--cyan)',
                }}
                key={skill.name}
              >
                <div className="skill-icon">
                  <SkillIcon />
                </div>

                <div className="skill-info">
                  <b>{skill.name}</b>
                  <span>{skill.group}</span>
                </div>

                <strong>{skill.level}%</strong>

                <div className="skill-track">
                  <i
                    style={{
                      '--level': `${skill.level}%`,
                    }}
                  />
                </div>
              </article>
            )
          })}
        </div>

        <aside className="timeline glass reveal delay-1">
          <div className="timeline-item">
            <span>
              <GraduationCap />
            </span>

            <div>
              <small>2024 — atualmente</small>
              <h3>
                Análise e Desenvolvimento de Sistemas
              </h3>
              <p>Faculdade Senac Pernambuco</p>
            </div>
          </div>

          <div className="timeline-item">
            <span>
              <BriefcaseBusiness />
            </span>

            <div>
              <small>Experiência</small>
              <h3>Projetos para o Porto Digital</h3>
              <p>
                Desenvolvimento de soluções digitais
                em ambiente colaborativo.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <span>
              <Award />
            </span>

            <div>
              <small>Certificações</small>
              <h3>Formação complementar</h3>
              <p>
                Rotas HTTP e Flask • React.js e APIs
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
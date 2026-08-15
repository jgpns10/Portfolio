import { Award, BriefcaseBusiness, GraduationCap } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section className="container page-section">
      <PageHeader eyebrow="Minha bagagem" title="Skills & trajetória" text="Tecnologia, criatividade e aprendizado contínuo para construir produtos digitais completos." />
      <div className="skills-layout">
        <div className="skill-grid">
          {skills.map((skill, index) => <article className="skill-card glass reveal" style={{ animationDelay: `${index * .06}s` }} key={skill.name}><div><b>{skill.name}</b><span>{skill.group}</span></div><strong>{skill.level}%</strong><div className="skill-track"><i style={{ '--level': `${skill.level}%` }} /></div></article>)}
        </div>
        <aside className="timeline glass reveal delay-1">
          <div className="timeline-item"><span><GraduationCap /></span><div><small>2024 — atualmente</small><h3>Análise e Desenvolvimento de Sistemas</h3><p>Faculdade Senac Pernambuco</p></div></div>
          <div className="timeline-item"><span><BriefcaseBusiness /></span><div><small>Experiência</small><h3>Projetos para o Porto Digital</h3><p>Desenvolvimento de soluções digitais em ambiente colaborativo.</p></div></div>
          <div className="timeline-item"><span><Award /></span><div><small>Certificações</small><h3>Formação complementar</h3><p>Rotas HTTP e Flask • React.js e APIs</p></div></div>
        </aside>
      </div>
    </section>
  )
}

import { ArrowUpRight, Code2 } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section className="container page-section">
      <PageHeader eyebrow="Trabalhos selecionados" title="Projetos Realizados" text="Do planejamento ao código: conheça soluções que desenvolvi para clientes e projetos acadêmicos." />
      <div className="projects-grid">
        {projects.map((project, index) => <article className="project-card glass reveal" style={{ animationDelay: `${index * .12}s` }} key={project.title}>
          <div className="project-image"><img src={project.image} alt={`Imagem do ${project.title}`} /><span>0{index + 1}</span></div>
          <div className="project-body"><div className="project-heading"><h2>{project.title}</h2><a href={project.github} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.title} no GitHub`}><ArrowUpRight /></a></div><p>{project.description}</p><div className="tags">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div><a className="github-link" href={project.github} target="_blank" rel="noreferrer"><Code2 size={18} /> Ver no GitHub</a></div>
        </article>)}
      </div>
    </section>
  )
}

import { ArrowUpRight, MapPin } from 'lucide-react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import PageHeader from '../components/PageHeader'
import { profile } from '../data/portfolio'

export default function Contact() {
const whatsappNumber = profile.phone.replace(/\D/g, '')
const whatsappHref = `https://wa.me/55${whatsappNumber}`

  const contacts = [
    { icon: SiGmail, brand: 'gmail', label: 'E-mail', value: profile.email, href: `mailto:${profile.email}` },
    { icon: FaWhatsapp, brand: 'whatsapp', label: 'WhatsApp', value: profile.phone, href: whatsappHref },
    { icon: FaGithub, brand: 'github', label: 'GitHub', value: 'Acompanhe meus códigos', href: profile.github },
    { icon: FaLinkedin, brand: 'linkedin', label: 'LinkedIn', value: 'Vamos nos conectar', href: profile.linkedin },
  ]
  return (
    <section className="container page-section contact-page">
      <PageHeader eyebrow="Vamos conversar?" title="Tem uma ideia? Vamos construí-la." text="Estou aberto a projetos, colaborações e oportunidades. Escolha o canal que preferir." />
      <div className="contact-grid">
        <div className="contact-list">{contacts.map(({ icon: Icon, brand, label, value, href }, index) => <a className="contact-card glass reveal" style={{ animationDelay: `${index * .08}s` }} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" key={label}><span className={`brand-icon ${brand}`}><Icon /></span><div><small>{label}</small><b>{value}</b></div><ArrowUpRight className="contact-arrow" /></a>)}</div>
        <div className="contact-cta glass reveal delay-1"><h2>Para projetos e oportunidades, fale comigo.</h2><p><MapPin size={18} /> {profile.location}</p><a className="button primary" href={whatsappHref} target="_blank" rel="noreferrer">Enviar uma mensagem <ArrowUpRight size={18} /></a></div>
      </div>
    </section >
  )
}

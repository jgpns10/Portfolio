export default function PageHeader({ eyebrow, title, text }) {
  return <header className="page-header reveal"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></header>
}

import { ArrowLeft, ArrowUpRight, Crosshair, Filter, Orbit, Radio, ScanLine } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from './projects'
import logoUrl from '../glamhublogo.jpeg'

export default function ProjectsPage() {
  return <div className="projects-page">
    <div className="project-noise" />
    <header className="project-nav">
      <Link className="brand" to="/" aria-label="Back to Glam Hub home"><img className="brand-logo" src={logoUrl} alt="Glam Hub" /></Link>
      <div className="project-nav-meta"><span><i className="live-dot" /> Live archive</span><span>GH / 06</span><Link className="project-back" to="/"><ArrowLeft size={15} /> Return home</Link></div>
    </header>
    <main>
      <section className="project-hero container-wide">
        <div className="project-hero-copy"><div className="project-kicker"><Crosshair size={15} /> Project intelligence / 001</div><h1>Ideas in<br /><i>motion.</i></h1><p>A living archive of the experiences, identities and platforms we have brought into the world with our collaborators.</p><div className="project-hero-stats"><span><strong>06</strong> active stories</span><span><strong>04</strong> divisions in orbit</span></div></div>
        <div className="project-orbit-visual"><div className="orbit-core">GH<span>PROJECT<br />SYSTEM</span></div><div className="project-ring ring-a" /><div className="project-ring ring-b" /><div className="orbit-label label-a">CREATE / 01</div><div className="orbit-label label-b">CONNECT / 02</div><div className="orbit-label label-c">GROW / 03</div></div>
      </section>
      <section className="archive-section container-wide"><div className="archive-toolbar"><div><span className="toolbar-label"><ScanLine size={14} /> Selected transmissions</span><h2>Work that <i>moves.</i></h2></div><div className="archive-filter"><Filter size={14} /> All projects <span>⌄</span></div></div><div className="archive-grid">{projects.map((project) => <article className={`archive-card ${project.className}`} key={project.title}><div className="archive-art"><span className="archive-index">{project.number} / {project.year}</span><span className="archive-glyph">✳</span><span className="archive-scan">SCANNING</span></div><div className="archive-info"><div><span className="archive-category">{project.category}</span><h3>{project.title}</h3><p>{project.subtitle}</p></div><div className="archive-status"><span>{project.status}</span><ArrowUpRight size={17} /></div></div></article>)}</div></section>
      <section className="archive-cta container-wide"><div><Radio size={18} /><span>Have a signal worth sending?</span></div><Link className="button button-coral" to="/#contact">Start a project <ArrowUpRight size={17} /></Link></section>
    </main>
    <footer className="project-footer container-wide"><span>GLAM HUB / PROJECT ARCHIVE</span><span>ATLANTIS, WESTERN CAPE / 2026</span><Orbit size={16} /></footer>
  </div>
}

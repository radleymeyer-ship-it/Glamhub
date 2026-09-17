import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  Menu,
  MessageCircle,
  MoveUpRight,
  Sparkles,
  Ticket,
  X,
  Zap,
} from 'lucide-react'
import logoUrl from '../glamhublogo.jpeg'
import ProjectsPage from './ProjectsPage.jsx'
import { projects } from './projects.js'

const divisions = [
  { number: '01', name: 'Events', description: 'From bold launches to intimate moments, we orchestrate experiences with purpose.', tags: ['Event planning', 'Brand activations', 'Wellness'], tone: 'coral', icon: Ticket },
  { number: '02', name: 'Business Support', description: 'Clearer strategy, stronger structures and the connections that move business forward.', tags: ['Development', 'Planning', 'Networking'], tone: 'cream', icon: ArrowUpRight },
  { number: '03', name: 'GlamHubStudio', description: 'A distinct visual world for your brand, from first sketch to final print.', tags: ['Branding', 'DTF printing', 'Apparel'], tone: 'lime', icon: Sparkles },
  { number: '04', name: 'Tech & Innovation', description: 'Technology-driven platforms that make meaningful business connections easier.', tags: ['Digital solutions', 'Platforms', 'Innovation'], tone: 'violet', icon: Zap },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const openContact = () => setModalOpen(true)
  const closeMenu = () => setMenuOpen(false)

  return <BrowserRouter><Routes><Route path="/projects" element={<ProjectsPage />} /><Route path="*" element={<div className="site-shell"><Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} onContact={openContact} /><main><Hero onContact={openContact} /><About /><DivisionsGrid /><Values /><ContactSection onContact={openContact} /></main><Footer />{modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}</div>} /></Routes></BrowserRouter>
}

function Navbar({ menuOpen, setMenuOpen, onContact }) {
  const links = ['About', 'Our Divisions', 'Events', 'Business Support', 'GlamHubStudio', 'Tech & Innovation', 'Projects', 'Contact']
  return (
    <header className="nav-wrap">
      <nav className="nav container-wide">
        <a className="brand" href="#top" aria-label="Glam Hub home">
          <img className="brand-logo" src={logoUrl} alt="Glam Hub - Your Space to Shine and Scale" />
        </a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {links.map((link) => link === 'Projects' ? <Link key={link} to="/projects" onClick={() => setMenuOpen(false)}>{link}</Link> : <a key={link} href={`#${link.toLowerCase().replaceAll(' ', '-')}`} onClick={() => setMenuOpen(false)}>{link}</a>)}
          <button className="button button-dark nav-cta" onClick={onContact}>Work With Us <ArrowUpRight size={16} /></button>
        </div>
        <button className="menu-button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
    </header>
  )
}

function Hero({ onContact }) {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" />
      <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
      <div className="container-wide hero-inner">
        <div className="hero-copy">
          <div className="eyebrow reveal"><span className="eyebrow-dot" /> People. Business. Ideas.</div>
          <h1 className="reveal delay-one">Where <em>People,</em><br />Business &amp; Ideas<br /><span>Connect.</span></h1>
          <p className="hero-text reveal delay-two">Glam Hub is an events management and business development company creating experiences, connections and solutions that help businesses and communities grow.</p>
          <div className="hero-actions reveal delay-three"><button className="button button-coral" onClick={onContact}>Work With Glam Hub <ArrowUpRight size={17} /></button><a className="text-link" href="#our-divisions">Explore our services <MoveUpRight size={16} /></a></div>
        </div>
        <div className="hero-side reveal delay-two">
          <div className="hero-stamp"><span>GH</span><small>EST. 2020</small></div>
          <p>Building an ecosystem<br />for what's next.</p>
        </div>
        <div className="hero-scroll"><span>Scroll to explore</span><div className="scroll-line" /></div>
      </div>
      <div className="hero-bottom container-wide"><span>ATLANTIS, WESTERN CAPE</span><span>33°34' S &nbsp; 18°25' E</span></div>
    </section>
  )
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="container-wide about-grid">
        <div className="section-kicker">01 <span /> About Glam Hub</div>
        <div className="about-main"><h2>More Than Events.<br /><i>We Build Connections.</i></h2><p className="lead">Glam Hub brings events, business support, branding and technology together under one ecosystem to help people and businesses connect, build, launch, promote and grow.</p><p>Based in Atlantis Industrial Area, we are a collaborative partner for organisations, entrepreneurs and communities ready to make meaningful moves. Every brief is an opportunity to create something that lasts beyond the moment.</p><a className="arrow-link" href="#contact">Discover our story <span><ArrowUpRight size={17} /></span></a></div>
        <div className="about-aside"><div className="aside-number">04</div><p>connected divisions<br /><strong>one bold ecosystem</strong></p><div className="aside-rule" /><span>Glam Hub (Pty) Ltd</span></div>
      </div>
    </section>
  )
}

function DivisionsGrid() {
  return <section className="section divisions" id="our-divisions"><div className="container-wide"><div className="section-heading"><div><div className="section-kicker">02 <span /> Our ecosystem</div><h2>One hub.<br /><i>Many ways to grow.</i></h2></div><p>Ideas don't live in silos. Our divisions work together to turn ambitious thinking into visible, tangible momentum.</p></div><div className="division-grid">{divisions.map((division) => <DivisionCard key={division.number} {...division} />)}</div></div></section>
}

function DivisionCard({ number, name, description, tags, tone, icon: Icon }) {
  return <article className={`division-card card-${tone}`}><div className="card-top"><span>{number}</span><Icon size={22} strokeWidth={1.5} /></div><div><h3>{name}</h3><p>{description}</p></div><div className="tag-row">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href="#contact" aria-label={`Explore ${name}`}><ArrowUpRight size={18} /></a></article>
}

function Values() {
  const values = [{ word: 'CONNECT', copy: 'People are the point.' }, { word: 'CREATE', copy: 'Make the idea real.' }, { word: 'GROW', copy: 'Build for momentum.' }, { word: 'INNOVATE', copy: 'Make tomorrow useful.' }]
  return <section className="values" id="business-support"><div className="container-wide values-inner"><div className="section-kicker light">03 <span /> Why Glam Hub?</div><div className="values-heading"><h2>We make<br /><i>good things</i> move.</h2><p>From the first connection to the final detail, we bring energy, clarity and intent to every collaboration.</p></div><div className="value-list">{values.map((value, index) => <div className="value-item" key={value.word}><span>0{index + 1}</span><strong>{value.word}</strong><p>{value.copy}</p><ArrowUpRight size={18} /></div>)}</div></div></section>
}

function ContactSection({ onContact }) {
  return <section className="contact" id="contact"><div className="container-wide contact-grid"><div className="contact-copy"><div className="section-kicker light">05 <span /> Start a conversation</div><h2>Let's make<br /><i>something happen.</i></h2><p>Have a project, a partnership or an idea in motion? We'd love to hear where you're headed.</p><div className="contact-actions"><button className="button button-coral" onClick={onContact}>Talk to us on WhatsApp <MessageCircle size={17} /></button><a className="booking-link" href="https://nonamez8ea.setmore.com" target="_blank" rel="noreferrer"><CalendarDays size={18} /> Book an appointment <ArrowUpRight size={16} /></a></div></div><div className="contact-details"><div><span className="detail-label">Email</span><a href="mailto:kelleemeyer28@gmail.com">kelleemeyer28@gmail.com</a></div><div><span className="detail-label">WhatsApp</span><a href="https://wa.me/message/3AYEEDG6LF4RF1" target="_blank" rel="noreferrer">075 114 1473</a></div><div><span className="detail-label">Find us</span><p>Atlantis Industrial Area<br />Western Cape, South Africa</p></div><div className="socials"><span className="detail-label">Follow along</span><div><a href="#contact" aria-label="LinkedIn">in</a><a href="https://www.instagram.com/glamandhostevents" target="_blank" rel="noreferrer" aria-label="Instagram">ig</a><a href="#contact" aria-label="TikTok">Tk</a></div></div></div></div></section>
}

function Footer() { return <footer className="footer"><div className="container-wide footer-inner"><a className="brand" href="#top"><img className="brand-logo footer-logo" src={logoUrl} alt="Glam Hub - Your Space to Shine and Scale" /></a><span>© 2026 Glam Hub (Pty) Ltd</span><span>Made for meaningful momentum.</span></div></footer> }

function ContactModal({ onClose }) {
  return <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}><div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" onClick={onClose} aria-label="Close contact form"><X size={20} /></button><div className="section-kicker">Let's connect <span /></div><h2 id="modal-title">Tell us what<br /><i>you're building.</i></h2><form onSubmit={(event) => { event.preventDefault(); window.open('https://wa.me/message/3AYEEDG6LF4RF1', '_blank') }}><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@company.com" /></label><label>What can we help with?<textarea required rows="3" placeholder="Give us the good stuff..." /></label><button className="button button-dark" type="submit">Send via WhatsApp <ArrowUpRight size={17} /></button></form><p className="modal-note"><Check size={14} /> Your details stay between us.</p></div></div>
}

export default App

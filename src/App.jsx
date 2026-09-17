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

const divisions = [
  { number: '01', name: 'Events', description: 'From bold launches to intimate moments, we orchestrate experiences with purpose.', tags: ['Event planning', 'Brand activations', 'Wellness'], icon: Ticket },
  { number: '02', name: 'Business Support', description: 'Clearer strategy, stronger structures, and the connections that move business forward.', tags: ['Development', 'Planning', 'Networking'], icon: ArrowUpRight },
  { number: '03', name: 'GlamHubStudio', description: 'A distinct visual world for your brand, from first sketch to final print.', tags: ['Branding', 'DTF printing', 'Apparel'], icon: Sparkles },
  { number: '04', name: 'Tech & Innovation', description: 'Technology-driven platforms that make meaningful business connections easier.', tags: ['Digital solutions', 'Platforms', 'Innovation'], icon: Zap },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const openContact = () => setModalOpen(true)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/projects" element={<ProjectsPage />} />
        <Route
          path="*"
          element={
            <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-rose-500 selection:text-white">
              <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} onContact={openContact} />
              <main>
                <Hero onContact={openContact} />
                <About />
                <DivisionsGrid />
                <Values />
                <ContactSection onContact={openContact} />
              </main>
              <Footer />
              {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

function Navbar({ menuOpen, setMenuOpen, onContact }) {
  const links = ['About', 'Our Divisions', 'Events', 'Business Support', 'GlamHubStudio', 'Tech & Innovation', 'Projects', 'Contact']
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a className="flex items-center gap-3" href="#top" aria-label="Glam Hub home">
          <img className="h-10 w-auto rounded object-cover border border-slate-800" src={logoUrl} alt="Glam Hub Logo" />
          <span className="text-xl font-bold tracking-tight text-white">GLAM HUB</span>
        </a>
        <div className={`fixed inset-x-0 top-[73px] flex flex-col gap-6 border-b border-slate-800 bg-slate-950 p-6 transition-all md:static md:flex md:flex-row md:items-center md:gap-8 md:border-none md:bg-transparent md:p-0 ${menuOpen ? 'flex' : 'hidden md:flex'}`}>
          {links.map((link) =>
            link === 'Projects' ? (
              <Link key={link} to="/projects" className="text-sm font-medium text-slate-300 transition hover:text-white" onClick={() => setMenuOpen(false)}>
                {link}
              </Link>
            ) : (
              <a key={link} href={`#${link.toLowerCase().replaceAll(' ', '-')}`} className="text-sm font-medium text-slate-300 transition hover:text-white" onClick={() => setMenuOpen(false)}>
                {link}
              </a>
            )
          )}
          <button className="flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-slate-200" onClick={onContact}>
            Work With Us <ArrowUpRight size={16} />
          </button>
        </div>
        <button className="text-slate-300 hover:text-white md:hidden" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  )
}

function Hero({ onContact }) {
  return (
    <section className="relative overflow-hidden border-b border-slate-800/60 py-24 lg:py-32" id="top">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:items-center lg:px-8">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3.5 py-1 text-xs font-semibold text-rose-400">
            <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" /> People. Business. Ideas.
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-tight">
            Where <span className="italic text-rose-400">People,</span><br />
            Business &amp; Ideas<br />
            <span className="text-slate-400">Connect.</span>
          </h1>
          <p className="max-w-2xl text-lg font-normal leading-relaxed text-slate-300">
            Glam Hub is an events management and business development company creating experiences, connections, and solutions that help businesses and communities grow.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="flex items-center gap-2 rounded-lg bg-rose-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-rose-600/25 transition hover:bg-rose-500" onClick={onContact}>
              Work With Glam Hub <ArrowUpRight size={18} />
            </button>
            <a className="flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white" href="#our-divisions">
              Explore our services <MoveUpRight size={16} />
            </a>
          </div>
        </div>

        <aside className="lg:col-span-5 rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 text-xs font-bold text-slate-400">
            <span>GLAM HUB / PROFILE</span>
            <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-emerald-400 border border-emerald-500/20">ACTIVE</span>
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">Business Ecosystem</h3>
            <p className="text-sm font-normal text-slate-400">For people, brands, and ideas.</p>
          </div>
          <div className="grid grid-cols-3 gap-4 border-y border-slate-800 py-6 text-center">
            <div>
              <div className="text-2xl font-bold text-white">04</div>
              <div className="text-xs font-normal text-slate-400">Divisions</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">01</div>
              <div className="text-xs font-normal text-slate-400">Connected Hub</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">2025</div>
              <div className="text-xs font-normal text-slate-400">Established</div>
            </div>
          </div>
          <div className="flex justify-between text-xs font-medium text-slate-400">
            <span>ATLANTIS / WC</span>
            <span>01 — 04</span>
          </div>
        </aside>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="border-b border-slate-800/60 py-24" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-bold tracking-widest text-rose-500 uppercase">01 / About Glam Hub</div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              More Than Events.<br />
              <span className="italic text-slate-400">We Build Connections.</span>
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6">
            <p className="text-xl font-normal leading-relaxed text-slate-200">
              Glam Hub brings events, business support, branding, and technology together under one ecosystem to help people and businesses connect, build, launch, promote, and grow.
            </p>
            <p className="text-base font-normal leading-relaxed text-slate-400">
              Based in Atlantis Industrial Area, we are a collaborative partner for organisations, entrepreneurs, and communities ready to make meaningful moves. Every brief is an opportunity to create something that lasts beyond the moment.
            </p>
            <a className="inline-flex items-center gap-2 text-sm font-bold text-rose-400 transition hover:text-rose-300" href="#contact">
              Discover our story <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function DivisionsGrid() {
  return (
    <section className="border-b border-slate-800/60 py-24" id="our-divisions">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
          <div>
            <div className="text-xs font-bold tracking-widest text-rose-500 uppercase">02 / Our Ecosystem</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              One Hub. <span className="italic text-slate-400">Many ways to grow.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm font-normal leading-relaxed text-slate-400">
            Ideas don't live in silos. Our divisions work together to turn ambitious thinking into visible, tangible momentum.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {divisions.map((division) => (
            <DivisionCard key={division.number} {...division} />
          ))}
        </div>
      </div>
    </section>
  )
}

function DivisionCard({ number, name, description, tags, icon: Icon }) {
  return (
    <article className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition duration-300 hover:border-slate-700 hover:bg-slate-900">
      <div className="space-y-6">
        <div className="flex items-center justify-between text-slate-400">
          <span className="text-xs font-bold tracking-wider">{number}</span>
          <Icon size={24} className="text-rose-500" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-rose-400 transition">{name}</h3>
          <p className="mt-2 text-sm font-normal leading-relaxed text-slate-400">{description}</p>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-slate-800/80 space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className="rounded bg-slate-800/60 px-2 py-0.5 text-[11px] font-normal text-slate-300">
              {tag}
            </span>
          ))}
        </div>
        <a href="#contact" className="inline-flex items-center gap-1 text-xs font-bold text-slate-300 hover:text-white" aria-label={`Explore ${name}`}>
          Explore <ArrowUpRight size={14} />
        </a>
      </div>
    </article>
  )
}

function Values() {
  const values = [
    { word: 'CONNECT', copy: 'People are the point.' },
    { word: 'CREATE', copy: 'Make the idea real.' },
    { word: 'GROW', copy: 'Build for momentum.' },
    { word: 'INNOVATE', copy: 'Make tomorrow useful.' },
  ]
  return (
    <section className="border-b border-slate-800/60 py-24" id="business-support">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
        <div>
          <div className="text-xs font-bold tracking-widest text-rose-500 uppercase">03 / Why Glam Hub?</div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            We make <span className="italic text-slate-400">good things</span> move.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div key={value.word} className="rounded-xl border border-slate-800 bg-slate-900/30 p-6 space-y-4">
              <span className="text-xs font-bold text-rose-500">0{index + 1}</span>
              <h3 className="text-lg font-bold text-white tracking-wide">{value.word}</h3>
              <p className="text-sm font-normal text-slate-400">{value.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection({ onContact }) {
  return (
    <section className="border-b border-slate-800/60 py-24" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="text-xs font-bold tracking-widest text-rose-500 uppercase">04 / Start A Conversation</div>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Let's make <span className="italic text-slate-400">something happen.</span>
              </h2>
            </div>
            <p className="text-base font-normal leading-relaxed text-slate-300">
              Have a project, a partnership, or an idea in motion? We'd love to hear where you're headed.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-500" onClick={onContact}>
                Talk on WhatsApp <MessageCircle size={18} />
              </button>
              <a className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800" href="https://nonamez8ea.setmore.com" target="_blank" rel="noreferrer">
                <CalendarDays size={18} /> Book Appointment
              </a>
            </div>
          </div>
          <div className="lg:col-span-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-8 space-y-6">
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase">Email</div>
              <a href="mailto:kelleemeyer28@gmail.com" className="text-lg font-bold text-white hover:text-rose-400 transition">
                kelleemeyer28@gmail.com
              </a>
            </div>
            <div className="border-t border-slate-800 pt-4">
              <div className="text-xs font-bold text-slate-400 uppercase">WhatsApp</div>
              <a href="https://wa.me/message/3AYEEDG6LF4RF1" target="_blank" rel="noreferrer" className="text-lg font-bold text-white hover:text-rose-400 transition">
                075 114 1473
              </a>
            </div>
            <div className="border-t border-slate-800 pt-4">
              <div className="text-xs font-bold text-slate-400 uppercase">Location</div>
              <p className="mt-1 text-sm font-normal text-slate-300">
                Atlantis Industrial Area<br />Western Cape, South Africa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-12 bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row lg:px-8">
        <a className="flex items-center gap-3" href="#top">
          <img className="h-8 w-auto rounded border border-slate-800" src={logoUrl} alt="Glam Hub Logo" />
          <span className="text-sm font-bold text-white">GLAM HUB</span>
        </a>
        <span className="text-xs font-normal">© 2026 Glam Hub (Pty) Ltd. All rights reserved.</span>
        <span className="text-xs font-normal text-slate-400">Made for meaningful momentum.</span>
      </div>
    </footer>
  )
}

function ContactModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="relative w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl space-y-6">
        <button className="absolute top-4 right-4 text-slate-400 hover:text-white" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>
        <div>
          <div className="text-xs font-bold text-rose-500 uppercase">Let's Connect</div>
          <h2 className="text-2xl font-bold text-white mt-1">Tell us what you're building.</h2>
        </div>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); window.open('https://wa.me/message/3AYEEDG6LF4RF1', '_blank') }}>
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">Name</label>
            <input required placeholder="Your name" className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-rose-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">Email</label>
            <input required type="email" placeholder="you@company.com" className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-rose-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">What can we help with?</label>
            <textarea required rows="3" placeholder="Tell us about your project..." className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-rose-500 focus:outline-none" />
          </div>
          <button className="w-full rounded-lg bg-rose-600 py-3 text-sm font-bold text-white hover:bg-rose-500 transition" type="submit">
            Send via WhatsApp
          </button>
        </form>
        <p className="flex items-center gap-1.5 text-xs font-normal text-slate-400">
          <Check size={14} className="text-emerald-400" /> Your details stay between us.
        </p>
      </div>
    </div>
  )
}

export default App
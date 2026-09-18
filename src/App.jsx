import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  ArrowUpRight,
  CheckCircle,
  Facebook,
  Instagram,
  Mail,
  Menu,
  MessageCircle,
  Sparkles,
  Twitter,
  X,
} from 'lucide-react'
import logoUrl from '../glamhublogo.jpeg'
import ProjectsPage from './ProjectsPage.jsx'

const WHATSAPP_URL = 'https://wa.me/message/3AYEEDG6LF4RF1'

const services = [
  {
    title: 'Events Management',
    description: 'Curated experiences, corporate activations, and high-impact gatherings designed to connect communities and drive engagement.',
    tag: 'Core Division',
  },
  {
    title: 'Business Support',
    description: 'Strategic consulting and operational support tailored to help entrepreneurs, businesses, and organizations grow efficiently.',
    tag: 'Development',
  },
  {
    title: 'Branding & Marketing',
    description: 'Identity design, brand strategy, and creative campaigns built to position your brand for sustainable long-term success.',
    tag: 'GlamHubStudio',
  },
  {
    title: 'Tech & Innovation',
    description: 'Modern digital solutions and innovative platforms built to empower businesses and elevate community impact.',
    tag: 'Solutions',
  },
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
            <div className="relative bg-[#FDFBF7] font-sans antialiased text-[#0A0A0A] selection:bg-[#E5C07B] selection:text-black">
              {/* Sticky Top Navbar */}
              <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} onContact={openContact} />

              <main className="relative">
                {/* 1. STICKY HERO (Pinned background canvas) */}
                <div className="sticky top-0 z-0 flex flex-col justify-center min-h-screen">
                  <Hero onContact={openContact} />
                </div>

                {/* 2. CURTAIN CONTENT (Slides over Hero on scroll) */}
                <div className="relative z-10 shadow-[0_-25px_50px_rgba(0,0,0,0.08)] border-t border-[#E5C07B]/40 bg-[#FDFBF7]">
                  <ValueBanner />
                  <OverviewSection />
                  <ServicesSection onContact={openContact} />
                  <ContactSection onContact={openContact} />
                  <Footer />
                </div>
              </main>

              {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

function Navbar({ menuOpen, setMenuOpen, onContact }) {
  const menuItems = [
    { label: 'SERVICES', href: '#services', isExternal: false },
    { label: 'ABOUT', href: '#about', isExternal: false },
    { label: 'CONTACT', href: WHATSAPP_URL, isExternal: true },
    { label: 'SAY HI', href: WHATSAPP_URL, isExternal: true },
  ]

  const handleLinkClick = (item) => {
    setMenuOpen(false)
    if (item.isExternal) {
      window.open(item.href, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-[#FDFBF7]/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a className="flex items-center gap-3 transition-transform hover:scale-105" href="#top">
            <img className="h-10 w-auto rounded object-cover border border-[#CFA252]/40" src={logoUrl} alt="Glam Hub Logo" />
            <span className="text-xl font-bold tracking-tight text-[#0A0A0A] font-serif">GLAM HUB</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <a href="#services" className="text-sm font-medium text-[#0A0A0A]/80 hover:text-[#CFA252] transition">Services</a>
            <a href="#about" className="text-sm font-medium text-[#0A0A0A]/80 hover:text-[#CFA252] transition">About</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#0A0A0A]/80 hover:text-[#CFA252] transition">Contact</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#0A0A0A]/80 hover:text-[#CFA252] transition">Say Hi</a>
            <button className="flex items-center justify-center gap-2 rounded-full bg-[#0A0A0A] px-6 py-2.5 text-sm font-bold text-[#FDFBF7] transition-all hover:bg-[#CFA252] hover:text-black" onClick={onContact}>
              Work With Glam Hub <ArrowUpRight size={16} />
            </button>
          </div>

          {/* Mobile Hamburger Trigger */}
          <button className="text-[#0A0A0A] hover:text-[#CFA252] md:hidden p-2" onClick={() => setMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </nav>
      </header>

      {/* Full-Screen Overlay Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#FDFBF7] px-8 py-10 text-[#0A0A0A] animate-fade-in-up">
          <div className="flex items-center justify-between">
            <button className="p-2 text-[#0A0A0A] hover:text-[#CFA252] transition" onClick={() => setMenuOpen(false)}>
              <X size={32} />
            </button>

            <a href="#top" onClick={() => setMenuOpen(false)}>
              <img className="h-12 w-auto rounded border border-[#CFA252]/40" src={logoUrl} alt="Glam Hub Logo" />
            </a>

            <div className="flex flex-col gap-3 text-[#280C2E]">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><Mail size={20} /></a>
              <a href="#" className="hover:scale-110 transition-transform"><Instagram size={20} /></a>
              <a href="#" className="hover:scale-110 transition-transform"><Twitter size={20} /></a>
              <a href="#" className="hover:scale-110 transition-transform"><Facebook size={20} /></a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 py-12 text-center">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.isExternal ? undefined : item.href}
                onClick={(e) => {
                  if (item.isExternal) e.preventDefault();
                  handleLinkClick(item);
                }}
                className="text-3xl sm:text-4xl font-extrabold tracking-wider text-[#0A0A0A] hover:text-[#CFA252] transition-transform hover:scale-105 font-serif cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="text-center pb-4">
            <button
              className="rounded-full bg-[#0A0A0A] px-8 py-3.5 text-base font-bold text-[#FDFBF7] transition-all hover:bg-[#CFA252] hover:text-black"
              onClick={() => {
                setMenuOpen(false)
                window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')
              }}
            >
              CHAT ON WHATSAPP
            </button>
          </div>
        </div>
      )}
    </>
  )
}

function Hero({ onContact }) {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-[#FDFBF7]" id="top">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E5C07B]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-8 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#CFA252]/40 bg-[#280C2E]/10 px-4 py-1.5 text-xs font-semibold text-[#280C2E] transition-transform hover:scale-105">
          <Sparkles size={14} className="animate-pulse text-[#CFA252]" /> EVENTS · BUSINESS · BRANDING · TECH
        </div>
        
        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-[#0A0A0A] sm:text-6xl lg:text-7xl font-serif leading-tight">
          Where People, Business &amp; <br />
          <span className="italic text-[#CFA252]">Ideas Connect.</span>
        </h1>
        
        <p className="mx-auto max-w-2xl text-lg font-normal leading-relaxed text-[#0A0A0A]/70">
          Glam Hub is an events management and business development company creating experiences, connections and solutions that help businesses and communities grow.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button className="flex items-center gap-2 rounded-full bg-[#0A0A0A] px-8 py-4 text-base font-bold text-[#FDFBF7] shadow-xl transition-all duration-300 hover:bg-[#CFA252] hover:text-black hover:scale-105" onClick={onContact}>
            Work With Glam Hub <ArrowUpRight size={18} />
          </button>
          <a className="flex items-center gap-2 rounded-full border border-black/20 bg-black/5 px-8 py-4 text-base font-semibold text-[#0A0A0A] transition-all duration-300 hover:bg-black/10 hover:border-[#CFA252]" href="#services">
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  )
}

function ValueBanner() {
  const points = ['Events Management', 'Business Support', 'Branding & Marketing', 'Tech & Innovation']
  return (
    <div className="border-b border-black/10 bg-[#F7F3E9] py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-6 px-6 text-sm font-semibold text-[#280C2E]">
        {points.map((pt) => (
          <div key={pt} className="flex items-center gap-2 transition-transform hover:scale-105">
            <CheckCircle size={16} className="text-[#CFA252]" />
            <span>{pt}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function OverviewSection() {
  return (
    <section className="py-24 bg-[#F7F3E9] border-b border-black/10" id="about">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <div className="text-xs font-bold tracking-widest text-[#CFA252] uppercase">About Glam Hub</div>
          <h2 className="text-3xl font-bold text-[#0A0A0A] sm:text-4xl font-serif">Who We Are &amp; What We Do</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="rounded-2xl bg-white p-8 border border-black/10 shadow-sm space-y-2">
            <div className="text-xs font-bold tracking-widest text-[#280C2E] uppercase">WHAT WE ARE</div>
            <p className="text-base text-[#0A0A0A]/80 font-medium">An events management &amp; business development company.</p>
          </div>

          <div className="rounded-2xl bg-white p-8 border border-black/10 shadow-sm space-y-2">
            <div className="text-xs font-bold tracking-widest text-[#280C2E] uppercase">WHAT WE OFFER</div>
            <p className="text-base text-[#0A0A0A]/80 font-medium">Events, business support, branding &amp; marketing, tech &amp; innovation.</p>
          </div>

          <div className="rounded-2xl bg-white p-8 border border-black/10 shadow-sm space-y-2">
            <div className="text-xs font-bold tracking-widest text-[#280C2E] uppercase">WHO WE SERVE</div>
            <p className="text-base text-[#0A0A0A]/80 font-medium">Entrepreneurs, businesses, organisations, communities, partners.</p>
          </div>

          <div className="rounded-2xl bg-white p-8 border border-black/10 shadow-sm space-y-2">
            <div className="text-xs font-bold tracking-widest text-[#280C2E] uppercase">WHERE WE ARE</div>
            <p className="text-base text-[#0A0A0A]/80 font-medium">Atlantis, Western Cape, South Africa</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection({ onContact }) {
  return (
    <section className="py-24 bg-[#FDFBF7] border-b border-black/10" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4 animate-fade-in-up">
          <div className="text-xs font-bold tracking-widest text-[#CFA252] uppercase">Our Divisions</div>
          <h2 className="text-3xl font-bold tracking-tight text-[#0A0A0A] sm:text-4xl font-serif">
            Solutions Tailored for <span className="italic text-[#CFA252]">Growth</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col justify-between rounded-2xl bg-white p-8 text-black shadow-lg border border-black/5 border-t-4 border-t-[#CFA252] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#280C2E] px-3 py-1 text-xs font-bold text-[#FDFBF7] transition-transform group-hover:scale-105">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#0A0A0A] font-serif transition-colors group-hover:text-[#280C2E]">{item.title}</h3>
                <p className="text-base font-normal leading-relaxed text-[#0A0A0A]/70">{item.description}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-black/10">
                <button onClick={onContact} className="inline-flex items-center gap-2 text-sm font-bold text-[#0A0A0A] hover:text-[#CFA252] transition-colors">
                  Inquire Now <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection({ onContact }) {
  return (
    <section className="py-24 bg-[#FDFBF7]" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl bg-[#F7F3E9] p-10 lg:p-16 text-center space-y-8 border border-black/10 shadow-lg">
          <h2 className="text-3xl font-bold text-[#0A0A0A] sm:text-5xl font-serif">
            Ready to <span className="italic text-[#CFA252]">Work With Us?</span>
          </h2>
          <p className="mx-auto max-w-xl text-base text-[#0A0A0A]/70">
            Reach out via WhatsApp or submit a quick inquiry to discuss your next project, event, or business solution.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="flex items-center gap-2 rounded-full bg-[#0A0A0A] px-8 py-4 text-base font-bold text-[#FDFBF7] hover:bg-[#CFA252] hover:text-black hover:scale-105 transition-all duration-300 shadow-xl" onClick={() => window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')}>
              Talk on WhatsApp <MessageCircle size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-12 bg-[#F7F3E9] text-[#0A0A0A]/60 border-t border-black/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row lg:px-8">
        <a className="flex items-center gap-3" href="#top">
          <img className="h-8 w-auto rounded border border-[#CFA252]/30" src={logoUrl} alt="Glam Hub Logo" />
          <span className="text-sm font-bold text-[#0A0A0A] font-serif">GLAM HUB</span>
        </a>
        <span className="text-xs">© 2026 Glam Hub (Pty) Ltd. All rights reserved.</span>
        <span className="text-xs text-[#0A0A0A]/60">Events &amp; Business Development</span>
      </div>
    </footer>
  )
}

function ContactModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-md" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="relative w-full max-w-md rounded-2xl bg-[#FDFBF7] p-8 text-black shadow-2xl space-y-6 border-t-4 border-[#CFA252] animate-fade-in-up">
        <button className="absolute top-4 right-4 text-black/60 hover:text-black" onClick={onClose}>
          <X size={20} />
        </button>
        <div>
          <div className="text-xs font-bold text-[#280C2E] uppercase tracking-wider">Start A Conversation</div>
          <h2 className="text-2xl font-bold text-black mt-1 font-serif">Work With Glam Hub</h2>
        </div>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); window.open(WHATSAPP_URL, '_blank') }}>
          <div>
            <label className="block text-xs font-bold text-black mb-1">Name</label>
            <input required placeholder="Your name" className="w-full rounded-lg border border-black/20 bg-white px-3 py-2 text-sm text-black focus:border-[#CFA252] focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-black mb-1">Company / Organization</label>
            <input required placeholder="Organization name" className="w-full rounded-lg border border-black/20 bg-white px-3 py-2 text-sm text-black focus:border-[#CFA252] focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-black mb-1">How can we help?</label>
            <textarea required rows="3" placeholder="Tell us about your project or event..." className="w-full rounded-lg border border-black/20 bg-white px-3 py-2 text-sm text-black focus:border-[#CFA252] focus:outline-none" />
          </div>
          <button className="w-full rounded-full bg-[#0A0A0A] py-3 text-sm font-bold text-[#FDFBF7] hover:bg-[#CFA252] hover:text-black transition-all duration-300" type="submit">
            Send Inquiry via WhatsApp
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
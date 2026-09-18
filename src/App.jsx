import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Facebook,
  Instagram,
  Mail,
  Menu,
  MessageCircle,
  Twitter,
  X,
} from 'lucide-react'
import logoUrl from '../glamhublogo.jpeg'
import ProjectsPage from './ProjectsPage.jsx'

const WHATSAPP_URL = 'https://wa.me/message/3AYEEDG6LF4RF1'

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
                {/* Hero Section */}
                <Hero onContact={openContact} />

                {/* Main Content Sections */}
                <div className="border-t border-black/10 bg-[#FDFBF7]">
                  <OverviewSection />
                  <ContactSection />
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
            <span className="text-xl font-bold tracking-tight text-[#0A0A0A] font-serif">Glam Hub</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <a href="#about" className="text-sm font-medium text-[#0A0A0A]/80 hover:text-[#CFA252] transition">About</a>
            <a href="#services" className="text-sm font-medium text-[#0A0A0A]/80 hover:text-[#CFA252] transition">Services</a>
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

            <div className="flex flex-col gap-3 text-[#2A0E2B]">
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
              className="rounded-full bg-[#2A0E2B] px-8 py-3.5 text-base font-bold text-white transition-all hover:bg-[#CFA252] hover:text-black"
              onClick={() => {
                setMenuOpen(false)
                window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')
              }}
            >
              Chat on WhatsApp
            </button>
          </div>
        </div>
      )}
    </>
  )
}

function Hero({ onContact }) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 bg-[#2A0E2B] text-white" id="top">
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-left space-y-8 animate-fade-in-up">
        {/* Category Tagline */}
        <div className="text-xs sm:text-sm font-bold tracking-widest text-[#E5C07B] uppercase">
          EVENTS · BUSINESS · BRANDING · TECH
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl font-serif font-semibold tracking-tight sm:text-6xl lg:text-7xl leading-tight">
          Where People, Business &amp; Ideas Connect.
        </h1>
        
        {/* Subtitle Description */}
        <p className="text-base sm:text-lg font-normal leading-relaxed text-white/80 max-w-2xl">
          Glam Hub is an events management and business development company creating experiences, connections and solutions that help businesses and communities grow.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 max-w-md">
          <button
            onClick={onContact}
            className="flex items-center justify-center gap-2 rounded-full bg-[#E5C07B] px-8 py-4 text-base font-bold text-black shadow-xl transition-all duration-300 hover:bg-white hover:scale-105"
          >
            Work With Glam Hub <ArrowRight size={18} />
          </button>
          
          <a
            href="#services"
            className="flex items-center justify-center gap-2 rounded-full border border-white/30 bg-transparent px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  )
}

function OverviewSection() {
  return (
    <section className="py-20 bg-[#F7F3E9] border-b border-black/10" id="about">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 space-y-12">
        {/* WHAT WE ARE */}
        <div className="space-y-2">
          <div className="text-xs font-bold tracking-widest text-[#2A0E2B]/70 uppercase">
            WHAT WE ARE
          </div>
          <p className="text-lg sm:text-xl font-medium text-[#0A0A0A]">
            An events management &amp; business development company.
          </p>
        </div>

        {/* WHAT WE OFFER */}
        <div className="space-y-2" id="services">
          <div className="text-xs font-bold tracking-widest text-[#2A0E2B]/70 uppercase">
            WHAT WE OFFER
          </div>
          <p className="text-lg sm:text-xl font-medium text-[#0A0A0A]">
            Events, business support, branding &amp; marketing, tech &amp; innovation.
          </p>
        </div>

        {/* WHO WE SERVE */}
        <div className="space-y-2">
          <div className="text-xs font-bold tracking-widest text-[#2A0E2B]/70 uppercase">
            WHO WE SERVE
          </div>
          <p className="text-lg sm:text-xl font-medium text-[#0A0A0A]">
            Entrepreneurs, businesses, organisations, communities, partners.
          </p>
        </div>

        {/* WHERE WE ARE */}
        <div className="space-y-2">
          <div className="text-xs font-bold tracking-widest text-[#2A0E2B]/70 uppercase">
            WHERE WE ARE
          </div>
          <p className="text-lg sm:text-xl font-medium text-[#0A0A0A]">
            Atlantis, Western Cape, South Africa
          </p>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="py-20 bg-[#FDFBF7]" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl bg-[#2A0E2B] p-10 lg:p-16 text-center space-y-8 shadow-xl text-white">
          <h2 className="text-3xl font-bold sm:text-5xl font-serif">
            Let's Build Together
          </h2>
          <p className="mx-auto max-w-xl text-base text-white/80">
            Reach out via WhatsApp or submit an inquiry to discuss your next project, event, or business solution.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              className="flex items-center gap-2 rounded-full bg-[#E5C07B] px-8 py-4 text-base font-bold text-black hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl"
              onClick={() => window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')}
            >
              Chat on WhatsApp <MessageCircle size={18} />
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
          <span className="text-sm font-bold text-[#0A0A0A] font-serif">Glam Hub</span>
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
          <div className="text-xs font-bold text-[#2A0E2B] uppercase tracking-wider">Work With Glam Hub</div>
          <h2 className="text-2xl font-bold text-black mt-1 font-serif">Send an Inquiry</h2>
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
          <button className="w-full rounded-full bg-[#2A0E2B] py-3 text-sm font-bold text-white hover:bg-[#CFA252] hover:text-black transition-all duration-300" type="submit">
            Send Inquiry via WhatsApp
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
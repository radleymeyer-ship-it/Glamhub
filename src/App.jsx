import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import {
  ArrowUpRight,
  CheckCircle,
  Clock,
  Facebook,
  HeartHandshake,
  Instagram,
  Mail,
  Menu,
  MessageCircle,
  Quote,
  Sparkles,
  Star,
  Twitter,
  Users,
  Utensils,
  X,
} from 'lucide-react'
import logoUrl from '../glamhublogo.jpeg'
import ProjectsPage from './ProjectsPage.jsx'

const WHATSAPP_URL = 'https://wa.me/message/3AYEEDG6LF4RF1'

const services = [
  {
    title: 'Individual & Team Consulting',
    description: 'Ongoing or one-time consulting to break through communication barriers, increase team output, and elevate operational alignment.',
    tag: 'Strategy & Culture',
    icon: Users,
  },
  {
    title: 'Interactive Workshops',
    description: 'Curated experiences designed to break up demanding schedules, encourage organic networking, and spark fresh creativity.',
    tag: 'Hands-on Learning',
    icon: Sparkles,
  },
  {
    title: 'Curated Team Gatherings',
    description: 'Unique culinary, tasting, and networking experiences held at boutique venues for high-impact connection.',
    tag: 'Bespoke Events',
    icon: Utensils,
  },
  {
    title: 'Tailored Retreats & Activations',
    description: 'End-to-end event planning, brand launches, and team-building getaways customized to fit your company culture.',
    tag: 'Custom Experiences',
    icon: HeartHandshake,
  },
]

const testimonials = [
  {
    quote: 'They customized the perfect team building event for our division. We kept talking about the experience for weeks afterwards!',
    author: 'Gabriela L.',
    role: 'Vanderbilt University',
  },
  {
    quote: 'Their passion and attention to detail are infectious. Our leadership and staff felt fully engaged and rejuvenated.',
    author: 'Lauren S.',
    role: 'Enterprise Partner',
  },
  {
    quote: 'Brought us out of our comfort zones to reach our full potential. Absolute 5-star coordination from start to finish.',
    author: 'Bill B.',
    role: 'Nissan Global',
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
                {/* 1. STICKY HERO */}
                <div className="sticky-hero flex flex-col justify-center">
                  <Hero onContact={openContact} />
                </div>

                {/* 2. CURTAIN CONTENT */}
                <div className="curtain-content shadow-[0_-25px_50px_rgba(0,0,0,0.08)] border-t border-[#E5C07B]/40 bg-[#FDFBF7]">
                  <ValueBanner />
                  <ServicesSection onContact={openContact} />
                  <BoutiqueFeature onContact={openContact} />
                  <TestimonialsSection />
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
    { label: 'ABOUT', href: '#why-us', isExternal: false },
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
      {/* Top Main Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-[#FDFBF7]/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a className="flex items-center gap-3 transition-transform hover:scale-105" href="#top">
            <img className="h-10 w-auto rounded object-cover border border-[#CFA252]/40" src={logoUrl} alt="Glam Hub Logo" />
            <span className="text-xl font-bold tracking-tight text-[#0A0A0A] font-serif">GLAM HUB</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <a href="#services" className="text-sm font-medium text-[#0A0A0A]/80 hover:text-[#CFA252] transition">Services</a>
            <a href="#why-us" className="text-sm font-medium text-[#0A0A0A]/80 hover:text-[#CFA252] transition">About</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#0A0A0A]/80 hover:text-[#CFA252] transition">Contact</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#0A0A0A]/80 hover:text-[#CFA252] transition">Say Hi</a>
            <button className="flex items-center justify-center gap-2 rounded-full bg-[#0A0A0A] px-6 py-2.5 text-sm font-bold text-[#FDFBF7] transition-all hover:bg-[#CFA252] hover:text-black" onClick={onContact}>
              Get Started <ArrowUpRight size={16} />
            </button>
          </div>

          {/* Mobile Hamburger Trigger */}
          <button className="text-[#0A0A0A] hover:text-[#CFA252] md:hidden p-2" onClick={() => setMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </nav>
      </header>

      {/* Full-Screen Overlay Mobile Menu (Light Cream Theme) */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#FDFBF7] px-8 py-10 text-[#0A0A0A] animate-fade-in-up">
          {/* Header Row: Close Button, Logo, Social Icons */}
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

          {/* Centered Large Bold Typography Links */}
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

          {/* Bottom Action Button */}
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
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E5C07B]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-8 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#CFA252]/40 bg-[#280C2E]/10 px-4 py-1.5 text-xs font-semibold text-[#280C2E] transition-transform hover:scale-105">
          <Sparkles size={14} className="animate-pulse text-[#CFA252]" /> Boutique Events &amp; Team Experiences
        </div>
        
        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-[#0A0A0A] sm:text-6xl lg:text-7xl font-serif leading-tight">
          Team Building &amp; Event Experiences <br />
          <span className="italic text-[#CFA252]">Your Team Will Love.</span>
        </h1>
        
        <p className="mx-auto max-w-2xl text-lg font-normal leading-relaxed text-[#0A0A0A]/70">
          Glam Hub crafts bespoke culinary activations, wellness gatherings, and strategic workshops designed to strengthen company culture, improve productivity, and inspire real connection.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button className="flex items-center gap-2 rounded-full bg-[#0A0A0A] px-8 py-4 text-base font-bold text-[#FDFBF7] shadow-xl transition-all duration-300 hover:bg-[#CFA252] hover:text-black hover:scale-105" onClick={onContact}>
            Plan Your Experience <ArrowUpRight size={18} />
          </button>
          <a className="flex items-center gap-2 rounded-full border border-black/20 bg-black/5 px-8 py-4 text-base font-semibold text-[#0A0A0A] transition-all duration-300 hover:bg-black/10 hover:border-[#CFA252]" href="#services">
            View Offerings
          </a>
        </div>
      </div>
    </section>
  )
}

function ValueBanner() {
  const points = ['Improve Collaboration', 'Spark Productivity', 'Strengthen Culture', 'Elevate Morale']
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

function ServicesSection({ onContact }) {
  return (
    <section className="py-24 bg-[#FDFBF7] border-b border-black/10" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4 animate-fade-in-up">
          <div className="text-xs font-bold tracking-widest text-[#CFA252] uppercase">Check Out Our Offerings</div>
          <h2 className="text-3xl font-bold tracking-tight text-[#0A0A0A] sm:text-4xl font-serif">
            Designed for <span className="italic text-[#CFA252]">Meaningful Connection</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((item) => {
            const IconComponent = item.icon
            return (
              <div
                key={item.title}
                className="group flex flex-col justify-between rounded-2xl bg-white p-8 text-black shadow-lg border border-black/5 border-t-4 border-t-[#CFA252] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#280C2E] px-3 py-1 text-xs font-bold text-[#FDFBF7] transition-transform group-hover:scale-105">
                      {item.tag}
                    </span>
                    <IconComponent size={28} className="text-[#0A0A0A] transition-transform duration-300 group-hover:rotate-6 group-hover:text-[#CFA252]" />
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
            )
          })}
        </div>
      </div>
    </section>
  )
}

function BoutiqueFeature({ onContact }) {
  return (
    <section className="py-24 bg-[#F7F3E9] border-b border-black/10" id="why-us">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-bold tracking-widest text-[#CFA252] uppercase">Boutique Approach</div>
            <h2 className="text-3xl font-bold text-[#0A0A0A] sm:text-4xl font-serif">
              Customizable Events.<br />
              <span className="italic text-[#CFA252]">Zero Awkward Icebreakers.</span>
            </h2>
            <p className="text-base leading-relaxed text-[#0A0A0A]/70">
              We offer a dynamic array of team building activities, culinary workshops, and wellness initiatives to create a personalized experience for your organization.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-[#0A0A0A]">
                <Clock size={18} className="text-[#CFA252]" />
                <span>Flexible 1-hour sessions to multi-day team getaways</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#0A0A0A]">
                <HeartHandshake size={18} className="text-[#CFA252]" />
                <span>Fully managed execution from brief to culmination</span>
              </div>
            </div>
            <div className="pt-4">
              <button className="rounded-full bg-[#0A0A0A] px-8 py-3.5 text-sm font-bold text-[#FDFBF7] hover:bg-[#CFA252] hover:text-black hover:scale-105 transition-all duration-300" onClick={onContact}>
                Let's Customize Yours
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-2xl bg-white p-8 text-black shadow-xl border border-black/10 space-y-6 animate-float">
            <div className="flex items-center gap-2 text-[#CFA252]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#CFA252" />
              ))}
            </div>
            <p className="text-xl font-serif font-bold leading-relaxed text-[#0A0A0A]">
              "Instead of another forgettable meeting, our team got an interactive experience that built genuine camaraderie."
            </p>
            <div className="border-t border-black/10 pt-4">
              <div className="text-sm font-bold text-[#0A0A0A]">Trusted by Corporate Teams</div>
              <div className="text-xs text-black/60">Atlantis &amp; Western Cape Region</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#FDFBF7] border-b border-black/10" id="reviews">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4">
          <div className="text-xs font-bold tracking-widest text-[#CFA252] uppercase">Client Stories</div>
          <h2 className="text-3xl font-bold text-[#0A0A0A] sm:text-4xl font-serif">
            Trusted by <span className="italic text-[#CFA252]">Forward-Thinking</span> Teams
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.author} className="flex flex-col justify-between rounded-2xl border border-black/10 bg-white p-8 space-y-6 transition-all duration-300 hover:border-[#CFA252] hover:shadow-lg hover:-translate-y-1">
              <Quote size={28} className="text-[#CFA252]" />
              <p className="text-sm leading-relaxed text-[#0A0A0A]/80 font-normal">"{t.quote}"</p>
              <div className="border-t border-black/10 pt-4">
                <div className="text-sm font-bold text-[#0A0A0A]">{t.author}</div>
                <div className="text-xs text-[#280C2E] font-semibold">{t.role}</div>
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
            Ready to <span className="italic text-[#CFA252]">Bring Your Team Together?</span>
          </h2>
          <p className="mx-auto max-w-xl text-base text-[#0A0A0A]/70">
            Fill out a quick request or send us a message. Leave the event design and execution to us!
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
        <span className="text-xs text-[#0A0A0A]/60">Boutique Events &amp; Experiences</span>
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
          <h2 className="text-2xl font-bold text-black mt-1 font-serif">Plan Your Event</h2>
        </div>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); window.open(WHATSAPP_URL, '_blank') }}>
          <div>
            <label className="block text-xs font-bold text-black mb-1">Name</label>
            <input required placeholder="Your name" className="w-full rounded-lg border border-black/20 bg-white px-3 py-2 text-sm text-black focus:border-[#CFA252] focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-black mb-1">Company / Team</label>
            <input required placeholder="Organization name" className="w-full rounded-lg border border-black/20 bg-white px-3 py-2 text-sm text-black focus:border-[#CFA252] focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-black mb-1">Event Goals</label>
            <textarea required rows="3" placeholder="Tell us what you have in mind..." className="w-full rounded-lg border border-black/20 bg-white px-3 py-2 text-sm text-black focus:border-[#CFA252] focus:outline-none" />
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
import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import {
  ArrowUpRight,
  CheckCircle,
  Clock,
  HeartHandshake,
  Menu,
  MessageCircle,
  Quote,
  Sparkles,
  Star,
  Users,
  Utensils,
  X,
} from 'lucide-react'
import logoUrl from '../glamhublogo.jpeg'
import ProjectsPage from './ProjectsPage.jsx'

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
            <div className="relative bg-black font-sans antialiased text-[#FDFBF7] selection:bg-[#E5C07B] selection:text-black">
              {/* Sticky Top Navbar */}
              <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} onContact={openContact} />

              <main className="relative">
                {/* 1. STICKY HERO (Locked behind scrolling content) */}
                <div className="sticky-hero flex flex-col justify-center">
                  <Hero onContact={openContact} />
                </div>

                {/* 2. CURTAIN CONTENT (Slides up over Hero on scroll) */}
                <div className="curtain-content shadow-[0_-25px_50px_rgba(0,0,0,0.8)] border-t border-[#E5C07B]/30">
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
  const links = ['About', 'Services', 'Why Us', 'Reviews', 'Projects', 'Contact']
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a className="flex items-center gap-3 transition-transform hover:scale-105" href="#top">
          <img className="h-10 w-auto rounded object-cover border border-[#E5C07B]/40" src={logoUrl} alt="Glam Hub Logo" />
          <span className="text-xl font-bold tracking-tight text-[#E5C07B] font-serif">GLAM HUB</span>
        </a>
        <div className={`fixed inset-x-0 top-[73px] flex flex-col gap-6 border-b border-white/10 bg-black p-6 transition-all duration-300 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-none md:bg-transparent md:p-0 ${menuOpen ? 'flex' : 'hidden md:flex'}`}>
          {links.map((link) =>
            link === 'Projects' ? (
              <Link key={link} to="/projects" className="text-sm font-medium text-[#FDFBF7]/80 transition hover:text-[#E5C07B]" onClick={() => setMenuOpen(false)}>
                {link}
              </Link>
            ) : (
              <a key={link} href={`#${link.toLowerCase().replaceAll(' ', '-')}`} className="text-sm font-medium text-[#FDFBF7]/80 transition hover:text-[#E5C07B]" onClick={() => setMenuOpen(false)}>
                {link}
              </a>
            )
          )}
          <button className="flex items-center justify-center gap-2 rounded-full bg-[#E5C07B] px-6 py-2.5 text-sm font-bold text-black transition-all duration-300 hover:bg-[#FDFBF7] hover:scale-105 hover:shadow-lg hover:shadow-[#E5C07B]/20" onClick={onContact}>
            Get Started <ArrowUpRight size={16} />
          </button>
        </div>
        <button className="text-[#FDFBF7]/80 hover:text-[#E5C07B] md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  )
}

function Hero({ onContact }) {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-black via-[#0A0A0A] to-black" id="top">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#280C2E]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-8 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#E5C07B]/40 bg-[#280C2E]/60 px-4 py-1.5 text-xs font-semibold text-[#E5C07B] transition-transform hover:scale-105">
          <Sparkles size={14} className="animate-pulse" /> Boutique Events &amp; Team Experiences
        </div>
        
        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-[#FDFBF7] sm:text-6xl lg:text-7xl font-serif leading-tight">
          Team Building &amp; Event Experiences <br />
          <span className="italic text-[#E5C07B]">Your Team Will Love.</span>
        </h1>
        
        <p className="mx-auto max-w-2xl text-lg font-normal leading-relaxed text-[#FDFBF7]/80">
          Glam Hub crafts bespoke culinary activations, wellness gatherings, and strategic workshops designed to strengthen company culture, improve productivity, and inspire real connection.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button className="flex items-center gap-2 rounded-full bg-[#E5C07B] px-8 py-4 text-base font-bold text-black shadow-xl transition-all duration-300 hover:bg-[#FDFBF7] hover:scale-105 hover:shadow-[#E5C07B]/20" onClick={onContact}>
            Plan Your Experience <ArrowUpRight size={18} />
          </button>
          <a className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-[#FDFBF7] transition-all duration-300 hover:bg-white/10 hover:border-[#E5C07B]/50" href="#services">
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
    <div className="border-b border-white/10 bg-[#0A0A0A] py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-6 px-6 text-sm font-semibold text-[#E5C07B]">
        {points.map((pt) => (
          <div key={pt} className="flex items-center gap-2 transition-transform hover:scale-105">
            <CheckCircle size={16} className="text-[#E5C07B]" />
            <span>{pt}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ServicesSection({ onContact }) {
  return (
    <section className="py-24 bg-black border-b border-white/10" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4 animate-fade-in-up">
          <div className="text-xs font-bold tracking-widest text-[#E5C07B] uppercase">Check Out Our Offerings</div>
          <h2 className="text-3xl font-bold tracking-tight text-[#FDFBF7] sm:text-4xl font-serif">
            Designed for <span className="italic text-[#E5C07B]">Meaningful Connection</span>
          </h2>
        </div>

        {/* Cream Cards with Dark Text */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((item) => {
            const IconComponent = item.icon
            return (
              <div
                key={item.title}
                className="group flex flex-col justify-between rounded-2xl bg-[#FDFBF7] p-8 text-black shadow-2xl border-t-4 border-[#E5C07B] transition-all duration-300 hover:-translate-y-2 hover:shadow-[#E5C07B]/15"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-black px-3 py-1 text-xs font-bold text-[#E5C07B] transition-transform group-hover:scale-105">
                      {item.tag}
                    </span>
                    <IconComponent size={28} className="text-black transition-transform duration-300 group-hover:rotate-6 group-hover:text-[#CFA252]" />
                  </div>
                  <h3 className="text-2xl font-bold text-black font-serif transition-colors group-hover:text-[#280C2E]">{item.title}</h3>
                  <p className="text-base font-normal leading-relaxed text-black/80">{item.description}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-black/10">
                  <button onClick={onContact} className="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-[#CFA252] transition-colors">
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
    <section className="py-24 bg-[#0A0A0A] border-b border-white/10" id="why-us">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-bold tracking-widest text-[#E5C07B] uppercase">Boutique Approach</div>
            <h2 className="text-3xl font-bold text-[#FDFBF7] sm:text-4xl font-serif">
              Customizable Events.<br />
              <span className="italic text-[#E5C07B]">Zero Awkward Icebreakers.</span>
            </h2>
            <p className="text-base leading-relaxed text-[#FDFBF7]/80">
              We offer a dynamic array of team building activities, culinary workshops, and wellness initiatives to create a personalized experience for your organization.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-[#FDFBF7]">
                <Clock size={18} className="text-[#E5C07B]" />
                <span>Flexible 1-hour sessions to multi-day team getaways</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#FDFBF7]">
                <HeartHandshake size={18} className="text-[#E5C07B]" />
                <span>Fully managed execution from brief to culmination</span>
              </div>
            </div>
            <div className="pt-4">
              <button className="rounded-full bg-[#E5C07B] px-8 py-3.5 text-sm font-bold text-black hover:bg-[#FDFBF7] hover:scale-105 transition-all duration-300" onClick={onContact}>
                Let's Customize Yours
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-2xl bg-[#FDFBF7] p-8 text-black shadow-2xl border border-[#E5C07B]/40 space-y-6 animate-float">
            <div className="flex items-center gap-2 text-[#E5C07B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#E5C07B" />
              ))}
            </div>
            <p className="text-xl font-serif font-bold leading-relaxed text-black">
              "Instead of another forgettable meeting, our team got an interactive experience that built genuine camaraderie."
            </p>
            <div className="border-t border-black/10 pt-4">
              <div className="text-sm font-bold text-black">Trusted by Corporate Teams</div>
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
    <section className="py-24 bg-black border-b border-white/10" id="reviews">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4">
          <div className="text-xs font-bold tracking-widest text-[#E5C07B] uppercase">Client Stories</div>
          <h2 className="text-3xl font-bold text-[#FDFBF7] sm:text-4xl font-serif">
            Trusted by <span className="italic text-[#E5C07B]">Forward-Thinking</span> Teams
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.author} className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 space-y-6 transition-all duration-300 hover:border-[#E5C07B]/50 hover:-translate-y-1">
              <Quote size={28} className="text-[#E5C07B]" />
              <p className="text-sm leading-relaxed text-[#FDFBF7]/90 font-normal">"{t.quote}"</p>
              <div className="border-t border-white/10 pt-4">
                <div className="text-sm font-bold text-[#FDFBF7]">{t.author}</div>
                <div className="text-xs text-[#E5C07B]">{t.role}</div>
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
    <section className="py-24 bg-black" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-black via-[#111111] to-black p-10 lg:p-16 text-center space-y-8 border border-[#E5C07B]/30 shadow-2xl">
          <h2 className="text-3xl font-bold text-[#FDFBF7] sm:text-5xl font-serif">
            Ready to <span className="italic text-[#E5C07B]">Bring Your Team Together?</span>
          </h2>
          <p className="mx-auto max-w-xl text-base text-[#FDFBF7]/80">
            Fill out a quick request or send us a message. Leave the event design and execution to us!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="flex items-center gap-2 rounded-full bg-[#E5C07B] px-8 py-4 text-base font-bold text-black hover:bg-[#FDFBF7] hover:scale-105 transition-all duration-300 shadow-xl" onClick={onContact}>
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
    <footer className="py-12 bg-black text-[#FDFBF7]/60 border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row lg:px-8">
        <a className="flex items-center gap-3" href="#top">
          <img className="h-8 w-auto rounded border border-[#E5C07B]/30" src={logoUrl} alt="Glam Hub Logo" />
          <span className="text-sm font-bold text-[#E5C07B] font-serif">GLAM HUB</span>
        </a>
        <span className="text-xs">© 2026 Glam Hub (Pty) Ltd. All rights reserved.</span>
        <span className="text-xs text-[#FDFBF7]/60">Boutique Events &amp; Experiences</span>
      </div>
    </footer>
  )
}

function ContactModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="relative w-full max-w-md rounded-2xl bg-[#FDFBF7] p-8 text-black shadow-2xl space-y-6 border-t-4 border-[#E5C07B] animate-fade-in-up">
        <button className="absolute top-4 right-4 text-black/60 hover:text-black" onClick={onClose}>
          <X size={20} />
        </button>
        <div>
          <div className="text-xs font-bold text-[#280C2E] uppercase tracking-wider">Start A Conversation</div>
          <h2 className="text-2xl font-bold text-black mt-1 font-serif">Plan Your Event</h2>
        </div>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); window.open('https://wa.me/message/3AYEEDG6LF4RF1', '_blank') }}>
          <div>
            <label className="block text-xs font-bold text-black mb-1">Name</label>
            <input required placeholder="Your name" className="w-full rounded-lg border border-black/20 bg-white px-3 py-2 text-sm text-black focus:border-[#E5C07B] focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-black mb-1">Company / Team</label>
            <input required placeholder="Organization name" className="w-full rounded-lg border border-black/20 bg-white px-3 py-2 text-sm text-black focus:border-[#E5C07B] focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-black mb-1">Event Goals</label>
            <textarea required rows="3" placeholder="Tell us what you have in mind..." className="w-full rounded-lg border border-black/20 bg-white px-3 py-2 text-sm text-black focus:border-[#E5C07B] focus:outline-none" />
          </div>
          <button className="w-full rounded-full bg-[#E5C07B] py-3 text-sm font-bold text-black hover:bg-black hover:text-[#FDFBF7] transition-all duration-300" type="submit">
            Send Inquiry via WhatsApp
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
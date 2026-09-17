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
            <div className="min-h-screen bg-[#1F0824] text-[#FDFBF7] font-sans antialiased selection:bg-[#E5C07B] selection:text-[#1F0824]">
              <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} onContact={openContact} />
              <main>
                <Hero onContact={openContact} />
                <ValueBanner />
                <ServicesSection onContact={openContact} />
                <BoutiqueFeature onContact={openContact} />
                <TestimonialsSection />
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
  const links = ['About', 'Services', 'Why Us', 'Reviews', 'Projects', 'Contact']
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#36103D] bg-[#1F0824]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a className="flex items-center gap-3" href="#top">
          <img className="h-10 w-auto rounded object-cover border border-[#E5C07B]/40" src={logoUrl} alt="Glam Hub Logo" />
          <span className="text-xl font-bold tracking-tight text-[#E5C07B] font-serif">GLAM HUB</span>
        </a>
        <div className={`fixed inset-x-0 top-[73px] flex flex-col gap-6 border-b border-[#36103D] bg-[#1F0824] p-6 transition-all md:static md:flex md:flex-row md:items-center md:gap-8 md:border-none md:bg-transparent md:p-0 ${menuOpen ? 'flex' : 'hidden md:flex'}`}>
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
          <button className="flex items-center justify-center gap-2 rounded-full bg-[#E5C07B] px-6 py-2.5 text-sm font-bold text-[#1F0824] transition hover:bg-[#FDFBF7]" onClick={onContact}>
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
    <section className="relative overflow-hidden py-20 lg:py-28 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#36103D] via-[#1F0824] to-[#1F0824]" id="top">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#E5C07B]/40 bg-[#36103D]/60 px-4 py-1.5 text-xs font-semibold text-[#E5C07B]">
          <Sparkles size={14} /> Boutique Events &amp; Team Experiences
        </div>
        
        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-[#FDFBF7] sm:text-6xl lg:text-7xl font-serif leading-tight">
          Team Building &amp; Event Experiences <br />
          <span className="italic text-[#E5C07B]">Your Team Will Love.</span>
        </h1>
        
        <p className="mx-auto max-w-2xl text-lg font-normal leading-relaxed text-[#FDFBF7]/80">
          Glam Hub crafts bespoke culinary activations, wellness gatherings, and strategic workshops designed to strengthen company culture, improve productivity, and inspire real connection.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button className="flex items-center gap-2 rounded-full bg-[#E5C07B] px-8 py-4 text-base font-bold text-[#1F0824] shadow-xl transition hover:bg-[#FDFBF7]" onClick={onContact}>
            Plan Your Experience <ArrowUpRight size={18} />
          </button>
          <a className="flex items-center gap-2 rounded-full border border-[#E5C07B]/30 bg-[#36103D]/40 px-8 py-4 text-base font-semibold text-[#FDFBF7] transition hover:bg-[#36103D]" href="#services">
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
    <div className="border-y border-[#36103D] bg-[#36103D]/30 py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-6 px-6 text-sm font-semibold text-[#E5C07B]">
        {points.map((pt) => (
          <div key={pt} className="flex items-center gap-2">
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
    <section className="py-24 bg-[#1F0824] border-b border-[#36103D]" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4">
          <div className="text-xs font-bold tracking-widest text-[#E5C07B] uppercase">Check Out Our Offerings</div>
          <h2 className="text-3xl font-bold tracking-tight text-[#FDFBF7] sm:text-4xl font-serif">
            Designed for <span className="italic text-[#E5C07B]">Meaningful Connection</span>
          </h2>
        </div>

        {/* 3 Cheers Style Cream Card Grid with Black Text */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((item) => {
            const IconComponent = item.icon
            return (
              <div key={item.title} className="group flex flex-col justify-between rounded-2xl bg-[#FDFBF7] p-8 text-[#1F0824] shadow-xl border-t-4 border-[#E5C07B] transition duration-300 hover:scale-[1.01]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#1F0824] px-3 py-1 text-xs font-bold text-[#E5C07B]">
                      {item.tag}
                    </span>
                    <IconComponent size={28} className="text-[#36103D]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1F0824] font-serif">{item.title}</h3>
                  <p className="text-base font-normal leading-relaxed text-[#1F0824]/80">{item.description}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#1F0824]/10">
                  <button onClick={onContact} className="inline-flex items-center gap-2 text-sm font-bold text-[#36103D] hover:text-[#CFA252]">
                    Inquire Now <ArrowUpRight size={16} />
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
    <section className="py-24 bg-[#36103D]/20 border-b border-[#36103D]" id="why-us">
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
              <button className="rounded-full bg-[#E5C07B] px-8 py-3.5 text-sm font-bold text-[#1F0824] hover:bg-[#FDFBF7] transition" onClick={onContact}>
                Let's Customize Yours
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-2xl bg-[#FDFBF7] p-8 text-[#1F0824] shadow-2xl border border-[#E5C07B]/40 space-y-6">
            <div className="flex items-center gap-2 text-[#E5C07B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#E5C07B" />
              ))}
            </div>
            <p className="text-xl font-serif font-bold leading-relaxed text-[#1F0824]">
              "Instead of another forgettable meeting, our team got an interactive experience that built genuine camaraderie."
            </p>
            <div className="border-t border-[#1F0824]/10 pt-4">
              <div className="text-sm font-bold text-[#36103D]">Trusted by Corporate Teams</div>
              <div className="text-xs text-[#1F0824]/60">Atlantis &amp; Western Cape Region</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#1F0824] border-b border-[#36103D]" id="reviews">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4">
          <div className="text-xs font-bold tracking-widest text-[#E5C07B] uppercase">Client Stories</div>
          <h2 className="text-3xl font-bold text-[#FDFBF7] sm:text-4xl font-serif">
            Trusted by <span className="italic text-[#E5C07B]">Forward-Thinking</span> Teams
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.author} className="flex flex-col justify-between rounded-2xl border border-[#36103D] bg-[#36103D]/20 p-8 space-y-6">
              <Quote size={28} className="text-[#E5C07B]" />
              <p className="text-sm leading-relaxed text-[#FDFBF7]/90 font-normal">"{t.quote}"</p>
              <div className="border-t border-[#36103D] pt-4">
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
    <section className="py-24 bg-[#1F0824]" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl bg-[#36103D] p-10 lg:p-16 text-center space-y-8 border border-[#E5C07B]/30 shadow-2xl">
          <h2 className="text-3xl font-bold text-[#FDFBF7] sm:text-5xl font-serif">
            Ready to <span className="italic text-[#E5C07B]">Bring Your Team Together?</span>
          </h2>
          <p className="mx-auto max-w-xl text-base text-[#FDFBF7]/80">
            Fill out a quick request or send us a message. Leave the event design and execution to us!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="flex items-center gap-2 rounded-full bg-[#E5C07B] px-8 py-4 text-base font-bold text-[#1F0824] hover:bg-[#FDFBF7] transition" onClick={onContact}>
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
    <footer className="py-12 bg-[#1F0824] text-[#FDFBF7]/60 border-t border-[#36103D]">
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1F0824]/80 p-4 backdrop-blur-sm" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="relative w-full max-w-md rounded-2xl bg-[#FDFBF7] p-8 text-[#1F0824] shadow-2xl space-y-6 border-t-4 border-[#E5C07B]">
        <button className="absolute top-4 right-4 text-[#1F0824]/60 hover:text-[#1F0824]" onClick={onClose}>
          <X size={20} />
        </button>
        <div>
          <div className="text-xs font-bold text-[#36103D] uppercase tracking-wider">Start A Conversation</div>
          <h2 className="text-2xl font-bold text-[#1F0824] mt-1 font-serif">Plan Your Event</h2>
        </div>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); window.open('https://wa.me/message/3AYEEDG6LF4RF1', '_blank') }}>
          <div>
            <label className="block text-xs font-bold text-[#1F0824] mb-1">Name</label>
            <input required placeholder="Your name" className="w-full rounded-lg border border-[#1F0824]/20 bg-white px-3 py-2 text-sm text-[#1F0824] focus:border-[#E5C07B] focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#1F0824] mb-1">Company / Team</label>
            <input required placeholder="Organization name" className="w-full rounded-lg border border-[#1F0824]/20 bg-white px-3 py-2 text-sm text-[#1F0824] focus:border-[#E5C07B] focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#1F0824] mb-1">Event Goals</label>
            <textarea required rows="3" placeholder="Tell us what you have in mind..." className="w-full rounded-lg border border-[#1F0824]/20 bg-white px-3 py-2 text-sm text-[#1F0824] focus:border-[#E5C07B] focus:outline-none" />
          </div>
          <button className="w-full rounded-full bg-[#E5C07B] py-3 text-sm font-bold text-[#1F0824] hover:bg-[#36103D] hover:text-[#FDFBF7] transition" type="submit">
            Send Inquiry via WhatsApp
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
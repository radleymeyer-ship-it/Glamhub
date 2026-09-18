import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  X,
} from 'lucide-react'
import logoUrl from '../glamhublogo.jpeg'
import dtfPrintImg from '../image_083804.jpg'
import printerOperatorImg from '../image_08387b.jpg'
import tshirtsImg from '../image_083f46.jpg'
import ProjectsPage from './ProjectsPage.jsx'

const WHATSAPP_URL = 'https://wa.me/message/3AYEEDG6LF4RF1'
const EVENT_HALL_IMAGE = 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80'

// Branding & Printing slider images
const BRANDING_SLIDER_IMAGES = [
  {
    url: dtfPrintImg,
    alt: 'DTF Printing and Heat Transfer Film Designs',
  },
  {
    url: printerOperatorImg,
    alt: 'Commercial Large Format & Sticker Printing',
  },
  {
    url: tshirtsImg,
    alt: 'Custom T-Shirt Apparel & Apparel Branding',
  },
]

// Event slider images for the Hero banner
const HERO_SLIDER_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80',
    alt: 'Formal Dining Event Setup',
  },
  {
    url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    alt: 'Corporate Networking Event',
  },
  {
    url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    alt: 'Celebration and Brand Activation',
  },
]

const services = [
  {
    num: '01',
    title: 'Events',
    description: 'Creating professional and meaningful experiences that connect people, businesses and communities.',
  },
  {
    num: '02',
    title: 'Business Support',
    description: 'Providing practical support to entrepreneurs and organisations looking to build visibility and growth.',
  },
  {
    num: '03',
    title: 'Branding & Marketing',
    description: 'Custom apparel, DTF printing, signage, promotional materials, and business stationery.',
  },
  {
    num: '04',
    title: 'Tech & Innovation',
    description: 'Digital solutions, platforms, and automated workflow tools built to empower business operations.',
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
            <div className="relative bg-[#1A0B22] font-sans antialiased text-[#0A0A0A] selection:bg-[#E5C07B] selection:text-black">
              {/* Sticky Top Navbar */}
              <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} onContact={openContact} />

              <main className="relative">
                {/* 1. STICKY DARK HERO (Pinned background canvas) */}
                <div className="sticky top-0 z-0 flex flex-col justify-center min-h-screen bg-[#1A0B22] text-white">
                  <Hero onContact={openContact} />
                </div>

                {/* 2. OVERLAPPING CREAM CURTAIN SECTION */}
                <div className="relative z-10 shadow-[0_-30px_60px_rgba(0,0,0,0.4)] rounded-t-[2.5rem] bg-[#FAF8F5] text-[#1A0B22]">
                  <AboutOverviewSection />
                  <AboutStorySection />
                  <DivisionsSection onContact={openContact} />
                  <MerchSection onContact={openContact} />
                  <ServicesListSection onContact={openContact} />
                </div>

                {/* 3. OVERLAPPING DARK EVENTS SECTION */}
                <div className="relative z-20 shadow-[0_-30px_60px_rgba(0,0,0,0.5)] bg-[#1A0B22] text-white py-20 border-t border-white/10">
                  <EventsSection />
                  <Footer />
                </div>
              </main>

              {/* Floating WhatsApp Pill CTA */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#5E1A6E] px-5 py-3 text-sm font-bold text-white shadow-2xl transition-all hover:bg-[#7A238E] hover:scale-105"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>

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
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#about' },
    { label: 'Our Divisions', href: '#divisions' },
    { label: 'Events', href: '#events' },
    { label: 'Business Support', href: '#divisions' },
    { label: 'GlamHubStudio', href: '#branding' },
    { label: 'Tech & Innovation', href: '#divisions' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: WHATSAPP_URL, isExternal: true },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[#FAF8F5]/90 backdrop-blur-md border-b border-black/5">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a className="flex items-center gap-3" href="#top">
            <img src={logoUrl} alt="Glam Hub Logo" className="h-10 w-auto rounded-md object-contain" />
            <span className="text-2xl font-serif font-bold text-[#2E0B3B]">Glam Hub</span>
          </a>

          <button className="rounded-full p-2 text-[#2E0B3B] hover:bg-black/5" onClick={() => setMenuOpen(true)}>
            <Menu size={26} />
          </button>
        </nav>
      </header>

      {/* Full-Screen Overlay Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#FAF8F5] px-8 py-8 text-[#1A0B22]">
          <div className="flex items-center justify-between border-b border-black/5 pb-4">
            <div className="flex items-center gap-3">
              <img src={logoUrl} alt="Glam Hub Logo" className="h-10 w-auto rounded-md object-contain" />
              <span className="text-2xl font-serif font-bold text-[#2E0B3B]">Glam Hub</span>
            </div>
            <button className="rounded-full border border-black/10 p-2 text-black hover:bg-black/5" onClick={() => setMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col gap-4 py-6 overflow-y-auto">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-medium text-[#1A0B22]/90 hover:text-[#CFA252] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-4">
            <button
              className="w-full rounded-full bg-[#5E1A6E] py-4 text-center text-sm font-bold text-white hover:bg-[#7A238E] transition-all"
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
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDER_IMAGES.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDER_IMAGES.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDER_IMAGES.length)
  }

  return (
    <section className="relative px-6 py-16 text-center space-y-8 max-w-2xl mx-auto" id="top">
      <div className="text-xs font-semibold tracking-widest text-[#E5C07B] uppercase">
        EVENTS · BUSINESS · BRANDING · TECH
      </div>

      <h1 className="text-4xl sm:text-6xl font-serif font-bold leading-tight">
        Where People, Business &amp; <br />
        <span className="italic text-[#E5C07B]">Ideas Connect.</span>
      </h1>

      <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
        Glam Hub is an events management and business development company creating experiences, connections and solutions that help businesses and communities grow.
      </p>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-center">
        <button
          onClick={onContact}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E5C07B] px-8 py-4 text-base font-bold text-black transition-all hover:bg-white"
        >
          Work With Glam Hub <ArrowUpRight size={18} />
        </button>
        <a
          href="#divisions"
          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white hover:bg-white/10"
        >
          Explore Our Services
        </a>
      </div>

      {/* Hero Interactive Image Carousel */}
      <div className="relative pt-6">
        <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
          {HERO_SLIDER_IMAGES.map((image, index) => (
            <img
              key={image.url}
              src={image.url}
              alt={image.alt}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            />
          ))}

          <button
            onClick={prevSlide}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white/80 backdrop-blur-sm transition-all hover:bg-black/70 hover:text-white"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white/80 backdrop-blur-sm transition-all hover:bg-black/70 hover:text-white"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {HERO_SLIDER_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? 'w-6 bg-[#E5C07B]' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutOverviewSection() {
  return (
    <section className="py-16 px-6 max-w-3xl mx-auto space-y-8" id="about">
      <div className="space-y-6">
        <div>
          <div className="text-xs font-bold tracking-widest text-[#5E1A6E] uppercase">WHAT WE ARE</div>
          <p className="text-base text-[#1A0B22]/80 mt-1">An events management &amp; business development company.</p>
        </div>

        <div>
          <div className="text-xs font-bold tracking-widest text-[#5E1A6E] uppercase">WHAT WE OFFER</div>
          <p className="text-base text-[#1A0B22]/80 mt-1">Events, business support, branding &amp; marketing, tech &amp; innovation.</p>
        </div>

        <div>
          <div className="text-xs font-bold tracking-widest text-[#5E1A6E] uppercase">WHO WE SERVE</div>
          <p className="text-base text-[#1A0B22]/80 mt-1">Entrepreneurs, businesses, organisations, communities, partners.</p>
        </div>

        <div>
          <div className="text-xs font-bold tracking-widest text-[#5E1A6E] uppercase">WHERE WE ARE</div>
          <p className="text-base text-[#1A0B22]/80 mt-1">Atlantis, Western Cape, South Africa</p>
        </div>
      </div>
    </section>
  )
}

function AboutStorySection() {
  return (
    <section className="py-12 px-6 max-w-3xl mx-auto space-y-6 border-t border-black/5">
      <div className="text-xs font-bold tracking-widest text-[#CFA252] uppercase">ABOUT GLAM HUB</div>
      <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A0B22]">
        More Than Events. We Build Connections.
      </h2>
      <p className="text-base leading-relaxed text-[#1A0B22]/80">
        Glam Hub began as an events-focused business and has developed into a broader business ecosystem spanning events, business support, branding &amp; marketing, and technology &amp; innovation.
      </p>
      <p className="text-base leading-relaxed text-[#1A0B22]/80">
        We bring these services together so that people and businesses can connect, build, launch, promote and grow — through professional experiences and practical support.
      </p>
      <a href="#divisions" className="inline-flex items-center gap-2 text-sm font-bold text-[#5E1A6E] hover:underline pt-2">
        Read our story &rarr;
      </a>
    </section>
  )
}

function DivisionsSection({ onContact }) {
  return (
    <section className="py-16 px-6 max-w-3xl mx-auto space-y-8 border-t border-black/5" id="divisions">
      <div className="space-y-2">
        <div className="text-xs font-bold tracking-widest text-[#CFA252] uppercase">OUR DIVISIONS</div>
        <h2 className="text-3xl font-serif font-bold text-[#1A0B22]">
          Four divisions. One connected ecosystem.
        </h2>
      </div>

      <div className="space-y-6">
        {services.map((item) => (
          <div key={item.num} className="rounded-2xl bg-white p-6 shadow-md border border-black/5 space-y-3">
            <div className="text-xs font-bold text-[#CFA252]">{item.num}</div>
            <h3 className="text-xl font-serif font-bold text-[#1A0B22]">{item.title}</h3>
            <p className="text-sm text-[#1A0B22]/70 leading-relaxed">{item.description}</p>
            <button onClick={onContact} className="inline-flex items-center gap-1 text-xs font-bold text-[#5E1A6E] hover:underline pt-2">
              Learn more &rarr;
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

function MerchSection({ onContact }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BRANDING_SLIDER_IMAGES.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? BRANDING_SLIDER_IMAGES.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % BRANDING_SLIDER_IMAGES.length)
  }

  return (
    <section className="py-16 px-6 max-w-3xl mx-auto space-y-6 border-t border-black/5" id="branding">
      <div className="text-xs font-bold tracking-widest text-[#CFA252] uppercase">GLAMHUBSTUDIO</div>
      <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A0B22]">
        Branding, print and promotional solutions.
      </h2>
      <p className="text-base text-[#1A0B22]/80 leading-relaxed">
        Business branding, DTF printing, branded clothing, signage, promotional materials, business stationery and marketing materials.
      </p>
      <button onClick={onContact} className="rounded-full bg-[#5E1A6E] px-6 py-3 text-sm font-bold text-white hover:bg-[#7A238E] transition-all">
        Request a Quote &rarr;
      </button>

      {/* Branding & Printing Image Slider */}
      <div className="relative pt-4">
        <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-2xl border border-black/10 shadow-md bg-black/5">
          {BRANDING_SLIDER_IMAGES.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={image.alt}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            />
          ))}

          <button
            onClick={prevSlide}
            aria-label="Previous printing sample"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/80"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next printing sample"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/80"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {BRANDING_SLIDER_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to printing slide ${index + 1}`}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? 'w-6 bg-[#CFA252]' : 'w-2 bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesListSection({ onContact }) {
  const items = [
    'Business branding',
    'Marketing materials',
    'Signage',
    'Promotional materials',
    'DTF printing',
    'Branded clothing and apparel',
    'Business stationery and print solutions',
    'Visual marketing solutions',
  ]

  return (
    <section className="py-16 px-6 max-w-3xl mx-auto space-y-6 border-t border-black/5">
      <div className="text-xs font-bold tracking-widest text-[#CFA252] uppercase">SERVICES</div>
      <h2 className="text-3xl font-serif font-bold text-[#1A0B22]">
        Everything your brand needs in print.
      </h2>

      <ul className="space-y-3 pt-2">
        {items.map((pt) => (
          <li key={pt} className="flex items-center gap-3 text-sm text-[#1A0B22]/80">
            <span className="h-2 w-2 rounded-full bg-[#CFA252]" />
            <span>{pt}</span>
          </li>
        ))}
      </ul>

      <div className="pt-4">
        <button onClick={onContact} className="rounded-full bg-[#5E1A6E] px-8 py-3.5 text-sm font-bold text-white hover:bg-[#7A238E] transition-all">
          Request a Quote
        </button>
      </div>
    </section>
  )
}

function EventsSection() {
  return (
    <section className="px-6 max-w-3xl mx-auto space-y-8" id="events">
      <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
        <img src={EVENT_HALL_IMAGE} alt="Events hall layout" className="w-full h-64 sm:h-96 object-cover" />
      </div>

      <div className="space-y-4">
        <div className="text-xs font-bold tracking-widest text-[#E5C07B] uppercase">EVENTS</div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold leading-tight">
          Experiences that connect people and businesses.
        </h2>
        <p className="text-base text-white/80 leading-relaxed">
          Networking evenings, corporate functions, business launches, brand activations, women empowerment events, wellness experiences and community gatherings.
        </p>
        <div className="pt-2">
          <button
            onClick={() => window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')}
            className="w-full sm:w-auto rounded-full bg-[#E5C07B] px-8 py-4 text-base font-bold text-black hover:bg-white transition-all shadow-xl"
          >
            View Upcoming Events
          </button>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="mt-20 pt-12 border-t border-white/10 text-white/80 px-6 max-w-3xl mx-auto space-y-8">
      <div>
        <h3 className="text-2xl font-serif font-bold text-white">Glam Hub (Pty) Ltd</h3>
        <p className="text-xs text-white/60 mt-1">
          Events Management | Business Support | Branding &amp; Marketing | Tech &amp; Innovation
        </p>
        <p className="text-xs text-[#E5C07B] mt-2">📍 Atlantis, Western Cape, South Africa</p>
      </div>

      <div className="grid grid-cols-2 gap-8 text-sm">
        <div className="space-y-2">
          <div className="text-xs font-bold text-[#E5C07B] uppercase tracking-wider">QUICK LINKS</div>
          <ul className="space-y-1.5 text-xs text-white/70">
            <li><a href="#top" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#divisions" className="hover:text-white">Our Divisions</a></li>
            <li><a href="#events" className="hover:text-white">Events</a></li>
            <li><a href="#branding" className="hover:text-white">GlamHubStudio</a></li>
          </ul>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-bold text-[#E5C07B] uppercase tracking-wider">CONTACT</div>
          <div className="text-xs text-white/70 space-y-1">
            <p className="flex items-center gap-1.5"><Phone size={12} /> 0751141473</p>
            <p className="flex items-center gap-1.5"><Mail size={12} /> kelleemeyer28@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="text-xs text-white/40 pt-4 border-t border-white/5">
        © 2026 Glam Hub (Pty) Ltd. All rights reserved.
      </div>
    </footer>
  )
}

function ContactModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-md" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="relative w-full max-w-md rounded-2xl bg-[#FAF8F5] p-8 text-[#1A0B22] shadow-2xl space-y-6 border-t-4 border-[#CFA252]">
        <button className="absolute top-4 right-4 text-black/60 hover:text-black" onClick={onClose}>
          <X size={20} />
        </button>
        <div>
          <div className="text-xs font-bold text-[#5E1A6E] uppercase tracking-wider">Start A Conversation</div>
          <h2 className="text-2xl font-serif font-bold text-black mt-1">Work With Glam Hub</h2>
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
          <button className="w-full rounded-full bg-[#5E1A6E] py-3 text-sm font-bold text-white hover:bg-[#7A238E] transition-all" type="submit">
            Send Inquiry via WhatsApp
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
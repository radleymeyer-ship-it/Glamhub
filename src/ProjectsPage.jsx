import { useEffect, useState } from 'react'
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { galleryImages } from './galleryImages.js'

export default function ProjectsPage() {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const selectedImage = selectedIndex === null ? null : galleryImages[selectedIndex]

  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && setSelectedIndex(null)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const showPrevious = () => setSelectedIndex((current) => (current === 0 ? galleryImages.length - 1 : current - 1))
  const showNext = () => setSelectedIndex((current) => (current === galleryImages.length - 1 ? 0 : current + 1))

  return <div className="projects-page gallery-page">
    <header className="gallery-header">
      <Link className="gallery-back" to="/"><ArrowLeft size={18} /> <span>Back home</span></Link>
    </header>
    <main>
      <section className="gallery-intro">
        <div className="gallery-eyebrow">Projects</div>
        <h1>Completed and<br />upcoming initiatives.</h1>
        <p>Glam Hub develops and manages its own events, projects and initiatives designed to connect people, businesses and opportunities.</p>
      </section>
      <section className="gallery-grid" aria-label="Glam Hub project gallery">
        {galleryImages.map((image, index) => <button className="gallery-tile" key={image.src} onClick={() => setSelectedIndex(index)} aria-label={`Open project image ${index + 1}`}><img src={image.src} alt={image.alt} loading={index > 5 ? 'lazy' : 'eager'} /></button>)}
      </section>
    </main>
    {selectedImage && <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={`Project image ${selectedIndex + 1}`} onMouseDown={(event) => event.target === event.currentTarget && setSelectedIndex(null)}><div className="gallery-lightbox-shell"><div className="gallery-lightbox-top"><span>PROJECT {String(selectedIndex + 1).padStart(2, '0')} / {galleryImages.length}</span><button onClick={() => setSelectedIndex(null)} aria-label="Close project image"><X size={22} /></button></div><div className="gallery-lightbox-body"><button className="gallery-arrow gallery-arrow-left" onClick={showPrevious} aria-label="Previous project image"><ChevronLeft size={24} /></button><img src={selectedImage.src} alt={selectedImage.alt} /><button className="gallery-arrow gallery-arrow-right" onClick={showNext} aria-label="Next project image"><ChevronRight size={24} /></button></div></div></div>}
  </div>
}

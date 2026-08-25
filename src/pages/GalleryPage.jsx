import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Maximize, X, ChevronLeft, ChevronRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'

const categories = ['All', 'Rooms', 'Dining', 'Spa', 'Nature', 'Pool', 'Experiences']

const images = [
  { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80', cat: 'Rooms', title: 'Ocean Suite' },
  { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', cat: 'Nature', title: 'Private Beach' },
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80', cat: 'Dining', title: 'Fine Dining' },
  { src: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80', cat: 'Spa', title: 'Wellness Spa' },
  { src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80', cat: 'Rooms', title: 'Sunset Villa' },
  { src: 'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?w=800&q=80', cat: 'Nature', title: 'Tropical Garden' },
  { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80', cat: 'Pool', title: 'Infinity Pool' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', cat: 'Dining', title: 'Beach Dinner' },
  { src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80', cat: 'Experiences', title: 'Sunset View' },
  { src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80', cat: 'Pool', title: 'Pool Villa' },
  { src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80', cat: 'Rooms', title: 'Luxury Interior' },
  { src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80', cat: 'Spa', title: 'Massage Room' },
]

export default function GalleryPage() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])

  const filtered = filter === 'All' ? images : images.filter(img => img.cat === filter)

  const openLightbox = (idx) => setLightbox(idx)
  const closeLightbox = () => setLightbox(null)
  const nextImage = () => setLightbox((prev) => (prev + 1) % filtered.length)
  const prevImage = () => setLightbox((prev) => (prev - 1 + filtered.length) % filtered.length)

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&q=80" alt="Gallery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark/60" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-num mb-4">04</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-5xl lg:text-7xl text-white">
            VISUAL <span className="text-gold">JOURNEYS</span>
          </motion.h1>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-6 lg:px-20 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs tracking-widest uppercase border transition-all ${
                  filter === cat ? 'border-gold bg-gold text-dark' : 'border-white/20 text-white/70 hover:border-gold hover:text-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Editorial Grid */}
      <section className="py-12 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
            <AnimatePresence>
              {filtered.map((img, idx) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className={`gallery-item relative group ${idx === 0 ? 'row-span-2 col-span-2' : idx === 3 ? 'row-span-2' : idx === 5 ? 'col-span-2' : idx === 8 ? 'col-span-2' : ''}`}
                  onClick={() => openLightbox(idx)}
                >
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/50 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center mx-auto mb-3">
                        <Maximize className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-white text-sm font-medium">{img.title}</div>
                      <div className="text-gold text-xs tracking-widest uppercase">{img.cat}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Horizontal Scroll Gallery */}
      <section ref={containerRef} className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 mb-12">
          <h2 className="font-serif text-3xl text-white">Cinematic <span className="text-gold">Views</span></h2>
        </div>
        <motion.div style={{ x }} className="flex gap-6 px-6">
          {[...images, ...images].map((img, idx) => (
            <div key={idx} className="flex-shrink-0 w-[400px] lg:w-[600px] h-[300px] lg:h-[400px] rounded-2xl overflow-hidden">
              <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[8000] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button className="absolute top-6 right-6 text-white/70 hover:text-white" onClick={closeLightbox}>
              <X className="w-8 h-8" />
            </button>
            <button className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white" onClick={(e) => { e.stopPropagation(); prevImage() }}>
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white" onClick={(e) => { e.stopPropagation(); nextImage() }}>
              <ChevronRight className="w-10 h-10" />
            </button>
            <motion.img
              key={filtered[lightbox].src}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={filtered[lightbox].src}
              alt={filtered[lightbox].title}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {filtered[lightbox].title} — {lightbox + 1} / {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  )
}
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize, X, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = ['All', 'Rooms', 'Dining', 'Spa', 'Nature'];

const images = [
  { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80', cat: 'Rooms', title: 'Ocean Suite Interior' },
  { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80', cat: 'Nature', title: 'Private Beach' },
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80', cat: 'Dining', title: 'Fine Dining' },
  { src: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&q=80', cat: 'Spa', title: 'Wellness Spa' },
  { src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&q=80', cat: 'Rooms', title: 'Sunset Villa' },
  { src: 'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?w=800&q=80', cat: 'Nature', title: 'Tropical Garden' },
];

export default function GalleryGrid() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = filter === 'All' ? images : images.filter(img => img.cat === filter);

  const openLightbox = (idx) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);
  const nextImage = () => setLightbox((prev) => (prev + 1) % filtered.length);
  const prevImage = () => setLightbox((prev) => (prev - 1 + filtered.length) % filtered.length);

  return (
    <section id="gallery" className="py-24 lg:py-40 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-num mb-4"
          >
            GALLERY
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl lg:text-6xl text-white"
          >
            VISUAL <span className="text-gold">JOURNEYS</span>
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-xs tracking-widest uppercase border transition-all ${
                filter === cat 
                  ? 'border-gold bg-gold text-dark' 
                  : 'border-white/20 text-white/70 hover:border-gold hover:text-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

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
                className={`gallery-item ${idx === 0 ? 'row-span-2 col-span-2' : idx === 3 ? 'row-span-2' : idx === 5 ? 'col-span-2' : ''}`}
                onClick={() => openLightbox(idx)}
              >
                <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
                  <div className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center">
                    <Maximize className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

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
            <button className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
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
              {filtered[lightbox].title}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
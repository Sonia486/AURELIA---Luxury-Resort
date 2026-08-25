import { motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect } from 'react'

export default function Lightbox({ images, currentIndex, onClose, onNext, onPrev }) {
  const image = images[currentIndex]

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, onNext, onPrev])

  if (!image) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[8000] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button 
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
        onClick={onClose}
      >
        <X className="w-8 h-8" />
      </button>

      {/* Prev */}
      <button 
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
      >
        <ChevronLeft className="w-10 h-10" />
      </button>

      {/* Next */}
      <button 
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10"
        onClick={(e) => { e.stopPropagation(); onNext() }}
      >
        <ChevronRight className="w-10 h-10" />
      </button>

      {/* Image */}
      <motion.img
        key={image.src}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        src={image.src}
        alt={image.title}
        className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Caption */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm text-center">
        <div className="text-white font-medium">{image.title}</div>
        <div className="text-gold text-xs tracking-widest uppercase mt-1">{image.cat}</div>
        <div className="text-white/40 text-xs mt-1">{currentIndex + 1} / {images.length}</div>
      </div>
    </motion.div>
  )
}
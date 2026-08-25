import { motion } from 'framer-motion'
import { Check, ArrowRight, Sparkles } from 'lucide-react'

export default function Confirmation({ show, onClose, bookingId = 'AUR-2025-8842' }) {
  if (!show) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9000] bg-dark/98 backdrop-blur-xl flex items-center justify-center px-6"
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
        className="text-center max-w-md"
      >
        {/* Checkmark Circle */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", damping: 15 }}
          className="w-24 h-24 mx-auto mb-8 rounded-full border-2 border-gold flex items-center justify-center pulse-ring"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <Check className="w-10 h-10 text-gold" strokeWidth={3} />
          </motion.div>
        </motion.div>
        
        {/* Heading */}
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-serif text-3xl lg:text-4xl text-white mb-4"
        >
          YOUR RESERVATION<br/><span className="text-gold">IS CONFIRMED!</span>
        </motion.h3>
        
        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-white/60 mb-2"
        >
          We look forward to welcoming you to Aurelia.
        </motion.p>
        
        {/* Booking ID */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-gold text-sm tracking-widest uppercase mb-8"
        >
          Booking #{bookingId}
        </motion.p>
        
        {/* Sparkles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-2 mb-8"
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, rotate: 0 }}
              animate={{ opacity: 1, y: -20, rotate: 360 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 1 }}
              className="text-gold"
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={onClose}
          className="magnetic-btn"
        >
          View Booking Details <ArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
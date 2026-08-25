import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check, ArrowLeft, Sparkles } from 'lucide-react'

const rooms = [
  { name: 'Ocean Suite', price: 450, size: '65m²', bed: 'King Bed', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=200&q=80' },
  { name: 'Sunset Villa', price: 680, size: '80m²', bed: 'King Bed', image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=200&q=80' },
  { name: 'Infinity Pool Villa', price: 950, size: '120m²', bed: 'King Bed', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=200&q=80' },
]

export default function BookingForm() {
  const [step, setStep] = useState(1)
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [confirmed, setConfirmed] = useState(false)

  const nextStep = () => setStep(s => Math.min(s + 1, 4))
  const prevStep = () => setStep(s => Math.max(s - 1, 1))
  const selectRoom = (idx) => setSelectedRoom(idx)

  const confirmBooking = () => {
    setConfirmed(true)
    setTimeout(() => setConfirmed(false), 6000)
  }

  return (
    <section id="booking" className="py-24 lg:py-40 px-6 lg:px-20 relative">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80" 
          alt="Booking Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/90 to-dark" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-num mb-4"
          >
            RESERVATIONS
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl lg:text-6xl text-white"
          >
            YOUR ESCAPE <span className="text-gold">AWAITS</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/50 mt-4"
          >
            Begin your journey to an unforgettable stay.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-8 lg:p-12"
        >
          {/* Steps */}
          <div className="flex items-center justify-center mb-12 max-w-md mx-auto">
            {[1,2,3,4].map((s, i) => (
              <div key={s} className="flex items-center flex-1">
                <div className={`step-dot ${step >= s ? 'active' : ''}`} />
                {s < 4 && <div className={`step-line ${step > s ? 'active' : ''}`} />}
              </div>
            ))}
          </div>

          <div className="flex justify-between text-[10px] tracking-widest uppercase text-white/40 mb-10 px-2 max-w-md mx-auto">
            <span className={step >= 1 ? 'text-gold' : ''}>Stay Details</span>
            <span className={step >= 2 ? 'text-gold' : ''}>Choose Room</span>
            <span className={step >= 3 ? 'text-gold' : ''}>Guest Info</span>
            <span className={step >= 4 ? 'text-gold' : ''}>Confirm</span>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase text-white/40">Check-in Date</label>
                    <input type="date" className="luxury-input" defaultValue="2025-05-24" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase text-white/40">Check-out Date</label>
                    <input type="date" className="luxury-input" defaultValue="2025-05-28" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase text-white/40">Guests</label>
                    <select className="luxury-input">
                      <option>2 Adults · 0 Children</option>
                      <option>2 Adults · 1 Child</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase text-white/40">Room Preference</label>
                    <select className="luxury-input">
                      <option>No Preference</option>
                      <option>Ocean View</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2 mb-8">
                  <label className="text-[10px] tracking-widest uppercase text-white/40">Special Requests</label>
                  <textarea className="luxury-input h-24 resize-none" placeholder="Any special requirements..." />
                </div>
                <button onClick={nextStep} className="magnetic-btn w-full justify-center">
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="space-y-4 mb-8">
                  {rooms.map((room, idx) => (
                    <div 
                      key={room.name}
                      onClick={() => selectRoom(idx)}
                      className={`glass p-4 rounded-xl flex gap-4 items-center cursor-pointer hover:border-gold/50 transition-all ${selectedRoom === idx ? 'border-gold' : ''}`}
                    >
                      <img src={room.image} alt={room.name} className="w-24 h-24 rounded-lg object-cover" />
                      <div className="flex-1">
                        <h4 className="font-serif text-lg text-white">{room.name}</h4>
                        <p className="text-white/40 text-xs mb-2">{room.size} · {room.bed}</p>
                        <div className="text-gold font-serif">${room.price}<span className="text-white/40 text-xs">/night</span></div>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedRoom === idx ? 'border-gold' : 'border-white/20'}`}>
                        {selectedRoom === idx && <div className="w-3 h-3 rounded-full bg-gold" />}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button onClick={prevStep} className="magnetic-btn outline flex-1 justify-center">Back</button>
                  <button onClick={nextStep} className="magnetic-btn flex-1 justify-center">Continue <ArrowRight className="w-4 h-4" /></button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase text-white/40">First Name</label>
                    <input type="text" className="luxury-input" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase text-white/40">Last Name</label>
                    <input type="text" className="luxury-input" placeholder="Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase text-white/40">Email</label>
                    <input type="email" className="luxury-input" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase text-white/40">Phone</label>
                    <input type="tel" className="luxury-input" placeholder="+1 234 567 890" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] tracking-widest uppercase text-white/40">Country</label>
                    <select className="luxury-input">
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>United Arab Emirates</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button onClick={prevStep} className="magnetic-btn outline flex-1 justify-center">Back</button>
                  <button onClick={nextStep} className="magnetic-btn flex-1 justify-center">Continue <ArrowRight className="w-4 h-4" /></button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="glass p-6 rounded-2xl mb-8 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Room</span>
                    <span className="text-white font-medium">{selectedRoom !== null ? rooms[selectedRoom].name : 'Ocean Suite'}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Dates</span>
                    <span className="text-white">May 24 — May 28, 2025</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Guests</span>
                    <span className="text-white">2 Adults</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Nights</span>
                    <span className="text-white">4</span>
                  </div>
                  <div className="h-px bg-white/10 my-4" />
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Room Price</span>
                    <span className="text-white">${selectedRoom !== null ? rooms[selectedRoom].price * 4 : 1800}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Taxes & Fees</span>
                    <span className="text-white">$180</span>
                  </div>
                  <div className="h-px bg-gold/30 my-4" />
                  <div className="flex justify-between text-lg font-serif">
                    <span className="text-gold">Total</span>
                    <span className="text-gold">${selectedRoom !== null ? rooms[selectedRoom].price * 4 + 180 : 1980}</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button onClick={prevStep} className="magnetic-btn outline flex-1 justify-center">Back</button>
                  <button onClick={confirmBooking} className="magnetic-btn flex-1 justify-center">
                    Confirm Reservation <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Confirmation Overlay */}
      <AnimatePresence>
        {confirmed && (
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
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", damping: 15 }}
                className="w-24 h-24 mx-auto mb-8 rounded-full border-2 border-gold flex items-center justify-center pulse-ring"
              >
                <motion.div
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Check className="w-10 h-10 text-gold" strokeWidth={3} />
                </motion.div>
              </motion.div>
              
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="font-serif text-3xl lg:text-4xl text-white mb-4"
              >
                YOUR RESERVATION<br/><span className="text-gold">IS CONFIRMED!</span>
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-white/60 mb-2"
              >
                We look forward to welcoming you to Aurelia.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-gold text-sm tracking-widest uppercase mb-8"
              >
                Booking #AUR-2025-8842
              </motion.p>
              
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
              
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                onClick={() => setConfirmed(false)}
                className="magnetic-btn"
              >
                View Booking Details <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
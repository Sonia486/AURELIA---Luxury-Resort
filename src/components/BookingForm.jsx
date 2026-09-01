import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check, ArrowLeft, Sparkles, Download, Home, Calendar, Users, Bed, MapPin, CreditCard, Mail, Phone, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const rooms = [
  { name: 'Ocean Suite', price: 450, size: '65m²', bed: 'King Bed', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=200&q=80' },
  { name: 'Sunset Villa', price: 680, size: '80m²', bed: 'King Bed', image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=200&q=80' },
  { name: 'Infinity Pool Villa', price: 950, size: '120m²', bed: 'King Bed', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=200&q=80' },
]

export default function BookingForm() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [confirmed, setConfirmed] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [errors, setErrors] = useState({})
  const [bookingId] = useState(`AUR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`)
  
  const [formData, setFormData] = useState({
    checkIn: '2025-05-24',
    checkOut: '2025-05-28',
    guests: '',
    preference: '',
    requests: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: ''
  })

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => { const e = { ...prev }; delete e[field]; return e })
    }
  }

  const validateStep = () => {
    const newErrors = {}
    if (step === 1) {
      if (!formData.checkIn.trim()) newErrors.checkIn = 'Check-in date is required'
      if (!formData.checkOut.trim()) newErrors.checkOut = 'Check-out date is required'
      if (formData.checkIn && formData.checkOut && new Date(formData.checkOut) <= new Date(formData.checkIn)) {
        newErrors.checkOut = 'Must be after check-in date'
      }
      if (!formData.guests.trim()) newErrors.guests = 'Number of guests is required'
      if (!formData.preference.trim()) newErrors.preference = 'Room preference is required'
    }
    if (step === 2) {
      if (selectedRoom === null) newErrors.room = 'Please select a room'
    }
    if (step === 3) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
      if (!formData.email.trim()) newErrors.email = 'Email is required'
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address'
      if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
      if (!formData.country.trim()) newErrors.country = 'Country is required'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep()) setStep(s => Math.min(s + 1, 4))
  }
  
  const prevStep = () => setStep(s => Math.max(s - 1, 1))
  const selectRoom = (idx) => {
    setSelectedRoom(idx)
    if (errors.room) setErrors(prev => { const e = { ...prev }; delete e.room; return e })
  }

  const confirmBooking = () => {
    setConfirmed(true)
  }

  const downloadDetails = () => {
    const room = selectedRoom !== null ? rooms[selectedRoom] : rooms[0]
    const nights = Math.ceil((new Date(formData.checkOut) - new Date(formData.checkIn)) / (1000 * 60 * 60 * 24)) || 4
    const content = `
=======================================
    AURELIA - LUXURY RESORT & PRIVATE RETREAT
         BOOKING CONFIRMATION
=======================================

Booking ID: ${bookingId}
Date: ${new Date().toLocaleDateString()}

---------------------------------------
GUEST INFORMATION
---------------------------------------
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Country: ${formData.country}

---------------------------------------
STAY DETAILS
---------------------------------------
Check-in: ${formData.checkIn}
Check-out: ${formData.checkOut}
Nights: ${nights}
Guests: ${formData.guests}
Room Preference: ${formData.preference}
Special Requests: ${formData.requests || 'None'}

---------------------------------------
ROOM DETAILS
---------------------------------------
Room: ${room.name}
Size: ${room.size}
Bed: ${room.bed}
Price/Night: $${room.price}

---------------------------------------
PAYMENT SUMMARY
---------------------------------------
Room Price: $${room.price * nights}
Taxes & Fees: $180
------------------------
TOTAL: $${room.price * nights + 180}

---------------------------------------
Thank you for choosing Aurelia.
We look forward to welcoming you.

For inquiries: reservations@aurelia.com
=======================================
`
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `Aurelia-Booking-${bookingId}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const nights = Math.ceil((new Date(formData.checkOut) - new Date(formData.checkIn)) / (1000 * 60 * 60 * 24)) || 4
  const selectedRoomData = selectedRoom !== null ? rooms[selectedRoom] : rooms[0]

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
            {[1,2,3,4].map((s) => (
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
                    <label className="text-[10px] tracking-widest uppercase text-white/40">Check-in Date *</label>
                    <input 
                      type="date" 
                      className={`luxury-input ${errors.checkIn ? 'border-red-500' : ''}`}
                      value={formData.checkIn}
                      onChange={(e) => updateField('checkIn', e.target.value)}
                    />
                    {errors.checkIn && <p className="text-red-400 text-xs mt-1">{errors.checkIn}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase text-white/40">Check-out Date *</label>
                    <input 
                      type="date" 
                      className={`luxury-input ${errors.checkOut ? 'border-red-500' : ''}`}
                      value={formData.checkOut}
                      onChange={(e) => updateField('checkOut', e.target.value)}
                    />
                    {errors.checkOut && <p className="text-red-400 text-xs mt-1">{errors.checkOut}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase text-white/40">Guests *</label>
                    <input 
                      type="text" 
                      className={`luxury-input ${errors.guests ? 'border-red-500' : ''}`}
                      placeholder="e.g. 2 Adults, 1 Child"
                      value={formData.guests}
                      onChange={(e) => updateField('guests', e.target.value)}
                    />
                    {errors.guests && <p className="text-red-400 text-xs mt-1">{errors.guests}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase text-white/40">Room Preference *</label>
                    <input 
                      type="text" 
                      className={`luxury-input ${errors.preference ? 'border-red-500' : ''}`}
                      placeholder="e.g. Ocean View, Private Pool"
                      value={formData.preference}
                      onChange={(e) => updateField('preference', e.target.value)}
                    />
                    {errors.preference && <p className="text-red-400 text-xs mt-1">{errors.preference}</p>}
                  </div>
                </div>
                <div className="space-y-2 mb-8">
                  <label className="text-[10px] tracking-widest uppercase text-white/40">Special Requests</label>
                  <textarea 
                    className="luxury-input h-24 resize-none" 
                    placeholder="Any special requirements..."
                    value={formData.requests}
                    onChange={(e) => updateField('requests', e.target.value)}
                  />
                </div>
                <button onClick={nextStep} className="magnetic-btn w-full justify-center">
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                {errors.room && <p className="text-red-400 text-xs mb-4 text-center">{errors.room}</p>}
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
                    <label className="text-[10px] tracking-widest uppercase text-white/40">First Name *</label>
                    <input 
                      type="text" 
                      className={`luxury-input ${errors.firstName ? 'border-red-500' : ''}`}
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => updateField('firstName', e.target.value)}
                    />
                    {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase text-white/40">Last Name *</label>
                    <input 
                      type="text" 
                      className={`luxury-input ${errors.lastName ? 'border-red-500' : ''}`}
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => updateField('lastName', e.target.value)}
                    />
                    {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase text-white/40">Email *</label>
                    <input 
                      type="email" 
                      className={`luxury-input ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase text-white/40">Phone *</label>
                    <input 
                      type="tel" 
                      className={`luxury-input ${errors.phone ? 'border-red-500' : ''}`}
                      placeholder="+1 234 567 890"
                      value={formData.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] tracking-widest uppercase text-white/40">Country *</label>
                    <input 
                      type="text" 
                      className={`luxury-input ${errors.country ? 'border-red-500' : ''}`}
                      placeholder="e.g. Pakistan"
                      value={formData.country}
                      onChange={(e) => updateField('country', e.target.value)}
                    />
                    {errors.country && <p className="text-red-400 text-xs mt-1">{errors.country}</p>}
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
                    <span className="text-white font-medium">{selectedRoomData.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Dates</span>
                    <span className="text-white">{formData.checkIn} — {formData.checkOut}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Guests</span>
                    <span className="text-white">{formData.guests}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Nights</span>
                    <span className="text-white">{nights}</span>
                  </div>
                  <div className="h-px bg-white/10 my-4" />
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Room Price</span>
                    <span className="text-white">${selectedRoomData.price * nights}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Taxes & Fees</span>
                    <span className="text-white">$180</span>
                  </div>
                  <div className="h-px bg-gold/30 my-4" />
                  <div className="flex justify-between text-lg font-serif">
                    <span className="text-gold">Total</span>
                    <span className="text-gold">${selectedRoomData.price * nights + 180}</span>
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

      {/* Confirmation Success Overlay */}
      <AnimatePresence>
        {confirmed && !showDetails && (
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
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
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
                Booking #{bookingId}
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
              
              <div className="flex flex-col gap-3">
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  onClick={() => setShowDetails(true)}
                  className="magnetic-btn w-full justify-center"
                >
                  View Booking Details <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking Details View */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9000] bg-dark/98 backdrop-blur-xl flex items-center justify-center p-4 lg:p-8 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25 }}
              className="glass-strong w-full max-w-2xl rounded-3xl p-8 lg:p-12 my-8"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-gold" strokeWidth={3} />
                </div>
                <h3 className="font-serif text-2xl lg:text-3xl text-white mb-2">Booking <span className="text-gold">Confirmed</span></h3>
                <p className="text-gold text-sm tracking-widest uppercase">{bookingId}</p>
              </div>

              <div className="space-y-6 mb-8">
                <div className="glass p-6 rounded-2xl space-y-4">
                  <h4 className="text-white text-xs tracking-widest uppercase border-b border-white/10 pb-3">Guest Information</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-white/60"><User className="w-4 h-4 text-gold" /> {formData.firstName} {formData.lastName}</div>
                    <div className="flex items-center gap-2 text-white/60"><MapPin className="w-4 h-4 text-gold" /> {formData.country}</div>
                    <div className="flex items-center gap-2 text-white/60"><Mail className="w-4 h-4 text-gold" /> {formData.email}</div>
                    <div className="flex items-center gap-2 text-white/60"><Phone className="w-4 h-4 text-gold" /> {formData.phone}</div>
                  </div>
                </div>

                <div className="glass p-6 rounded-2xl space-y-4">
                  <h4 className="text-white text-xs tracking-widest uppercase border-b border-white/10 pb-3">Stay Details</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-white/60"><Calendar className="w-4 h-4 text-gold" /> {formData.checkIn} to {formData.checkOut}</div>
                    <div className="flex items-center gap-2 text-white/60"><Users className="w-4 h-4 text-gold" /> {formData.guests}</div>
                    <div className="flex items-center gap-2 text-white/60"><Bed className="w-4 h-4 text-gold" /> {selectedRoomData.name}</div>
                    <div className="flex items-center gap-2 text-white/60"><CreditCard className="w-4 h-4 text-gold" /> ${selectedRoomData.price * nights + 180} Total</div>
                  </div>
                  {formData.requests && (
                    <p className="text-white/40 text-xs mt-2 italic">Special Request: {formData.requests}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={downloadDetails}
                  className="magnetic-btn flex-1 justify-center gap-2"
                >
                  <Download className="w-4 h-4" /> Download Details
                </button>
                <button 
                  onClick={() => navigate('/')}
                  className="magnetic-btn outline flex-1 justify-center gap-2"
                >
                  <Home className="w-4 h-4" /> Back to Home
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
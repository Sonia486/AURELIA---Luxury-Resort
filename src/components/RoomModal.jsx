import { motion } from 'framer-motion'
import { X, Users, Bed, Maximize, Wifi, Coffee, Waves, Wind, Tv, Wine, ConciergeBell, Check } from 'lucide-react'

const amenities = [
  { icon: Wifi, label: 'Free Wi-Fi' },
  { icon: Coffee, label: 'Breakfast' },
  { icon: Waves, label: 'Ocean View' },
  { icon: Wind, label: 'Air Conditioning' },
  { icon: Tv, label: 'Smart TV' },
  { icon: Wine, label: 'Mini Bar' },
  { icon: ConciergeBell, label: 'Room Service' },
  { icon: Check, label: 'Private Pool' },
]

export default function RoomModal({ room, onClose }) {
  if (!room) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[7000] bg-dark/95 backdrop-blur-xl flex items-center justify-center p-4 lg:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 50 }}
        transition={{ type: "spring", damping: 25 }}
        className="glass-strong w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 lg:h-96">
          <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-gold transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-6 left-6 lg:left-10">
            <h2 className="font-serif text-3xl lg:text-5xl text-white mb-2">{room.name}</h2>
            <div className="text-gold font-serif text-2xl">${room.price}<span className="text-white/50 text-base">/night</span></div>
          </div>
        </div>

        <div className="p-6 lg:p-10">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-white text-xs tracking-widest uppercase mb-4">Description</h3>
                <p className="text-white/60 leading-relaxed">
                  {room.desc} Experience unparalleled luxury with panoramic views, premium amenities, and personalized service designed to exceed your every expectation.
                </p>
              </div>

              <div>
                <h3 className="text-white text-xs tracking-widest uppercase mb-4">Room Details</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="glass p-4 rounded-xl text-center">
                    <Users className="w-5 h-5 text-gold mx-auto mb-2" />
                    <div className="text-white text-sm">{room.guests} Guests</div>
                  </div>
                  <div className="glass p-4 rounded-xl text-center">
                    <Bed className="w-5 h-5 text-gold mx-auto mb-2" />
                    <div className="text-white text-sm">{room.bed}</div>
                  </div>
                  <div className="glass p-4 rounded-xl text-center">
                    <Maximize className="w-5 h-5 text-gold mx-auto mb-2" />
                    <div className="text-white text-sm">{room.size}</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-white text-xs tracking-widest uppercase mb-4">Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {amenities.map((item) => (
                    <div key={item.label} className="flex items-center gap-3 glass px-4 py-3 rounded-lg group cursor-pointer hover:border-gold/30 transition-all">
                      <item.icon className="w-4 h-4 text-gold" />
                      <span className="text-white/70 text-xs group-hover:text-white transition-colors">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass p-6 rounded-2xl">
                <h3 className="text-white text-xs tracking-widest uppercase mb-4">Policies</h3>
                <div className="space-y-3 text-sm text-white/50">
                  <p>• Free cancellation up to 48 hours before check-in</p>
                  <p>• Check-in: 3:00 PM / Check-out: 12:00 PM</p>
                  <p>• No smoking policy</p>
                  <p>• Pets not allowed</p>
                </div>
              </div>

              <button className="magnetic-btn w-full justify-center">
                Reserve This Room
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
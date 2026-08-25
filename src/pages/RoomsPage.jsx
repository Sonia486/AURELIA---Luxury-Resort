import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, Bed, Maximize, ArrowRight, SlidersHorizontal } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import RoomModal from '../components/RoomModal'

const categories = ['All Rooms', 'Suites', 'Villas', 'Ocean View', 'Private Pool']

const allRooms = [
  {
    name: 'Ocean Suite', category: 'Suites', guests: 2, bed: 'King Bed', size: '65m²', price: 450,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
    desc: 'Panoramic ocean views with floor-to-ceiling windows and private terrace.'
  },
  {
    name: 'Sunset Villa', category: 'Villas', guests: 2, bed: 'King Bed', size: '80m²', price: 680,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80',
    desc: 'Private infinity pool with uninterrupted sunset views over the lagoon.'
  },
  {
    name: 'Infinity Pool Villa', category: 'Villas', guests: 2, bed: 'King Bed', size: '120m²', price: 950,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80',
    desc: 'Ultimate luxury with private butler, oceanfront deck, and plunge pool.'
  },
  {
    name: 'Garden Suite', category: 'Suites', guests: 2, bed: 'Queen Bed', size: '55m²', price: 380,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80',
    desc: 'Lush tropical garden views with private outdoor shower and hammock.'
  },
  {
    name: 'Presidential Villa', category: 'Villas', guests: 4, bed: '2 King Beds', size: '200m²', price: 1500,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80',
    desc: 'The pinnacle of luxury. Private chef, infinity pool, and dedicated concierge.'
  },
  {
    name: 'Lagoon Bungalow', category: 'Ocean View', guests: 2, bed: 'King Bed', size: '70m²', price: 520,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80',
    desc: 'Overwater bungalow with glass floor panels and direct lagoon access.'
  }
]

export default function RoomsPage() {
  const [filter, setFilter] = useState('All Rooms')
  const [modalRoom, setModalRoom] = useState(null)

  const filtered = filter === 'All Rooms' ? allRooms : allRooms.filter(r => r.category === filter || (filter === 'Private Pool' && r.name.includes('Pool')))

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80" alt="Rooms" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark/60" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-num mb-4">02</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-5xl lg:text-7xl text-white mb-6">
            YOUR PRIVATE <span className="text-gold">RETREAT</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/60 max-w-lg">
            Thoughtfully designed spaces created for extraordinary stays.
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 px-6 lg:px-20 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="glass rounded-2xl p-4 flex flex-wrap items-center gap-3">
            <SlidersHorizontal className="w-4 h-4 text-gold mr-2" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs tracking-widest uppercase transition-all ${
                  filter === cat ? 'bg-gold text-dark' : 'text-white/60 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-12 px-6 lg:px-20 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((room, idx) => (
              <motion.div
                key={room.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: idx * 0.1 }}
                className="room-card group relative rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setModalRoom(room)}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={room.image} alt={room.name} className="room-img w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex justify-between items-end mb-2">
                    <h3 className="font-serif text-2xl text-white">{room.name}</h3>
                    <span className="text-gold font-serif text-xl">${room.price}<span className="text-sm text-white/50">/night</span></span>
                  </div>
                  <div className="flex items-center gap-4 text-white/50 text-xs mb-4">
                    <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {room.guests}</span>
                    <span className="flex items-center gap-1"><Bed className="w-3 h-3" /> {room.bed}</span>
                    <span className="flex items-center gap-1"><Maximize className="w-3 h-3" /> {room.size}</span>
                  </div>
                  <div className="room-details">
                    <div className="h-px bg-gold/30 mb-4" />
                    <p className="text-white/60 text-sm mb-4">{room.desc}</p>
                    <span className="text-gold text-xs tracking-widest uppercase flex items-center gap-2">
                      View Details <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {modalRoom && <RoomModal room={modalRoom} onClose={() => setModalRoom(null)} />}
      </AnimatePresence>
    </PageTransition>
  )
}
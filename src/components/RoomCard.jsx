import { motion, AnimatePresence } from 'framer-motion';
import { Users, Bed, Maximize, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import RoomModal from './RoomModal';

const rooms = [
  {
    name: 'Ocean Suite',
    guests: 2,
    bed: 'King Bed',
    size: '65m²',
    price: 450,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
    desc: 'Panoramic ocean views with floor-to-ceiling windows and private terrace.'
  },
  {
    name: 'Sunset Villa',
    guests: 2,
    bed: 'King Bed',
    size: '80m²',
    price: 680,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80',
    desc: 'Private infinity pool with uninterrupted sunset views over the lagoon.'
  },
  {
    name: 'Infinity Pool Villa',
    guests: 2,
    bed: 'King Bed',
    size: '120m²',
    price: 950,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80',
    desc: 'Ultimate luxury with private butler, oceanfront deck, and plunge pool.'
  }
];

export default function RoomCard() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <section id="rooms" className="relative py-24 lg:py-32 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="section-num mb-4"
            >
              FEATURED ROOMS
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl lg:text-5xl text-white"
            >
              CURATED FOR YOUR <span className="text-gold">COMFORT</span>
            </motion.h2>
          </div>
          <motion.a 
            href="/rooms"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold text-sm tracking-widest uppercase flex items-center gap-2 group"
          >
            View All Rooms <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, idx) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="room-card group relative rounded-2xl overflow-hidden cursor-pointer"
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
                  <button 
                    onClick={() => setSelectedRoom(room)}
                    className="text-gold text-xs tracking-widest uppercase flex items-center gap-2"
                  >
                    View Details <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ROOM MODAL */}
      <AnimatePresence>
        {selectedRoom && (
          <RoomModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
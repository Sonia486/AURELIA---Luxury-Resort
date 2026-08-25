import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function BookingBar() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-20 px-4 lg:px-12 -mb-16">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="glass-strong max-w-6xl mx-auto rounded-2xl p-6 lg:p-8"
      >
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4 lg:gap-6">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] tracking-widest uppercase text-white/40">Check-in</label>
              <input type="date" className="luxury-input text-sm" defaultValue="2025-05-24" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] tracking-widest uppercase text-white/40">Check-out</label>
              <input type="date" className="luxury-input text-sm" defaultValue="2025-05-28" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] tracking-widest uppercase text-white/40">Guests</label>
              <select className="luxury-input text-sm">
                <option>2 Adults · 0 Children</option>
                <option>2 Adults · 1 Child</option>
                <option>2 Adults · 2 Children</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] tracking-widest uppercase text-white/40">Room Preference</label>
              <select className="luxury-input text-sm">
                <option>No Preference</option>
                <option>Ocean View</option>
                <option>Private Pool</option>
              </select>
            </div>
          </div>
          <button className="magnetic-btn whitespace-nowrap h-full py-4 lg:py-0">
            Check Availability <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
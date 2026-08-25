import { motion } from 'framer-motion';
import { Umbrella, Waves, Flower2, UtensilsCrossed } from 'lucide-react';

const highlights = [
  { icon: Umbrella, title: 'Private Beach', desc: 'Exclusive shoreline access' },
  { icon: Waves, title: 'Infinity Pool', desc: 'Ocean-edge swimming' },
  { icon: Flower2, title: 'World-Class Spa', desc: 'Holistic wellness rituals' },
  { icon: UtensilsCrossed, title: 'Fine Dining', desc: 'Michelin-starred cuisine' },
];

export default function Highlights() {
  return (
    <section className="py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {highlights.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -8 }}
            className="glass p-8 rounded-2xl text-center group cursor-pointer transition-all duration-500"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 group-hover:rotate-12 transition-all">
              <item.icon className="w-6 h-6 text-gold" />
            </div>
            <h4 className="font-serif text-lg text-white mb-1">{item.title}</h4>
            <p className="text-white/40 text-xs">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
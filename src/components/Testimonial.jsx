import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonial() {
  return (
    <section className="relative py-24 lg:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&q=80" 
          alt="Testimonial Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-dark/70" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.3, scale: 1 }}
          viewport={{ once: true }}
          className="font-serif text-6rem leading-none text-gold mb-4"
          style={{ fontSize: '6rem' }}
        >
          "
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-10 lg:p-16"
        >
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Star className="w-5 h-5 text-gold fill-gold" />
              </motion.div>
            ))}
          </div>
          <p className="font-serif text-2xl lg:text-4xl text-white leading-relaxed mb-8">
            An unforgettable experience from the moment we arrived. The attention to detail, the breathtaking views, and the world-class service made this the vacation of a lifetime.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
              <span className="text-gold font-serif">JO</span>
            </div>
            <div className="text-left">
              <div className="text-white font-medium">James & Olivia</div>
              <div className="text-white/40 text-sm">New York, USA</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
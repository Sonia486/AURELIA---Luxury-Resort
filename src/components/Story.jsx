import { motion } from 'framer-motion';
import { ArrowRight, Mountain, Gem, Play } from 'lucide-react';

export default function Story() {
  return (
    <section id="story" className="relative py-24 lg:py-40 px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="section-num"
            >
              OUR STORY
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl lg:text-6xl text-white leading-tight"
            >
              WHERE LUXURY<br/><span className="text-gold">MEETS NATURE</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg leading-relaxed max-w-md"
            >
              Aurelia is more than a destination. It's an experience crafted for those who seek the rarest things in life. Nestled between pristine waters and lush tropical gardens, every moment here is designed to awaken your senses.
            </motion.p>
            <motion.a 
              href="#"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 text-gold text-sm tracking-widest uppercase group"
            >
              Discover More <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </motion.a>
          </div>
          
          <div className="relative">
            <motion.div 
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
              className="rounded-2xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" 
                alt="Resort Story" 
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            
            <motion.button 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center pulse-ring hover:bg-gold transition-colors"
            >
              <Play className="w-6 h-6 text-dark fill-dark ml-1" />
            </motion.button>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 glass p-4 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
                  <Mountain className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-xs font-medium text-white">Unique Location</div>
                  <div className="text-[10px] text-white/40">Private Island</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="absolute -top-6 -right-6 glass p-4 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
                  <Gem className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-xs font-medium text-white">World-Class Service</div>
                  <div className="text-[10px] text-white/40">24/7 Concierge</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
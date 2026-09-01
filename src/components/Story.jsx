import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mountain, Gem, Play, X, Compass, Leaf, Droplets } from 'lucide-react';
import { useState } from 'react';

export default function Story() {
  const [showMore, setShowMore] = useState(false);

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
            <motion.button 
              onClick={() => setShowMore(true)}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 text-gold text-sm tracking-widest uppercase group"
            >
              Discover More <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </motion.button>
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

        {/* DISCOVER MORE - EXPANDED CONTENT */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-20 pt-16 border-t border-white/10">
                <div className="flex items-center justify-between mb-12">
                  <h3 className="font-serif text-3xl lg:text-4xl text-white">Discover <span className="text-gold">Aurelia</span></h3>
                  <button 
                    onClick={() => setShowMore(false)}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-gold transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="glass p-8 rounded-2xl space-y-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                      <Compass className="w-6 h-6 text-gold" />
                    </div>
                    <h4 className="font-serif text-xl text-white">Our Philosophy</h4>
                    <p className="text-white/50 text-sm leading-relaxed">
                      Born from a vision to create a sanctuary where time stands still, Aurelia blends timeless elegance with the raw beauty of nature. Every stone, every breeze, every sunset is part of a greater tapestry woven for the discerning traveler.
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass p-8 rounded-2xl space-y-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                      <Droplets className="w-6 h-6 text-gold" />
                    </div>
                    <h4 className="font-serif text-xl text-white">The Location</h4>
                    <p className="text-white/50 text-sm leading-relaxed">
                      Situated on a private island accessible only by seaplane, Aurelia offers 360 degrees of untouched coastline. Crystal lagoons meet powder-white sands, while tropical gardens shelter rare flora and fauna found nowhere else on earth.
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass p-8 rounded-2xl space-y-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                      <Leaf className="w-6 h-6 text-gold" />
                    </div>
                    <h4 className="font-serif text-xl text-white">Sustainability</h4>
                    <p className="text-white/50 text-sm leading-relaxed">
                      We believe true luxury leaves no trace. Our solar-powered villas, zero-waste kitchens, and coral restoration programs ensure that paradise remains pristine for generations to come. Indulgence, reimagined responsibly.
                    </p>
                  </motion.div>
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                  {[
                    { num: '2018', label: 'Year Established' },
                    { num: '42', label: 'Private Villas' },
                    { num: '12', label: 'World-Class Chefs' },
                    { num: '∞', label: 'Unforgettable Moments' }
                  ].map((stat) => (
                    <div key={stat.label} className="text-center glass p-6 rounded-xl">
                      <div className="font-serif text-3xl text-gold mb-1">{stat.num}</div>
                      <div className="text-white/40 text-xs tracking-widest uppercase">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Clock, Star, MapPin, Calendar } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const experiences = [
  {
    category: 'Wellness & Spa',
    title: 'Restore Your Balance',
    desc: 'Rejuvenate your mind, body and soul with our signature treatments and private spa sanctuary.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
    details: 'Indulge in our award-winning spa therapies inspired by ancient healing traditions. From Himalayan salt stone massages to private meditation pavilions overlooking the lagoon, every treatment is tailored to your unique needs by our master therapists.',
    duration: '2 - 4 Hours',
    location: 'Aurelia Spa Sanctuary',
    includes: ['Private treatment suite', 'Herbal tea ceremony', 'Aromatherapy session', 'Wellness consultation']
  },
  {
    category: 'Gourmet Dining',
    title: 'Taste the Extraordinary',
    desc: 'A culinary journey like no other. From rooftop restaurants to private beach dinners.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    details: 'Embark on a gastronomic adventure curated by Michelin-starred chefs. Savor farm-to-table creations under the stars, enjoy wine pairings from our 5,000-bottle cellar, or arrange a private chef experience on your villa terrace.',
    duration: '3 Hours',
    location: 'Multiple Venues',
    includes: ['Tasting menu', 'Sommelier pairing', 'Private seating', 'Sunset cocktails']
  },
  {
    category: 'Adventure & Nature',
    title: 'Explore the Untouched',
    desc: 'Breathtaking landscapes await. Private tours, water activities, and sunset excursions.',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80',
    details: 'Discover hidden coves by private yacht, dive into coral gardens with marine biologists, or trek through ancient mangrove forests. Every adventure is guided by local experts who reveal the secrets of our island paradise.',
    duration: 'Half Day',
    location: 'Island & Surrounding Waters',
    includes: ['Private guide', 'Equipment provided', 'Gourmet picnic', 'Underwater photography']
  },
  {
    category: 'Private Experiences',
    title: 'Designed Just For You',
    desc: 'Moments designed exclusively for you. Private dinners, celebrations, and romantic escapes.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80',
    details: 'Whether it is a proposal under a canopy of stars, an anniversary celebration on a secluded sandbank, or a bespoke itinerary crafted around your dreams — our concierge team orchestrates moments that become lifelong memories.',
    duration: 'Custom',
    location: 'Your Choice',
    includes: ['Personal concierge', 'Custom decoration', 'Private transport', 'Champagne service']
  }
];

export default function ExperienceCard() {
  const navigate = useNavigate()
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <section id="experiences" className="relative py-24 lg:py-40 overflow-hidden">
      <div className="px-6 lg:px-20 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-num mb-4"
          >
            EXPERIENCES
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl lg:text-6xl text-white"
          >
            MOMENTS THAT<br/><span className="text-gold">STAY WITH YOU</span>
          </motion.h2>
        </div>
      </div>

      <div className="flex gap-8 px-6 lg:px-20 pb-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
            className="flex-shrink-0 w-[85vw] md:w-[600px] lg:w-[700px] relative rounded-3xl overflow-hidden group cursor-pointer snap-center"
          >
            <img 
              src={exp.image} 
              alt={exp.title} 
              className="w-full h-[500px] lg:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <div className="text-gold text-xs tracking-widest uppercase mb-3">{exp.category}</div>
              <h3 className="font-serif text-3xl lg:text-4xl text-white mb-4">{exp.title}</h3>
              <p className="text-white/60 max-w-md mb-6">{exp.desc}</p>
              <button 
                onClick={() => setSelectedExp(exp)}
                className="text-gold text-sm tracking-widest uppercase flex items-center gap-2 group/btn"
              >
                Discover <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* EXPERIENCE MODAL */}
      <AnimatePresence>
        {selectedExp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[7000] bg-dark/95 backdrop-blur-xl flex items-center justify-center p-4 lg:p-8"
            onClick={() => setSelectedExp(null)}
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
                <img src={selectedExp.image} alt={selectedExp.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
                <button 
                  onClick={() => setSelectedExp(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-gold transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-6 left-6 lg:left-10">
                  <div className="text-gold text-xs tracking-widest uppercase mb-2">{selectedExp.category}</div>
                  <h2 className="font-serif text-3xl lg:text-5xl text-white mb-2">{selectedExp.title}</h2>
                </div>
              </div>

              <div className="p-6 lg:p-10">
                <div className="grid lg:grid-cols-3 gap-10">
                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <h3 className="text-white text-xs tracking-widest uppercase mb-4">About This Experience</h3>
                      <p className="text-white/60 leading-relaxed text-lg">
                        {selectedExp.details}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="glass p-4 rounded-xl text-center">
                        <Clock className="w-5 h-5 text-gold mx-auto mb-2" />
                        <div className="text-white text-sm">{selectedExp.duration}</div>
                        <div className="text-white/40 text-xs mt-1">Duration</div>
                      </div>
                      <div className="glass p-4 rounded-xl text-center">
                        <MapPin className="w-5 h-5 text-gold mx-auto mb-2" />
                        <div className="text-white text-sm">{selectedExp.location}</div>
                        <div className="text-white/40 text-xs mt-1">Location</div>
                      </div>
                      <div className="glass p-4 rounded-xl text-center">
                        <Star className="w-5 h-5 text-gold mx-auto mb-2" />
                        <div className="text-white text-sm">5-Star</div>
                        <div className="text-white/40 text-xs mt-1">Experience</div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-white text-xs tracking-widest uppercase mb-4">What's Included</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {selectedExp.includes.map((item) => (
                          <div key={item} className="flex items-center gap-3 glass px-4 py-3 rounded-lg">
                            <Calendar className="w-4 h-4 text-gold" />
                            <span className="text-white/70 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="glass p-6 rounded-2xl">
                      <h3 className="text-white text-xs tracking-widest uppercase mb-4">Reserve This Experience</h3>
                      <p className="text-white/50 text-sm mb-6">
                        Our concierge team will curate this experience specifically for your preferences and schedule.
                      </p>
                      <button 
                        onClick={() => { setSelectedExp(null); navigate('/booking') }}
                        className="magnetic-btn w-full justify-center"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const experiences = [
  {
    category: 'Wellness & Spa',
    title: 'Restore Your Balance',
    desc: 'Rejuvenate your mind, body and soul with our signature treatments and private spa sanctuary.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80'
  },
  {
    category: 'Gourmet Dining',
    title: 'Taste the Extraordinary',
    desc: 'A culinary journey like no other. From rooftop restaurants to private beach dinners.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80'
  },
  {
    category: 'Adventure & Nature',
    title: 'Explore the Untouched',
    desc: 'Breathtaking landscapes await. Private tours, water activities, and sunset excursions.',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80'
  },
  {
    category: 'Private Experiences',
    title: 'Designed Just For You',
    desc: 'Moments designed exclusively for you. Private dinners, celebrations, and romantic escapes.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80'
  }
];

export default function ExperienceCard() {
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
              <button className="text-gold text-sm tracking-widest uppercase flex items-center gap-2 group/btn">
                Discover <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
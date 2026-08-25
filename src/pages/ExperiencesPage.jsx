import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Flower2, UtensilsCrossed, Mountain, Heart } from 'lucide-react'
import PageTransition from '../components/PageTransition'

const experiences = [
  {
    id: 'spa',
    icon: Flower2,
    category: 'Wellness & Spa',
    title: 'RESTORE YOUR BALANCE',
    desc: 'Rejuvenate your mind, body and soul with our signature treatments, private spa sanctuary, sauna, and holistic wellness rituals designed by world-renowned therapists.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80',
    features: ['Signature Treatments', 'Private Spa', 'Sauna & Steam', 'Massage Therapy', 'Wellness Rituals']
  },
  {
    id: 'dining',
    icon: UtensilsCrossed,
    category: 'Gourmet Dining',
    title: 'TASTE THE EXTRAORDINARY',
    desc: 'A culinary journey like no other. From rooftop restaurants with panoramic views to private beach dinners under the stars, every meal is an unforgettable experience.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
    features: ['Fine Dining', 'Rooftop Restaurant', 'Private Beach Dinner', 'Breakfast Experience', "Chef's Table"]
  },
  {
    id: 'adventure',
    icon: Mountain,
    category: 'Adventure & Nature',
    title: 'ADVENTURE AWAITS',
    desc: 'Breathtaking landscapes await your exploration. Private tours, water activities, sunset excursions, and hiking trails through untouched tropical paradise.',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=80',
    features: ['Nature Tours', 'Hiking Trails', 'Water Activities', 'Sunset Excursions', 'Private Tours']
  },
  {
    id: 'private',
    icon: Heart,
    category: 'Private Moments',
    title: 'DESIGNED JUST FOR YOU',
    desc: 'Moments crafted exclusively for you. Private dinners, romantic celebrations, sunset setups, and personalized experiences that create memories for a lifetime.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&q=80',
    features: ['Private Dinner', 'Sunset Setup', 'Celebrations', 'Pool Experience', 'Romantic Escape']
  }
]

function ExperienceSection({ exp, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const isEven = index % 2 === 0

  return (
    <section ref={ref} className="relative py-24 lg:py-40 overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <img src={exp.image} alt={exp.title} className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/80 to-dark" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
          <motion.div 
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={isEven ? '' : 'lg:order-2'}
          >
            <div className="section-num mb-4">{exp.category}</div>
            <h2 className="font-serif text-4xl lg:text-6xl text-white mb-6">
              {exp.title.split(' ').slice(0, -1).join(' ')}<br/><span className="text-gold">{exp.title.split(' ').slice(-1)}</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-md">{exp.desc}</p>
            <div className="space-y-3 mb-8">
              {exp.features.map((feature, i) => (
                <motion.div 
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-white/70"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
            <button className="magnetic-btn">
              Discover <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`relative ${isEven ? '' : 'lg:order-1'}`}
          >
            <div className="rounded-3xl overflow-hidden">
              <img src={exp.image} alt={exp.title} className="w-full h-[500px] lg:h-[600px] object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-4 rounded-xl hidden lg:block">
              <exp.icon className="w-8 h-8 text-gold" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function ExperiencesPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80" alt="Experiences" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark/60" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-num mb-4">03</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-5xl lg:text-7xl text-white mb-6">
            MOMENTS THAT <span className="text-gold">STAY WITH YOU</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/60 max-w-lg">
            Discover experiences crafted to awaken your senses and create lasting memories.
          </motion.p>
        </div>
      </section>

      {experiences.map((exp, idx) => (
        <ExperienceSection key={exp.id} exp={exp} index={idx} />
      ))}
    </PageTransition>
  )
}
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Compass, Calendar, MapPin, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      const img = heroRef.current.querySelector('.hero-bg-img');
      if (img) {
        img.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&q=80" 
          alt="Luxury Resort" 
          className="hero-bg-img w-full h-full object-cover scale-110 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-20 max-w-7xl mx-auto pt-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="section-num mb-6"
        >
          01
        </motion.div>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6 hero-title">
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.7, duration: 0.8 }}
            className="overflow-hidden"
          >
            <span className="block">ESCAPE TO</span>
          </motion.div>
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.9, duration: 0.8 }}
            className="overflow-hidden"
          >
            <span className="block text-gold">THE EXTRAORDINARY</span>
          </motion.div>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.1, duration: 0.8 }}
          className="text-white/70 text-lg md:text-xl max-w-xl mb-10 font-light"
        >
          A private sanctuary where nature, comfort and unforgettable moments meet.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.3, duration: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <Link to="/experiences" className="magnetic-btn">
            <Compass className="w-4 h-4" /> Explore Resort
          </Link>
          <Link to="/booking" className="magnetic-btn outline">
            <Calendar className="w-4 h-4" /> Reserve Your Stay
          </Link>
        </motion.div>
      </div>

      {/* Watch Story */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.8 }}
        className="absolute bottom-32 left-6 lg:left-20 z-10"
      >
        <button className="flex items-center gap-4 group">
          <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center group-hover:border-gold group-hover:scale-110 transition-all">
            <Play className="w-5 h-5 text-white fill-white group-hover:text-gold group-hover:fill-gold ml-1" />
          </div>
          <span className="text-xs tracking-widest uppercase text-white/70 group-hover:text-gold transition-colors">Watch Story</span>
        </button>
      </motion.div>

      {/* Location */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.8 }}
        className="absolute top-32 right-6 lg:right-20 z-10 hidden lg:block"
      >
        <div className="glass px-4 py-3 rounded-lg">
          <div className="flex items-center gap-2 text-white/60 text-xs">
            <MapPin className="w-3 h-3 text-gold" />
            <span>Maldives, Indian Ocean</span>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.7, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
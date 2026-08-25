import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-20 pb-10 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Link to="/" className="font-serif text-3xl text-gold tracking-wider mb-6 block">AURELIA</Link>
            <p className="text-white/50 max-w-sm leading-relaxed mb-6">
              A private sanctuary where nature, comfort and unforgettable moments meet. Experience luxury redefined.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white text-xs tracking-widest uppercase mb-6">Quick Links</h4>
            <div className="space-y-4">
              {['Home', 'Rooms', 'Experiences', 'Gallery', 'Booking'].map((item) => (
                <Link key={item} to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="block text-white/50 hover:text-gold transition-colors text-sm">
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white text-xs tracking-widest uppercase mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>North Malé Atoll, Maldives</span>
              </div>
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span>+960 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span>reservations@aurelia.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">© 2025 Aurelia Resort. All rights reserved.</p>
          <div className="flex gap-6 text-white/30 text-xs">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
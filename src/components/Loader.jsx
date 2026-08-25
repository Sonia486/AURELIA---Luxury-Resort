import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          id="loader"
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <motion.div
            className="loader-logo"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            AURELIA
          </motion.div>
          <motion.div
            className="h-px bg-gold mt-5"
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
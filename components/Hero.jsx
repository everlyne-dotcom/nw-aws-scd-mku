import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    "/images/hero/meetup1.jpg",
    "/images/hero/meetup5.jpg",
    "/images/hero/meetup2.jpg",
    "/images/hero/meetup4.jpg",
    "/images/hero/meetup6.jpg",

  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide]})` }}
          />
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      
      <div className="relative h-full flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl w-full bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center">
            AWS Student Community Day
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mt-2">
              MKU 2026
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 text-center mb-8">
            Where Cloud, AI, and Builders Converge
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Date', value: 'May 9, 2026' },
              { label: 'Venue', value: 'MKU' },
              { label: 'Attendees', value: '250+' },
              { label: 'Speakers', value: '15+' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-gray-400 text-sm">{item.label}</p>
                <p className="text-white font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <motion.a
              href="https://luma.com/gtwqu3zo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Register for the event"
            >
              Register Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

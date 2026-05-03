import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Sponsors = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const tiers = [
    {
      
      sponsors: ['AWS', ],
    },
  ]

  return (
    <section id="sponsors" className="py-20 bg-aws-purple" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Sponsors
          </h2>
          <p className="text-gray-300 text-lg">
            Powered by industry leaders
          </p>
        </motion.div>

        <div className="space-y-12">
          {tiers.map((tier, tierIndex) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: tierIndex * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-6">
                {tier.name}
              </h3>
              <div className={`grid ${tier.sponsors.length > 3 ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-3'} gap-8 justify-items-center`}>
                {tier.sponsors.map((sponsor, index) => (
                  <motion.div
                    key={sponsor}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: tierIndex * 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 w-full max-w-xs flex items-center justify-center hover:bg-white/20 transition-all duration-300 grayscale hover:grayscale-0"
                  >
                    <span className="text-white text-xl font-bold">{sponsor}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Become a sponsor"
          >
            Become a Sponsor
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Sponsors

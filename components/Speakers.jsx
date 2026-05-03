import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Speakers = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const speakers = [
    {
      name: 'Dr. Sarah Kimani',
      title: 'AWS Solutions Architect',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    },
    {
      name: 'John Mwangi',
      title: 'Senior DevOps Engineer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    },
    {
      name: 'Grace Ochieng',
      title: 'ML Engineer at AWS',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    },
    {
      name: 'David Omondi',
      title: 'Cloud Security Expert',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    },
  ]

  return (
    <section id="speakers" className="py-20 bg-gradient-to-b from-aws-blue to-aws-purple" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Speakers
          </h2>
          <p className="text-gray-300 text-lg">
            Learn from industry leaders and AWS experts
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{speaker.name}</h3>
                <p className="text-gray-300 text-sm">{speaker.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-lg text-white px-8 py-3 rounded-2xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
            aria-label="View all speakers"
          >
            View All Speakers
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Speakers

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Speakers = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const speakers = [
    {
      name: 'Kevin Tuei',
      title: 'AWS Community Builder, Educator and Cloud consultant',
      image: 'images/speakers/tuei.jpg',
    },
    {
      name: 'Murithi Gitoga',
      title: 'AWS Cloud Optimization Solution Architect',
      image: 'images/speakers/murithi.jpg',
    },
    {
      name: 'Timothy Munyao',
      title: 'AWS Golden Jacket Pioneer & CEO, Shinrai Technologies',
      image: 'images/speakers/timothy.jpg',
    },
    {
      name: 'George Midega',
      title: 'AWS Community Builder, Cloud and Data Engineer',
      image: 'images/speakers/george.jpg',
    },
    {
      name: 'Pauline',
      title: 'AWS Authoried Instructor, Cloud Trainer, Cloud Consultant',
      image: 'images/speakers/pauline.jpg',
    },
    {
      name: 'Nelson Ngumo',
      title: 'Cloud and DevOps Engineer, AWS Community Builder',
      image: 'images/speakers/nelson.jpg',
    },
    {
      name: 'Jacob Moracha',
      title: 'AWS Community Builder, Software and Data Engineer',
      image: 'images/speakers/jacob moracha.jpg',
    },
    {
      name: 'Mark Orina',
      title: 'AWS Community Builder, Software and Data Engineer',
      image: 'images/speakers/mark.jpg',
    },
    {
      name: 'Jacob Kipkerich',
      title: 'AWS Community Builder, Software  Engineer',
      image: 'images/speakers/Jacob Kipkerich.jpg',
    }
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
        
        </motion.div>
      </div>
    </section>
  )
}

export default Speakers

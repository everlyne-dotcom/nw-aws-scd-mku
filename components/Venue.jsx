import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Venue = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="venue" className="py-20 bg-gradient-to-b from-aws-purple to-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Event Venue
          </h2>
          <p className="text-gray-300 text-lg">
            Mount Kenya University, Thika Campus
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="/images/venue/Mwai-Kibaki-Convention-Centre-Mount-Kenya-University.png"
              alt="MKU Thika Campus"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Location Details</h3>
              <p className="text-gray-300 mb-4">
                The iconic MKU building in the heart of Thika offers world-class facilities
                and easy accessibility via public transport.
              </p>
              <div className="space-y-2 text-gray-300">
                <p>📍 Thika, Kenya</p>
                <p>🕐 8:30 AM - 4:30 PM</p>
                <p>🚗 Ample parking available</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31913.231805445554!2d37.04984664916992!3d-1.0455957795425637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4f18e07c8159%3A0x64df508073c788f2!2sMwai%20Kibaki%20Convention%20Centre!5e0!3m2!1sen!2ske!4v1777827537599!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mwai Kibaki Convention Centre Location"
              />
            </div>

            <motion.a
              href="https://www.google.com/maps/dir/?api=1&destination=Mwai+Kibaki+Convention+Centre,Mount+Kenya+University,Thika,Kenya"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              aria-label="Get directions to venue"
            >
              Get Directions
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Venue

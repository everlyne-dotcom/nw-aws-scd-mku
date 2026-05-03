import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Tickets = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const tickets = [
    {
      name: 'Student',
      price: 'FREE',
      popular: false,
      benefits: [
        'Full day access',
        'Lunch & refreshments',
        'Event swag',
        'Certificate of attendance',
        'Networking sessions',
      ],
    },
    {
      name: 'Premium',
      price: '$49',
      popular: true,
      benefits: [
        'Everything in Student',
        'AWS certification voucher',
        'Premium swag pack',
        'VIP networking dinner',
        'Workshop materials',
      ],
    },
    {
      name: 'Professional',
      price: '$99',
      popular: false,
      benefits: [
        'Everything in Premium',
        'Priority seating',
        '1-on-1 mentor session',
        'Exclusive job board access',
        'Lifetime community access',
      ],
    },
  ]

  return (
    <section id="tickets" className="py-20 bg-gradient-to-b from-black to-aws-blue" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Your Ticket
          </h2>
          <p className="text-gray-300 text-lg">
            Choose the perfect pass for your journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {tickets.map((ticket, index) => (
            <motion.div
              key={ticket.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                ticket.popular
                  ? 'border-purple-500 shadow-2xl shadow-purple-500/20'
                  : 'border-white/20'
              } hover:border-purple-500/50 transition-all duration-300`}
            >
              {ticket.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{ticket.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  {ticket.price}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {ticket.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start text-gray-300">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  ticket.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}
                aria-label={`Register for ${ticket.name} ticket`}
              >
                Register Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tickets

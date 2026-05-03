import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const CommunityDay = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const highlights = [
    { value: '500+', label: 'Students' },
    { value: '10+', label: 'Speakers' },
    { value: '10+', label: 'Sessions' },
    { value: '1', label: 'Full Day' },
  ]

  const benefits = [
    'Hands-on workshops',
    'Student-friendly sessions',
    'Community networking',
    'Cloud and AI learning',
    'Career exposure',
    'Real-world innovation',
  ]

  return (
    <section
      id="community-day"
      ref={ref}
      className="py-24 bg-gradient-to-b from-black via-slate-950 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
        

          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 leading-tight">
            Build Skills. Meet Builders.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Explore the Cloud.
            </span>
          </h2>

          <p className="text-gray-300 text-lg md:text-xl mt-6 leading-relaxed">
            Student Community Day is a student-led technology conference focused
            on learning, building, and exploring cloud technologies together
            through talks, workshops, and community collaboration.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center hover:border-purple-500/40 transition-all duration-300"
            >
              <h3 className="text-4xl font-bold text-white">{item.value}</h3>
              <p className="text-gray-400 mt-2 text-sm uppercase tracking-wider">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Two Column Section */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mt-20">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-blue-400 uppercase tracking-[0.25em] text-sm font-semibold">
              What To Expect
            </span>

            <h3 className="text-3xl md:text-5xl font-bold text-white mt-4 leading-tight">
              A Full-Day Immersive Tech Experience
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-gray-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/images/hero/meetup4.jpg"
              alt="Student Community MKU Day"
              className="w-full h-[430px] object-cover rounded-3xl border border-white/10 shadow-2xl"
            />
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default CommunityDay
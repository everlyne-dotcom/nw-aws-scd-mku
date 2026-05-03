import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Agenda = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const schedule = [
    {
      time: '08:00',
      title: 'Registration & Welcome',
      desc: 'Check-in and morning coffee',
    },
    {
      time: '09:00',
      title: 'Opening Keynote',
      desc: 'The Borderless Campus: Architecting the Future of Education through Cloud-Native Innovation',
    },
    {
      time: '09:30',
      title: 'Roadmap to Golden Jacket and Certifications',
      speaker: 'Timothy Munyao',
    },
    {
      time: '10:00',
      title:
        'The Zero-Budget Architect: Building Production-Grade Apps on the AWS Free Tier',
      speaker: 'Murithi Gitonga',
    },
    {
      time: '10:30',
      title: 'Panel Discussion',
    },
    {
      time: '11:00',
      title:
        'Beyond the Console: Your First Steps into Cloud-Native AWS',
      speaker: 'George Midega',
    },
    {
      time: '11:30',
      title: 'Beyond the Chatbot: Mastering Generative AI with AWS Bedrock & SageMaker',
      speaker: 'Grace Ngari',
    },
    {
      time: '12:00',
      title: 'Lunch Break',
      desc: 'Networking and refreshments provided',
    },
    {
      time: '13:00',
      title: 'Launchpad AWS: Bridging the Gap from Idea to Intelligent Startup',
      speaker: 'Joel Muuo',
    },
    {
      time: '13:30',
      title:
        'Scaling Kubernetes on AWS: Smart Autoscaling with Karpenter',
      speaker: 'Nelson Ngumo',
    },
    {
      time: '14:00',
      title:
        'Identity is the New Perimeter: A Deep Dive into IAM',
      speaker: 'Pauline Namwakira',
    }, 
    {
      time: '15:00',
      title: 'Building DevOps for Agentic AI',
      speaker: 'Shubham Londhe',
    },
    {
      time: '15:30',
      title: 'Closing Remarks',
    },
    {
      time: '16:00',
      title: 'End of Program',
    },
  ]

  return (
    <section
      id="agenda"
      ref={ref}
      className="py-24 bg-gradient-to-b from-slate-950 via-black to-slate-950"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-purple-400 uppercase tracking-[0.3em] text-sm font-semibold">
            Event Schedule
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
            Agenda
          </h2>

          <p className="text-gray-300 text-lg mt-5">
            A full-day experience packed with learning, networking, cloud,
            AI, and innovation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-8">
          {schedule.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
              }}
              className="relative pl-8 md:pl-10"
            >
              {/* Dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>

              {/* Card */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-purple-500/40 transition-all duration-300">
                
                <div className="text-sm text-purple-400 font-semibold tracking-wider mb-2">
                  {item.time}
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                  {item.title}
                </h3>

                {item.speaker && (
                  <p className="text-blue-300 mt-2">
                    {item.speaker}
                  </p>
                )}

                {item.desc && (
                  <p className="text-gray-400 mt-2">
                    {item.desc}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Agenda
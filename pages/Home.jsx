import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Agenda from '../components/Agenda'
import Speakers from '../components/Speakers'
import Sponsors from '../components/Sponsors'
import Venue from '../components/Venue'
import Tickets from '../components/Tickets'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Agenda/>
      <Speakers />
      <Sponsors />
      <Venue />
      <Tickets />
      <Footer />
    </div>
  )
}

export default Home

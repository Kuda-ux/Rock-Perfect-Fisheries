import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import FeedStages from './components/FeedStages'
import Process from './components/Process'
import Packages from './components/Packages'
import TilapiaSpotlight from './components/TilapiaSpotlight'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import VisionMission from './components/VisionMission'
import Training from './components/Training'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'
import CallFloatingButton from './components/CallFloatingButton'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <FeedStages />
        <Process />
        <Packages />
        <TilapiaSpotlight />
        <WhyChooseUs />
        <Gallery />
        <VisionMission />
        <Training />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
      <CallFloatingButton />
    </div>
  )
}

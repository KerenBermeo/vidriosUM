import Footer from './components/Footer.tsx'
import Navbar from './components/Navbar.tsx'
import Hero from './components/Hero.tsx'
import ServicesSection from './components/Services.tsx'
import MaintenanceSection from './components/Maintenance.tsx'
import ProjectGallery from './components/ProjectGallery.tsx'

function App() {


  return (
    <>
      <main>
        <Navbar/>
        <Hero/>
        <ServicesSection/>
        <MaintenanceSection/>
        <ProjectGallery/>
        <Footer/>
      </main>
    </>
  )
}

export default App

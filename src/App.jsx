import { useState } from 'react'
import './App.css'
import Galaxy from './components/Galaxy'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Links from './components/Links'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App relative min-h-screen overflow-hidden">
      {/* Galaxy Background - fixed and behind everything */}
      <div className="fixed inset-0 z-0 bg-black">
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          animationSpeed={1}
        />
      </div>
      
      {/* Content Container - above the background */}
      <div className="relative z-10">
        <Navbar />
        <Home />
        <About/>
        <Projects/>   
        <Skills/>
        <Education/>
        <Experience/>
        <Links/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
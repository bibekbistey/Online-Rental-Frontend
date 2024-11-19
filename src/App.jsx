import React from 'react'
import Homepage from './components/Homepage'
import NavBar from './components/NavBar'
import About from './components/About'
import Contact from './components/Contact'
import Project from './components/Project'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <section id="home">
      <Homepage></Homepage></section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="testimonials">
        <Testimonials/>
      </section>
      <section id="contact">
      <Contact></Contact>
        
      </section>
      <Footer></Footer>
      
    </div>
  )
}

export default App
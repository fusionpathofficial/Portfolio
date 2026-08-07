import React from 'react'
import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home'
import { Services } from './Components/Services'
import { Courses } from './Components/Courses'
import { About } from './Components/About'
import { Contact } from './Components/Contact'
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Courses />
      <About />
      <Contact />
    </>
  )
}

export default App
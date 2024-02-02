
import { useState } from 'react'
import './App.css'
import Abilities from './components/Abilities'
import AboutMe from './components/AboutMe'
import Contac from './components/Contac'
import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Proyects from './components/Proyects'
import Technologies from './components/Technologies'

function App() {

   const [formOpen, setFormOpen] = useState(false)


  return (
    <>
    <Navbar />
    <Header setFormOpen={setFormOpen} />
    <AboutMe />
    <Abilities />
    <Technologies />
    <Proyects />
    <Contac setFormOpen={setFormOpen}/>
    <Form formOpen={formOpen} setFormOpen={setFormOpen}/>
    <Footer />
    </>
  )
}

export default App

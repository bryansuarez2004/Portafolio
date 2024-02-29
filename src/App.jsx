
import { useState } from 'react'
import './App.css'
import Abilities from './components/Abilities'
import AboutMe from './components/AboutMe'
import Contac from './components/Contac'
import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Technologies from './components/Technologies'
import FormMain from './components/FormMain'
import Slider from './components/Slider'

function App() {

   const [formOpen, setFormOpen] = useState(false)


  return (
    <>
    <Navbar setFormOpen={setFormOpen}/>
    <Header setFormOpen={setFormOpen} />
    <AboutMe />
    <Slider/>
    <Technologies />
    <Abilities />
    
    <Contac setFormOpen={setFormOpen}/>
    <FormMain/>
    <Form formOpen={formOpen} setFormOpen={setFormOpen}/>
    <Footer />
    </>
  )
}

export default App

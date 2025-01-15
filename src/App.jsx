
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
import SliderProyects from './components/SliderProyects'

function App() {

   const [formOpen, setFormOpen] = useState(false)


  return (
    <>
    <Navbar setFormOpen={setFormOpen}/>
    <Header setFormOpen={setFormOpen} />
    <div className='relative top-[-130px] sm:top-[-200px]'>

    <AboutMe />
    </div>
    

    <SliderProyects />
    
   
    <Contac setFormOpen={setFormOpen}/>
    <Technologies />
    <Abilities />
    
    <FormMain/>
    <Form formOpen={formOpen} setFormOpen={setFormOpen}/>
    <Footer />
    </>
  )
}

export default App

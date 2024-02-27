import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

const Contac = ({setFormOpen}) => {

  const handleForm = ()=>{
    setFormOpen((state)=>!state)
  }

  return (
    <section id='contacts' className='flex flex-col items-center gap-4 py-5 dark:bg-purple-950'>
         <h2 className='text-3xl font-bold dark:text-white uppercase'>Contactame</h2>
         <p className='dark:text-white'>Estoy disponible a travéz de múltiples canales</p>
         <div className='flex flex-wrap justify-center gap-5 p-5 *:p-4 *:rounded-lg  *:flex *:items-center *:flex-col *:border-2 *:border-black *:w-[130px] *:h-[130px] *:gap-2 *:justify-center *:dark:border-white *:dark:text-white *:transition *:duration-500'>
         <button onClick={handleForm} className='button '>
         <CgMail className='text-4xl'/>
          correo
         </button>
         <a href='https://walink.co/0057de' target='_blank' className='block button'>
         <FaWhatsapp className='text-4xl' />
         Whatsapp
         </a>
         <a href='https://www.linkedin.com/in/bryan-alejandro-suarez-fernandez-980135266/' target='_blank' className='block button'>
         <FaLinkedin className='text-4xl' />
         Linkedin
         </a>
         <a href='https://github.com/bryansuarez2004' target='_blank' className=' block button '>
         <FaGithub className='text-4xl' />
          Github

         </a>
         </div>
         
    </section>
  )
}

export default Contac
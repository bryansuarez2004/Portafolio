import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='bg-emerald-200 p-5 flex flex-col justify-center items-center gap-6 sm:grid sm:grid-cols-3 sm:h-[230px] sm:place-items-center *:dark:text-white bgFooter'>
        <div className='flex flex-col items-center sm:col-start-2  '>
             <FaMapMarkerAlt />
             LIMA - Peru
        </div>
        <div className='flex gap-3 sm:col-start-3 '>
            <a href="https://www.linkedin.com/in/bryan-suarez-980135266/" target='blank' className=' w-[25px] cursor-pointer hover:text-blue-400'><FaLinkedin className='w-full h-full ' /></a>
            
            <a href="https://walink.co/0057de" target='blank' className=' w-[25px] hover:text-lime-500'><FaWhatsapp className='w-full h-full cursor-pointer'/></a>
            <a href="https://github.com/bryansuarez2004" target='blank' className=' w-[25px] hover:text-zinc-600'><FaGithub className='w-full h-full cursor-pointer'/></a>
        </div>
        <div className='sm:col-start-1 sm:row-start-1'>
            <h2 className='text-xl'>BRYAN SUAREZ</h2>
            <p>Desarrollador Front-end dedicado a aprender y aplicar tecnologías modernas para resolver problemas complejos.</p>
        </div>
    </section>
  )
}

export default Footer
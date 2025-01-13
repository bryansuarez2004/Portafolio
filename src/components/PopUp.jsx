import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

const PopUp = ({scrolled,setFormOpen}) => {
  const openForm = ()=>{
    setFormOpen((state)=>!state)
  }


  return (
    <>
         <div className={`${scrolled ? 'opacity-100 visible   ' : 'opacity-0 invisible '}    fixed z-40 right-[25px] top-[20vh] rounded-full transition-all duration-700`}>
        <div className=' grid columns-1 gap-3'>
          <a href='https://api.whatsapp.com/send?phone=51967311785&text=Hola%2C%20quisiera%20contactarme%20contigo...' target='_blank' className='block button'>
         <FaWhatsapp className='text-2xl' />
        
         </a>
         <a href='https://www.linkedin.com/in/bryan-alejandro-suarez-fernandez-980135266/' target='_blank' className='block button'>
         <FaLinkedin className='text-2xl' />
        
         </a>
         <a href='https://github.com/bryansuarez2004' target='_blank' className=' block button '>
         <FaGithub className='text-2xl' />
        

         </a>

         <button onClick={openForm} className='button popUp' >
         <CgMail className='text-2xl' />
           
         </button>
        </div>
         </div>
         

         
    </> 
  )
}

export default PopUp
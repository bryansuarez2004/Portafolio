import React from 'react'
import { FaReact } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoHtml5 } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";

const Technologies = () => {
  return (
    <section id='technologies' className='bg-emerald-200 p-6 bgTech'>
         <h2 className='text-3xl uppercase font-bold text-center mb-6 dark:text-white'> tecnologias</h2>
         <section className='flex flex-wrap justify-center gap-5 *:p-4 *:rounded-lg  *:flex *:items-center *:flex-col *:border-2 *:border-black *:w-[120px] *:h-[120px] *:gap-2 *:justify-center *:dark:border-white *:dark:text-white *:transition *:duration-500'>
            <div className='hover:bg-indigo-700 *:hover:scale-125 *:transition-all *:duration-500'>
            <FaReact className='text-5xl'/>
            REACT
            </div>
            <div className='hover:bg-sky-500  *:hover:scale-125 *:transition-all *:duration-500'>
            <FaCss3Alt className='text-5xl ' />
            CSS
            </div>
            <div className='hover:bg-orange-500  *:hover:scale-125 *:transition-all *:duration-500'>
            <IoLogoHtml5 className='text-5xl' />
            HTML
            </div>
            <div className='hover:bg-teal-400  *:hover:scale-125 *:transition-all *:duration-500'>
            <SiTailwindcss className='text-5xl' />
            TAILWIND
            </div>
            <div className='hover:bg-yellow-400  *:hover:scale-125 *:transition-all *:duration-500'>
            <IoLogoJavascript className='text-5xl' />
               JAVASCRIPT
            </div>
            <div className='hover:bg-orange-700  *:hover:scale-125 *:transition-all *:duration-500'>
            <FaGitAlt className='text-5xl'/>
                GIT
            </div>
         </section>
    </section>
  )
}

export default Technologies
import React from 'react'
import { FaReact } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoHtml5 } from "react-icons/io5";
import { SiExpress, SiNodedotjs, SiPostgresql, SiSequelize, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { BiLogoPostgresql } from 'react-icons/bi';

const Technologies = () => {
  return (
    <section id='technologies' className=' p-6 bgTech dark:bg-purple-950'>
         <h2 className='text-3xl uppercase font-bold text-center mb-6 dark:text-white'> tecnologias</h2>
         <section className='flex w-[80%] mx-auto  flex-wrap justify-center gap-5 *:h-[70px]  *:rounded-lg  *:flex *:items-center *:justify-start *:flex-col  *:border-black *:gap-1  *:dark:border-white *:dark:text-white *:transition *:duration-500'>
            <div className=' group *:transition-all *:duration-500'>
            <FaReact className='text-4xl group-hover:scale-[1.2] group-hover:text-blue-800'/>
            <span className='text-xs opacity-0 group-hover:opacity-100 transition-all duration-200'>React</span>
            </div>
            <div className=' group *:transition-all *:duration-500'>
            <FaCss3Alt className='text-4xl group-hover:scale-[1.2] group-hover:text-blue-700' />
            <span className='text-xs opacity-0 group-hover:opacity-100 transition-all duration-200'>Css</span>
            </div>
            <div className=' group *:transition-all *:duration-500'>
            <IoLogoHtml5 className='text-4xl group-hover:scale-[1.2] group-hover:text-orange-600' />
            <span className='text-xs opacity-0 group-hover:opacity-100 transition-all duration-200'>Html</span>
            </div>
            <div className=' group *:transition-all *:duration-500'>
            <SiTailwindcss className='text-4xl group-hover:scale-[1.2] group-hover:text-sky-600' />
            <span className='text-xs opacity-0 group-hover:opacity-100 transition-all duration-200'>Tailwind</span>
            </div>
            <div className=' group *:transition-all *:duration-500'>
            <IoLogoJavascript className='text-4xl group-hover:scale-[1.2] group-hover:text-yellow-500' />
            <span className='text-xs opacity-0 group-hover:opacity-100 transition-all duration-200'>Javascript</span>
            </div>
            <div className=' group *:transition-all *:duration-500'>
            <FaGitAlt className='text-4xl group-hover:scale-[1.2] group-hover:text-orange-600'/>
            <span className='text-xs opacity-0 group-hover:opacity-100 transition-all duration-200'>Git</span>
            </div>
            <div className=' group *:transition-all *:duration-500'>
            <BiLogoPostgresql className='text-4xl group-hover:scale-[1.2] group-hover:text-blue-950' />
            <span className='text-xs opacity-0 group-hover:opacity-100 transition-all duration-200'>Postgres</span>
            </div>
            <div className=' group *:transition-all *:duration-500'>
            <SiExpress className='text-4xl group-hover:scale-[1.2] group-hover:text-slate-400' />
            <span className='text-xs opacity-0 group-hover:opacity-100 transition-all duration-200'>Express</span>
            </div>
            <div className=' group *:transition-all *:duration-500'>
            <SiNodedotjs className='text-4xl group-hover:scale-[1.2] group-hover:text-green-700' />
            <span className='text-xs opacity-0 group-hover:opacity-100 transition-all duration-200'>Node</span>
            </div>
            <div className=' group *:transition-all *:duration-500'>
            <SiSequelize className='text-4xl group-hover:scale-[1.2] group-hover:text-blue-500' />
            <span className='text-xs opacity-0 group-hover:opacity-100 transition-all duration-300'>Sequelize</span>
            </div>
         </section>
    </section>
  )
}

export default Technologies
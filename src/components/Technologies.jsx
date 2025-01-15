import React from 'react'
import { FaReact } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoHtml5 } from "react-icons/io5";
import { SiExpress, SiMongodb, SiNodedotjs, SiPostgresql, SiReactquery, SiSequelize, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi';
import { TbBrandNextjs } from 'react-icons/tb';

const Technologies = () => {
  return (
    <div className=' p-11  flex items-center justify-center'>

    <section  className='relative p-6 py-10 bgTech dark:bg-purple-950'>
      <div id='technologies' className=' absolute sm:top-[-100px]'></div>
         <h2 className='text-4xl uppercase font-bold text-center mb-16 dark:text-white'> tecnologias</h2>
         <section className='flex w-[90%] mx-auto   flex-wrap justify-center gap-5 *:h-[70px]  sm:*:h-[100px] *:rounded-lg  *:flex  *:items-center *:justify-start *:flex-col  *:border-black *:gap-2  *:dark:border-white *:dark:text-white *:transition *:duration-500'>
            <div className=' '>
            <FaReact className='text-4xl hover:scale-[0.8] transition-all duration-100 sm:text-6xl shrink-0 text-blue-800'/>
            <span className='text-xs sm:text-base '>React</span>
            </div>
            <div className=''>
            <FaCss3Alt className='text-4xl hover:scale-[0.8] transition-all duration-100 sm:text-6xl shrink-0 text-blue-700' />
            <span className='text-xs sm:text-base opacity-100 '>Css</span>
            </div>
            <div className=' group *:transition-all *:duration-500'>
            <IoLogoHtml5 className='text-4xl hover:scale-[0.8] transition-all duration-100  sm:text-6xl shrink-0 scale-[1.2] text-orange-600' />
            <span className='text-xs sm:text-base opacity-100 '>Html</span>
            </div>
            <div className=' group *:transition-all *:duration-500'>
            <SiTailwindcss className='text-4xl hover:scale-[0.8] transition-all duration-100 sm:text-6xl shrink-0 scale-[1.2] text-sky-600' />
            <span className='text-xs sm:text-base opacity-100 '>Tailwind</span>
            </div>
            <div className=' group *:transition-all *:duration-500'>
            <IoLogoJavascript className='text-4xl hover:scale-[0.8] transition-all duration-100 sm:text-6xl shrink-0 scale-[1.2] text-yellow-500' />
            <span className='text-xs sm:text-base opacity-100 '>Javascript</span>
            </div>
            <div className=' group *:transition-all *:duration-500'>
            <FaGitAlt className='text-4xl hover:scale-[0.8] transition-all duration-100 sm:text-6xl shrink-0 scale-[1.2] text-orange-600'/>
            <span className='text-xs sm:text-base opacity-100 '>Git</span>
            </div>
            <div className=' group *:transition-all *:duration-500'>
            <BiLogoPostgresql className='text-4xl hover:scale-[0.8] transition-all duration-100 sm:text-6xl shrink-0 scale-[1.2] text-blue-950' />
            <span className='text-xs sm:text-base opacity-100 '>Postgres</span>
            </div>
            <div className=' group *:transition-all *:duration-500'>
            <SiExpress className='text-4xl hover:scale-[0.8] transition-all duration-100 sm:text-6xl shrink-0 scale-[1.2] text-slate-400' />
            <span className='text-xs sm:text-base  opacity-100 '>Express</span>
            </div>
            <div className=' group *:transition-all *:duration-500'>
            <SiNodedotjs className='text-4xl hover:scale-[0.8] transition-all duration-100 sm:text-6xl shrink-0 scale-[1.2] text-green-700' />
            <span className='text-xs sm:text-base opacity-100 '>Node</span>
            </div>
            <div className=' group *:transition-all *:duration-500'>
            <SiSequelize className='text-4xl hover:scale-[0.8] transition-all duration-100 sm:text-6xl shrink-0 scale-[1.2] text-blue-500' />
            <span className='text-xs sm:text-base opacity-100 transition-all duration-300'>Sequelize</span>
            </div>
            
            <div className=' group *:transition-all *:duration-500'>
            <SiReactquery className='text-4xl hover:scale-[0.8] transition-all duration-100 sm:text-6xl shrink-0 scale-[1.2] text-red-500' />
            <span className='text-xs sm:text-base opacity-100 transition-all duration-300'>React Query</span>
            </div>

            <div className=' group *:transition-all *:duration-500'>
            <BiLogoTypescript  className='text-4xl hover:scale-[0.8] transition-all duration-100 sm:text-6xl shrink-0 scale-[1.2] text-blue-500' />
            <span className='text-xs sm:text-base opacity-100 transition-all duration-300'>Typescript</span>
            </div>

            <div className=' group *:transition-all *:duration-500'>
            <TbBrandNextjs  className='text-4xl hover:scale-[0.8] transition-all duration-100 sm:text-6xl shrink-0 scale-[1.2] text-zinc-500' />
            <span className='text-xs sm:text-base opacity-100 transition-all duration-300'>Next Js</span>
            </div>

            <div className=' group *:transition-all *:duration-500'>
            <SiMongodb   className='text-4xl hover:scale-[0.8] transition-all duration-100 sm:text-6xl shrink-0 scale-[1.2] text-green-600' />
            <span className='text-xs sm:text-base  opacity-100 transition-all duration-300'>Mong DB</span>
            </div>
         </section>
    </section>
    </div>
  )
}

export default Technologies
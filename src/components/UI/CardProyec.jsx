import React from 'react'

const CardProyec = ({proyecto}) => {
const {img,title,description,linkProyec} = proyecto

  return (
    <section className="flex flex-col w-[320px] border-4 border-black items-center justify-center gap-2 p-5 rounded-2xl hover:scale-105 transition-all duration-500 dark:border-white dark:text-white">
          <div className="w-[270px] h-[200px] rounded-md  overflow-hidden border-2 border-black dark:border-white ">
            <img src={img} className="object-center object-cover w-full h-full hover:scale-125  transition-all duration-500 " alt="" />
          </div>
          <h2>{title}</h2>
          <p>{description}</p>
          <a href={linkProyec} target='_blank' className="button">ver proyecto</a>
        </section>
  )
}

export default CardProyec
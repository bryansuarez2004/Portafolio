import React, { useState } from "react";
import CardProyec from "./UI/CardProyec";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Slider = () => {
    const [index, setIndex] = useState(1)
     
const handleRight =()=>{
    if(index ===6){
      setIndex(1)

    }else{
      setIndex(index + 1)

    }
        
}

const handleLeft=()=>{
  if(index ===1){
    setIndex(6)

  }else{
    setIndex(index - 1)

  }
}

const position = {
  1:'translate-x-[0%]',
  2:'translate-x-[-100%]',
  3:'translate-x-[-200%]',
  4:'translate-x-[-300%]',
  5:'translate-x-[-400%]',
  6:'translate-x-[-500%]',
}

    const proyect1 = {
      title:'Music App',
      img:"/music.app.jpg",
      description:'Proyecto FullStack donde podrás escuchar la música que desees y tendrás la posibilidad de crearte una cuenta para darle like a canciones y crear una playlist para compartirla con tus amigos',
      linkProyec:'https://music-party-app.vercel.app'
   }
   const proyect2 = {
    title:'Countries Api',
    img:"/CountrysApi.jpeg",
    description:'Una pagina para buscar paises y ver la informacion de cada pais',
    linkProyec:'https://countries-api-one-tawny.vercel.app/'
 }
 const proyect3 = {
  title:'rick and morty api',
  img:"/rickAndMortyApi.jpeg",
  description:'En este proyecto implementamos un buscador y consumimos una api con axios ',
  linkProyec:'https://rick-and-morty-api-delta-cyan.vercel.app/'
 }
 const proyect4 = {
  title:'poke api',
  img:"/pokeapi.jpeg",
  description:'Este es un proyecto hecho con react, usando el manejo de estado global, rutas e incluyendo paginacion',
  linkProyec:'https://entregable5-rho.vercel.app/'
 }
 const proyect5 = {
  title:'Weather app',
   img:"/weatherApp.jpeg",
   description:'Una app del clima que te indica la temperatura de tu ubicación actual',
   linkProyec:'https://entregable2-1.vercel.app/'
 }
 const proyect6 = {
  title:'randoms message galaxy',
  img:"/galaxyApp.jpeg",
  description:'Una app que te da mensajes aleatorios',
  linkProyec:'https://entregable1-eight.vercel.app/'
 }
 


  return (
    <div id="proyectos" className="flex justify-center flex-col items-center gap-3 my-8">
      <h2 className="text-3xl font-bold dark:text-white uppercase">Mis Proyectos</h2>
      <div className="  relative  w-[350px] h-[500px] overflow-hidden pt-5">
        <button onClick={handleLeft} className="absolute left-0 top-[50%] p-3 rounded-full bg-slate-400 z-10"><FaArrowLeft /></button>
        <div className={`w-full ${position[index]} flex  *:shrink-0 transition-all duration-500`}>
          <div className="  w-full h-full p-1 flex justify-center items-center"><CardProyec proyecto={proyect1}/></div>
          <div className="  w-full h-full p-1 flex justify-center items-center"><CardProyec proyecto={proyect2}/></div>
          <div className="  w-full h-full p-1 flex justify-center items-center"><CardProyec proyecto={proyect3}/></div>
          <div className="  w-full h-full p-1 flex justify-center items-center"><CardProyec proyecto={proyect4}/></div>
          <div className="  w-full h-full p-1 flex justify-center items-center"><CardProyec proyecto={proyect5}/></div>
          <div className="  w-full h-full p-1 flex justify-center items-center"><CardProyec proyecto={proyect6}/></div>
          
        </div>
        <button onClick={handleRight} className="absolute right-0 top-[50%] p-3 rounded-full bg-slate-400"><FaArrowRight /></button>
      </div>
    </div>
  );
};

export default Slider;

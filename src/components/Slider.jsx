import React, { useState } from "react";
import CardProyec from "./UI/CardProyec";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

let index = 0
const Slider = () => {
    const [translate, setTranslate] = useState(`translate-x-[-0%]`)
     
console.log(index);
const handleRight =()=>{

    (index < 4) ? index +=1 : index = 0
    setTranslate(`translate-x-[-${index}00%]`)
        
}

const handleLeft=()=>{
    (index > 0 ) ? index -= 1 : index = 4
    setTranslate(`translate-x-[-${index}00%]`)
}

    const proyect1 = {
        title:'poke api',
        img:"/pokeapi.jpeg",
        description:'Este es un proyecto hecho con react, usando el manejo de estado global, rutas e incluyendo paginacion',
        linkProyec:'https://entregable5-rho.vercel.app/'
   }
   const proyect2 = {
     title:'rick and morty api',
     img:"/rickAndMorty.jpeg",
     description:'En este proyecto implementamos un buscador y consumimos una api con axios ',
     linkProyec:'https://entregable3-wine.vercel.app/'
 }
 const proyect3 = {
   title:'randoms message galaxy',
   img:"/galaxyApp.jpeg",
   description:'Una app que te da mensajes aleatorios',
   linkProyec:'https://entregable1-eight.vercel.app/'
 }
 const proyect4 = {
   title:'E-comerce js',
   img:"/Ecommercejs.jpeg",
   description:'Este es un E-commerce hecho con JS vanilla ',
   linkProyec:'https://proyecto1ecommerce.vercel.app/'
 }
 const proyect5 = {
   title:'Weather app',
   img:"/weatherApp.jpeg",
   description:'Una app del clima que te indica la temperatura de tu ubicación actual',
   linkProyec:'https://entregable2-1.vercel.app/'
 }


  return (
    <div className="flex justify-center flex-col items-center gap-3 my-8">
      <h2 className="text-3xl font-bold dark:text-white uppercase">Mis Proyectos</h2>
      <div className="  relative  w-[350px]  ">
        <button onClick={handleLeft} className="absolute left-0 top-[50%] p-3 rounded-full bg-slate-400 z-10"><FaArrowLeft /></button>
        <div className={`w-full ${translate} flex h-full *:shrink-0 transition-all duration-500 `}>
          <div className="  w-full h-full p-1 flex justify-center items-center"><CardProyec proyecto={proyect1}/></div>
          <div className="  w-full h-full p-1 flex justify-center items-center"><CardProyec proyecto={proyect2}/></div>
          <div className="  w-full h-full p-1 flex justify-center items-center"><CardProyec proyecto={proyect3}/></div>
          <div className="  w-full h-full p-1 flex justify-center items-center"><CardProyec proyecto={proyect4}/></div>
          <div className="  w-full h-full p-1 flex justify-center items-center"><CardProyec proyecto={proyect5}/></div>
        </div>
        <button onClick={handleRight} className="absolute right-0 top-[50%] p-3 rounded-full bg-slate-400"><FaArrowRight /></button>
      </div>
    </div>
  );
};

export default Slider;

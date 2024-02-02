import React from "react";
import CardProyec from "./UI/CardProyec";

const Proyects = () => {

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
    <div id="proyectos" className="flex flex-col items-center p-5 bgProyectos gap-7">
      <h2 className="text-3xl font-bold dark:text-white uppercase">Mis proyectos</h2>
      <div className="flex flex-wrap max-w-[1100px] gap-6 justify-center">
        
        <CardProyec proyecto={proyect1}/>
        <CardProyec proyecto={proyect2}/>
        <CardProyec proyecto={proyect3}/>
        <CardProyec proyecto={proyect4}/>
        <CardProyec proyecto={proyect5}/>
        
      </div>
    </div>
  );
};

export default Proyects;

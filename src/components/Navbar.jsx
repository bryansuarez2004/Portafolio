import React, { useEffect, useState } from "react";
import PopUp from "./PopUp";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [modeModalNav, setmodeModalNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const handleModal = () => {
    setmodeModalNav(!modeModalNav);
  };
  


  

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Agregar evento de desplazamiento al montar el componente
    window.addEventListener('scroll', handleScroll);

    // Eliminar el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleDarkMode = () =>{
    document.documentElement.classList.toggle('dark')
  }


  return (
    <>
      <div  className={` ${scrolled ? 'h-[75px] bg-white border-b-2 border-black bg-opacity-80 dark:bg-purple-950 dark:bg-opacity-90 dark:border-white' : 'h-[60px] bg-emerald-300 dark:bg-purple-800 bg-opacity-20 dark:bg-opacity-20 border-b-2 border-transparent'} w-full fixed z-20   p-4 flex  justify-between transition-all duration-300 items-center modeD `}>
        <label className="relative inline-flex items-center cursor-pointer" >
          <input onChange={handleDarkMode} type="checkbox" className="sr-only peer" />

          <div className="w-14 h-7 bg-black peer-focus:outline-none   rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-emerald-500  after:rounded-full after:h-6 after:w-6 after:transition-all dark:border--600 peer-checked:bg-white"></div>
        </label>
        <button onClick={handleModal} className="sm:hidden">
        <IoMenu className="text-3xl"/>
        </button>
        <div onClick={handleModal} className={`${modeModalNav ? "modeModal" : "modeNoModal"} bg-emerald-400 flex justify-center items-center dark:bg-purple-950 `}>
          <button onClick={handleModal} className="sm:hidden absolute top-4 right-4">
          <IoMenu className="text-3xl dark:text-white"/>
          </button>
          
          <div className="flex flex-col gap-6 *:text-2xl *:font-bold dark:*:text-white">
          <a href="#inicio" >INICIO</a>
          <a href="#about">SOBRE MI</a>
          <a href="#proyectos">PROYECTOS</a>
         <a href="#technologies">TECNOLOGIAS</a>
          <a href="#contacts">CONTACTOS</a>
          </div>
        </div>
        <div className="hidden gap-4 sm:flex dark:*:text-white">
          <a href="#inicio" className="border-b-2 border-transparent hover:border-black transition-all duration-500 dark:hover:border-white">INICIO</a>
          <a href="#about" className="border-b-2 border-transparent hover:border-black transition-all duration-500 dark:hover:border-white">SOBRE MI</a>
          <a href="#proyectos" className="border-b-2 border-transparent hover:border-black transition-all duration-500 dark:hover:border-white">PROYECTOS</a>
         <a href="#technologies" className="border-b-2 border-transparent hover:border-black transition-all duration-500 dark:hover:border-white">TECNOLOGIAS</a>
          <a href="#contacts" className="border-b-2 border-transparent hover:border-black transition-all duration-500 dark:hover:border-white">CONTACTOS</a>
        </div>
        
      </div>

      <PopUp scrolled={scrolled}/>
    </>
  );
};

export default Navbar;

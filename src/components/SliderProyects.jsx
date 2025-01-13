import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import proyects from "../proyects.json";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const SliderProyects = () => {
  const [emblaRef,emblaApi] = useEmblaCarousel();

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  return (
    <>
    <div className="embla  mx-auto max-w-[90%]" ref={emblaRef}>
      <div className="embla__container min-h-[500px] md:min-h-[400px] ">
        {proyects.map((proyect) => {
            return (
                <div key={proyect.title} className="embla__slide relative  p-10 flex justify-center items-center  ">
                 <div
                style={{
                    content: "",
                    position: "absolute",
                    top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(${proyect.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",

                  opacity: 0.7,
                  zIndex: 0,
                }}
              ></div>
              <div className="flex cursor-grabbing z-20 md:relative w-[90%] h-[90%] rounded-lg md:flex-row gap-5  flex-col p-5 bg-teal-50 dark:bg-purple-100">
               
                <div
                  style={{
                    backgroundImage: `url(${proyect.img})`,
                    backgroundSize: "cover",
                  }}
                  className="  aspect-[3/2]  w-[100%] mx-auto md:w-[350px]  "
                ></div>
                
                <div className="flex md:gap-3 flex-col ">

                <div className="font-bold text-2xl md:text-4xl">{proyect.title}</div>
                <div className=" ">{proyect.description}</div>
                <a href={`${proyect.linkProyec}`}
                  type="submit"
                  target="_blank"
                  className="flex md:absolute md:right-9 md:bottom-5 mt-2   justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                  >
                  VER PROYECTO
                  <svg
                    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-gray-800 group-hover:fill-gray-800"
                      ></path>
                  </svg>
                </a>
                      </div>
                      
              </div>

             
            </div>
          );
        })}

       
      </div>
    </div>
    <div className=" p-2 flex justify-center mb-5">
        <div className="flex gap-4">

    <button onClick={scrollPrev} className="p-5 py-1 rounded-xl dark:bg-purple-300 bg-green-300 hover:bg-slate-100 transition-all duration-200"> 
    <FaArrowLeft className="text-2xl" />
    </button>
    <button onClick={scrollNext} className="p-5 py-1 rounded-xl dark:bg-purple-300 bg-green-300 hover:bg-slate-100 transition-all duration-200"> 
    <FaArrowRight className="text-2xl" />
    </button>
        </div>
    </div>
        </>
  );
};

export default SliderProyects;

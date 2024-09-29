import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

const NavBar = ({ style }) => {

  const squigglyPath = `
  M 10 80
  C 30 60, 50 100, 70 80
  S 90 60, 110 80
  S 130 100, 150 80
  S 170 60, 190 80
  S 210 100, 230 80
  S 250 60, 270 80
  S 290 100, 310 80
  S 330 60, 350 80
  S 370 100, 390 80
  S 410 60, 430 80
  S 450 100, 470 80
  S 490 60, 510 80
`;

  const [isHovered, setIsHovered] = useState('');
  const navBar = ['Portfolio','About','Contact','CV' ];
  const text = "Jason Wade Phelps";


  return (
    <div className='z-20 w-screen bg-white absolute flex h-24 gap-16 items-center '>

        
    <div className ='flex flex-col place-content-start gap-0'
    >

<div className='ml-10 text-lg flex flex-col justify-center items-start'> {/* Reduced margin */}
  <div  style={{ fontWeight: 900 }} className='font-termina leading-none'> {/* Added tight line height */}
    JASON <br /> PHELPS
  </div>
</div>


    </div>


    <div className="flex font-Moret tracking-widest text-xs gap-10">
     
        {navBar.map((item) => (
                    <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  >
          <div key={item} className="flex font-medium hover:opacity-50 flex-col items-center cursor-pointer"
          onMouseEnter={() => setIsHovered(item)} // Set hover state to true
          onMouseLeave={() => setIsHovered('')} // Set hover state to false
          >

              {item}
            


<div 
className="absolute ml-12 h-5 mt-2 w-fit overflow-hidden "

>

<svg
      viewBox="0 0 500 100"
      width="50%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"

    >
    
      <motion.path
        className = {item===style || item===isHovered?'opacity-100':'opacity-0'}
        d={squigglyPath}
        fill="transparent"
        stroke={isHovered===item?"#3498db":"black"}
        strokeWidth="4"
        initial={{ pathLength: 1, pathOffset: 0 }}  // Start fully drawn but offset
        animate={{
          pathLength: isHovered===item ? 0 : 1, // Stay full length when hovered
          pathOffset: isHovered===item ? 1 : 0,  // Offset to start position when not hovered
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: isHovered ===item? Infinity:0,
          repeatType: "reverse",
        }}
        
      />
    </svg>
</div>
    </div>
    </Link>
        ))}


      </div>


    </div>
  );
};

export default NavBar;

import React, {useState,useEffect,useRef} from 'react'
import { motion } from "framer-motion"


const OneSlide = ({images,carouselIndex,handleClickNext,handleClickPrevious}) =>{
       



const exampleText = {name: 'Cool Painting', dimensions: '12x17', description: 'hello this is an amazing piece of art that I love.', price: '$800.00 USD'
}
    return(


<div className = 'relative'>

<motion.div


        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
        exit={{ opacity: 0 }}


  >
<div
style={{ height: '80vh', width: '60vw' }}
className='mt-10 rounded-lg bg-jet flex items-center justify-center flex-col border-white border-2 group'
>


<motion.img
                    src={images[carouselIndex%11]}
                    className="rounded-lg z-25 object-contain w-full h-full"
                    whileHover={
                     { opacity: 0.15 }
                     
                    }
                     >
</motion.img>

<div className='absolute inset-0 flex items-center w-full h-full object-contain flex-col justify-center text-white text-opacity-0 group-hover:text-opacity-100 pointer-events-none'>
    <p>{exampleText.name} </p> <br/>
    <p>{exampleText.description}</p><br/>
    <p>
    {exampleText.dimensions} - {exampleText.price}
    </p>
  </div>

</div>
</motion.div>


<div
className='absolute opacity-50 z-25 w-12 h-12 hover:opacity-25 bg-gray-500 flex items-center justify-center rounded-full cursor-pointer'
style={{ top: '50%', right: '-55px',transform: 'translateY(-50%)' }}
onClick={handleClickNext}
>
<span className="text-black font-bold">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
</span>
</div>


<div
className='absolute opacity-50 hover:opacity-25 z-25 w-12 h-12 bg-gray-500 flex items-center justify-center rounded-full cursor-pointer'
style={{ top: '50%',left:'-55px', transform: 'translateY(-50%)' }}
onClick={handleClickPrevious}
>
<span className="text-black font-bold">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
</span>
</div>

        </div>

    )
}; export default OneSlide;

import React, {useState,useEffect,useRef} from 'react'
import { motion } from "framer-motion"



const ThreeSlides = ({carouselarray,handleClickForThree}) =>{

    const exampleText = {name: 'Cool Painting', dimensions: '12x17', description: 'hello this is an amazing piece of art that I love.', price: '$800.00 USD'
}


    return(

        <>
        {carouselarray.map((imgSrc, index) => 
        { let appearance = (index ===0 || index===2)? 
        'mt-36 mr-20 rounded-lg bg-black flex items-center justify-center ':
        'mt-10 mr-20 rounded-lg bg-jet flex items-center justify-center'

    
        


          return(
            <>
                <div className = 'flex items-center justify-center' key={index}>
                {(index ===1)?
                

                    (  <motion.div
                        initial={{ opacity: 0 }}
                        animate={
                        index === 0 || index === 2
                            ? { opacity: 0.4, transition: { duration: 2 } }
                            : { opacity: 1, transition: { duration: 2 } }
                        }
                        exit={{ opacity: 0 }}
    
                        onClick={() => handleClickForThree(index)}
                    
                    style={{ height: '70vh', width: '40vw' }}
                    className = 'ml-20 mr-20 rounded-lg bg-jet flex items-center justify-center border-white border-2 group'>
                        <motion.img
                        src={imgSrc}
                        alt={`Slide ${index + 1}`}
                        className="rounded-lg object-contain w-full h-full"
                        whileHover={
                             { opacity: 0.15 }
                        }
                        whileTap={ null}
                        />

                    <div className='absolute flex items-center z-25 group w-full h-full object-contain flex-col justify-center text-white text-opacity-0 group-hover:text-opacity-100 pointer-events-none'>
                        <p>{exampleText.name} </p> <br/>
                        <p>{exampleText.description}</p><br/>
                        <p>
                        {exampleText.dimensions} - {exampleText.price}
                        </p>
                    </div>


                    </motion.div> 
                
                
                ):


                
                (
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4, transition: { duration: 2 } }}
                    whileHover={
                        { scale: 1.05, opacity: .8 } 
                    }
                    exit={{ opacity: 0 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleClickForThree(index)}
                
                style={{ height: '30vh', width: '15vw' }}
                className = 'cursor-pointer rounded-lg bg-jet flex items-center justify-center border-white border-2'>

                <motion.img
                src={imgSrc}
                alt={`Slide ${index + 1}`}
                className="rounded-lg object-contain w-full h-full"
                />

                <div className='absolute inset-0 flex items-center w-full h-full object-contain flex-col justify-center text-white text-opacity-0 group-hover:text-opacity-100 pointer-events-none'>
                <p>{exampleText.name} </p> <br/>
                <p>{exampleText.description}</p><br/>
                <p>
                {exampleText.dimensions} - {exampleText.price}
                </p>
                </div>


           </motion.div> )}



        
           </div>
        
            </>

          )
})}


        </>
      

    )


}; export default ThreeSlides;


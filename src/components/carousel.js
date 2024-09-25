import React, {useState,useEffect,useRef} from 'react'
import { motion } from "framer-motion"
import 'react-multi-carousel/lib/styles.css';

import image1 from './artPicturesSmall/FF214426-E197-4400-A8C5-15F3704B6579.jpeg'
import image2 from './artPicturesSmall/IMG_0158.jpeg'
import image3 from './artPicturesSmall/IMG_2271.jpeg'
import image4 from './artPicturesSmall/IMG_2463.jpeg'
import image5 from './artPicturesSmall/IMG_2495.jpeg'
import image6 from './artPicturesSmall/IMG_5958.jpeg'
import image7 from './artPicturesSmall/IMG_5977.jpeg'
import image8 from './artPicturesSmall/IMG_8779.jpeg'
import image9 from './artPicturesSmall/IMG_8848.jpeg'
import image10 from './artPicturesSmall/IMG_8981.jpeg'
import image11 from './artPicturesSmall/IMG_8984.jpeg'


const ArtCarousel = React.memo(({carouselID,closeTrigger}) =>{
    const [carouselarray,setCarouselArray] = useState([])
    const [carouselIndex,setCarouselIndex] = useState(0)

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });


    const images = [
        image1, image2, image3, image4, image5, 
        image6, image7, image8, image9, image10, 
        image11
    ];

    const dealWithNegatives = (index) =>{

//-1 -> 1 -> 11-1

    }


    useEffect(() => {
        let tmparray = []
        const length = images.length

        tmparray.push(images[carouselID===0?10:(carouselID-1)%length])
        tmparray.push(images[(carouselID%length)])
        tmparray.push(images[(carouselID+1)%length])
        setCarouselArray(tmparray)
        setCarouselIndex(carouselID)
        
      }, [carouselID]);


      useEffect(() => {
        const length = images.length
        if(carouselIndex!==null){
        let tmparray = []
            tmparray.push(images[carouselIndex===0?10:(carouselIndex-1)%length])
            tmparray.push(images[(carouselIndex%length)])
            tmparray.push(images[(carouselIndex+1)%length])
            setCarouselArray(tmparray)
        }
      }, [carouselIndex]);



      const handleClickNext = () =>{
            
            setCarouselIndex(carouselIndex+1)
        
    
      }

//  -1 0 1  -1>11, or 11->1 12->2 13->3
      const handleClickPrevious = () =>{
            if(carouselIndex===0){
                setCarouselIndex(10) 
            }
            else{
            setCarouselIndex(carouselIndex-1)
            }
      }

      const handleClickForThree = (index) =>{

        if(index===0){
            handleClickPrevious()
        }
        if(index===2){
            handleClickNext()
        }

      }

      const calculateColumns = () =>{
        if(windowSize.width>1200){
            return 3
        }
        else{
            return 1
        }

    }

    useEffect(() => {
        const handleResize = () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
    
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    
    const OneSlide = () =>{
       
        return(


 <div className = 'relative'>

<motion.div
  

            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2 } }}
            exit={{ opacity: 0 }}
    
    
      >
<div
  style={{ height: '80vh', width: '60vw' }}
  className='mt-10 rounded-lg bg-jet flex items-center justify-center'
>


<motion.img
                        src={images[carouselIndex%11]}
                        className="rounded-lg object-contain w-full h-full border-white border-2"
                        whileHover={
                         { opacity: 0.5 }
                        }
                        />

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
    }




    const ThreeSlides = () =>{

        return(

            <>
            {carouselarray.map((imgSrc, index) => 
            { let appearance = (index ===0 || index===2)? 
            'mt-36 mr-20 rounded-lg bg-black flex items-center justify-center ':
            'mt-10 mr-20 rounded-lg bg-jet flex items-center justify-center'
  
            let inlineStyle = (index ===0 || index===2)? 
            { height: '40vh', width: '15vw', cursor: 'pointer'}:
            { height: '80vh', width: '40vw' }
            

  
              return(
                <>

                    <div key={index}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={
                        index === 0 || index === 2
                            ? { opacity: 0.4, transition: { duration: 2 } }
                            : { opacity: 1, transition: { duration: 2 } }
                        }
                        exit={{ opacity: 0 }}
                        style={inlineStyle}
                        className={appearance}
                        onClick={() => handleClickForThree(index)}
                    >
                        <motion.img
                        src={imgSrc}
                        alt={`Slide ${index + 1}`}
                        className="rounded-lg object-contain w-full h-full border-white border-2"
                        whileHover={
                            index === 0 || index === 2 ? { scale: 1.05, opacity: .8 } : { opacity: 0.5 }
                        }
                        whileTap={index === 0 || index === 2 ? { scale: 0.95 } : null}
                        />
                    </motion.div>
                    </div>
                
                </>

              )
  })}

  
            </>
          

        )


    }


    const CloseButton = () =>{


      return(
        <div  className ='right-5 absolute hover:opacity-25 z-25 w-10 h-10 bg-gray-500 flex items-center justify-center opacity-35 rounded-full cursor-pointer' onClick = {closeTrigger}>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

        </div>
      )

    }




      return (
        <div className='h-screen overflow-scroll flex justify-center bg-black relative'> {/* Added 'relative' */}
        {calculateColumns()===3?
        
        <ThreeSlides/>
    :<OneSlide/>
    }

    <div className = 'absolute top-5 right-5'>
      <CloseButton/>
    </div>
    </div>

      );
      

}); export default ArtCarousel



         

    
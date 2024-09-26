import React, {useState,useEffect,useRef} from 'react'
import ThreeSlides from './threeSlides'
import OneSlide from './OneSlide'
import { motion } from "framer-motion"
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
        if(windowSize.width>1000){
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
        
        <ThreeSlides carouselarray = {carouselarray} handleClickForThree = {handleClickForThree}/>
    :<OneSlide images = {images} carouselIndex = {carouselIndex} handleClickNext = {handleClickNext} handleClickPrevious = {handleClickPrevious}/>
    }

    <div className = 'absolute top-5 right-5'>
      <CloseButton/>
    </div>
    </div>

      );
      

}); export default ArtCarousel



         

    
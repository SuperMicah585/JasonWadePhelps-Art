import React, {useState,useEffect,useRef} from 'react'
import NavBar from './navbar';
import Carousel from "./carousel"
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
//import image12 from './artPictures/IMG_8985.jpg'

const Portfolio = () =>{
    const [carouselID,setCarouselID] = useState(0)
    const [carouselTrigger,setCarouselTrigger] = useState(0)
    const [showCarousel,setShowCarousel] = useState(false)


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


        useEffect(() => {
            if(carouselTrigger>0){
                setShowCarousel(true)
            }
          }, [carouselTrigger]);


        const calculateColumns = () =>{
        
            if(windowSize.width>1200){
                console.log(windowSize,"hi")
                return 4
            }

            else if(windowSize.width>900){
                return 3
            }
            else if(windowSize.width>600){
                return 2
            }
            else {
                return 1
            }


        }





          const onClick = (id) =>{
            setCarouselID(id)
            setCarouselTrigger(carouselTrigger+1)
            console.log(id)
          }


        const closeTrigger = () =>{

            setShowCarousel(false)
        }

    /*

<Carousel ref={carouselRef} responsive={responsive} className="mt-10">
            {images.map((imgSrc, index) => (
                <div key={index} className="carousel-slide">
                    <img
                        src={imgSrc}
                        alt={`Artwork ${index + 1}`}
                        className="object-cover w-full h-full cursor-pointer"
                    />
                </div>
            ))}
        </Carousel>
    */
 
return(
    //https://www.embla-carousel.com/examples/predefined/

    (
        <>
            {showCarousel ? (
                <Carousel carouselID = {carouselID} closeTrigger ={closeTrigger} />): (
                <div className='h-screen overflow-scroll bg-black flex'>
                    <div className='absolute top-0'>
                        <NavBar />
                    </div>

                    <div className='ml-32 h-content mt-20'>
                        <div className='ml-32 font-redhat text-3xl text-slate-200'>
                            PORTFOLIO
                        </div>
                        <div className={`h-content mt-20 grid gap-2 ml-32 mr-5 ${
                            calculateColumns() === 4 ? 'grid-cols-4' :
                            calculateColumns() === 3 ? 'grid-cols-3' :
                            calculateColumns() === 2 ? 'grid-cols-2' :
                            'grid-cols-1'
                        }`}>
                            {images.map((imgSrc, index) => (
                                <img
                                    key={index}
                                    src={imgSrc}
                                    alt={`Artwork ${index + 1}`}
                                    className='object-cover w-full h-full cursor-pointer hover:opacity-50'
                                    onClick={() => onClick(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    

)

)

}; export default Portfolio; 
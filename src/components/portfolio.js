import React, {useState,useEffect,useRef} from 'react'
import NavBar from './navbar';
import Carousel from "./carousel"
import 'react-multi-carousel/lib/styles.css';
import image1 from './artPictures/FF214426-E197-4400-A8C5-15F3704B6579.jpg'
import image2 from './artPictures/IMG_0158.jpg'
import image3 from './artPictures/IMG_2271.jpg'
import image4 from './artPictures/IMG_2463.jpg'
import image5 from './artPictures/IMG_2495.jpg'
import image6 from './artPictures/IMG_5958.jpg'
import image7 from './artPictures/IMG_5977.jpg'
import image8 from './artPictures/IMG_8779.jpg'
import image9 from './artPictures/IMG_8848.jpg'
import image10 from './artPictures/IMG_8981.jpg'
import image11 from './artPictures/IMG_8984.jpg'
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
                <Carousel carouselID = {carouselID} carouselTrigger ={carouselTrigger} />): (
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
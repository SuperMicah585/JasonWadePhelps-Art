import { motion } from "framer-motion"
import React,{useState,useEffect} from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Art from '../pages/art'
import { Link } from 'react-router-dom';
import Navbar from '../navbar'
import image11 from '../artPicturesSmall/FF214426-E197-4400-A8C5-15F3704B6579.jpeg'
import image6 from '../artPicturesSmall/IMG_5958.jpeg'
import image3 from '../artPicturesSmall/IMG_2271.jpeg'
import image4 from '../artPicturesSmall/IMG_2463.jpeg'
import image5 from '../artPicturesSmall/IMG_2495.jpeg'
import image7 from '../artPicturesSmall/IMG_0158.jpeg'
import image2 from '../artPicturesSmall/IMG_5977.jpeg'
import image8 from '../artPicturesSmall/IMG_8779.jpeg'
import image9 from '../artPicturesSmall/IMG_8848.jpeg'
import image10 from '../artPicturesSmall/IMG_8981.jpeg'
import image1 from '../artPicturesSmall/IMG_8984.jpeg'

const Home =()=>{

    const [showArt,setShowArt] = useState(false)
    const [artPic,setartPic] = useState('')

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });

    
    
    const images = [
        image1, image6, image11, image8, image5, 
        image7, image3, image4, image9, image10, 
        image2
    ];


    const closeTrigger = () =>{

      setShowArt(false)
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


return (
  <div className="h-screen w-screen bg-white overflow-scroll">
 




<Navbar style = {'Portfolio'}/>
<motion.div 
        transition={{
          duration: 1, // Duration of the hover animation
          ease: 'easeInOut' // Easing function for a smoother transition
      }}
className="mt-20 ml-10 mr-10 mb-20">
<ResponsiveMasonry

                columnsCountBreakPoints={{600: 1,900:2, 1200: 3, 1400: 3}}
            >
                <Masonry gutter = '5px'>
    {images.map((imgSrc, index) => (
    <Link
    key={index}
    to={`/portfolio/${index}`}
    state={{ artPic: imgSrc}}
  >
    
              
    <motion.div 
    initial={{ opacity: 0 }}
    animate={ { opacity: 1, transition: { duration: 2 } }
    }
    exit={{ opacity: 0 }}
 className=" border-white border-2 relative object-contain flex items-center justify-center group overflow-hidden cursor-pointer"> {/* Container for each image */}
      <motion.img
            whileHover={
            { 
            filter: 'blur(2px)',
            scale: 1.1,
            opacity:.5,
            
        }
        }
        
        transition={{
            duration: 1, // Duration of the hover animation
            ease: 'easeInOut' // Easing function for a smoother transition
        }}

        src={imgSrc}
        alt={`Artwork ${index + 1}`}
        className="object-contain w-full h-full" // Ensures image fills the cell
      />

      <div className ='absolute flex justify-center items-center group 
      text-black text-opacity-0 group-hover:text-opacity-100 pointer-events-none'>
        <div className ='font-termina text-6xl font-black'>
                    COOL NAME
        </div>

      </div>
      </motion.div> 
      </Link>
  ))}
                </Masonry>
            </ResponsiveMasonry>
            </motion.div>

            
          
        

        </div>

);
  
}; export default Home; 




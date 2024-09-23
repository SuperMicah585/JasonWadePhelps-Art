import React, {useState,useEffect,useRef} from 'react'
import NavBar from './navbar';
import Carousel from "react-multi-carousel";
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

const ArtCarousel = ({carouselID,carouselTrigger}) =>{
    const [showCarousel,setShowCarousel] = useState('false')
    const carouselRef = useRef();


    const images = [
        image1, image2, image3, image4, image5, 
        image6, image7, image8, image9, image10, 
        image11
    ];


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1550, min: 1180 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1180, min: 780 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 780, min: 0 },
          items: 1
        }
      };
      const goToSlide = (index) => {
        if (carouselRef.current) {
            carouselRef.current.goToSlide(index);
        }
    };



      useEffect(() => {
        // Show carousel after the component mounts
        setShowCarousel(true);
    }, []);
return(

<div className='h-screen overflow-scroll bg-smoke-gray'>

    <Carousel 
        infinite={true} 
        //initialSlide={carouselID} 
        ref={carouselRef} 
        responsive={responsive} 
        className="mt-10"
    >
        {images.map((imgSrc, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
                <div className='h-96 w-96'>
                    <img
                        src={imgSrc}
                        alt={`Artwork ${index + 1}`}
                        className="rounded-lg object-cover w-full h-full"
                    />
                </div>
                <div className='text-white mt-2 text-center'>
                    sjkdfnskdjnfskjdnfksjdnfksjdnfkjsndfjkskdjfkjsndjkf<br />
                    sjkdfnskdjnfskjdnfksjdnfksjdnfkjsndfjkskdjfkjsndjkf<br />
                    sjkdfnskdjnfskjdnfksjdnfksjdnfkjsndfjkskdjfkjsndjkf<br />
                    sjkdfnskdjnfskjdnfksjdnfksjdnfkjsndfjkskdjfkjsndjkf<br />
                    sjkdfnskdjnfskjdnfksjdnfksjdnfkjsndfjkskdjfkjsndjkf<br />
                    sjkdfnskdjnfskjdnfksjdnfksjdnfkjsndfjkskdjfkjsndjkf
                </div>
            </div>
        ))}
    </Carousel>
</div>
         

      )

}; export default ArtCarousel
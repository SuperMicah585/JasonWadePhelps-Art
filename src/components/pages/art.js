import React,{useState,useEffect,useRef} from 'react'
import NavBar from '../navbar';
import Magnifier from "react-magnifier";
import angstPic from '../aboutPictures/angst.png'
import jasonRiverPic from '../aboutPictures/jason_on_river.jpg'
import { motion } from "framer-motion"
import {useLocation,Link } from 'react-router-dom';
const Art = ({}) => {


  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
});




  const location = useLocation();
  const { artPic } = location.state || {}; // Access the passed state




/*need to handle smaller screen size for mag glass */
        const [pictureText,setPictureText] = useState('')

        const highlightedStyle = {
          fontWeight: 'bold',
               
        };
      
        const italicStyle = {
          fontStyle: 'italic',
   
        };
      

        const emailStyle = {
       
          textDecoration: 'none',
          fontWeight: 'bold',
        };


        useEffect(() => {
          const handleResize = () => {
              setWindowSize({
                  width: window.innerWidth,
                  height: window.innerHeight,
              });
          };
      
          window.addEventListener('resize', handleResize);
      
          // Clean up the event listener on component unmount
          return () => {
              window.removeEventListener('resize', handleResize);
          };
      }, []);


      const PicText = ({text}) =>{
        return(

        <motion.div
        className="inline border-b-2 border-dotted border-black"
        onMouseEnter = {()=>setPictureText(text)}
        onMouseLeave = {()=>setPictureText('')}
         whileHover={
          { 
          opacity:.5
      }
      }>
        {text}
    </motion.div>

        )
      }

   

      
        const scroll = (scrollSpeed, scrollDuration,direction) => {
          const totalScroll = window.innerHeight / 5; // Adjust this value to control how much to scroll
          const increment = scrollSpeed; // Pixels to scroll each interval
          let scrolled = 0; // Track how much has been scrolled
        
          const scrollInterval = setInterval(() => {
            if (scrolled < totalScroll) {
              window.scrollBy(0, direction === 'up' ? -increment : increment); // Use -increment to scroll up
              scrolled += increment;
            } else {
              clearInterval(scrollInterval); // Stop the interval once the target is reached
            }
          }, scrollDuration / (totalScroll / increment)); // Calculate interval timing
        };

      const CloseButton = () =>{


        return(
          <div  className ='z-50 right-1 fixed hover:opacity-25 z-25 w-8 h-8 bg-gray-500 flex items-center justify-center opacity-35 rounded-full cursor-pointer' >
  
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
  
          </div>
        )
  
      }

      


      const PicPopUp = ({ pictureText }) => {
        console.log(pictureText,"Test")
        const randomNumber = Math.floor(Math.random() * 3) + 1;
       const leftPosition = `left-${randomNumber.toString()}/4`
       console.log(leftPosition)
        // Render the image only if pictureText matches 'Angst Gallery'
        if (pictureText !== "Angst Gallery" && pictureText !== "Jason Phelps" ) return null;

        const diplayPic = (pictureText) =>{


          switch(pictureText){

            case "Angst Gallery":
                return angstPic
                
            
            case "Jason Phelps":
              return jasonRiverPic
            
          }
          
        }
      
        return (
          <motion.img
            className={`absolute z-50 ${leftPosition} top-1/4 w-48 h-48`}
            transition={{
              duration: 1, // Duration of the hover animation
              ease: 'easeInOut', // Easing function for a smoother transition
            }}
            src={diplayPic(pictureText)} // Set the image source directly
            alt="Angst Gallery" // Always provide an alt attribute for images
          />
        );
      };



    return(
<div className='h-screen z-25 w-screen bg-white'>

 
<div className = 'flex justify-center h-screen w-screen'>
  <div>
  <div className='z-50 mt-1'>
  <Link to='/'>
<CloseButton/>
</Link>
{windowSize.width<500?

<div  className ='z-50 flex flex-col justify-center items-center fixed bg-gray-500 opacity-35 cursor-pointer' >
  <motion.button 
        className = 'hover:opacity-100'
        onClick={() => scroll(10, 1, 'up')}
        style={{ marginBottom: '20px' }}
      >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>


</motion.button>
<motion.button 
        onClick={() => scroll(10, 1, 'down')}

      >
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

</motion.button></div>:null
}
</div>
</div> 
<div className ='mr-5 ml-5 basis-full relative mt-10 mb-10  flex items-start text-sm gap-10 flex-wrap justify-center bg-white text-sm cursor-default object-contain rounded-md'>


<div className = 'h-full flex items-start justify-start'>
    <Magnifier
            style = {{objectFit: windowSize.width<500?'cover':'contain',height:'100%',width:'100%'}}
            height ='100%'
            width = '100%'
            src={artPic} // Set the image source directly
            alt="Art" // Always provide an alt attribute for images
            mgWidth = {windowSize.height/3}
            mgHeight = {windowSize.height/3}

            
          />
</div>


    
         <div className='h-full mb-20 max-w-md flex flex-col items-start justify-start'>
         <p>
         Jason worked as a vineyard hand, forester, and carpenter, all of which contributed to shaping his aesthetics, content, and process. He went on to receive his <span style={highlightedStyle}>Bachelor of Fine Arts</span> degree in both painting and sculpture at Southern Oregon University. Being heavily influenced by <span style={italicStyle}>Joseph Beuys</span> and the notion that art can have a transformative effect on the people who experience it, Jason decided to pursue his <span style={highlightedStyle}>Master's in the Arts of Teaching</span> from Pacific University in Oregon.
      </p>
      <br />
      <p>
        Being among the mountains and rivers is still instrumental to his process. Dirt, roots, shells, plants, and rust are often combined in paint, plaster, wax, or resin. In the spring of 2010, Jason exhibited "<span style={italicStyle}>Under the Wing of Corvus</span>" at the  <PicText text = 'Angst Gallery' /> in Vancouver, Washington. The exhibition explored the art, literature, and mythology of <span style={italicStyle}>crows and ravens</span>. He has since followed up with <span style={italicStyle}>Mythos</span> and <span style={italicStyle}>Sojourn</span>.
      </p>
      <br />
      <p>
        Currently, Jason has turned his process to exploring the connections between Wilderness and Psyche in the age of the Anthropocene. He wishes to examine the importance of Wilderness for our mind and soul in an age when so much of the planet has been touched by human endeavor - as in the way we look to the night sky and see more <em>satellites than shooting stars</em>. He aims to capture the paradox of a simulated Wild on the planet. Furthermore, Jason wants to imagine how unlocking the secrets of nature can be <span style={highlightedStyle}>mutually beneficial</span> for humans and nature, i.e., green energy. Landscape and Wilderness are explored through wandering, mapping, and collecting artifacts of both the mind and the physical landscape. Forms created range from wall relief to freestanding sculpture. Jason hopes the viewer will be initially impressed by <span style={italicStyle}>diverse forms</span> and matter, then consider the implications and poetics of works inspired by maps, charts, and landscape. Lastly, Jason wants to question whether true freedom of the mind and body requires both a real and perceived Wilderness.
      </p>
      <p> <br/>
        "What personal and global liberties are we willing to negotiate as we move deeper into the Anthropocene? Only when these questions are considered can we act to provide the planet with the rights we expect for ourselves; and upon doing so, we may be able to find balance in our interactions with the place we all call home."
        </p>
      <br />
      <p>
        As an artist and an educator, Jason believes strongly in the transformative effect art can have upon a community.
      </p>
      <br />
      <p>
        Contact Jason for commissions or collaboration at 
        <a href="mailto:jasonwadephelps@gmail.com" style={emailStyle}> jasonwadephelps@gmail.com</a>
      </p>
      
      </div>
    

</div>


</div>
</div>

    )
  };
  
  export default Art;


  /*

      -webkit-text-size-adjust: 100%;
    font-family: termina,sans-serif !important;
    font-weight: 900 !important;
    font-size: 83px !important;
    text-transform: uppercase !important;
    line-height: .9em !important;
    letter-spacing: -1px !important;
    font-style: normal;
    text-decoration: none;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.squiggle{}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}%3C/style%3E%3Cpath fill='none' stroke='black' stroke-width='1' class='squiggle' stroke-opacity='1' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");
    background-position: center bottom -7%;
    background-size: auto 3px;
    background-repeat: repeat-x;
    color: #000;
    border-bottom: none !important;
    -webkit-transition: .16s ease-out;
    -webkit-font-smoothing: antialiased;




  */
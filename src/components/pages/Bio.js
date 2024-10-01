import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../navbar';
import angstPic from '../aboutPictures/angst.png'
import { motion } from "framer-motion"
const Bio = () => {

        const [pictureText,setPictureText] = useState('')
        console.log(pictureText,"hello")
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


      const PicText = ({text}) =>{

        console.log(text)
        return(

        <motion.div
        className="inline"
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


      const PicPopUp = ({ pictureText }) => {
        console.log("inside");
      
        // Render the image only if pictureText matches 'Angst Gallery'
        if (pictureText !== 'Angst Gallery') return null;
      
        return (
          <motion.img
            className='absolute z-50 left-1/4 top-1/4 w-48 h-48'
            transition={{
              duration: 1, // Duration of the hover animation
              ease: 'easeInOut', // Easing function for a smoother transition
            }}
            src={angstPic} // Set the image source directly
            alt="Angst Gallery" // Always provide an alt attribute for images
          />
        );
      };

      const HandleResumeClick = () =>{

        return(

          <Link
                    to='/CV'
                  >
              <motion.div 
              

              className='flex justify-center border-double items-center rounded-full hover:bg-black hover:text-white font-moret tracking-widest	font-bold w-48 h-12 border-black border-2'> {/* Added tight line height */}
                RESUME!
              </motion.div>

          </Link>
        )

      }

    return(
<div className='h-screen w-screen bg-white overflow-scroll'>

    <NavBar style={'About'}/>

<motion.div className='ml-10 h-content mt-24 flex justify-center'>

<div className ='mt-24 mb-20 max-w-4xl flex items-center text-sm flex-col gap-20 justify-center bg-white text-sm cursor-default object-contain rounded-md'>


<div>
      <h1 className="text-6xl mb-4 font-moret">
        <span style = {highlightedStyle}>Jason Phelps </span>
        is an artist and art educator in the American Pacific Northwest. He was raised around the 
         <em> mountains and rivers</em> of Southern Oregon, where he fostered an instinct to wander, collect, and create. 
         </h1>
         <div className='mt-20'>
         <p>
         Jason worked as a vineyard hand, forester, and carpenter, all of which contributed to shaping his aesthetics, content, and process. He went on to receive his <span style={highlightedStyle}>Bachelor of Fine Arts</span> degree in both painting and sculpture at Southern Oregon University. Being heavily influenced by <span style={italicStyle}>Joseph Beuys</span> and the notion that art can have a transformative effect on the people who experience it, Jason decided to pursue his <span style={highlightedStyle}>Master's in the Arts of Teaching</span> from Pacific University in Oregon.
      </p>
      <br />
      <p>
        Being among the mountains and rivers is still instrumental to his process. Dirt, roots, shells, plants, and rust are often combined in paint, plaster, wax, or resin. In the spring of 2010, Jason exhibited "<span style={italicStyle}>Under the Wing of Corvus</span>" at the <span style={highlightedStyle}> <PicText text = 'Angst Gallery' /></span> in Vancouver, Washington. The exhibition explored the art, literature, and mythology of <span style={italicStyle}>crows and ravens</span>. He has since followed up with <span style={italicStyle}>Mythos</span> and <span style={italicStyle}>Sojourn</span>.
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



    <HandleResumeClick/>


</div>
</motion.div>

<PicPopUp pictureText = {pictureText} />
</div>

    )
  };
  
  export default Bio;


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
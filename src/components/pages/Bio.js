import React from 'react'
import NavBar from '../navbar';

const Bio = () => {

   
        const containerStyle = {
          fontFamily: "'Georgia', serif",
          lineHeight: 1.6,
          padding: '20px',
          margin: 'auto',
          backgroundColor: '#f8f9fa',
          border: '1px solid #ddd',
          borderRadius: '10px',
        };
      
        const paragraphStyle = {
          fontSize: '1.2em',
      
        };
      
        const highlightedStyle = {
          fontWeight: 'bold',
               
        };
      
        const italicStyle = {
          fontStyle: 'italic',
   
        };
      
   
        const wildernessStyle = {
          fontWeight: 'bold',
        
        };
      
        const quoteStyle = {
          fontSize: '1.1em',
          margin: '15px 0',
          padding: '10px',
          borderLeft: '3px solid #2a9d8f',
          backgroundColor: '#fafafa',
        };
      
        const emailStyle = {
       
          textDecoration: 'none',
          fontWeight: 'bold',
        };


    return(
<div className='h-screen white'>
<div className='absolute top-0'>
    <NavBar style={'About'}/>
</div>
<div className='ml-10 h-content mt-20'>

<p className ='max-w-3xl absolute items-center text-sm justify-center mt-20 bg-white text-lg object-contain rounded-md'>
<div>
      <p>
        Jason is an artist and art educator in the American Pacific Northwest. He was raised around the 
         <em> mountains and rivers</em> of Southern Oregon, where he fostered an instinct to wander, collect, and create. Jason worked as a vineyard hand, forester, and carpenter, all of which contributed to shaping his aesthetics, content, and process. He went on to receive his <span style={highlightedStyle}>Bachelor of Fine Arts</span> degree in both painting and sculpture at Southern Oregon University. Being heavily influenced by <span style={italicStyle}>Joseph Beuys</span> and the notion that art can have a transformative effect on the people who experience it, Jason decided to pursue his <span style={highlightedStyle}>Master's in the Arts of Teaching</span> from Pacific University in Oregon.
      </p>
      <br />
      <p>
        Being among the mountains and rivers is still instrumental to his process. Dirt, roots, shells, plants, and rust are often combined in paint, plaster, wax, or resin. In the spring of 2010, Jason exhibited "<span style={italicStyle}>Under the Wing of Corvus</span>" at the <span style={highlightedStyle}>Angst Gallery</span> in Vancouver, Washington. The exhibition explored the art, literature, and mythology of <span style={italicStyle}>crows and ravens</span>. He has since followed up with <span style={italicStyle}>Mythos</span> and <span style={italicStyle}>Sojourn</span>.
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



 


</p>
</div>
</div>

    )
  };
  
  export default Bio;
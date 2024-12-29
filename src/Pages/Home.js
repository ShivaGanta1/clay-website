import { useEffect,useState } from "react"
import React from 'react'
import "./Home.css"
import Accordin from '../Components/Accordin'
import Logosection from '../Components/Logosection.js'
import Videosection from '../Components/Videosection.js'
import Companies from '../Components/Companies.js'
import Featured from '../Components/Featured.js'
import FAQAccordion from '../Components/FAQAccordion.js'
import Footer from '../Components/Footer.js'

const Home = () => {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
      setIsAnimated(true);
    }, []); 
  
    return (
      <div className={`my-component ${isAnimated ? 'animated' : ''}`}>
      <div className='hero-container'>
      <div className='hero-section'>
      <div>
        <h1>
        Clay is a global branding
       and UX design agency
        </h1>
      </div>
         <div className='hero-section3'>
            <img src='https://img.freepik.com/premium-photo/abstract-background-mock-up-scene-with-podium-geometry-shape-product-display-3d-rendering_604472-441.jpg' alt=''/>
         </div>
        </div>
        </div>
        <section>
            <div className='video-container'>
            <video
        src="https://cdn.sanity.io/files/r115idoc/production/1f0e5e7efc6e944b7ab0babd354ad6f850296748.mp4#t=0.1"
        muted
        ref={(video) => {
          if (video) {
            video.pause(); 
          }
        }}
        onMouseEnter={(e) => e.target.play()}
        onMouseLeave={(e) => {
          e.target.pause();
          e.target.currentTime = 0; 
        }}
        
      ></video>
       
            </div>
            
        </section>
       <div>
        <Accordin/>
       </div>
       <div>
        <Logosection/>
       </div>
       <div>
        <Videosection/>
       </div>
       <div>
        <Companies/>
       </div>
       <div>
        <Featured/>
       </div>
       <div>
        <FAQAccordion/>
       </div>
       <div>
        <Footer/>
       </div>
    </div>
    
  )
}

export default Home

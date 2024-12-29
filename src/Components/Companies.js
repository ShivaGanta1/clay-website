import React from 'react'
import "./Companies.css"
import Scroll from './Scroll.js'

const Companies = () => {
  return (
    <div>
     <div  className='companies-container'>
     <div className='companies-section'>
         <h2 className='company-head'>
         We transform companies through design innovation
         </h2>
         <p className='company-para'>
         A full-service creative agency designing and building inventive digital experiences across all platforms and brand touchpoints.
         </p>
         <div className='company-section'>
            <a className='client-achor' href='/Client'>
                View our services
            </a>
            <span className='client-arrow'>→</span>
            <hr  className='company-hr'></hr>  
         </div>
        </div>
        </div>
        <div>
            <Scroll/>
        </div>
        <div  className='companies-container'>
        <div>
            <p  className='company-para'>
            Our cross-disciplinary team combines strategy, branding, UX design, and technology for swift, impactful results. Working as one team with our clients, we merge human creativity with AI-driven efficiency to consistently exceed expectations.
            </p>
            
        </div>
        <div className='company-section'>
            <a className='client-achor' href='/Client'>
               Get to know us
            </a>
            <span className='client-arrow'>→</span>
            <hr  className='company-hr'></hr>  
         </div>
     </div>
    </div>
  )
}

export default Companies

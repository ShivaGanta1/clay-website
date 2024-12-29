import React from 'react'
import "./Featured.css"

const Featured = () => {
  return (
    <div>
      <div className='feature-container'>
        <div className='feature-heading'>
            <h1>
            Featured News
            </h1>
        </div>
        <div className='feature-section'>
            <div className='feature-img' >
              <img className='' src='https://cdn.sanity.io/images/r115idoc/production/2202ebe1209a9c84a3ba31c32a72c0a0258e0a2a-2338x1238.png?w=1080&q=80&fit=clip&auto=format' alt=''/>
            </div>
            <div className='feature-matter'>
                <p className='feature-text1'>Branding</p>
                <h2 className='feature-head'>
                Brand Identity Guide: Craft Brand's Unique Image 2025
                </h2>

                <p  className='feature-text'>Mar 11, 2024 . 9 min read</p>
            </div>
        </div>
        <hr className='feature-hr'></hr>
        <div className='feature-section'>
            <div className='feature-img1' >
              <img src='https://cdn.sanity.io/images/r115idoc/production/9ef2e28bd10b51c84649789e70fd75ef3e440973-2556x1410.png?w=1920&q=80&fit=clip&auto=format' alt=''/>
            </div>
            <div className='feature-matter'>
                <p className='feature-text1'>News</p>
                <h2>
                Clay's Collaborative Rebranding Effort for Streetbeat Showcased on The-Brand Identity
                </h2>

                <p  className='feature-text'>Mar 15, 2024 . 1 min read</p>
            </div>
        </div>
        <hr></hr>
        <div className='feature-section'>
            <div className='feature-img2' >
              <img src='https://cdn.sanity.io/images/r115idoc/production/cfd7e1dcb6612a4bed230fbc114cf1640266179c-2400x1264.png?w=1080&q=80&fit=clip&auto=format' alt=''/>
            </div>
            <div className='feature-matter'>
                <p className='feature-text1'>Web Design</p>
                <h2>
                Visual Hierarchy in Web Design: How to, Examples & Techniques for 2025
                </h2>

                <p  className='feature-text'>Nov 13, 2024 . 12 min read</p>
            </div>
        </div>
      
      <div className='client-section1'>
            <a className='client-achor1' href='/Client'>
                View all clients 
            </a>
            <span className='client-arrow1'>→</span>
            <hr  className='client-hr1'></hr>
            
         </div></div>
    </div>
  )
}

export default Featured

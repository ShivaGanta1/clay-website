
import React from 'react'
import "./Videosection.css"

const Videosection = () => {
  return (
    <div>
     <div className='videoContainer'>
        <div className='video-section'>
         <div className='after1'>
         <video className='first-video'
        src="https://cdn.sanity.io/files/r115idoc/production/1c651c5005c18a36ad53910194ff8cdb7fca24f7.mp4"
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
        <div className='first-video-matter'>
            <h2 className='first-video-head'>
            Slack
            </h2>
            <p className='first-video-para'>
            Designing and building Slack’s interactive demo experience
            </p>
            <p className='first-video-para1' ></p>
        </div>
        
         </div>
         <div className='grayscale'>
         <video className='second-video'
        src="https://cdn.sanity.io/files/r115idoc/production/2e537a8f972456dd8c39961d986bc7f2929d17c1.mp4"
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
       <div className='first-video-matter'>
            <h2 className='first-video-head'>
            Grayscale
            </h2>
            <p className='first-video-para'>
            Web redesign for the world’s largest crypto asset manager
            </p>
        </div>
            </div>
        </div>

        
     </div>
     <div className='videoContainer-2 fever'>
         <video className='third-video'
        src="https://cdn.sanity.io/files/r115idoc/production/b93de3c461d165c7178ec3e3f7ac7fe04756fe20.mp4#t=0.1"
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
        <div className='first-video-matter'>
            <h2 className='first-video-head'>
            Fiverr
            </h2>
            <p className='first-video-para'>
            Web app design for a vitual creative collabration service
            </p>
        </div>
        </div>

        <div className='videoContainer'>
        <div className='video-section'>
         <div className='snapshotafter' >
         <video className='snapshot'
        src="https://cdn.sanity.io/files/r115idoc/production/30ab902babfe7397956632ad0b5deaa2552449c2.mp4"
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
        <div className='first-video-matter'>
            <h2 className='first-video-head'>
            Snapchat
            </h2>
            <p className='first-video-para'>
            Integrating augmented reality to elevate social commerce
            </p>
        </div>
        
         </div>
         <div className='milkshake1'>
         <video className='milkshake'
        src="https://cdn.sanity.io/files/r115idoc/production/bc33bf0d5a34af84fcc49ed6f25ac5f568436b10.mp4"
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
       <div className='first-video-matter'>
            <h2 className='first-video-head'>
            Joe & The Juice
            </h2>
            <p className='first-video-para'>
            A digital commerce and loyalty app for a global coffee shop chain
            </p>
        </div>
            </div>
        </div>

        
     </div>
     <div className='videoContainer-3 marqeta'>
         <video className='fourth-video'
        src="https://cdn.sanity.io/files/r115idoc/production/7028764a1d1c4a517737b4386cccab5938780411.mp4"
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
        <div className='first-video-matters'>
            <h2 className='first-video-head'>
            Marqeta
            </h2>
            <p className='first-video-para'>
            Website and digital branding for a modern card-issuing platform
            </p>
        </div>
        </div>
        {/* another  */}
        <div className='videoContainer-5'>
        <div className='video-section'>
         <div className='discovery discovery1'>
         <video className='first-video1'
        src="https://cdn.sanity.io/files/r115idoc/production/d43570b4164cb7b5d1d19f19390b8213571ad64d.mp4"
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
        <div className='first-video-matter'>
            <h2 className='first-video-head'>
            Discover
            </h2>
            <p className='first-video-para'>
            Design partnership focused on mobile app innovation
            </p>
        </div>
        
         </div>
         <div className='tab tab1'>
         <video className='second-video1'
        src="https://cdn.sanity.io/files/r115idoc/production/c5c79675370888c777b213410e7bd2272b21a4b2.mp4"
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
       <div className='first-video-matter'>
            <h2 className='first-video-head'>
            Serena & Lily
            </h2>
            <p className='first-video-para'>
            Ecommerce redesign for a leader in luxury home decor
            </p>
        </div>
            </div>
        </div>

        
     </div>
     <div className='videoContainer-4 nuant'>
         <video className='five-video'
        src="https://cdn.sanity.io/files/r115idoc/production/e6c96f670e213e30745b9a18de7bba5c74597498.mp4"
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
        <div className='first-video-matter'>
            <h2 className='first-video-head'>
            Nuant
            </h2>
            <p className='first-video-para'>
            Design system for a crypto asset intelligence solution
            </p>
        </div>
        </div>
        <div className='videoContainer'>
        <div className='video-section'>
         <div className='discovery wealth '>
         <video className='snapshot'
        src="https://cdn.sanity.io/files/r115idoc/production/06fbbb468c9a75dec6e4a6207356589cf3858d09.mp4"
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
        <div className='first-video-matter'>
            <h2 className='first-video-head'>
            Wealth
            </h2>
            <p className='first-video-para'>
            Designing a self-service digital estate planning platform
            </p>
        </div>
        
         </div>
         <div className='bridge'>
         <video className='milkshake'
        src="https://cdn.sanity.io/files/r115idoc/production/1ff7276a2abcad4e346ae522d5e05992d02e368d.mp4"
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
       <div className='first-video-matter'>
            <h2 className='first-video-head'>
            Art Bridges
            </h2>
            <p className='first-video-para'>
            Website redesign for a niche nonprofit organization
            </p>
        </div>
            </div>
        </div>

        
     </div>
     <div className='videoContainer-3 beat'>
         <video className='fourth-video'
        src="https://cdn.sanity.io/files/r115idoc/production/00bf1a601d05c495badb1cfd48ca1ad2d34a6ae0.mp4"
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
        <div className='first-video-matters'>
            <h2 className='first-video-head'>
            Streetbeat
            </h2>
            <p className='first-video-para'>
            Branding for an AI-powered investment platform
            </p>
        </div>
        </div>
        <div className='client-section'>
            <a className='client-achor' href='/Client'>
                Explore all work
            </a>
            <span className='client-arrow'>→</span>
            <hr  className='client-hr'></hr>
            
         </div>
    </div>
  )
}

export default Videosection


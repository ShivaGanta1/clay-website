// Accordin.js
import React, { useState } from 'react';
import './Accordin.css';

const Accordin = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const items = [
    {
      id: 1,
      title: 'Branding',
      content: "A brand is more than just a logo and color palette. We'll craft a distinct visual and verbal identity, create necessary assets, and establish clear brand guidelines to maintain consistency across all touchpoints.",
      image: 'https://img.freepik.com/premium-vector/white-triangle-circle-sphere-3d-decor-element-minimalist-geometric-figure-design-realistic-vector_92753-27842.jpg?ga=GA1.1.395074567.1732086165&semt=ais_hybrid', 
    },
    {
      id: 2,
      title: 'Digital Products',
      content: 'Clay concentrates on designing authentic connections through the use of both aesthetics and behavioral science. Our team of senior UI/UX designers delivers engaging digital products that help brands thrive in the modern economy.',
      image: 'https://img.freepik.com/premium-vector/white-pentagon-vertical-polygonal-wall-geometric-shape-abstract-showcase-realistic-vector_92753-27920.jpg?ga=GA1.1.395074567.1732086165&semt=ais_hybrid', 
    },
    {
      id: 3,
      title: 'Websites',
      content: "A modern brand is defined by its digital presence, starting with the website. We focus on creating websites that effectively convey the brand's identity and perspective for an enhanced user experience.",
      image: 'https://img.freepik.com/premium-vector/design-elements-wave-many-purple-lines-circle-ring-abstract-vertical-wavy-stripes-white-background-isolated-vector-illustration-eps-10-colourful-waves-with-lines-created-using-blend-tool_299644-6616.jpg?ga=GA1.1.395074567.1732086165&semt=ais_hybrid', 
    },
    {
      id: 4,
      title: 'Development',
      content: 'Our web and mobile app developers are committed to achieving visual and performance excellence. From the backend to the frontend, we prioritize delivering a seamless and enjoyable user experience on all devices.',
      image: 'https://img.freepik.com/premium-vector/white-glossy-hexagonal-frame-geometric-3d-design-honeycomb-mosaic-element-realistic-vector_92753-27916.jpg?ga=GA1.1.395074567.1732086165&semt=ais_hybrid', 
    },
    {
      id: 5,
      title: 'Content',
      content: 'Content is a crucial aspect of the user experience, and we offer a range of services to support this, including copywriting, illustration, 2D and 3D graphics, iconography, animation, video production, and photography.',
      image: 'https://img.freepik.com/premium-vector/abstract-paper-cut-backdrop-wavy-lines-grayscale-copy-space-monochrome-frame-lettering_498312-1272.jpg?ga=GA1.1.395074567.1732086165&semt=ais_hybrid', 
    },
    {
      id: 6,
      title: 'Generative AI',
      content: "Clay strategically integrates AI, optimizing processes, and elevating digital products. We're at the forefront of innovating AI-driven UX, pioneering novel interaction models to set new standards in interface design.",
      image: 'https://img.freepik.com/premium-vector/white-pentagon-symmetric-vertical-wall-foundation-basic-decor-element-3d-design-realistic-vector_92753-27954.jpg?w=740', 
    },
  ];

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    setHoveredIndex(null); 
  };

  const handleMouseEnter = (index) => {
    if (activeIndex !== index) { 
      setHoveredIndex(index);
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="accordin-container">
      <div className="accordin-section">
        <div className="accordin-head">
          <h2>
            We build transformative digital experiences for the world's leading
            brands by blending AI, design, and technology.
          </h2>
        </div>

        <div className="accordion">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="accordion-item"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <h2 className="accordion-title" onClick={() => toggleItem(index)}>
                {item.title}
                <span
                  className={`accordion-icon ${
                    activeIndex === index ? 'active' : ''
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="35"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </h2>

              <div className="accordion-content">
                {(activeIndex === index || hoveredIndex === index) && (
                  <>
                   
                  
                    {activeIndex === index && (
                      <p className="acoordine-para">{item.content}</p>
                    )}
                      <img src={item.image} alt={item.title} />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordin;
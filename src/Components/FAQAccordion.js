import React, { useState } from 'react';
import './FAQAccordion.css'; 

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: 'What are your core services as a UX design and branding firm?',
      content: 'At Clay, user experience is not just a capability but the cornerstone of our approach. We first began as a UX design agency in San Francisco, focusing on mobile apps and enterprise/SaaS software.                 However, our passion for branding and the demand from our clients led us to expand our offering to provide full-service brand design practice and web design and development of marketing websites.'
      ,
      
    },
    {
      title: 'What separates Clay from other branding and web design agencies?',
      content: 'In a saturated market of excellent UX design and it s challenging to stand out. At Clay, we believe our clients success is intertwined with our own. We forge enduring partnerships based on trust and mutual growth, going beyond world-class services.',
    },
    {
      title: 'Do you work with clients in different timezones?',
      content: 'We have extensive experience working with clients in various time zones. Based in San Francisco, we operate as a remote-first company with team members across the United States, Europe, and South-East Asia. This global presence allows us to serve clients worldwide, regardless of location.',
    },
    {
      title: 'How much does hiring you for a design project cost?',
      content: 'At Clay, we understand the importance of flexibility in budget and support for our partners. We offer a blended rate for our services and work with our clients to determine what level of support we can provide based on their budgetary constraints.',
    },
    {
        title: 'Do you work with startups?',
        content: 'Yes, we work with clients of all sizes, from enterprise-level organizations to startups. We are passionate about helping startups bring their ideas to life and achieve their goals through the power of design and technology. Additionally, we possess the expertise to assist in scaling your product or marketing efforts to enter new markets or reach different target audiences.',
      },
      {
        title: 'Can you help us redesign our B2B/enterprise software?',
        content: "We're one of the few user experience agencies focusing on enterprise UX design and the digital transformation of legacy business software. Our years of experience have allowed us to refine our process, enabling us to revitalize B2B software for top-tier Fortune 100 companies like ADP, Amazon, VMware, and Cisco.",
      },
  ];

  return (
    <div>
        <div className='faq'>
            <h2>FAQ</h2>
            </div>
    <div className="accordion-container1">
   
      {accordionData.map((item, index) => (
        <div className="accordion-item1" key={index}>
          <div className="accordion-title1" onClick={() => toggleAccordion(index)}>
            <h3>{item.title}</h3>
            <span className={`accordion-icon1 ${activeIndex === index ? 'active' : ''}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </div>
          {activeIndex === index && (
            <div className="accordion-content1">
              <p>{item.content}</p>
              
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default FAQAccordion;
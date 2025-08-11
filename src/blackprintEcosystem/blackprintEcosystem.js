import React from 'react';
import './blackprintEcosystem.css';

// Import images like in vision.js
import card1 from './../images/card1.png';
import card2 from './../images/card2.png';
import card3 from './../images/card3.png';
import card4 from './../images/card4.png';
import card5 from './../images/card5.png';
import card6 from './../images/card6.png';
import card7 from './../images/card7.png';
import hc1 from './../images/hc1.png';
import hc2 from './../images/hc2.png';
import hc3 from './../images/hc3.png';
import hc4 from './../images/hc4.png';
import hc5 from './../images/hc5.png';
import hc6 from './../images/hc6.png';
import hc7 from './../images/hc7.png';

const cards = [
   {
    title: 'Black Marketplace',
    img: card7,
    hoverImg: hc7,
    text: ' Your destination for discovering and shopping Black owned brands in beauty, books, food, fashion, and more. This is where culture spends with purpose and keeps the dollar in the community',
  },


  {
    title: 'The Black Card',
    img: card2,
    hoverImg: hc2,
    text: 'A premium membership unlocking partner discounts, exclusive events, networking tools, and the first of its kind cultural rewards program. For the culture. Elevate it.',
  },
    {
    title: 'The Directory',
    img: card1,
    hoverImg: hc1,
     text: (
      <>
        Also known as <strong>The Black Book</strong> This curated digital guide connects you to the next wave of Black owned brands across beauty, business, wellness, tech, and more. Search by category, location, or identity, and discover the culture’s best.
      </>
    ),
  },
  {
    title: 'The Black 100',
    img: card3,
    hoverImg: hc3,
    text: 'The Founding Circle honoring 100 innovators, builders, and changemakers shaping the future. Soon, you’ll be able to nominate leaders in your life whose work deserves the spotlight.',
  },
  {
    title: 'Events Calendar',
    img: card4,
    hoverImg: hc4,
    text: 'A live, shoppable calendar spotlighting curated Black owned experiences happening around the country. Don’t miss what’s happening, near or far.',
  },
  {
    title: 'Media Hub',
    img: card5,
    hoverImg: hc5,
    text: 'The heartbeat of our ecosystem, highlighting stories, wins, and culture from across our network. Your go to space for seeing how creativity meets impact  and how we make it work for us, by us',
  },
  {
    title: 'Education & Empowerment',
    img: card6,
    hoverImg: hc6,
    text: 'Virtual and in person classes, resources, and connections to help you launch, grow, and scale. Whether you’re looking to invest, hire, or build, we’ll guide you from idea to excellence.',
  },
 
];
export default function BlackprintEcosystem() {
  return (
    <div className="bp-wrapper">
      <div className="bp-header">
        <h1 className="bp-header-line">
          <span className="bp-coming">What’s Coming:  </span>
          <span className="bp-blackprint">The Blackprint™</span>
        </h1>
        <p className="bp-subtitle">Our Ecosystem</p><br/>
          <p className="bp-subtitle">The Blackprint™ is our blueprint for a connected cultural economy</p>
        
      </div>
      <div className="bp-grid">
        {cards.map((card, index) => (
          <div key={index} className="bp-card">
            <div className="bp-coming-soon-tag">
              <p>Coming Soon</p>
            </div>
            <div className="bp-card-inner">
              <div className="bp-card-img-container">
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="bp-card-img-default"
                />
                <img 
                  src={card.hoverImg} 
                  alt={`Hover - ${card.title}`} 
                  className="bp-card-img-hover"
                />
              </div>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
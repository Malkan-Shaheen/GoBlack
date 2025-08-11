import React from 'react';
import './tabdirectory.css';

// Import images
import childImg from './../../images/child.png';
import manImg from './../../images/man.png';
import womanImg from './../../images/woman.png';
import crownImg from './../../images/crown.png';
import icon1 from './../../images/icon1.png';
import icon2 from './../../images/icon2.png';
import icon3 from './../../images/icon3.png';
import icon4 from './../../images/icon4.png';

const contentList = [
  {
    image: childImg,
    icon: icon1,
    title: "The Seed: Planted in the Directory",
    price: "$50 (Limited Time) / Annum",
    text: `Your First Step Into the Ecosystem

The Seed is  how you claim your place in the culture.

Whether you’re a brand, creative, or supporter, this entry-level listing gives you visibility, access, and community.

<strong>Benefits</strong>: 

• Verified spot in the ProjectBlack Directory (The Black Book) 
• Exposure to a culture-driven audience
• Early supporter recognition (Digital badge for social media)
• Member-only updates, events and opportunities

<strong>Black Box:</strong> WELCOME TO EXCELLENCE – The Seed 
 `
  },
  {
    image: manImg,
    icon: icon2,
    title: "The Pillar : Growth Phase",
    price: "$50 (Limited Time) / Annum",
    text: `
 Designed for growing businesses, creators, and professionals ready to scale, The Pillar unlocks premium access to Project Black’s tools and opportunities.

<strong>Benefits:</strong>

• All Seed perks included
• Featured promotion across Project Black’s media & newsletters
• Discounts on Project Black University courses & workshops
• Priority directory placement

<strong>Black Box:</strong> WELCOME TO EXCELLENCE – The Pillar
  `
  },
  {
    image: womanImg,
    icon: icon3,
    title: "The Flame : Established Root",
    price: "$50 (Limited Time) / Annum",
    text: `The Flame is built for innovators, thought leaders, and culture shapers who want to amplify their presence, launch initiatives, and receive exclusive Project Black perks.

<strong>Benefits:</strong>

  •	All Pillar perks included
  •	Exclusive invites to roundtables, digital showcases, and co-branded opportunities
  •	Discounted content creation packages and business makeovers
  •	Strategic promotion across Project Black platforms

<strong>Black Box:</strong> WELCOME TO EXCELLENCE – The Flame
 `
  },
  {
    image: crownImg,
    icon: icon4,
    title: "The Crown : Harvesting Change",
    price: "$50 (Limited Time) / Annum",
    text: `Invite-only or application-based, The Crown is for serious investors, changemakers, and top-tier leaders committed to investing in the future of Black (Invite Only)

<strong>Benefits:</strong>

 • All Flame perks included
 • Direct influence in Project Black's future (voting, advisory, partnerships)
 • Premium VIP access to travel, dining, and elite experiences
 • Custom badge + Letterman jacket
 • Exclusive access to The Black Card legacy tier

<strong>Black Box:</strong> WELCOME TO EXCELLENCE – The Crown
 `
  },
];


const Tabdirectory = () => {
  return (
    <div className="directory-section1">
      <div className="directory-heading1">
        <h1>Join the movement</h1>
        <h3>Fueling the Future of Black Innovation</h3>
      </div>

      {contentList.map((item, index) => (
       <div key={`content-${index}`} className="content-block1">
  <div className="content-header1">
    <img src={item.icon} alt={`Icon ${index + 1}`} className="content-icon1" />
    <h2>{item.title}</h2>
  </div>
  
  <div className="content-image1">
    <img 
      src={item.image} 
      alt={`Content ${index + 1}`} 
    />
  </div>
  
  <div className="content-text1">
    <div dangerouslySetInnerHTML={{ __html: item.text }} />
    <button className="join-btn1">Join Now</button>
  </div>
</div>

      ))}
    </div>
  );
};

export default Tabdirectory;
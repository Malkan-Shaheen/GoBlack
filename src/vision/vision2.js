import React, { useEffect, useState } from 'react';
import './vision2.css';
import img1 from './../images/group.png';
import img2 from './../images/store.png';
import img3 from './../images/couple.png';
import img4 from './../images/mural.png';

const Vision2 = () => {
  const [imagesAnimated, setImagesAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImagesAnimated(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="vision-wrapper">
      <h2 className="vision-heading">The Vision: Empower Black Excellence Together</h2>

      <div className="vision-grid">
        <img src={img1} alt="Visual 1" className={`vision-img slide-up`} />
        <img src={img2} alt="Visual 2" className={`vision-img slide-up delay-1`} />
        <img src={img3} alt="Visual 3" className={`vision-img slide-up delay-2`} />
        <img src={img4} alt="Visual 4" className={`vision-img slide-up delay-3`} />
      </div>

      <div className={`vision-text ${imagesAnimated ? 'fade-in-text' : ''}`}>
        <p className="empower-desc">
  <br/>Black creators contribute $1.6 trillion to the U.S. economy each year — yet remain underrepresented.
  Project Black is changing that.<br /><br />
  We unite culture, commerce, and community to shift narratives and multiply opportunity.{" "}
  <strong>Black excellence is the rule, not the exception.</strong>
</p>
      </div>
    </div>
  );
};

export default Vision2;

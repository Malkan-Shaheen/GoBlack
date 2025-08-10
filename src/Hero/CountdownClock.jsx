// CountdownClock.jsx
import React, { useEffect, useState } from 'react';
import './Hero.css'; 

const AnimatedCard = ({ animation, digit }) => (
  <div className={`flipCard ${animation}`}>
    <span>{digit}</span>
  </div>
);

const StaticCard = ({ position, digit }) => (
  <div className={position}>
    <span>{digit}</span>
  </div>
);

const FlipUnitContainer = ({ digit, shuffle, unit }) => {
  const [previousDigit, setPreviousDigit] = useState(digit);
  const [currentDigit, setCurrentDigit] = useState(digit);
  const [shouldFlip, setShouldFlip] = useState(false);

  useEffect(() => {
    if (shuffle) {
      setPreviousDigit(currentDigit); // Keep old digit showing
      setShouldFlip(true); // Start flip immediately

      // Change the digit halfway through the flip
      const halfway = setTimeout(() => {
        setCurrentDigit(digit);
      }, 300); // Half of animation duration (0.6s)

      // End flip animation after full duration
      const endFlip = setTimeout(() => {
        setShouldFlip(false);
      }, 600); // Matches your CSS animation duration

      return () => {
        clearTimeout(halfway);
        clearTimeout(endFlip);
      };
    }
  }, [shuffle, digit, currentDigit]);

  // Format for leading zeros
  const formatDigit = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div className="flipUnitContainer">
      <div className="midline-dots"></div>

      {/* Static cards */}
      <StaticCard position="upperCard" digit={formatDigit(currentDigit)} />
      <StaticCard
        position="lowerCard"
        digit={shouldFlip ? formatDigit(previousDigit) : formatDigit(currentDigit)}
      />

      {/* Animated flipping cards */}
      {shouldFlip && (
        <>
          <AnimatedCard digit={formatDigit(previousDigit)} animation="fold" />
          <AnimatedCard digit={formatDigit(digit)} animation="unfold" />
        </>
      )}
    </div>
  );
};


const CountdownClock = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date('2025-12-13T23:59:59');
    const diff = target - now;

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [shuffle, setShuffle] = useState({
    days: false,
    hours: false,
    minutes: false,
    seconds: false
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = calculateTimeLeft();
      
      setShuffle({
        days: newTime.days !== timeLeft.days,
        hours: newTime.hours !== timeLeft.hours,
        minutes: newTime.minutes !== timeLeft.minutes,
        seconds: true // This will make it flip every second
      });

      setTimeLeft(newTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  return (
    <div className="flipClock">
      {[
        { unit: 'days', label: 'Days' },
        { unit: 'hours', label: 'Hours' },
        { unit: 'minutes', label: 'Minutes' },
        { unit: 'seconds', label: 'Seconds' },
      ].map(({ unit, label }, index, arr) => (
        <div key={unit} className="flipUnitWrapper">
          <FlipUnitContainer
            unit={unit}
            digit={timeLeft[unit]}
            shuffle={shuffle[unit]}
          />
          {index !== arr.length - 1 && <span className="colon">:</span>}
          <div className="unitLabel">{label}</div>
        </div>
      ))}
    </div>
  );
};

export default CountdownClock;
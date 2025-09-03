import React, { useState, useEffect } from "react";

interface AnimatedNumberProps {
  target: number;
  duration?: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;

    const totalMilSecDur = duration;
    const incrementTime = 30;
    const step = Math.ceil(end / (totalMilSecDur / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <>{count}</>;
};

export default AnimatedNumber;

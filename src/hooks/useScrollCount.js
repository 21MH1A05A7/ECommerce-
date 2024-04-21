import { useCallback, useEffect, useRef, useState } from 'react';

const easeOutExpo = (t) => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

const useScrollTriggeredCountUp = (
  refs,
  ends,
  duration = 2000
) => {
  const [counts, setCounts] = useState(Array(ends.length).fill(0));
  const isCounting = useRef(Array(ends.length).fill(false));
  const frameRate = 1000 / 60;
  const totalFrames = Math.round(duration / frameRate);

  const animateCount = useCallback(
    (index, startTime) => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const progress = easeOutExpo(Math.min(1, elapsedTime / duration));
      const newCount = Math.round(ends[index] * progress);
      
      setCounts(prevCounts => {
        const newCounts = [...prevCounts];
        newCounts[index] = newCount;
        return newCounts;
      });

      if (progress < 1 && newCount < ends[index]) {
        requestAnimationFrame(() => animateCount(index, startTime));
      } else {
        isCounting.current[index] = false;
      }
    },
    [duration, ends]
  );

  const handleScroll = useCallback(
    (index, entry) => {
      if (entry.isIntersecting && !isCounting.current[index]) {
        isCounting.current[index] = true;
        animateCount(index, Date.now());
      } else if (!entry.isIntersecting && isCounting.current[index]) {
        isCounting.current[index] = false;
      }
    },
    [animateCount]
  );

  useEffect(() => {
    const observerCallbacks = refs.map((ref, index) => {
      return ([entry]) => handleScroll(index, entry);
    });

    const observers = refs.map((ref, index) => {
      const observer = new IntersectionObserver(observerCallbacks[index], {
        threshold: 0.5 // Adjusted threshold
      });
      if (ref.current) {
        observer.observe(ref.current);
      }
      return observer;
    });

    return () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
    };
  }, [refs, handleScroll, animateCount]);

  useEffect(() => {
    counts.forEach((count, index) => {
      if (count >= ends[index]) {
        isCounting.current[index] = false;
      }
    });
  }, [counts, ends]);

  return counts;
};

export default useScrollTriggeredCountUp;


// 

// import React, { useRef } from 'react';
// import CountUp from 'react-countup';
// import { useInView } from 'react-intersection-observer';

// const useScrollCount = ({ start, end, duration }) => {
//     console.log(start)
//     const { ref, inView } = useInView();
//     const countUpRef = useRef(null);

//     if (inView) {
//         countUpRef.current.start();
//     }
//     console.log("hi");
//     return (
//         <div ref={ref}>
//             <CountUp ref={countUpRef} start={start} end={end} duration={duration} />
//         </div>
//     );
// };

// export default useScrollCount;

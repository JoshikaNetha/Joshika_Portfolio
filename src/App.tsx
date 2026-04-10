import { useEffect, useState } from 'react'

import AnimatedName from './NameAnimation'

import './App.css'

import { animate } from 'framer-motion';

function App() {

  const [progress, setprogress] = useState(0)

  useEffect(() => {
    // 14 characters with 0.35s stagger = ~4.55s until the last letter starts.
    // Plus ~0.8s for the spring animation to settle = 5.35s total duration.
    const controls = animate(0, 100, {
      duration: 5.35,
      ease: "easeOut",
      onUpdate(value) {
        setprogress(Math.round(value));
      }
    });

    return () => controls.stop();
  }, []);

  // circle math
  const radius = 30;
  const circumference = 2 * Math.PI * radius;

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className='relative h-screen w-screen flex flex-row items-center justify-center bg-black'>
      <AnimatedName />

      {/* Loader */}
      <div className="absolute bottom-5 right-5 w-16 h-16">
        {/* SVG Circle */}
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          className="block"
        >
          {/* background track */}
          <circle
            cx="32"
            cy="32"
            r={radius}
            stroke="#334155"
            strokeWidth="4"
            fill="transparent"
          />

          {/* progress stroke */}
          <circle
            cx="32"
            cy="32"
            r={radius}
            stroke="#06b6d4"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{
              transform: 'rotate(-90deg)',
              transformOrigin: '50% 50%',
              transition: 'stroke-dashoffset 120ms linear',
            }}
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center text-white font-medium text-[0.65rem]">
          {progress}%
        </div>
      </div>

    </div>

  )
}

export default App

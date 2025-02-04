import React from "react";
import { animated, useSpring } from "@react-spring/web";
import "../styles/global.css";

const WaveAnimation = () => {
  const waveAnimation = useSpring({
    from: { transform: "translateY(20px)" },
    to: { transform: "translateY(0px)" },
    config: { tension: 50, friction: 15 },
    loop: { reverse: true },
  });

  return (
    <div className="wave-container">
      <animated.svg
        viewBox="0 0 1440 320"
        className="wave-svg"
        style={waveAnimation}
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#007bff" />
            <stop offset="50%" stopColor="#00c6ff" />
            <stop offset="100%" stopColor="#007bff" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradient)"
          fillOpacity="1"
          d="M0,160L40,149.3C80,139,160,117,240,138.7C320,160,400,224,480,240C560,256,640,224,720,186.7C800,149,880,107,960,106.7C1040,107,1120,149,1200,186.7C1280,224,1360,256,1400,272L1440,288V320H0Z"
        ></path>
      </animated.svg>
    </div>
  );
};

export default WaveAnimation;

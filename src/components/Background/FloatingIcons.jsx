import React, { useMemo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  LuCode2, LuDatabase, LuGlobe, LuBrain, LuRocket, LuCloud, LuGithub, LuZap, LuCpu, LuLayers
} from 'react-icons/lu';

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2; /* Increased from 1 to 2 to be above HeroSection and other content */
  pointer-events: none;
  overflow: hidden;
`;

const IconWrapper = styled(motion.div)`
  position: absolute;
  filter: drop-shadow(0 4px 12px rgba(0,0,0,0.15));
  opacity: 0.45; /* Increased to 0.45 for maximum visibility */
  color: ${({ theme }) => theme.primary}88; /* Using theme primary with transparency */

  @media (max-width: 768px) {
    opacity: 0.35; /* Increased to 0.35 for mobile */
  }
`;

const icons = [LuCode2, LuDatabase, LuGlobe, LuBrain, LuRocket, LuCloud, LuGithub, LuZap, LuCpu, LuLayers];

function random(min, max) { return Math.random() * (max - min) + min; }

const FloatingIconsBackground = ({ count = 18 }) => {
  const items = useMemo(() => (
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      Icon: icons[i % icons.length],
      size: Math.round(random(20, 40)), // Reduced size range from 28-64 to 20-40
      startX: random(0, 100),
      startY: random(0, 100),
      driftX: random(-30, 30), // Reduced drift for subtler movement
      float: random(15, 40), // Reduced float range
      duration: random(12, 25), // Slightly slower for elegance
      delay: random(0, 8),
      rotate: random(-8, 8) // Reduced rotation for subtlety
    }))
  ), [count]);

  return (
    <Wrapper aria-hidden>
      {items.map(({ id, Icon, size, startX, startY, driftX, float, duration, delay, rotate }) => (
        <IconWrapper
          key={id}
          initial={{ x: `${startX}vw`, y: `${startY}vh`, opacity: 0 }}
          animate={{
            x: [`${startX}vw`, `${startX + driftX}vw`, `${startX}vw`],
            y: [`${startY}vh`, `${startY - float}vh`, `${startY}vh`],
            opacity: [0, 0.35, 0.2, 0.35, 0.2], // Updated opacity values to match static opacity
            rotate: [0, rotate, 0]
          }}
          transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon size={size} />
        </IconWrapper>
      ))}
    </Wrapper>
  );
};

export default FloatingIconsBackground;

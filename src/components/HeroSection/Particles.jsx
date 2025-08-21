import React, { useMemo } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const options = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    detectRetina: true,

    particles: {
      number: { value: 50, density: { enable: true, area: 800 } },
      color: { value: ['#854CE6', '#3b82f6', '#22c55e'] },
      shape: { type: ['triangle', 'circle'] },
      opacity: { value: 0.4, random: { enable: true, minimumValue: 0.2 } },
      size: { value: { min: 1, max: 3 } },
      links: { enable: true, distance: 140, color: '#854CE6', opacity: 0.3, width: 1 },
      move: {
        enable: true,
        speed: 1.2,
        direction: 'none',
        outModes: { default: 'bounce' },
        random: false,
        straight: false,
        parallax: { enable: true, force: 10, smooth: 10 }
      }
    },

    interactivity: {
      detectsOn: 'window',
      events: {
        onHover: { enable: true, mode: 'repulse' },
        onClick: { enable: true, mode: 'push' },
        resize: true
      },
      modes: {
        repulse: { distance: 120, duration: 0.4 },
        push: { quantity: 3 }
      }
    }
  }), []);

  const init = async (engine) => { await loadFull(engine); };

  return (
    <Particles id="tsparticles" init={init} options={options} />
  );
};

export default ParticlesBackground;
import confetti from 'canvas-confetti';

// Massive Grand Explosion
export const triggerGrandCelebration = () => {
  const duration = 4.5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 35, spread: 360, ticks: 70, zIndex: 9999 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 60 * (timeLeft / duration);

    // Left cannon
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      colors: ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f72585', '#7209b7', '#4cc9f0', '#ffbe0b']
    });

    // Right cannon
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      colors: ['#ffd166', '#06d6a0', '#118ab2', '#ef476f', '#f72585', '#b5179e', '#7209b7', '#3a0ca3']
    });
  }, 250);
};

// Side cannons blast
export const triggerSideCannons = () => {
  confetti({
    particleCount: 100,
    angle: 60,
    spread: 55,
    origin: { x: 0, y: 0.7 },
    colors: ['#ff007f', '#7928ca', '#00f2fe', '#feca57']
  });
  confetti({
    particleCount: 100,
    angle: 120,
    spread: 55,
    origin: { x: 1, y: 0.7 },
    colors: ['#ff007f', '#7928ca', '#00f2fe', '#feca57']
  });
};

// Candle blown sparkle
export const triggerCandleSparkle = () => {
  confetti({
    particleCount: 80,
    spread: 100,
    origin: { y: 0.6 },
    scalar: 1.2,
    shapes: ['star', 'circle'],
    colors: ['#ffe600', '#ff9900', '#ff0055', '#ffffff']
  });
};

// Heart burst
export const triggerHeartBurst = () => {
  confetti({
    particleCount: 50,
    spread: 80,
    origin: { y: 0.5 },
    shapes: ['circle'],
    colors: ['#ff0a54', '#ff477e', '#ff7096', '#ff5400']
  });
};

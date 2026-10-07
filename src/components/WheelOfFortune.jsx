import React, { useState, useRef } from 'react';
import { Disc, Play, Award, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';
import { triggerSideCannons } from '../utils/confetti';

const segments = [
  { text: 'King For 24 Hrs 👑', color: '#ff2a85', sub: 'Prathi order follow avvalsiందే!' },
  { text: 'Treat Give Gang 🍕', color: '#7209b7', sub: 'Pizza or Shawarma bill needhe!' },
  { text: 'Sing A Song 🎤', color: '#3a0ca3', sub: 'Oka crazy Telugu mass song paadu!' },
  { text: 'Free Biryani 🍗', color: '#4361ee', sub: 'Maa karchu tho full plate Biryani!' },
  { text: 'Goofy Selfie 📸', color: '#4cc9f0', sub: 'Send instantaneous unfiltered photo!' },
  { text: '1 Secret Wish 🧞', color: '#ffbe0b', sub: 'Ask anything, we will fulfill it!' },
];

export default function WheelOfFortune({ friendData }) {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState(null);

  const handleSpin = () => {
    if (spinning) return;
    sound.playPop();
    setSpinning(true);
    setResult(null);

    // Random spin: between 5 to 8 full rotations + random angle
    const extraTurns = Math.floor(Math.random() * 4) + 5;
    const randomIndex = Math.floor(Math.random() * segments.length);
    const segmentAngle = 360 / segments.length;
    // Align index with pointer at top (270 deg or 90 deg offset)
    const targetAngle = 360 - (randomIndex * segmentAngle + segmentAngle / 2);
    const totalRotation = rotation + (extraTurns * 360) + targetAngle;

    setRotation(totalRotation);

    // Sound effects during spin
    let tickCount = 0;
    const ticker = setInterval(() => {
      sound.playPop();
      tickCount++;
      if (tickCount > 12) clearInterval(ticker);
    }, 250);

    setTimeout(() => {
      setSpinning(false);
      setResult(segments[randomIndex]);
      sound.playCheer();
      triggerSideCannons();
    }, 4000);
  };

  return (
    <section className="glass-panel" style={{
      maxWidth: '750px',
      margin: '40px auto',
      padding: '36px 24px',
      textAlign: 'center',
      position: 'relative'
    }}>
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        color: '#ffd166',
        fontWeight: 700,
        fontSize: '13px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        marginBottom: '10px'
      }}>
        <Disc size={16} />
        <span>BIRTHDAY FORTUNE WHEEL</span>
      </div>

      <h2 style={{
        fontSize: 'clamp(24px, 4vw, 34px)',
        fontWeight: 800,
        marginBottom: '8px',
        color: '#fff'
      }}>
        Spin For Your Birthday Fate! 🎡
      </h2>

      <p style={{
        fontSize: '15px',
        color: '#e2d9f3',
        marginBottom: '32px'
      }}>
        Wheel spin chesi ee roju birthday task enti chusko {friendData.nickname || 'Mawa'}!
      </p>

      {/* Wheel Graphic Container */}
      <div style={{
        position: 'relative',
        width: '300px',
        height: '300px',
        margin: '0 auto 28px'
      }}>
        {/* Top Pointer Needle */}
        <div style={{
          position: 'absolute',
          top: '-14px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 0,
          height: 0,
          borderLeft: '14px solid transparent',
          borderRight: '14px solid transparent',
          borderTop: '26px solid #ffd166',
          zIndex: 10,
          filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.6))'
        }} />

        {/* Rotating Disc */}
        <div style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          position: 'relative',
          overflow: 'hidden',
          border: '6px solid rgba(255, 255, 255, 0.4)',
          boxShadow: '0 0 35px rgba(255, 42, 133, 0.5), inset 0 0 20px rgba(0,0,0,0.5)',
          transform: `rotate(${rotation}deg)`,
          transition: spinning ? 'transform 4s cubic-bezier(0.15, 0.9, 0.2, 1)' : 'none'
        }}>
          {/* Conic Gradient wheel for segments */}
          <div style={{
            width: '100%',
            height: '100%',
            background: 'conic-gradient(#ff2a85 0deg 60deg, #7209b7 60deg 120deg, #3a0ca3 120deg 180deg, #4361ee 180deg 240deg, #4cc9f0 240deg 300deg, #ffbe0b 300deg 360deg)'
          }} />

          {/* Segment Labels */}
          {segments.map((seg, i) => {
            const angle = i * 60 + 30;
            return (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transformOrigin: '0 0',
                  transform: `rotate(${angle}deg) translate(28px, -10px)`,
                  width: '110px',
                  color: '#fff',
                  fontSize: '11px',
                  fontWeight: 800,
                  textShadow: '0 1px 3px rgba(0,0,0,0.8)',
                  textAlign: 'left',
                  pointerEvents: 'none'
                }}
              >
                {seg.text}
              </div>
            );
          })}
        </div>

        {/* Center Hub */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #ffd166, #ff7b00)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 900,
          color: '#1a103c',
          boxShadow: '0 0 15px rgba(0,0,0,0.5)',
          border: '3px solid #fff',
          zIndex: 5
        }}>
          ⭐
        </div>
      </div>

      {/* Spin Button */}
      <button
        id="spin-wheel-btn"
        onClick={handleSpin}
        disabled={spinning}
        className="neon-btn"
        style={{
          padding: '14px 32px',
          fontSize: '16px',
          opacity: spinning ? 0.7 : 1,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <Play size={18} fill="#fff" />
        <span>{spinning ? 'SPINNING THE DESTINY... 🌀' : 'SPIN THE WHEEL! 🎡'}</span>
      </button>

      {/* Result Card */}
      {result && (
        <div style={{
          marginTop: '28px',
          padding: '20px',
          borderRadius: '18px',
          background: 'rgba(255, 255, 255, 0.1)',
          border: `2px solid ${result.color}`,
          boxShadow: `0 0 25px ${result.color}55`,
          animation: 'bounceSlow 1.5s infinite alternate'
        }}>
          <div style={{ fontSize: '13px', color: '#ffd166', fontWeight: 800, letterSpacing: '1px' }}>
            🎉 WHEEL OF FATE HAS SPOKEN! 🎉
          </div>
          <div style={{ fontSize: '24px', fontWeight: 900, color: '#fff', margin: '6px 0' }}>
            {result.text}
          </div>
          <div style={{ fontSize: '14px', color: '#e2d9f3' }}>
            {result.sub}
          </div>
        </div>
      )}
    </section>
  );
}

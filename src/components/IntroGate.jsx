import React, { useState } from 'react';
import { Lock, Sparkles, AlertTriangle, PartyPopper, Heart } from 'lucide-react';
import { sound } from '../utils/audio';
import { triggerGrandCelebration } from '../utils/confetti';

export default function IntroGate({ friendData, onUnlock }) {
  const [isOpening, setIsOpening] = useState(false);
  const [countdown, setCountdown] = useState(null);

  const handleDetonate = () => {
    sound.init();
    sound.playPartyHorn();
    setIsOpening(true);

    // 3, 2, 1 Countdown effect
    let count = 3;
    setCountdown(count);

    const timer = setInterval(() => {
      count -= 1;
      if (count > 0) {
        sound.playPop();
        setCountdown(count);
      } else {
        clearInterval(timer);
        setCountdown('HAPPY BIRTHDAY! 🚀');
        sound.playCheer();
        triggerGrandCelebration();

        setTimeout(() => {
          onUnlock();
        }, 1100);
      }
    }, 700);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'radial-gradient(circle at center, #1b0a38 0%, #060210 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      textAlign: 'center',
      overflow: 'hidden'
    }}>
      {/* Background ambient glow circles */}
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 42, 133, 0.25) 0%, transparent 70%)',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        filter: 'blur(50px)',
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '560px',
        width: '100%',
        position: 'relative',
        zIndex: 2,
        padding: '36px 24px',
        borderRadius: '28px',
        background: 'rgba(26, 14, 56, 0.75)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 42, 133, 0.35)',
        boxShadow: '0 25px 60px rgba(0,0,0,0.6), 0 0 30px rgba(255,42,133,0.3)'
      }}>
        {/* Warning Tag */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(255, 123, 0, 0.15)',
          border: '1px solid rgba(255, 123, 0, 0.4)',
          padding: '6px 16px',
          borderRadius: '999px',
          fontSize: '13px',
          fontWeight: 700,
          color: '#ffd166',
          marginBottom: '20px',
          letterSpacing: '1px'
        }}>
          <AlertTriangle size={15} color="#ffd166" />
          <span>TOP SECRET BIRTHDAY PROTOCOL</span>
        </div>

        {/* Lock Icon Box */}
        <div style={{
          width: '84px',
          height: '84px',
          margin: '0 auto 20px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #ff2a85, #9d4edd)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 35px rgba(255, 42, 133, 0.6)',
          animation: 'pulseGlow 2.5s infinite ease-in-out'
        }}>
          {isOpening ? (
            <PartyPopper size={42} color="#fff" />
          ) : (
            <Lock size={38} color="#fff" />
          )}
        </div>

        <h1 style={{
          fontSize: 'clamp(26px, 5vw, 36px)',
          fontWeight: 900,
          color: '#fff',
          marginBottom: '12px',
          fontFamily: "'Outfit', sans-serif",
          lineHeight: 1.2
        }}>
          Attention, <span style={{ 
            background: 'linear-gradient(90deg, #00f5d4, #ff2a85, #ffd166)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 20px rgba(0,245,212,0.4)'
          }}>{friendData.name || 'Birthday Hero'}</span>!
        </h1>

        <p style={{
          fontSize: '16px',
          color: '#e2d9f3',
          lineHeight: 1.6,
          marginBottom: '28px',
          maxWidth: '440px',
          margin: '0 auto 28px'
        }}>
          Ee link evaru padithe vallu open cheyoddu ani warning undi! 🚨 Only world-level best friend kosame create chesina exclusive surprise zone idhi. Ready gaa unnava?
        </p>

        {countdown !== null ? (
          <div style={{
            padding: '20px',
            fontSize: typeof countdown === 'number' ? '54px' : '26px',
            fontWeight: 900,
            fontFamily: "'Bungee', cursive",
            color: '#ffd166',
            textShadow: '0 0 25px rgba(255, 209, 102, 0.8)',
            animation: 'bounceSlow 0.6s infinite alternate'
          }}>
            {countdown}
          </div>
        ) : (
          <button
            id="detonate-surprise-btn"
            onClick={handleDetonate}
            className="neon-btn"
            style={{
              width: '100%',
              padding: '18px 28px',
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              cursor: 'pointer'
            }}
          >
            <Sparkles size={22} />
            <span>OPEN MY BIRTHDAY SURPRISE 🎁</span>
          </button>
        )}

        <div style={{
          marginTop: '20px',
          fontSize: '13px',
          color: 'rgba(255, 255, 255, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px'
        }}>
          <Heart size={13} color="#ff2a85" fill="#ff2a85" />
          <span>Made specially for you with 1000% pure love & craziness</span>
        </div>
      </div>
    </div>
  );
}

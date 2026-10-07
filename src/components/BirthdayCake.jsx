import React, { useState } from 'react';
import { Sparkles, Wind, RotateCcw, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/audio';
import { triggerCandleSparkle, triggerSideCannons } from '../utils/confetti';

export default function BirthdayCake() {
  // 5 candles on top
  const [candles, setCandles] = useState([true, true, true, true, true]);
  const [wishMade, setWishMade] = useState(false);

  const allBlown = candles.every((c) => !c);

  const handleBlowSingle = (index) => {
    if (!candles[index]) return;
    sound.playBlow();
    sound.playPop();

    const newCandles = [...candles];
    newCandles[index] = false;
    setCandles(newCandles);

    if (newCandles.every((c) => !c)) {
      handleAllBlownCelebration();
    }
  };

  const handleBlowAll = () => {
    sound.playBlow();
    setCandles([false, false, false, false, false]);
    handleAllBlownCelebration();
  };

  const handleAllBlownCelebration = () => {
    setTimeout(() => {
      sound.playCheer();
      triggerCandleSparkle();
      triggerSideCannons();
      setWishMade(true);
    }, 250);
  };

  const handleRelight = () => {
    sound.playChime();
    setCandles([true, true, true, true, true]);
    setWishMade(false);
  };

  return (
    <section className="glass-panel" style={{
      maxWidth: '720px',
      margin: '40px auto',
      padding: '38px 24px',
      textAlign: 'center',
      position: 'relative'
    }}>
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        color: '#ff2a85',
        fontWeight: 700,
        fontSize: '13px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        marginBottom: '10px'
      }}>
        <Sparkles size={16} />
        <span>VIRTUAL CAKE CEREMONY</span>
      </div>

      <h2 style={{
        fontSize: 'clamp(24px, 4vw, 34px)',
        fontWeight: 800,
        marginBottom: '8px',
        color: '#fff'
      }}>
        Blow The Candles & Make A Direction Wish! 🎂💨
      </h2>

      <p style={{
        fontSize: '15px',
        color: '#e2d9f3',
        marginBottom: '32px'
      }}>
        {allBlown
          ? '🎉 All candles blown! Your 26th Birthday Blockbuster Wish is locked in!'
          : 'Candles pai click cheyyi or "Blow All Candles" tho candles aarpedam! 💨'}
      </p>

      {/* 3D CSS Layered Cake Container */}
      <div style={{
        position: 'relative',
        width: '280px',
        height: '240px',
        margin: '0 auto 30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end'
      }}>
        {/* CANDLES ROW */}
        <div style={{
          position: 'absolute',
          top: '30px',
          display: 'flex',
          gap: '24px',
          zIndex: 5
        }}>
          {candles.map((isLit, idx) => (
            <div
              key={idx}
              id={`candle-${idx}`}
              onClick={() => handleBlowSingle(idx)}
              style={{
                cursor: isLit ? 'pointer' : 'default',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transition: 'transform 0.2s ease'
              }}
              title={isLit ? "Click to blow this candle!" : "Candle blown out"}
            >
              {/* Flame or Smoke */}
              <div style={{ height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {isLit ? (
                  <div style={{
                    width: '12px',
                    height: '20px',
                    background: 'radial-gradient(ellipse at bottom, #fff700 0%, #ff5e00 65%, rgba(255,0,0,0) 100%)',
                    borderRadius: '50% 50% 35% 35%',
                    boxShadow: '0 0 14px #ff9900, 0 0 25px #ff4500',
                    animation: 'flameFlicker 0.6s infinite ease-in-out',
                    transformOrigin: 'bottom center'
                  }} />
                ) : (
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.4)',
                    animation: 'smokeRise 1.2s infinite ease-out'
                  }} />
                )}
              </div>

              {/* Candle Wick */}
              <div style={{
                width: '2px',
                height: '7px',
                background: '#444'
              }} />

              {/* Candle Body */}
              <div style={{
                width: '12px',
                height: '42px',
                borderRadius: '3px',
                background: idx % 2 === 0
                  ? 'repeating-linear-gradient(45deg, #ff2a85, #ff2a85 4px, #ffffff 4px, #ffffff 8px)'
                  : 'repeating-linear-gradient(45deg, #00f5d4, #00f5d4 4px, #ffffff 4px, #ffffff 8px)',
                boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
              }} />
            </div>
          ))}
        </div>

        {/* TOP CAKE LAYER */}
        <div style={{
          width: '180px',
          height: '65px',
          background: 'linear-gradient(180deg, #ff6b9d 0%, #c41e5e 100%)',
          borderRadius: '16px 16px 10px 10px',
          position: 'relative',
          boxShadow: 'inset 0 6px 10px rgba(255,255,255,0.4), 0 5px 12px rgba(0,0,0,0.3)',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          zIndex: 3
        }}>
          {/* Cream Drips */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '18px',
            background: '#ffffff',
            borderRadius: '14px 14px 8px 8px',
            boxShadow: '0 3px 6px rgba(0,0,0,0.1)'
          }} />
          <div style={{
            position: 'absolute',
            top: '-8px',
            left: '20px',
            fontSize: '14px'
          }}>🍓</div>
          <div style={{
            position: 'absolute',
            top: '-8px',
            right: '20px',
            fontSize: '14px'
          }}>🎬</div>
        </div>

        {/* BOTTOM CAKE LAYER */}
        <div style={{
          width: '250px',
          height: '85px',
          background: 'linear-gradient(180deg, #9d4edd 0%, #5a189a 100%)',
          borderRadius: '18px 18px 14px 14px',
          position: 'relative',
          boxShadow: 'inset 0 6px 12px rgba(255,255,255,0.35), 0 10px 25px rgba(0,0,0,0.4)',
          border: '2px solid rgba(255, 255, 255, 0.15)',
          marginTop: '-6px',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '18px',
            background: 'linear-gradient(180deg, #ffe6f0, #ffb3d9)',
            borderRadius: '14px 14px 8px 8px'
          }} />
          <span style={{
            fontSize: '13px',
            fontWeight: 800,
            letterSpacing: '1px',
            color: '#ffd166',
            marginTop: '12px',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)'
          }}>
            🎬 DIRECTOR GANESH • 26 🎬
          </span>
        </div>

        {/* CAKE PLATE */}
        <div style={{
          width: '280px',
          height: '16px',
          background: 'linear-gradient(180deg, #d8d8d8 0%, #888888 100%)',
          borderRadius: '50%',
          marginTop: '-4px',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6)',
          zIndex: 1
        }} />
      </div>

      {/* Action Controls */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
        {!allBlown ? (
          <button
            id="blow-all-candles-btn"
            onClick={handleBlowAll}
            className="neon-btn"
            style={{
              padding: '12px 24px',
              fontSize: '15px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Wind size={18} />
            <span>Blow All Candles! 💨</span>
          </button>
        ) : (
          <button
            id="relight-candles-btn"
            onClick={handleRelight}
            className="neon-btn-secondary"
            style={{
              padding: '12px 24px',
              fontSize: '15px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <RotateCcw size={18} color="#00f5d4" />
            <span>Relight Candles 🔥</span>
          </button>
        )}
      </div>

      {/* Wish Unlocked Banner */}
      {wishMade && (
        <div style={{
          marginTop: '24px',
          padding: '16px 20px',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, rgba(0, 245, 212, 0.15), rgba(255, 42, 133, 0.15))',
          border: '1px solid rgba(0, 245, 212, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          animation: 'bounceSlow 2s infinite ease-in-out'
        }}>
          <CheckCircle2 size={24} color="#00f5d4" />
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 800, color: '#00f5d4', fontSize: '15px' }}>
              BLOCKBUSTER WISH GRANTED! ✨🎬
            </div>
            <div style={{ fontSize: '13px', color: '#e2d9f3' }}>
              Ee 26th year lo nee Cinema Direction dreams anni 100x speed tho reality avvali ani Universe confirm chesindi! 🚀🎥
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

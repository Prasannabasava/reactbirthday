import React, { useMemo } from 'react';

const balloonColors = ['#ff2a85', '#00f5d4', '#ffd166', '#9d4edd', '#ff7b00', '#4cc9f0'];

export default function FloatingBalloons({ discoMode }) {
  const floatingItems = useMemo(() => {
    // Mixed items: Ganesh single photos, brothers photo, and festive director & party emojis
    const items = [
      { type: 'image', src: '/single1.jpeg', border: '#ffd166', glow: 'rgba(255, 209, 102, 0.6)', size: 54 },
      { type: 'emoji', val: '🎈', color: '#ff2a85', size: 38 },
      { type: 'image', src: '/brothers.jpeg', border: '#00f5d4', glow: 'rgba(0, 245, 212, 0.6)', size: 56 },
      { type: 'emoji', val: '🎬', color: '#ffd166', size: 36 },
      { type: 'image', src: '/single2.jpeg', border: '#ff2a85', glow: 'rgba(255, 42, 133, 0.6)', size: 52 },
      { type: 'emoji', val: '🎂', color: '#9d4edd', size: 38 },
      { type: 'image', src: '/single1.jpeg', border: '#00f5d4', glow: 'rgba(0, 245, 212, 0.5)', size: 48 },
      { type: 'emoji', val: '✨', color: '#ffd166', size: 32 },
      { type: 'image', src: '/brothers.jpeg', border: '#ff7b00', glow: 'rgba(255, 123, 0, 0.6)', size: 52 },
      { type: 'emoji', val: '🍿', color: '#ff2a85', size: 34 },
      { type: 'image', src: '/single2.jpeg', border: '#ffd166', glow: 'rgba(255, 209, 102, 0.6)', size: 50 },
      { type: 'emoji', val: '🎉', color: '#4cc9f0', size: 36 },
      { type: 'emoji', val: '💖', color: '#ff2a85', size: 34 },
      { type: 'image', src: '/brothers.jpeg', border: '#9d4edd', glow: 'rgba(157, 78, 221, 0.6)', size: 54 }
    ];

    return items.map((item, idx) => ({
      ...item,
      id: idx,
      left: `${(idx * 7.2 + 3) % 94}%`,
      delay: `${(idx * 1.3) % 11}s`,
      duration: `${13 + (idx % 4) * 2}s`
    }));
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {/* Laser beams if Disco Mode is active */}
      {discoMode && (
        <>
          <div style={{
            position: 'absolute',
            top: 0,
            left: '20%',
            width: '4px',
            height: '100%',
            background: 'linear-gradient(to bottom, #ff007f, transparent)',
            boxShadow: '0 0 25px #ff007f',
            transform: 'rotate(-25deg)',
            transformOrigin: 'top center',
            animation: 'bounceSlow 1s infinite alternate'
          }} />
          <div style={{
            position: 'absolute',
            top: 0,
            right: '25%',
            width: '4px',
            height: '100%',
            background: 'linear-gradient(to bottom, #00f5d4, transparent)',
            boxShadow: '0 0 25px #00f5d4',
            transform: 'rotate(25deg)',
            transformOrigin: 'top center',
            animation: 'bounceSlow 1.2s infinite alternate'
          }} />
        </>
      )}

      {/* Floating miniature photo bubbles and party emojis */}
      {floatingItems.map((item) => (
        <div
          key={item.id}
          className="balloon-wrapper"
          style={{
            left: item.left,
            animationDelay: item.delay,
            animationDuration: item.duration,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {item.type === 'image' ? (
            /* Glowing Miniature Photo Bubble */
            <div style={{
              width: `${item.size}px`,
              height: `${item.size}px`,
              borderRadius: '50%',
              backgroundImage: `url(${item.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              border: `2.5px solid ${item.border}`,
              boxShadow: `0 0 18px ${item.glow}, 0 6px 15px rgba(0,0,0,0.5)`,
              position: 'relative'
            }}>
              {/* Cute mini sparkle pin */}
              <div style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                fontSize: '11px'
              }}>
                ✨
              </div>
            </div>
          ) : (
            /* Festive Party & Director Emoji */
            <span style={{
              fontSize: `${item.size}px`,
              filter: `drop-shadow(0 0 10px ${item.color})`
            }}>
              {item.val}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

import React from 'react';
import { Camera, Film } from 'lucide-react';

export default function MemoryVault() {
  const memories = [
    {
      id: 1,
      image: '/single1.jpeg',
      title: 'The Director Speaks 🎬',
      caption: 'Visionary mind, stylish presence! Future Pan-India Director Ganesh in the making!',
      date: 'Chapter 26 Begins',
      rotate: '-2deg'
    },
    {
      id: 2,
      image: '/single2.jpeg',
      title: 'Lights, Camera, Gani! 🎥',
      caption: 'Cinema is not just a dream, it is pure passion! Swag and confidence on point!',
      date: 'Silver Screen Dreams',
      rotate: '2deg'
    },
    {
      id: 3,
      image: '/brothers.jpeg',
      title: 'The Brothers Army 🔥',
      caption: 'Brothers for life! Manam kalisthe energy peak level lo untundi!',
      date: 'Forever Gang',
      rotate: '-1.5deg'
    },
    {
      id: 4,
      image: '/family.jpeg',
      title: 'Family — The Roots ❤️',
      caption: 'Unconditional love, eternal blessings! The biggest backbone in life.',
      date: 'Pure Love',
      rotate: '2.5deg'
    }
  ];

  return (
    <section className="glass-panel" style={{
      maxWidth: '960px',
      margin: '60px auto 30px',
      padding: '40px 24px',
      textAlign: 'center'
    }}>
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        color: '#ff2a85',
        fontWeight: 800,
        fontSize: '13px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        marginBottom: '10px'
      }}>
        <Film size={16} />
        <span>DIRECTOR GANESH MEMORY REELS</span>
      </div>

      <h2 style={{
        fontSize: 'clamp(24px, 4vw, 38px)',
        fontWeight: 900,
        marginBottom: '8px',
        color: '#fff'
      }}>
        Polaroid Memory Wall 📸🎞️
      </h2>

      <p style={{
        fontSize: '15px',
        color: '#e2d9f3',
        marginBottom: '36px'
      }}>
        Ganesh 26 years golden moments — passion, brotherhood, and family:
      </p>

      {/* Polaroid Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
        gap: '24px',
        padding: '10px 0'
      }}>
        {memories.map((mem) => (
          <div
            key={mem.id}
            style={{
              background: '#ffffff',
              borderRadius: '12px',
              padding: '14px 14px 22px 14px',
              boxShadow: '0 14px 30px rgba(0,0,0,0.4)',
              transform: `rotate(${mem.rotate})`,
              transition: 'transform 0.3s ease',
              position: 'relative',
              color: '#1a103c',
              textAlign: 'center'
            }}
          >
            {/* Tape Sticker */}
            <div style={{
              position: 'absolute',
              top: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '18px',
              background: 'rgba(255, 235, 150, 0.88)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
              borderRadius: '2px',
              zIndex: 2
            }} />

            {/* Photo Graphic */}
            <div style={{
              width: '100%',
              height: '220px',
              borderRadius: '8px',
              backgroundImage: `url(${mem.image})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              marginBottom: '14px',
              position: 'relative',
              boxShadow: 'inset 0 0 10px rgba(0,0,0,0.2)'
            }} />

            {/* Title & Caption */}
            <div style={{
              fontFamily: "'Caveat', cursive",
              fontSize: '22px',
              fontWeight: 700,
              color: '#110b29',
              lineHeight: 1.2,
              marginBottom: '4px'
            }}>
              {mem.title}
            </div>

            <div style={{
              fontSize: '11px',
              color: '#6b7280',
              fontWeight: 800,
              letterSpacing: '0.5px',
              marginBottom: '8px'
            }}>
              {mem.date}
            </div>

            <div style={{
              fontSize: '12.5px',
              color: '#374151',
              lineHeight: 1.45,
              paddingTop: '6px',
              borderTop: '1px dashed #e5e7eb'
            }}>
              "{mem.caption}"
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

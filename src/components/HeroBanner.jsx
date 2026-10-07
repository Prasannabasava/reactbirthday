import React from 'react';
import { Crown, Flame, ChevronDown, Film } from 'lucide-react';

export default function HeroBanner() {
  return (
    <header style={{
      textAlign: 'center',
      padding: '45px 16px 25px',
      position: 'relative',
      maxWidth: '960px',
      margin: '0 auto'
    }}>
      {/* Floating Badges */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        flexWrap: 'wrap',
        marginBottom: '22px'
      }}>
        <span className="glass-pill" style={{
          padding: '6px 18px',
          fontSize: '13px',
          fontWeight: 700,
          color: '#ffd166',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          boxShadow: '0 0 15px rgba(255, 209, 102, 0.25)'
        }}>
          <Crown size={15} color="#ffd166" />
          <span>CAPTAIN OF THE SHIP 🎬</span>
        </span>

        <span className="glass-pill" style={{
          padding: '6px 18px',
          fontSize: '13px',
          fontWeight: 700,
          color: '#00f5d4',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <Film size={15} color="#00f5d4" />
          <span>Future Blockbuster Director</span>
        </span>

        <span className="glass-pill" style={{
          padding: '6px 18px',
          fontSize: '13px',
          fontWeight: 700,
          color: '#ff2a85',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <Flame size={15} color="#ff2a85" />
          <span>Level 26 Unlocked 🚀 (Turning 26!)</span>
        </span>
      </div>

      {/* Main Title */}
      <h1 style={{
        fontSize: 'clamp(38px, 7.5vw, 76px)',
        fontWeight: 900,
        fontFamily: "'Outfit', sans-serif",
        lineHeight: 1.1,
        marginBottom: '22px',
        letterSpacing: '-1px'
      }}>
        HAPPY BIRTHDAY <br />
        <span style={{
          background: 'linear-gradient(90deg, #ff2a85, #ffd166, #00f5d4, #9d4edd)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 0 35px rgba(255, 42, 133, 0.5))',
          display: 'inline-block',
          animation: 'bounceSlow 3s ease-in-out infinite'
        }}>
          DIRECTOR GANESH! 🎬🎉
        </span>
      </h1>

      {/* Heartfelt Birthday Message */}
      <div style={{
        maxWidth: '780px',
        margin: '0 auto 36px',
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.04)',
        border: '1px solid rgba(255, 215, 0, 0.25)',
        borderRadius: '24px',
        padding: '28px 24px',
        boxShadow: '0 15px 35px rgba(0,0,0,0.35)',
        backdropFilter: 'blur(10px)'
      }}>
        <h2 style={{
          fontSize: 'clamp(20px, 3.5vw, 26px)',
          fontWeight: 900,
          color: '#ffd166',
          marginBottom: '16px',
          fontFamily: "'Outfit', sans-serif"
        }}>
          Janmadina Subhakankshalu Gani! 🥳❤️
        </h2>

        <p style={{
          fontSize: 'clamp(15px, 2.2vw, 17.5px)',
          color: '#f3e8ff',
          lineHeight: 1.8,
          marginBottom: '14px'
        }}>
          25 nunchi 26 loki adugupeduthunna ee special occasion lo, nee life antha santosham, prema, success tho nindipovali ani manaspoorthiga korukuntunnam. ✨
        </p>

        <p style={{
          fontSize: 'clamp(15px, 2.2vw, 17.5px)',
          color: '#f3e8ff',
          lineHeight: 1.8,
          marginBottom: '14px'
        }}>
          Nee kosam nee <b style={{ color: '#00f5d4' }}>family, brothers & Ammamma</b> kalisi prematho decorate chesina ee special world lo, ee roju nee face meeda unde smile eppudu ilage undali. ❤️
        </p>

        <p style={{
          fontSize: 'clamp(15px, 2.2vw, 17.5px)',
          color: '#f3e8ff',
          lineHeight: 1.8,
          marginBottom: '18px'
        }}>
          Nee life lo ilanti beautiful moments inkenno raavali, nuvvu anukunna prathi korika neraverali, eppudu healthy ga, happy ga undali.
        </p>

        <div style={{
          paddingTop: '16px',
          borderTop: '1px dashed rgba(255, 215, 0, 0.3)',
          fontSize: 'clamp(16px, 2.4vw, 19px)',
          fontWeight: 800,
          color: '#ffd166'
        }}>
          Happy Birthday Gani! 🎂🥳❤️<br />
          <span style={{ fontSize: '15px', color: '#e2d9f3', fontWeight: 600 }}>
            Ee special day nee life lo eppatiki marchipoleni oka beautiful memory ga migilipovali! 🫂✨
          </span>
        </div>
      </div>

      {/* Elegant animated scroll indicator */}
      <div style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        color: '#00f5d4',
        fontSize: '13px',
        fontWeight: 700,
        letterSpacing: '1px',
        animation: 'bounceSlow 1.8s infinite ease-in-out'
      }}>
        <span>SCROLL DOWN FOR AMMAMMA BLESSINGS & FAMILY CELEBRATION</span>
        <ChevronDown size={20} color="#00f5d4" />
      </div>
    </header>
  );
}

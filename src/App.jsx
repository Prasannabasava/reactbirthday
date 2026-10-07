import React, { useState, useEffect } from 'react';
import HeroBanner from './components/HeroBanner';
import BirthdayCake from './components/BirthdayCake';
import AmmammaBlessings from './components/AmmammaBlessings';
import CousinsFamilyBonding from './components/CousinsFamilyBonding';
import SurpriseBoxes from './components/SurpriseBoxes';
import MemoryVault from './components/MemoryVault';
import FriendsSquad from './components/FriendsSquad';
import HeartfeltLetter from './components/HeartfeltLetter';
import FloatingBalloons from './components/FloatingBalloons';
import BGMPlayer from './components/BGMPlayer';
import { triggerGrandCelebration } from './utils/confetti';
import { Heart, Clapperboard, Share2, Check } from 'lucide-react';


export default function App() {
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    // Celebration confetti burst on load
    triggerGrandCelebration();
  }, []);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div style={{
      minHeight: '100vh',
      position: 'relative',
      overflowX: 'hidden'
    }}>
      {/* Floating Devara Cinematic BGM Player with Controls */}
      <BGMPlayer />

      {/* Floating background celebratory balloons with photos */}
      <FloatingBalloons discoMode={false} />

      {/* Main Continuous Flowing Cinematic Birthday Journey */}
      <main style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1080px',
        margin: '0 auto',
        padding: '20px 16px 80px'
      }}>
        {/* 1. Grand Hero Entrance Banner for Director Ganesh (Turning 26) */}
        <HeroBanner />

        {/* 2. Interactive Birthday Cake (Only clickable element: blow the candles!) */}
        <BirthdayCake />

        {/* 3. Sacred Heavenly Ammamma Blessings with real ammamma.jpeg */}
        <AmmammaBlessings />

        {/* 4. The Brothers Squad & Family Pride with real brothers.jpeg & family.jpeg */}
        <CousinsFamilyBonding />

        {/* 5. Complete Storyline: Certificate, Director Vouchers, Roasts & GCU Movie Lineup */}
        <SurpriseBoxes />

        {/* 6. Polaroid Memories Wall with single1.jpeg, single2.jpeg, brothers.jpeg & family.jpeg */}
        <MemoryVault />

        {/* 7. The Friends Gang Vault & Adda Rules */}
        <FriendsSquad />

        {/* 8. Manasu Lo Nunchi Oka Letter (Closing Heart Climax) */}
        <HeartfeltLetter />

        {/* Footer */}
        <footer style={{
          marginTop: '70px',
          textAlign: 'center',
          padding: '30px 20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '14px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: '15px',
            color: '#e2d9f3'
          }}>
            <Clapperboard size={18} color="#ffd166" />
            <span>Crafted with</span>
            <Heart size={16} color="#ffd166" fill="#ffd166" />
            <span>and endless family & brothers pride for</span>
            <b style={{ color: '#ffd166' }}>Director Ganesh</b>!
          </div>

          <button
            onClick={handleShare}
            className="neon-btn-secondary"
            style={{
              padding: '8px 18px',
              fontSize: '13px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            {copiedLink ? <Check size={14} color="#00f5d4" /> : <Share2 size={14} />}
            <span>{copiedLink ? 'Link Copied! 📋' : 'Share Surprise Link 🔗'}</span>
          </button>
        </footer>
      </main>
    </div>
  );
}

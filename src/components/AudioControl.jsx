import React, { useState } from 'react';
import { Volume2, VolumeX, Music, Disc3, Settings, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

export default function AudioControl({ 
  discoMode, 
  setDiscoMode, 
  onOpenSettings,
  isPlayingTune,
  setIsPlayingTune 
}) {
  const [isMuted, setIsMuted] = useState(false);

  const handleToggleTune = () => {
    sound.init();
    if (isPlayingTune) {
      sound.stopBirthdayTune();
      setIsPlayingTune(false);
    } else {
      setIsPlayingTune(true);
      sound.playBirthdayTune(() => {
        setIsPlayingTune(false);
      });
    }
  };

  const handleToggleDisco = () => {
    setDiscoMode(!discoMode);
  };

  return (
    <nav aria-label="Controls" style={{
      position: 'fixed',
      top: '16px',
      right: '16px',
      zIndex: 999,
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }}>
      {/* Disco Mode Toggle */}
      <button
        id="disco-mode-toggle"
        onClick={handleToggleDisco}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '8px 14px',
          borderRadius: '9999px',
          background: discoMode 
            ? 'linear-gradient(135deg, #ff007f, #00f5d4)' 
            : 'rgba(255, 255, 255, 0.12)',
          color: '#fff',
          border: discoMode ? '1px solid #fff' : '1px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          cursor: 'pointer',
          fontWeight: 700,
          fontSize: '12.5px',
          boxShadow: discoMode ? '0 0 20px rgba(255, 0, 127, 0.6)' : 'none',
          transition: 'all 0.3s ease'
        }}
        title="Toggle Disco Laser Mode"
      >
        <Disc3 size={15} style={{ animation: discoMode ? 'spinSlow 2s linear infinite' : 'none' }} />
        <span>{discoMode ? 'DISCO ON' : '🪩 Disco Lights'}</span>
      </button>

      {/* Birthday Music Toggle */}
      <button
        id="birthday-tune-toggle"
        onClick={handleToggleTune}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '8px 14px',
          borderRadius: '9999px',
          background: isPlayingTune 
            ? 'linear-gradient(135deg, #00f5d4, #7928ca)' 
            : 'rgba(255, 255, 255, 0.12)',
          color: '#fff',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          cursor: 'pointer',
          fontWeight: 700,
          fontSize: '12.5px',
          transition: 'all 0.3s ease'
        }}
        title="Play / Pause Birthday Music"
      >
        <Music size={15} />
        <span>{isPlayingTune ? '🎵 Music Playing' : '🎶 Play Music'}</span>
      </button>

      {/* Customize & Upload Photos */}
      <button
        id="customize-settings-toggle"
        onClick={onOpenSettings}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '8px 16px',
          borderRadius: '9999px',
          background: 'linear-gradient(135deg, #ffd166, #ff7b00)',
          color: '#1a0033',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 800,
          fontSize: '12.5px',
          boxShadow: '0 4px 15px rgba(255, 209, 102, 0.4)',
          transition: 'all 0.3s ease'
        }}
      >
        <Settings size={14} />
        <span>Photos & Names</span>
      </button>
    </nav>
  );
}

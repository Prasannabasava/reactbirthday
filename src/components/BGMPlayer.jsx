import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Music2, Flame, ChevronDown } from 'lucide-react';
import { sound } from '../utils/audio';

const TRACKS = [
  {
    id: 'devara-bgm',
    title: 'Devara BGM (All Hail The Tiger)',
    movie: 'Devara: Part 1',
    src: '/devara_bgm.mp3',
    badge: '🔥 Devara Mass BGM'
  },
  {
    id: 'devara-fear',
    title: 'Devara - Fear Song (OST)',
    movie: 'Devara: Part 1',
    src: '/devara_fear_song.mp3',
    badge: '⚡ Anirudh Beat'
  },
  {
    id: 'birthday-classic',
    title: 'Birthday Celebration Melody',
    movie: 'Classic Tune',
    src: '/birthday_song.wav',
    badge: '🎂 Birthday Beat'
  }
];

export default function BGMPlayer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showTrackMenu, setShowTrackMenu] = useState(false);
  const audioRef = useRef(null);

  const currentTrack = TRACKS[currentTrackIndex];

  // Initialize and handle autoplay
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.75;

    const tryPlay = () => {
      sound.resume();
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            cleanupListeners();
          })
          .catch(() => {
            // Autoplay waiting for user gesture
          });
      }
    };

    // Try playing immediately
    tryPlay();

    // Listen to first user gestures
    const interactionEvents = ['pointerdown', 'touchstart', 'click', 'keydown', 'scroll'];
    const onUserInteraction = () => {
      tryPlay();
    };

    const cleanupListeners = () => {
      interactionEvents.forEach((ev) => {
        window.removeEventListener(ev, onUserInteraction);
      });
    };

    interactionEvents.forEach((ev) => {
      window.addEventListener(ev, onUserInteraction, { passive: true });
    });

    return () => {
      cleanupListeners();
    };
  }, []);

  // When track changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.load();
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [currentTrackIndex]);

  const togglePlay = () => {
    sound.resume();
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(console.warn);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    const nextMuted = !isMuted;
    audio.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleSelectTrack = (index) => {
    setCurrentTrackIndex(index);
    setShowTrackMenu(false);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={currentTrack.src}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        style={{ display: 'none' }}
      />

      {/* Floating Devara BGM Player Pill */}
      <aside aria-label="BGM Player" style={{
        position: 'fixed',
        top: '16px',
        right: '16px',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '6px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(15, 8, 30, 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1.5px solid rgba(255, 123, 0, 0.45)',
          boxShadow: isPlaying 
            ? '0 0 25px rgba(255, 123, 0, 0.4), 0 8px 30px rgba(0, 0, 0, 0.6)' 
            : '0 4px 20px rgba(0, 0, 0, 0.5)',
          padding: '6px 10px',
          borderRadius: '9999px',
          transition: 'all 0.3s ease'
        }}>
          {/* Flame / Animated Equalizer Badge */}
          <button
            onClick={() => setShowTrackMenu(!showTrackMenu)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: '#ffd166',
              padding: '4px 6px',
              borderRadius: '9999px',
              fontSize: '12px',
              fontWeight: 700
            }}
            title="Change Track"
          >
            <Flame 
              size={16} 
              color="#ff7b00" 
              fill="#ff7b00"
              style={{
                filter: 'drop-shadow(0 0 6px #ff7b00)',
                animation: isPlaying ? 'pulseGlow 1.5s infinite alternate' : 'none'
              }}
            />
            <span style={{
              maxWidth: '150px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              color: '#ffffff',
              fontSize: '12px',
              letterSpacing: '0.2px'
            }}>
              {currentTrack.badge}
            </span>

            {/* Equalizer Wave Bars */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-end',
              gap: '2px',
              height: '14px',
              marginLeft: '2px'
            }}>
              <span style={{
                width: '3px',
                height: isPlaying ? '14px' : '4px',
                background: '#ffd166',
                borderRadius: '2px',
                animation: isPlaying ? 'equalizer1 0.8s ease-in-out infinite alternate' : 'none'
              }} />
              <span style={{
                width: '3px',
                height: isPlaying ? '10px' : '4px',
                background: '#ff7b00',
                borderRadius: '2px',
                animation: isPlaying ? 'equalizer2 0.6s ease-in-out infinite alternate' : 'none'
              }} />
              <span style={{
                width: '3px',
                height: isPlaying ? '14px' : '4px',
                background: '#ff2a85',
                borderRadius: '2px',
                animation: isPlaying ? 'equalizer3 0.9s ease-in-out infinite alternate' : 'none'
              }} />
            </div>

            <ChevronDown size={14} color="#ffd166" style={{
              transform: showTrackMenu ? 'rotate(180deg)' : 'none',
              transition: 'transform 0.2s ease'
            }} />
          </button>

          <div style={{ width: '1px', height: '16px', background: 'rgba(255, 255, 255, 0.2)' }} />

          {/* Play / Pause Toggle Button */}
          <button
            id="bgm-play-pause-btn"
            onClick={togglePlay}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              background: isPlaying 
                ? 'linear-gradient(135deg, #ff7b00, #ff2a85)' 
                : 'rgba(255, 255, 255, 0.15)',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer',
              boxShadow: isPlaying ? '0 0 12px rgba(255, 123, 0, 0.6)' : 'none',
              transition: 'all 0.2s ease'
            }}
            title={isPlaying ? 'Pause BGM' : 'Play Devara BGM'}
          >
            {isPlaying ? <Pause size={14} fill="#fff" /> : <Play size={14} fill="#fff" style={{ marginLeft: '2px' }} />}
          </button>

          {/* Mute Toggle */}
          <button
            onClick={toggleMute}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: 'transparent',
              border: 'none',
              color: isMuted ? '#ff4d6d' : '#e2d9f3',
              cursor: 'pointer'
            }}
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>
        </div>

        {/* Track Selection Dropdown Menu */}
        {showTrackMenu && (
          <div style={{
            background: 'rgba(18, 9, 36, 0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 123, 0, 0.35)',
            borderRadius: '16px',
            padding: '8px',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.7)',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            minWidth: '240px',
            animation: 'fadeIn 0.2s ease-out'
          }}>
            <div style={{
              fontSize: '11px',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: '#ffd166',
              letterSpacing: '0.8px',
              padding: '6px 10px 4px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              🎬 Select Background Music
            </div>

            {TRACKS.map((track, idx) => {
              const isSelected = idx === currentTrackIndex;
              return (
                <button
                  key={track.id}
                  onClick={() => handleSelectTrack(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 10px',
                    borderRadius: '10px',
                    background: isSelected ? 'rgba(255, 123, 0, 0.2)' : 'transparent',
                    border: isSelected ? '1px solid rgba(255, 123, 0, 0.5)' : '1px solid transparent',
                    color: isSelected ? '#ffd166' : '#ffffff',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '12.5px', fontWeight: isSelected ? 700 : 500 }}>
                      {track.title}
                    </span>
                    <span style={{ fontSize: '10.5px', color: '#b8a8d6' }}>
                      {track.movie}
                    </span>
                  </div>
                  {isSelected && (
                    <Flame size={14} color="#ff7b00" fill="#ff7b00" />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </aside>

      {/* Style for equalizer animations */}
      <style>{`
        @keyframes equalizer1 {
          0% { height: 4px; }
          100% { height: 14px; }
        }
        @keyframes equalizer2 {
          0% { height: 13px; }
          100% { height: 3px; }
        }
        @keyframes equalizer3 {
          0% { height: 6px; }
          100% { height: 15px; }
        }
      `}</style>
    </>
  );
}

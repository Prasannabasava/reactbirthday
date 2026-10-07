import React from 'react';
import { Award, Utensils, Heart, Clapperboard, Film, Video, Sparkles, Star } from 'lucide-react';

export default function SurpriseBoxes() {
  const coupons = [
    { id: 'biryani', title: '1 Grand Story-Sitting Biryani 🍗', desc: 'Full plate biryani with extra pieces for script brainstorming, on us anytime!', tag: 'STORY SITTINGS PASS', color: '#ffd166' },
    { id: 'chai', title: 'Midnight Chai & Movie Discussions ☕', desc: 'No excuses, straight keys & endless talks about scene breakdowns and cinema!', tag: 'VIP PASS', color: '#00f5d4' },
    { id: 'fdfs', title: '1 First Day First Show Ticket 🎟️', desc: 'Whistles and paper blast included, anytime any hero movie you want!', tag: 'FDFS GUARANTEE', color: '#ff2a85' },
    { id: 'favor', title: '1 Lifelong Assistant Director Pass 🤝', desc: 'Any help with props, shoots, or personal life — brothers will always show up!', tag: 'LIFETIME BACKUP', color: '#9d4edd' }
  ];

  const directorProjects = [
    {
      id: 1,
      title: 'PROJECT 26: THE MASS STORM',
      genre: 'High Voltage Action / Commercial Thriller',
      tag: '🔥 1000 CR MANIFESTATION',
      color: '#ff2a85',
      desc: 'Hero introduction fight, goosebumps BGM, interval bang tho theatres blast ayye pan-India blockbuster!',
      status: 'SCRIPT LOCKED & READY TO ROLL 🎬',
      icon: Film
    },
    {
      id: 2,
      title: 'BROTHERHOOD CHRONICLES',
      genre: 'Real Camaraderie / Gang Comedy & Emotion',
      tag: '🤜🤛 PURE REALITY',
      color: '#00f5d4',
      desc: 'Mana real-life allari, midnight adda kaburlu, and brothers unshakeable support tho vachhe heart-warming cinema!',
      status: 'CORE CREW ASSEMBLED 🎥',
      icon: Clapperboard
    },
    {
      id: 3,
      title: 'AMMAMMA: THE DIVINE SHIELD',
      genre: 'Soul-Stirring Family Emotional Classic',
      tag: '🕊️ DEDICATED TO HEAVEN',
      color: '#ffd166',
      desc: 'A grand emotional tribute to grandmother love & pure unshakeable blessings that protect through every storm.',
      status: 'WRITTEN IN THE HEART ❤️',
      icon: Sparkles
    },
    {
      id: 4,
      title: 'THE SILVER SCREEN DESTINY',
      genre: 'Cinema Vision / Inspiring Legend Journey',
      tag: '🏆 NATIONAL LEVEL PRESTIGE',
      color: '#9d4edd',
      desc: 'Nee passion, nee hardwork tho "DIRECTED BY GANESH" ani Title Card padithe prapancham salute chese level!',
      status: 'DESTINED FOR GREATNESS 🌟',
      icon: Star
    }
  ];

  return (
    <div style={{ maxWidth: '960px', margin: '60px auto 0' }}>
      {/* 1. HALL OF FAME CERTIFICATE */}
      <section className="glass-panel" style={{
        padding: '40px 28px',
        textAlign: 'center',
        marginBottom: '50px',
        background: 'linear-gradient(135deg, rgba(28, 19, 53, 0.8), rgba(41, 26, 79, 0.8))',
        border: '2px dashed #ffd166',
        borderRadius: '24px',
        boxShadow: '0 20px 50px rgba(0,0,0,0.6), 0 0 35px rgba(255, 209, 102, 0.2)'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          color: '#ffd166',
          fontWeight: 800,
          fontSize: '12px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginBottom: '12px'
        }}>
          <Award size={16} />
          <span>OFFICIAL CERTIFICATE OF MAXIMUM BROTHERHOOD</span>
        </div>

        <h2 style={{
          fontSize: 'clamp(24px, 4.5vw, 38px)',
          fontWeight: 900,
          color: '#fff',
          margin: '0 0 16px',
          fontFamily: "'Bungee', cursive",
          letterSpacing: '1px'
        }}>
          BEST DIRECTOR & BROTHER OF THE YEAR AWARD 🏆
        </h2>

        <p style={{
          fontSize: '16px',
          color: '#e2d9f3',
          maxWidth: '680px',
          margin: '0 auto 20px',
          lineHeight: 1.7
        }}>
          This medal officially certifies that <b>GANESH</b> (fondly known as <i>Gani / Future Director</i>) is officially recognized as the most hardworking, passionate, and irreplaceable person in the entire universe as he turns <b>26</b>!
        </p>

        <div style={{
          display: 'inline-block',
          background: 'rgba(255, 209, 102, 0.15)',
          border: '1px solid #ffd166',
          borderRadius: '12px',
          padding: '8px 24px',
          fontSize: '14px',
          fontWeight: 800,
          color: '#ffd166'
        }}>
          Authorized by: Brothers Gang & Family Crew ✍️⭐
        </div>
      </section>

      {/* 2. VIP LIFETIME TREAT COUPONS */}
      <section className="glass-panel" style={{
        padding: '38px 24px',
        marginBottom: '50px',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          color: '#00f5d4',
          fontWeight: 800,
          fontSize: '13px',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginBottom: '8px'
        }}>
          <Utensils size={16} />
          <span>DIRECTOR'S PRIVILEGE VOUCHERS</span>
        </div>

        <h3 style={{
          fontSize: 'clamp(22px, 3.8vw, 32px)',
          fontWeight: 900,
          color: '#fff',
          marginBottom: '8px'
        }}>
          Ganesh's Birthday Treat Passes 🎟️🎬
        </h3>

        <p style={{
          fontSize: '15px',
          color: '#e2d9f3',
          marginBottom: '28px'
        }}>
          Zero expiry date! Ee coupons eppudaina direct ga claim cheskovachu:
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          textAlign: 'left'
        }}>
          {coupons.map((c) => (
            <div
              key={c.id}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: `1.5px solid ${c.color}55`,
                borderRadius: '16px',
                padding: '20px 18px',
                boxShadow: `0 8px 20px ${c.color}22`
              }}
            >
              <span style={{
                fontSize: '10.5px',
                fontWeight: 800,
                color: c.color,
                background: 'rgba(255, 255, 255, 0.08)',
                padding: '4px 10px',
                borderRadius: '999px',
                letterSpacing: '1px',
                display: 'inline-block',
                marginBottom: '10px'
              }}>
                {c.tag}
              </span>

              <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
                {c.title}
              </h4>

              <p style={{ fontSize: '13px', color: '#c4b5fd', lineHeight: 1.5 }}>
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CRAZY NEW FEATURE: THE DIRECTOR'S BLOCKBUSTER LINEUP (GCU) */}
      <section className="glass-panel" style={{
        padding: '42px 26px',
        marginBottom: '50px',
        textAlign: 'center',
        background: 'radial-gradient(ellipse at top, rgba(157, 78, 221, 0.18) 0%, rgba(15, 8, 35, 0.85) 100%)',
        border: '1.5px solid rgba(0, 245, 212, 0.35)',
        borderRadius: '26px',
        boxShadow: '0 20px 50px rgba(0,0,0,0.6), 0 0 35px rgba(0, 245, 212, 0.15)'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          color: '#00f5d4',
          fontWeight: 800,
          fontSize: '13px',
          textTransform: 'uppercase',
          letterSpacing: '1.5px',
          marginBottom: '10px'
        }}>
          <Video size={16} />
          <span>GANESH CINEMATIC UNIVERSE (GCU)</span>
        </div>

        <h3 style={{
          fontSize: 'clamp(24px, 4vw, 36px)',
          fontWeight: 900,
          color: '#fff',
          marginBottom: '10px'
        }}>
          Director Ganesh's Upcoming Blockbuster Slates 🎬🌟
        </h3>

        <p style={{
          fontSize: '15px',
          color: '#e2d9f3',
          maxWidth: '680px',
          margin: '0 auto 32px',
          lineHeight: 1.6
        }}>
          Nee story narration, visual thought process, and direction fire tho silver screen meedhaki raabothunna upcoming grand projects:
        </p>

        {/* 4 Blockbuster Clapperboard Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
          textAlign: 'left'
        }}>
          {directorProjects.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: `1.5px solid ${p.color}55`,
                  borderRadius: '18px',
                  padding: '22px 20px',
                  boxShadow: `0 10px 25px rgba(0,0,0,0.4), 0 0 20px ${p.color}22`,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Top Film Clapper Stripe */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '6px',
                  background: `linear-gradient(90deg, ${p.color}, transparent)`
                }} />

                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '12px'
                  }}>
                    <span style={{
                      fontSize: '10.5px',
                      fontWeight: 800,
                      color: p.color,
                      background: 'rgba(255, 255, 255, 0.08)',
                      padding: '4px 10px',
                      borderRadius: '999px',
                      letterSpacing: '1px'
                    }}>
                      {p.tag}
                    </span>
                    <Icon size={18} color={p.color} />
                  </div>

                  <h4 style={{
                    fontSize: '17px',
                    fontWeight: 900,
                    color: '#fff',
                    marginBottom: '4px',
                    letterSpacing: '0.5px'
                  }}>
                    {p.title}
                  </h4>

                  <div style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#ffd166',
                    marginBottom: '10px'
                  }}>
                    Genre: {p.genre}
                  </div>

                  <p style={{
                    fontSize: '13px',
                    color: '#e2d9f3',
                    lineHeight: 1.55,
                    marginBottom: '16px'
                  }}>
                    "{p.desc}"
                  </p>
                </div>

                <div style={{
                  paddingTop: '10px',
                  borderTop: '1px dashed rgba(255, 255, 255, 0.15)',
                  fontSize: '11px',
                  fontWeight: 800,
                  color: p.color,
                  letterSpacing: '0.8px'
                }}>
                  {p.status}
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}

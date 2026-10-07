import React from 'react';
import { Users2, Beer, Film, PhoneCall, ShieldCheck, Heart, Sparkles, Flame } from 'lucide-react';

export default function FriendsSquad() {
  const gangRules = [
    {
      id: 1,
      icon: '🍗',
      title: 'The Biryani Treat Law',
      subtitle: 'Mandatory Food Rule',
      desc: 'Party ivvamante "Diet lo unnanu" ani sollu cheppoddu! Birthday bill eppudu Ganesh de, thinedi maname!',
      color: '#ffd166',
      badge: 'RULE #1'
    },
    {
      id: 2,
      icon: '🎬',
      title: 'FDFS First Day First Show Gang',
      subtitle: 'Cinema Addiction Protocol',
      desc: 'Director Ganesh future movie release roju theatres lo whistles, confetti, and paper blasts maname blast cheyyali!',
      color: '#ff2a85',
      badge: 'RULE #2'
    },
    {
      id: 3,
      icon: '☕',
      title: 'Midnight Adda & Long Drives',
      subtitle: 'Tea Stall Discussions',
      desc: 'Midnight 12 AM aina bike keys teeskoni tea stall daggara endless prapancham kaburlu cheppadam!',
      color: '#00f5d4',
      badge: 'RULE #3'
    },
    {
      id: 4,
      icon: '🤝',
      title: 'Zero-Filter Ride or Die Backup',
      subtitle: 'Unconditional Brotherhood',
      desc: 'Manam okari medha okaru enni punches vesina, bayata vadu okka maata ante motham gang digipothundi!',
      color: '#9d4edd',
      badge: 'RULE #4'
    }
  ];

  const friendBadges = [
    { label: 'The Script & Idea Machine 💡', color: '#ff2a85' },
    { label: 'Biryani Sponsor in Chief 🍗', color: '#ffd166' },
    { label: 'Midnight Gossip Partner 🌙', color: '#00f5d4' },
    { label: 'The Future Star Director 🎬', color: '#9d4edd' },
    { label: 'Lifetime Loyal Bestie 💛', color: '#ff758c' }
  ];

  return (
    <section className="glass-panel" style={{
      maxWidth: '960px',
      margin: '50px auto 40px',
      padding: '42px 26px',
      textAlign: 'center',
      position: 'relative',
      background: 'radial-gradient(ellipse at top, rgba(255, 42, 133, 0.16) 0%, rgba(18, 10, 42, 0.88) 100%)',
      border: '1.5px solid rgba(255, 42, 133, 0.35)',
      borderRadius: '26px',
      boxShadow: '0 20px 50px rgba(0,0,0,0.6), 0 0 35px rgba(255, 42, 133, 0.18)'
    }}>
      {/* Top Header Tag */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        color: '#ff2a85',
        fontWeight: 800,
        fontSize: '13px',
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
        marginBottom: '10px'
      }}>
        <Users2 size={16} />
        <span>MANA ADDA & BESTIES CHRONICLES</span>
      </div>

      <h2 style={{
        fontSize: 'clamp(24px, 4vw, 38px)',
        fontWeight: 900,
        color: '#fff',
        marginBottom: '10px'
      }}>
        The Friends Gang Vault & Adda Rules 🍻🍕
      </h2>

      <p style={{
        fontSize: '15px',
        color: '#e2d9f3',
        maxWidth: '700px',
        margin: '0 auto 30px',
        lineHeight: 1.6
      }}>
        Blood relations puttuka tho vasthayi, kani Friends manam choose cheskunna real family! Gani 26 years life lo enno chapters marochu, kani mana friendship matram forever unshakeable!
      </p>

      {/* Friendship Badges for Ganesh */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        flexWrap: 'wrap',
        marginBottom: '36px'
      }}>
        {friendBadges.map((badge, idx) => (
          <span
            key={idx}
            className="glass-pill"
            style={{
              padding: '7px 16px',
              fontSize: '12.5px',
              fontWeight: 800,
              color: badge.color,
              background: 'rgba(255, 255, 255, 0.06)',
              border: `1px solid ${badge.color}55`,
              boxShadow: `0 4px 15px ${badge.color}22`
            }}
          >
            {badge.label}
          </span>
        ))}
      </div>

      {/* 4 Gang Rules Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '20px',
        marginBottom: '32px',
        textAlign: 'left'
      }}>
        {gangRules.map((rule) => (
          <div
            key={rule.id}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: `1.5px solid ${rule.color}45`,
              borderRadius: '20px',
              padding: '22px 20px',
              boxShadow: `0 10px 25px rgba(0,0,0,0.35)`,
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '12px'
            }}>
              <span style={{ fontSize: '28px' }}>{rule.icon}</span>
              <span style={{
                fontSize: '10px',
                fontWeight: 900,
                color: rule.color,
                background: 'rgba(255, 255, 255, 0.08)',
                padding: '3px 10px',
                borderRadius: '999px',
                letterSpacing: '1px'
              }}>
                {rule.badge}
              </span>
            </div>

            <h4 style={{ fontSize: '17px', fontWeight: 900, color: '#fff', marginBottom: '4px' }}>
              {rule.title}
            </h4>

            <div style={{ fontSize: '12px', fontWeight: 700, color: rule.color, marginBottom: '8px' }}>
              {rule.subtitle}
            </div>

            <p style={{ fontSize: '13px', color: '#e2d9f3', lineHeight: 1.55 }}>
              "{rule.desc}"
            </p>
          </div>
        ))}
      </div>

      {/* Heartwarming Friendship Pledge */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.12), rgba(0, 245, 212, 0.1))',
        border: '1px solid rgba(255, 215, 0, 0.35)',
        borderRadius: '20px',
        padding: '24px 22px',
        textAlign: 'left'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: '#ffd166',
          fontWeight: 800,
          fontSize: '16px',
          marginBottom: '8px'
        }}>
          <Heart size={18} fill="#ffd166" />
          <span>The Gang's Promise to Director Ganesh</span>
        </div>

        <p style={{
          fontSize: '14.5px',
          color: '#f3e8ff',
          lineHeight: 1.75
        }}>
          "Nuvvu director ayyi silver screen meedha hit kottina, life lo inka entha pedda level ki vellina — mana adda, mana chai sittings, and mana laughing fits eppudu ilage untayi! Happy 26th Birthday to our one and only <b>Gani</b>! Together forever! 🫂❤️🔥"
        </p>
      </div>
    </section>
  );
}

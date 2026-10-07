import React from 'react';
import { Users, Heart, Film, Clapperboard, Sparkles } from 'lucide-react';

export default function CousinsFamilyBonding() {
  return (
    <section className="glass-panel" style={{
      maxWidth: '960px',
      margin: '60px auto',
      padding: '42px 26px',
      textAlign: 'center',
      position: 'relative'
    }}>
      {/* Header Tag */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        color: '#00f5d4',
        fontWeight: 800,
        fontSize: '13px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        marginBottom: '10px'
      }}>
        <Users size={16} />
        <span>FAMILY & BROTHERS GANG BONDING</span>
      </div>

      <h2 style={{
        fontSize: 'clamp(26px, 4vw, 38px)',
        fontWeight: 900,
        marginBottom: '8px',
        color: '#fff'
      }}>
        The Brothers Squad & Family Pride 💖🎬
      </h2>

      <p style={{
        fontSize: '15px',
        color: '#e2d9f3',
        maxWidth: '680px',
        margin: '0 auto 36px',
        lineHeight: 1.6
      }}>
        Prapancham lo entho mandhi vastharu veltharu, kani Ganesh ki eppatiki venaka nilabade real army mana Brothers and Family!
      </p>

      {/* Two Featured Big Frames: Brothers Photo + Family Photo */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '28px',
        marginBottom: '36px'
      }}>
        {/* FRAME 1: BROTHERS GANG */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1.5px solid rgba(0, 245, 212, 0.4)',
          borderRadius: '24px',
          padding: '20px',
          boxShadow: '0 15px 35px rgba(0,0,0,0.4), 0 0 25px rgba(0, 245, 212, 0.15)',
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{
            width: '100%',
            height: '280px',
            borderRadius: '16px',
            backgroundImage: 'url(/brothers.jpeg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            boxShadow: '0 8px 25px rgba(0,0,0,0.5)',
            marginBottom: '16px',
            position: 'relative'
          }}>
            <span style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              background: 'rgba(0, 0, 0, 0.75)',
              backdropFilter: 'blur(8px)',
              color: '#00f5d4',
              fontSize: '11px',
              fontWeight: 800,
              padding: '4px 12px',
              borderRadius: '999px',
              letterSpacing: '1px'
            }}>
              🔥 BROTHERS IN ARMS
            </span>
          </div>

          <div style={{
            fontSize: '18px',
            fontWeight: 900,
            color: '#fff',
            marginBottom: '6px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Film size={18} color="#00f5d4" />
            <span>The Brothers Gang & Core Crew</span>
          </div>

          <p style={{ fontSize: '13.5px', color: '#c4b5fd', lineHeight: 1.6, flex: 1 }}>
            "Pillathanam nunchi allari chesina, functions lo hungama chesina, Ganesh future movie sets lo Assistant Directors la nilabade batch maname! No ego, pure unbreakable bonding!"
          </p>
        </div>

        {/* FRAME 2: FAMILY PHOTO */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1.5px solid rgba(255, 209, 102, 0.4)',
          borderRadius: '24px',
          padding: '20px',
          boxShadow: '0 15px 35px rgba(0,0,0,0.4), 0 0 25px rgba(255, 209, 102, 0.15)',
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{
            width: '100%',
            height: '280px',
            borderRadius: '16px',
            backgroundImage: 'url(/family.jpeg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            boxShadow: '0 8px 25px rgba(0,0,0,0.5)',
            marginBottom: '16px',
            position: 'relative'
          }}>
            <span style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              background: 'rgba(0, 0, 0, 0.75)',
              backdropFilter: 'blur(8px)',
              color: '#ffd166',
              fontSize: '11px',
              fontWeight: 800,
              padding: '4px 12px',
              borderRadius: '999px',
              letterSpacing: '1px'
            }}>
              ❤️ ETERNAL PILLARS
            </span>
          </div>

          <div style={{
            fontSize: '18px',
            fontWeight: 900,
            color: '#fff',
            marginBottom: '6px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Heart size={18} color="#ffd166" fill="#ffd166" />
            <span>Family — The Real Producers</span>
          </div>

          <p style={{ fontSize: '13.5px', color: '#f3e8ff', lineHeight: 1.6, flex: 1 }}>
            "Life ane pedda cinema ki permanent producers mana Family! Ganesh 26 years journey lo prathi milestone ki unconditional love and support ichina deevenalu!"
          </p>
        </div>
      </div>

      {/* Cinema Style Family Bonding Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.2), rgba(0, 245, 212, 0.12))',
        border: '1px solid rgba(157, 78, 221, 0.4)',
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
          <Clapperboard size={18} />
          <span>"Ganesh Cinema Direction Journey" — Family Declaration</span>
        </div>

        <p style={{
          fontSize: '14.5px',
          color: '#f3e8ff',
          lineHeight: 1.75
        }}>
          "Nee script writing nunchi, short films varaku... Silver screen meedha <b>Directed by GANESH</b> ani Title Card padataniki family and brothers antha waiting! Ee 26th birthday nunchi nee direction dreams speed and success reach avvali!"
        </p>
      </div>
    </section>
  );
}

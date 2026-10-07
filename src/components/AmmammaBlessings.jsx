import React from 'react';
import { Feather, Sparkles } from 'lucide-react';

export default function AmmammaBlessings() {
  return (
    <section style={{
      maxWidth: '960px',
      margin: '60px auto',
      position: 'relative'
    }}>
      {/* Outer Divine Golden Glow Container */}
      <div style={{
        background: 'radial-gradient(ellipse at top, rgba(255, 215, 0, 0.16) 0%, rgba(26, 12, 48, 0.9) 65%, rgba(10, 4, 25, 0.98) 100%)',
        border: '1.5px solid rgba(255, 215, 0, 0.45)',
        borderRadius: '28px',
        padding: '38px 28px',
        boxShadow: '0 25px 65px rgba(0, 0, 0, 0.85), 0 0 50px rgba(255, 215, 0, 0.22)',
        position: 'relative',
        overflow: 'hidden',
        backdropFilter: 'blur(20px)'
      }}>
        {/* Subtle heavenly rays */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '380px',
          height: '280px',
          background: 'radial-gradient(ellipse, rgba(255, 223, 100, 0.32) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none'
        }} />

        {/* Clean Header Tag */}
        <div style={{ textAlign: 'center', marginBottom: '28px', position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 215, 0, 0.14)',
            border: '1px solid rgba(255, 215, 0, 0.45)',
            padding: '6px 22px',
            borderRadius: '999px',
            color: '#ffd166',
            fontSize: '13.5px',
            fontWeight: 800,
            letterSpacing: '1.5px',
            textTransform: 'uppercase'
          }}>
            <Feather size={15} color="#ffd166" />
            <span>Ammamma Prema & Aashirvaadalu</span>
            <Sparkles size={14} color="#ffd166" />
          </div>
        </div>

        {/* Content Layout with Much Bigger Ammamma Photo */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2
        }}>
          {/* Much Bigger Ammamma Photo Frame */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{
              width: '100%',
              maxWidth: '350px',
              height: '450px',
              borderRadius: '26px',
              padding: '8px',
              background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.9), rgba(255, 42, 133, 0.45), rgba(255, 215, 0, 0.95))',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.75), 0 0 40px rgba(255, 215, 0, 0.4)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Actual Image */}
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '20px',
                backgroundImage: 'url(/ammamma.jpeg)',
                backgroundPosition: 'center 15%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  boxShadow: 'inset 0 0 25px rgba(255, 215, 0, 0.3)',
                  borderRadius: '20px',
                  pointerEvents: 'none'
                }} />
              </div>
            </div>
          </div>

          {/* Deep Emotional Blessings Letter for Ganesh */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 215, 0, 0.3)',
            borderRadius: '24px',
            padding: '28px 24px',
            position: 'relative'
          }}>
            <div style={{
              fontSize: '18px',
              color: '#ffd166',
              fontWeight: 900,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '16px'
            }}>
              <span>Kanna Ganesh… Bangaram! ❤️</span>
            </div>

            <div style={{
              fontSize: '15px',
              color: '#f3e8ff',
              lineHeight: 1.85,
              fontFamily: "'Outfit', sans-serif"
            }}>
              <p style={{ marginBottom: '14px' }}>
                Ninnu chinnapati nundi penchutu, nuvvu peragadam naa kallatho chusanu. Enno allarulu chesav, entho baadhyatagaa alochinchadam nerchukunnav. Ninnu paakadam daggara nundi, ippudu job chese stage varaku naa kallatho chusina prathi kshanam naaku eppatiki gurthundipothundi.
              </p>

              <p style={{ marginBottom: '14px' }}>
                Ilaage inka nuvvu paiki edigi, nuvvu anukunnavi anni saadhinchali. Nuvvu entha pedda vaadivi ayinaa, nuvvu eppatiki naa <b style={{ color: '#ffd166' }}>Bandodive</b> raa! ❤️
              </p>

              <p style={{ marginBottom: '14px' }}>
                Nee life lo ilanti puttinarojulu inkenno santoshamga jarupukovali. Nee direction kalalu neraverali ani nenu eppudu korukuntaanu. Nenu ekkada unna, naa aashirwadam eppudu neeku oka <b style={{ color: '#00f5d4' }}>kavacham laaga</b> untundi. 🤍
              </p>

              <div style={{
                background: 'rgba(255, 215, 0, 0.1)',
                borderLeft: '4px solid #ffd166',
                padding: '12px 16px',
                borderRadius: '0 12px 12px 0',
                margin: '16px 0'
              }}>
                <p style={{ fontWeight: 800, color: '#ffd166', marginBottom: '6px' }}>
                  Cinema ante, Direction ante neeku entha praanamo naaku telusu. 🎬
                </p>
                <p style={{ fontSize: '14.5px', color: '#fff' }}>
                  Silver screen meeda prapancham gurthupettukune antha goppa cinemalu nuvvu teeyali. Nee stories tho, nee vision tho lakshala mandi hrudayalanu geluchukovali.
                </p>
              </div>

              <p style={{ marginBottom: '8px' }}>
                Nuvvu kalalu kane prathi kala nijam kaavali… ✨
              </p>
              <p style={{ marginBottom: '8px' }}>
                Nuvvu adugu vese prathi step success vaipu teesukellali… 🚀
              </p>
              <p style={{ marginBottom: '18px', fontWeight: 800, color: '#ffd166' }}>
                Nee peru oka roju Director ga Silver Screen meeda goppaga nilichipovali. ❤️🎬
              </p>

              <div style={{
                paddingTop: '14px',
                borderTop: '1px dashed rgba(255, 215, 0, 0.3)',
                fontWeight: 800,
                color: '#ffd166',
                fontSize: '16px'
              }}>
                Happy Birthday, Kanna Ganesh! 🎂❤️<br />
                <span style={{ fontSize: '14.5px', color: '#e2d9f3', fontWeight: 500 }}>
                  Nuvvu eppatiki naa bandodive… Nee meeda naa prema, aashirwadam eppudu ilage untayi. 🤗❤️
                </span>
              </div>
            </div>

            {/* Sacred Eternal Diya - Already Glowing */}
            <div style={{
              marginTop: '20px',
              paddingTop: '16px',
              borderTop: '1px dashed rgba(255, 215, 0, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                fontSize: '28px',
                filter: 'drop-shadow(0 0 12px #ffd166)',
                animation: 'bounceSlow 2s infinite ease-in-out'
              }}>
                🪔
              </div>
              <div>
                <div style={{ color: '#ffd166', fontWeight: 800, fontSize: '14px' }}>
                  Ammamma Divine Deepam Veluguthundi ✨
                </div>
                <div style={{ fontSize: '12px', color: '#c4b5fd' }}>
                  Nee Cinema Direction kalalu anni saphalam avvali ani aame aashirvaadam!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

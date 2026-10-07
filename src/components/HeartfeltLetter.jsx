import React from 'react';
import { Heart } from 'lucide-react';

export default function HeartfeltLetter() {
  return (
    <section className="glass-panel" style={{
      maxWidth: '960px',
      margin: '50px auto 40px',
      padding: '42px 28px',
      textAlign: 'left',
      background: 'radial-gradient(ellipse at top, rgba(114, 9, 183, 0.28) 0%, rgba(20, 10, 45, 0.92) 100%)',
      border: '1.5px solid rgba(247, 37, 133, 0.38)',
      borderRadius: '26px',
      boxShadow: '0 20px 50px rgba(0,0,0,0.65), 0 0 35px rgba(247, 37, 133, 0.22)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: '#f72585',
        fontSize: '14px',
        fontWeight: 800,
        marginBottom: '14px',
        letterSpacing: '1.5px'
      }}>
        <Heart size={18} fill="#f72585" />
        <span>MANASU LO NUNCHI OKA LETTER...</span>
      </div>

      <h3 style={{
        fontSize: 'clamp(24px, 4vw, 34px)',
        fontWeight: 900,
        color: '#ffd166',
        marginBottom: '18px'
      }}>
        HI Raa Ganesh ❤️,
      </h3>

      <div style={{
        fontSize: '15.5px',
        color: '#f3e8ff',
        lineHeight: 1.9,
        display: 'flex',
        flexDirection: 'column',
        gap: '14px'
      }}>
        <p>
          25 nunchi 26 loki enter avthunnav mawa! 🥳❤️
        </p>

        <p>
          Nee life journey lo nenu oka part ayyinanduku chala happy ga feel avthunna. Nitho ee journey lo nenu kuda chala nerchukunna, chala memories create cheskunna. 🫂
        </p>

        <p>
          Ee year nunchi nuvvu anukunna dreams anni fullfill avvali, eppudu healthy ga, happy ga undali ani manaspoorthiga korukuntunna. ❤️
        </p>

        <p>
          Job lo kuda inka manchi package tho, inka manchi position ki vellali ani korukuntunna. Enduku ante… <b style={{ color: '#ffd166' }}>nuvvu ala edigithe kada manam eppudu kavali ante appudu biryani thinachu, movies ki vellachu… adi kuda nee money tho! 😂🍗🎬</b>
        </p>

        <p style={{ fontWeight: 800, color: '#00f5d4', fontSize: '17px' }}>
          My dear Biryani & Movie Lover! ❤️😂
        </p>

        <p>
          Nee life lo nee success ni chala chusanu… inka mundu kuda alane chusthu undali ani korukuntunna. Evaru em anukunna pattinchukokunda, nuvvu anukunna goal meeda focus petti, nee dreams ni achieve cheyyi. 💯🔥
        </p>

        <div style={{
          background: 'rgba(255, 42, 133, 0.1)',
          borderLeft: '4px solid #ff2a85',
          padding: '14px 18px',
          borderRadius: '0 14px 14px 0',
          margin: '4px 0'
        }}>
          <p style={{ color: '#fff', marginBottom: '8px' }}>
            Movies ante neeku entha istamo, Direction ante entha passion oo naaku telusu. 🎬❤️
          </p>
          <p style={{ color: '#ffd166', fontWeight: 800 }}>
            Nuvvu eppatikaina oka manchi film teesi, <span style={{ fontSize: '18px' }}>“Director Ganesh”</span> ani nee peru Big Screen meeda choodali anedi naa wish.
          </p>
        </div>

        <p>
          Aa roju vachinappudu… nuvvu teesina <b style={{ color: '#ffd166' }}>prathi movie ki naaku free ticket compulsory! 😂🎟️</b> Adi vere matter! 😜
        </p>

        <p>
          Life lo nuvvu inka inka success avvali, nuvvu anukunna prathi okkati saadhinchali, eppudu happy ga undali. ❤️
        </p>

        <div style={{
          paddingTop: '16px',
          borderTop: '1px dashed rgba(255, 255, 255, 0.2)',
          fontSize: '17px',
          fontWeight: 800,
          color: '#ffd166'
        }}>
          Once again, Happy Birthday raa Gani! 🎂🥳❤️<br />
          <span style={{ fontSize: '15px', color: '#e2d9f3', fontWeight: 500 }}>
            Nee dreams anni nijam avvali… Nee success ni nenu inka chala years chusthu undali. 🫂❤️
          </span>
        </div>

        <p style={{
          fontWeight: 900,
          color: '#00f5d4',
          fontSize: '18px',
          letterSpacing: '1px',
          marginTop: '6px'
        }}>
          Keep going… Keep dreaming… Keep winning! 🎬🔥❤️
        </p>
      </div>
    </section>
  );
}

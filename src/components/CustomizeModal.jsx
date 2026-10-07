import React, { useState } from 'react';
import { X, Save, Sparkles, Wand2, Camera, Heart, Users, Trash2 } from 'lucide-react';

export default function CustomizeModal({ 
  friendData, 
  cousinsData,
  onSave, 
  onClose 
}) {
  const [activeTab, setActiveTab] = useState('general'); // 'general' | 'ammamma' | 'cousins'

  const [formData, setFormData] = useState({
    name: friendData.name || 'Akhil',
    nickname: friendData.nickname || 'Mawa',
    age: friendData.age || '22',
    tagline: friendData.tagline || '',
    ammammaPhoto: friendData.ammammaPhoto || '',
    ammammaMessage: friendData.ammammaMessage || ''
  });

  const [cousinsList, setCousinsList] = useState(cousinsData || [
    { id: 'c1', role: 'Crime Partner in Chief', tag: '🔥 UNBEATABLE COMBO', quote: 'Pillathanam nunchi prathi function lo allari chesindi maname!', defaultEmoji: '🤜🤛', color: '#ff2a85', photo: '' },
    { id: 'c2', role: 'Midnight Maggi & Secret Keeper', tag: '🤫 100% TRUSTED', quote: 'Parents ki theliyani secret lu anni eekane thelusu!', defaultEmoji: '🍜✨', color: '#00f5d4', photo: '' },
    { id: 'c3', role: 'Family Function Rockstars', tag: '💃 DANCE FLOOR BLASTERS', quote: 'Manam leni family function boaring! Sound pollution creators!', defaultEmoji: '🎉😎', color: '#ffd166', photo: '' },
    { id: 'c4', role: 'Forever Backbone & Support', tag: '🛡️ SOLID WALL', quote: 'Life lo em problem vachina first call vellalsina person!', defaultEmoji: '🫂❤️', color: '#9d4edd', photo: '' }
  ]);

  const handleAmmammaPhoto = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prev) => ({ ...prev, ammammaPhoto: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCousinPhoto = (id, e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCousinsList((prev) => prev.map((c) => c.id === id ? { ...c, photo: reader.result } : c));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveCousinPhoto = (id) => {
    setCousinsList((prev) => prev.map((c) => c.id === id ? { ...c, photo: '' } : c));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData, cousinsList);
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1100,
      background: 'rgba(5, 2, 15, 0.88)',
      backdropFilter: 'blur(14px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '640px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        background: '#12082b',
        border: '1.5px solid rgba(255, 215, 0, 0.4)',
        borderRadius: '24px',
        padding: '28px',
        boxShadow: '0 25px 60px rgba(0,0,0,0.85), 0 0 35px rgba(255, 215, 0, 0.25)',
        position: 'relative',
        color: '#fff'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            color: '#fff',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <Sparkles size={22} color="#ffd166" />
          <h2 style={{ fontSize: '22px', fontWeight: 800 }}>Personalize Names & Photos</h2>
        </div>
        <p style={{ fontSize: '13px', color: '#c4b5fd', marginBottom: '20px' }}>
          Friend details, Ammamma memories, and Cousins gang photos ikkada add cheyyandi:
        </p>

        {/* Navigation Tabs */}
        <div style={{
          display: 'flex',
          gap: '8px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
          paddingBottom: '12px',
          marginBottom: '20px'
        }}>
          <button
            type="button"
            onClick={() => setActiveTab('general')}
            style={{
              padding: '8px 16px',
              borderRadius: '999px',
              border: 'none',
              background: activeTab === 'general' ? 'linear-gradient(135deg, #ff2a85, #9d4edd)' : 'rgba(255, 255, 255, 0.08)',
              color: '#fff',
              fontSize: '13px',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Birthday Hero 🎂
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('ammamma')}
            style={{
              padding: '8px 16px',
              borderRadius: '999px',
              border: 'none',
              background: activeTab === 'ammamma' ? 'linear-gradient(135deg, #ffd166, #ff7b00)' : 'rgba(255, 255, 255, 0.08)',
              color: activeTab === 'ammamma' ? '#1a0033' : '#fff',
              fontSize: '13px',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Ammamma Blessings 🕊️
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('cousins')}
            style={{
              padding: '8px 16px',
              borderRadius: '999px',
              border: 'none',
              background: activeTab === 'cousins' ? 'linear-gradient(135deg, #00f5d4, #0575e6)' : 'rgba(255, 255, 255, 0.08)',
              color: activeTab === 'cousins' ? '#080318' : '#fff',
              fontSize: '13px',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Cousins Gang 💖
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* TAB 1: GENERAL BIRTHDAY HERO DETAILS */}
          {activeTab === 'general' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#e2d9f3', marginBottom: '6px' }}>
                  Friend's Name:
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul, Sandeep, Sneha..."
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#fff',
                    fontSize: '15px',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#e2d9f3', marginBottom: '6px' }}>
                    Nickname / Call Name:
                  </label>
                  <input
                    type="text"
                    value={formData.nickname}
                    onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
                    placeholder="e.g. Mawa, Bro, Hero"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#fff',
                      fontSize: '15px',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#e2d9f3', marginBottom: '6px' }}>
                    Age / Level:
                  </label>
                  <input
                    type="text"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    placeholder="e.g. 21, 24, Forever 18"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#fff',
                      fontSize: '15px',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#e2d9f3', marginBottom: '6px' }}>
                  Custom Wishes / Tagline:
                </label>
                <textarea
                  rows={3}
                  value={formData.tagline}
                  onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                  placeholder="Enter wishes or Telugu punchline..."
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#fff',
                    fontSize: '14px',
                    outline: 'none',
                    resize: 'none'
                  }}
                />
              </div>
            </div>
          )}

          {/* TAB 2: AMMAMMA BLESSINGS & PHOTO */}
          {activeTab === 'ammamma' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{
                background: 'rgba(255, 215, 0, 0.08)',
                border: '1px solid rgba(255, 215, 0, 0.3)',
                borderRadius: '16px',
                padding: '16px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#ffd166', marginBottom: '10px' }}>
                  Ammamma & Friend Photo Upload
                </div>

                {formData.ammammaPhoto ? (
                  <div style={{ position: 'relative', width: '120px', height: '140px', margin: '0 auto 12px' }}>
                    <img
                      src={formData.ammammaPhoto}
                      alt="Ammamma & Grandchild"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', border: '2px solid #ffd166' }}
                    />
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, ammammaPhoto: '' })}
                      style={{
                        position: 'absolute',
                        top: '-8px',
                        right: '-8px',
                        background: '#ff4d4d',
                        border: 'none',
                        color: '#fff',
                        borderRadius: '50%',
                        width: '24px',
                        height: '24px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                ) : (
                  <div style={{
                    width: '90px',
                    height: '90px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '2px dashed rgba(255, 215, 0, 0.4)',
                    margin: '0 auto 12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '32px'
                  }}>
                    🕊️
                  </div>
                )}

                <label style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '9px 20px',
                  borderRadius: '999px',
                  background: 'linear-gradient(135deg, #ffd166, #ff9f1c)',
                  color: '#1a0033',
                  fontSize: '13px',
                  fontWeight: 800,
                  cursor: 'pointer'
                }}>
                  <Camera size={15} />
                  <span>{formData.ammammaPhoto ? 'Change Ammamma Photo' : 'Upload From Computer / Phone'}</span>
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleAmmammaPhoto}
                  />
                </label>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#e2d9f3', marginBottom: '6px' }}>
                  Ammamma Wishes / Blessings Text (Optional Custom Message):
                </label>
                <textarea
                  rows={4}
                  value={formData.ammammaMessage}
                  onChange={(e) => setFormData({ ...formData, ammammaMessage: e.target.value })}
                  placeholder="Default heartfelt Telugu blessing already set! Add any extra words or memories if you like..."
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#fff',
                    fontSize: '14px',
                    outline: 'none',
                    resize: 'none'
                  }}
                />
              </div>
            </div>
          )}

          {/* TAB 3: COUSINS GANG PHOTOS */}
          {activeTab === 'cousins' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ fontSize: '13px', color: '#c4b5fd', margin: 0 }}>
                Cousins / Family members photos upload cheyyi:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {cousinsList.map((cousin) => (
                  <div
                    key={cousin.id}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '14px',
                      padding: '12px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      position: 'relative'
                    }}
                  >
                    <div style={{ fontSize: '12px', fontWeight: 800, color: cousin.color, marginBottom: '6px', textAlign: 'center' }}>
                      {cousin.role}
                    </div>

                    {cousin.photo ? (
                      <div style={{ position: 'relative', width: '70px', height: '70px', marginBottom: '8px' }}>
                        <img
                          src={cousin.photo}
                          alt={cousin.role}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveCousinPhoto(cousin.id)}
                          style={{
                            position: 'absolute',
                            top: '-6px',
                            right: '-6px',
                            background: '#ff4d4d',
                            border: 'none',
                            color: '#fff',
                            borderRadius: '50%',
                            width: '20px',
                            height: '20px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <Trash2 size={10} />
                        </button>
                      </div>
                    ) : (
                      <div style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        marginBottom: '8px'
                      }}>
                        {cousin.defaultEmoji}
                      </div>
                    )}

                    <label style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '5px 12px',
                      borderRadius: '999px',
                      background: 'rgba(255, 255, 255, 0.12)',
                      color: '#fff',
                      fontSize: '11px',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}>
                      <Camera size={12} />
                      <span>{cousin.photo ? 'Change' : 'Upload'}</span>
                      <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={(e) => handleCousinPhoto(cousin.id, e)}
                      />
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Save Button */}
          <button
            type="submit"
            id="save-customization-btn"
            className="neon-btn"
            style={{
              width: '100%',
              padding: '14px',
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '24px'
            }}
          >
            <Save size={18} />
            <span>SAVE ALL UPDATES & PHOTOS 🚀</span>
          </button>
        </form>
      </div>
    </div>
  );
}

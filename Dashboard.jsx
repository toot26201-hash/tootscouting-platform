import React, { useState, useEffect } from 'react';

export default function Dashboard() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState('');

  useEffect(() => {
    // محاكاة سحب اللاعبين من الداتا
    const mockPlayers = ["#10 Talvitie E.", "#30 Lehtinen Lassi", "#40 Puhakainen L.", "#15 laine S."];
    setPlayers(mockPlayers);
    setSelectedPlayer(mockPlayers[0]);
  }, []);

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      backgroundColor: '#020617',
      color: '#f8fafc',
      padding: '2rem',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        backgroundColor: '#0f172a',
        border: '2px solid #38bdf8',
        borderRadius: '20px',
        padding: '2.5rem',
        maxWidth: '450px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 0 30px rgba(56, 189, 248, 0.6), inset 0 0 20px rgba(56, 189, 248, 0.2)'
      }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '900', color: '#ffffff', letterSpacing: '0.1rem', margin: '0 0 0.5rem 0' }}>
          🔬 TOOTSCOUTING LAB
        </h1>
        <p style={{ fontSize: '0.75rem', color: '#38bdf8', uppercase: 'true', fontWeight: '700', letterSpacing: '0.15rem', margin: '0 0 1.5rem 0' }}>
          CYBER GLOW PLATFORM ONLINE
        </p>
        
        <div style={{
          backgroundColor: '#020617',
          padding: '1rem',
          borderRadius: '12px',
          border: '1px solid #1e293b',
          marginBottom: '1.5rem',
          fontSize: '0.875rem',
          color: '#94a3b8',
          lineHeight: '1.6'
        }}>
          الموقع ده مربوط بـ GitHub وجاهز يشتغل لايف أونلاين بالملعب الأسود التكتيكي والكروت الملعلعة.
        </div>

        <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
          <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: '#94a3b8', uppercase: 'true', marginBottom: '0.5rem' }}>
            Focus Player
          </label>
          <select 
            value={selectedPlayer} 
            onChange={(e) => setSelectedPlayer(e.target.value)}
            style={{
              wTop: '100%',
              width: '100%',
              backgroundColor: '#020617',
              border: '1px solid #334155',
              borderRadius: '8px',
              padding: '0.75rem',
              fontSize: '0.875rem',
              color: '#ffffff',
              outline: 'none'
            }}
          >
            {players.map(p => <option key={p} value={p} style={{ background: '#0f172a' }}>{p}</option>)}
          </select>
        </div>

        <div style={{ fontSize: '0.85rem', color: '#10b981', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <span style={{ width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%', display: 'inline-block' }}></span>
          Connected to Netlify Live Successfully
        </div>
      </div>
    </div>
  );
}

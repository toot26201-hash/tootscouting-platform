import React, { useState, useEffect } from 'react';
import TacticalPitch from './TacticalPitch';

export default function Dashboard() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState('');

  useEffect(() => {
    const mockPlayers = ["#10 Talvitie E.", "#30 Lehtinen Lassi", "#40 Puhakainen L.", "#15 laine S. "];
    setPlayers(mockPlayers);
    setSelectedPlayer(mockPlayers[0]);
  }, []);

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      backgroundColor: '#020617',
      color: '#f8fafc',
      padding: '1.5rem',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        backgroundColor: '#0f172a',
        border: '2px solid #38bdf8',
        borderRadius: '20px',
        padding: '2rem',
        maxWidth: '420px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 0 30px rgba(56, 189, 248, 0.6)'
      }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: '900', color: '#ffffff', letterSpacing: '0.1rem', margin: '0 0 0.5rem 0' }}>
          🔬 TOOTSCOUTING LAB
        </h1>
        <p style={{ fontSize: '0.7rem', color: '#38bdf8', fontWeight: '700', letterSpacing: '0.15rem', margin: '0 0 1.5rem 0' }}>
          CYBER GLOW PLATFORM
        </p>

        <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
          <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '700', color: '#94a3b8', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
            Focus Player
          </label>
          <select 
            value={selectedPlayer} 
            onChange={(e) => setSelectedPlayer(e.target.value)}
            style={{
              width: '100%',
              backgroundColor: '#020617',
              border: '1px solid #334155',
              borderRadius: '8px',
              padding: '0.65rem',
              fontSize: '0.85rem',
              color: '#ffffff',
              outline: 'none'
            }}
          >
            {players.map(p => <option key={p} value={p} style={{ background: '#0f172a' }}>{p}</option>)}
          </select>
        </div>

        {/* 🏟️ ندهنا على الملعب التكتيكي هنا عشان يظهر جوه الكارت */}
        <TacticalPitch player={selectedPlayer} />

        <div style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
          <span style={{ width: '6px', height: '6px', backgroundColor: '#10b981', borderRadius: '50%', display: 'inline-block' }}></span>
          Live Tactical Dashboard Online
        </div>
      </div>
    </div>
  );
}

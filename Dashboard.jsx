import React, { useState, useEffect, useRef } from 'react';

// 🏟️ حطينا الملعب التكتيكي المضيء هنا جوه نفس الملف عشان السيرفر ما يتلغبطش
function TacticalPitch({ player }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = 320;
    const h = 220;
    canvas.width = w;
    canvas.height = h;

    // 1. أرضية الملعب السوداء
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, w, h);

    // 2. رسم خطوط الملعب البيضاء
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(10, 10, w - 20, h - 20);
    
    ctx.beginPath();
    ctx.moveTo(w / 2, 10);
    ctx.lineTo(w / 2, h - 10);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(w / 2, h / 2, 30, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.strokeRect(10, h / 2 - 40, 35, 80);
    ctx.strokeRect(w - 45, h / 2 - 40, 35, 80);

    // 3. سهم تمريرة مفتاحية نيون ذهبي مضيء (Key Pass Glow)
    ctx.shadowBlur = 8;
    ctx.shadowColor = '#fbbf24';
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(50, h / 2 - 15);
    ctx.lineTo(w - 60, h / 2 + 25);
    ctx.stroke();
    
    ctx.fillStyle = '#fbbf24';
    ctx.beginPath();
    ctx.arc(w - 60, h / 2 + 25, 3.5, 0, 2 * Math.PI);
    ctx.fill();

    ctx.shadowBlur = 0;

    // 4. اسم اللاعب كـ Watermark شفافة
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.font = 'bold 20px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(player.split(' ')[1] || player, w / 2, h / 2 + 6);

  }, [player]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', items: 'center', marginTop: '1.5rem' }}>
      <div style={{ fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '0.1rem', marginBottom: '0.5rem' }}>
        Tactical Live Pitch
      </div>
      <canvas ref={canvasRef} style={{ borderRadius: '12px', border: '1px solid #1e293b', boxShadow: '0 10px 20px rgba(0,0,0,0.5)', margin: '0 auto' }} />
    </div>
  );
}

// 🌐 اللوحة الرئيسية
export default function Dashboard() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState('');

  useEffect(() => {
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
      padding: '1rem',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        backgroundColor: '#0f172a',
        border: '2px solid #38bdf8',
        borderRadius: '20px',
        padding: '2rem',
        maxWidth: '400px',
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

        <TacticalPitch player={selectedPlayer} />

        <div style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
          <span style={{ width: '6px', height: '6px', backgroundColor: '#10b981', borderRadius: '50%', display: 'inline-block' }}></span>
          Live Tactical Dashboard Online
        </div>
      </div>
    </div>
  );
}

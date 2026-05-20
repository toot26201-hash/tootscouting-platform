import React, { useState, useEffect } from 'react';

export default function Dashboard() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [activeTab, setActiveTab] = useState('heatmap');

  useEffect(() => {
    const mockPlayers = ["#10 Talvitie E.", "#30 Lehtinen Lassi", "#40 Puhakainen L.", "#15 laine S."];
    setPlayers(mockPlayers);
    setSelectedPlayer(mockPlayers[0]);
  }, []);

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 p-8 justify-center items-center font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 max-w-md text-center shadow-2xl">
        <h1 className="text-2xl font-black tracking-wider text-sky-400 mb-2">🔬 TOOTSCOUTING LAB</h1>
        <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-6">Platform Online Setup</p>
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-6 text-sm text-slate-300">
          الموقع ده مربوط بـ GitHub وجاهز يشتغل لايف أونلاين بالملعب الأسود التكتيكي.
        </div>
        <select 
          value={selectedPlayer} 
          onChange={(e) => setSelectedPlayer(e.target.value)}
          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white mb-4"
        >
          {players.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
        <div className="text-xs text-emerald-400 font-bold">● Connected to Netlify Successfully</div>
      </div>
    </div>
  );
}

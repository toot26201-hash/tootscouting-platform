import React, { useState, useEffect } from 'react';
import TacticalPitch from './TacticalPitch';
import PerformanceStats from './PerformanceStats';

export default function Dashboard() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [activeTab, setActiveTab] = useState('heatmap');
  const [filters, setFilters] = useState({
    passes: true,
    shots: true,
    keyPasses: true,
    defense: true,
  });

  // محاكاة جلب البيانات من الـ Backend (Parser)
  useEffect(() => {
    // هنا مستقبلاً هتعمل Fetch من السيرفر لملف الـ CSV بعد ما يتصفى
    const mockPlayers = ["#10 Talvitie E.", "#30 Lehtinen Lassi", "#40 Puhakainen L.", "#15 laine S."];
    setPlayers(mockPlayers);
    setSelectedPlayer(mockPlayers[0]);
  }, []);

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans overflow-hidden">
      
      <aside className="w-80 bg-slate-900 border-r border-slate-800 flex flex-col justify-between p-6 z-10">
        <div>
          <div className="mb-8">
            <h1 className="text-xl font-black tracking-wider text-sky-400">🔬 TOOTSCOUTING</h1>
            <p className="text-xs text-slate-500 uppercase font-semibold">Tactical Pro Lab v1.0</p>
          </div>

          <div className="mb-6">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Focus Player</label>
            <select 
              value={selectedPlayer} 
              onChange={(e) => setSelectedPlayer(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-sky-500 text-white"
            >
              {players.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-2">Tactical Filters</h3>
            {Object.keys(filters).map((filterKey) => (
              <label key={filterKey} className="flex items-center space-x-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  checked={filters[filterKey]}
                  onChange={() => setFilters({...filters, [filterKey]: !filters[filterKey]})}
                  className="rounded bg-slate-950 border-slate-700 text-sky-500 focus:ring-0 focus:ring-offset-0 w-4 h-4"
                />
                <span className="text-sm font-medium capitalize text-slate-300 group-hover:text-white transition">
                  {filterKey.replace(/([A-Z])/g, ' $1')}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="text-xs text-slate-600 border-t border-slate-800 pt-4">
          Logged in as Head Scout
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-y-auto bg-gradient-to-br from-slate-950 to-slate-900 p-8">
        
        <div className="flex bg-slate-900 p-1.5 rounded-xl gap-2 max-w-xl mb-6 border border-slate-800">
          {['heatmap', 'actions', 'stats'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-bold tracking-wide uppercase transition ${
                activeTab === tab 
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/20' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {tab === 'stats' ? '📊 Performance Stats' : tab === 'actions' ? '🏃‍♂️ Actions Map' : '🔥 Tactical Heatmap'}
            </button>
          ))}
        </div>

        <div className="flex-1">
          {activeTab === 'stats' ? (
            <PerformanceStats player={selectedPlayer} />
          ) : (
            <TacticalPitch player={selectedPlayer} mode={activeTab} filters={filters} />
          )}
        </div>
      </main>

    </div>
  );
}
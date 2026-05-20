import React from 'react';

export default function PerformanceStats({ player }) {
  // داتا افتراضية للاعب المختار محولة من الـ Parser الذكي بتاعنا
  const stats = {
    rating: 88,
    passes: 44,
    keyPasses: 3,
    shots: 5,
    goals: 1,
    passAcc: "85.4%"
  };

  return (
    <div className="space-y-6">
      
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950/20 to-slate-950 border-2 border-sky-400 rounded-2xl p-6 shadow-[0_0_25px_rgba(56,189,248,0.5)] flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 rounded-full bg-slate-800 border-2 border-amber-400 flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.6)] text-4xl">
            🏃‍♂️
          </div>
          <div>
            <h2 className="text-3xl font-black text-white tracking-tight drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{player}</h2>
            <p className="text-sm font-semibold text-sky-400 mt-1">TootScouting Premium Profile</p>
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="bg-gradient-to-b from-sky-500 to-blue-700 border border-sky-300 rounded-xl px-6 py-4 text-center shadow-[0_0_15px_rgba(56,189,248,0.6)]">
            <div className="text-3xl font-black text-white text-shadow">{stats.rating}</div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-sky-100 mt-1">Rating</div>
          </div>
          <div className="bg-slate-900/8xl border border-slate-800 rounded-xl px-4 py-4 text-center min-w-[85px]">
            <div className="text-2xl font-extrabold text-white">{stats.passes}</div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">Passes</div>
          </div>
          <div className="bg-slate-900/8xl border border-slate-800 rounded-xl px-4 py-4 text-center min-w-[85px]">
            <div className="text-2xl font-extrabold text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.4)]">{stats.keyPasses}</div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">Key Passes 🔑</div>
          </div>
          <div className="bg-slate-900/8xl border border-slate-800 rounded-xl px-4 py-4 text-center min-w-[85px]">
            <div className="text-2xl font-extrabold text-emerald-400">{stats.goals}</div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">Goals</div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">
        <h3 className="text-sm font-bold text-slate-300 uppercase tracking-widest border-b border-slate-800 pb-3 mb-4">Interactive Performance Matrix</h3>
        <div className="space-y-4">
          
          <div className="flex items-center justify-between bg-slate-950/50 p-4 rounded-xl border border-slate-800/60">
            <span className="text-sm font-bold text-slate-200 w-40">Total Passing Matrix</span>
            <div className="flex-1 max-w-xs bg-slate-900 h-3 rounded-full overflow-hidden border border-slate-800 mx-4">
              <div className="bg-gradient-to-r from-amber-500 to-sky-400 h-full rounded-full" style={{width: '85%'}}></div>
            </div>
            <span className="text-xs font-bold bg-slate-900 text-sky-400 px-3 py-1.5 rounded-md border border-sky-500/20">{stats.passAcc} Acc</span>
          </div>

          <div className="flex items-center justify-between bg-slate-950/50 p-4 rounded-xl border border-slate-800/60">
            <span className="text-sm font-bold text-amber-400 w-40">🔑 Key Chance Creation</span>
            <div className="flex-1 max-w-xs bg-slate-900 h-3 rounded-full overflow-hidden border border-slate-800 mx-4">
              <div className="bg-gradient-to-r from-amber-500 to-yellow-300 h-full rounded-full" style={{width: '60%'}}></div>
            </div>
            <span className="text-xs font-bold bg-slate-900 text-amber-400 px-3 py-1.5 rounded-md border border-amber-500/20">3 Chances</span>
          </div>

        </div>
      </div>

    </div>
  );
}
'use client';
import Card from '../ui/Card';

type Props = {
  normalizeTime: (value: string) => string;
  formatTime: (total: number) => string;
  totalSeconds: number;
  dailyTotalSeconds: number;
  remainingSeconds: number;
  progress: number;
  weeklyStatus: string;
  weeklyStatusColor: string;
  session1: string;
  session2: string;
  session3: string;
  session4: string;
  day1: string;
  day2: string;
  day3: string;
  day4: string;
  day5: string;
  day6: string;
  setSession1: (value: string) => void;
  setSession2: (value: string) => void;
  setSession3: (value: string) => void;
  setSession4: (value: string) => void;
  setDay1: (value: string) => void;
  setDay2: (value: string) => void;
  setDay3: (value: string) => void;
  setDay4: (value: string) => void;
  setDay5: (value: string) => void;
  setDay6: (value: string) => void;
};

export default function LiveTracker({
  normalizeTime,
  formatTime,
  totalSeconds,
  dailyTotalSeconds,
  remainingSeconds,
  progress,
  weeklyStatus,
  weeklyStatusColor,
  session1,
  session2,
  session3,
  session4,
  day1,
  day2,
  day3,
  day4,
  day5,
  day6,
  setSession1,
  setSession2,
  setSession3,
  setSession4,
  setDay1,
  setDay2,
  setDay3,
  setDay4,
  setDay5,
  setDay6,
}: Props) {
  const inputStyle = `
    w-full
    rounded-2xl
    border
    border-white/10
    bg-black/40
    px-3
    py-3
    text-sm
    text-white
    outline-none
    backdrop-blur-xl
    transition-all
    duration-300
    focus:border-emerald-400/40
    focus:bg-white/[0.04]
  `;

  return (
    <div className="flex flex-col gap-4">
      {/* DAILY LIVE */}
      <Card className="relative overflow-hidden p-5 border-orange-500/20 bg-black/40">
        {/* GLOW */}
        <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="relative z-10">
          {/* HEADER */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[9px] uppercase tracking-[0.24em] text-orange-400">
                Rastreador Diário
              </p>
              <h2 className="mt-2 text-xl md:text-2xl font-black tracking-tight text-white">
                Calculadora Diária
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <p className="text-[9px] uppercase tracking-[0.18em] text-white/40">
                Ativo
              </p>
            </div>
          </div>

          {/* INPUTS */}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <input
              type="tel"
              inputMode="numeric"
              value={session1}
              placeholder="Sessão 1"
              className={inputStyle}
              onChange={(e) => setSession1(normalizeTime(e.target.value))}
            />
            <input
              type="tel"
              inputMode="numeric"
              value={session2}
              placeholder="Sessão 2"
              className={inputStyle}
              onChange={(e) => setSession2(normalizeTime(e.target.value))}
            />
            <input
              type="tel"
              inputMode="numeric"
              value={session3}
              placeholder="Sessão 3"
              className={inputStyle}
              onChange={(e) => setSession3(normalizeTime(e.target.value))}
            />
            <input
              type="tel"
              inputMode="numeric"
              value={session4}
              placeholder="Sessão 4"
              className={inputStyle}
              onChange={(e) => setSession4(normalizeTime(e.target.value))}
            />
          </div>

          {/* TOTAL */}
          <div className="mt-6">
            <p className="text-[9px] uppercase tracking-[0.22em] text-zinc-500">
              Tempo Total Hoje
            </p>
            <h2 className="mt-2 text-[clamp(1.8rem,5vw,3rem)] font-black leading-none tracking-[-0.05em] text-white">
              {formatTime(dailyTotalSeconds)}
            </h2>
          </div>
        </div>
      </Card>

      {/* WEEKLY GOAL */}
      <Card className="relative overflow-hidden p-5 border-emerald-500/20 bg-black/40">
        {/* GLOW */}
        <div className="absolute top-0 right-0 h-52 w-52 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="relative z-10">
          {/* HEADER */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[9px] uppercase tracking-[0.24em] text-emerald-400">
                Sistema de Meta Semanal
              </p>
              <h2 className="mt-2 text-xl md:text-2xl font-black tracking-tight text-white">
                Meta Semanal
              </h2>
            </div>
            <div className="text-right">
              <p className="text-[9px] uppercase tracking-[0.18em] text-zinc-500">
                Progresso
              </p>
              <h3 className="mt-1 text-lg font-black text-emerald-300">
                {progress.toFixed(0)}%
              </h3>
            </div>
          </div>

          {/* DAYS */}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <input
              type="tel"
              inputMode="numeric"
              value={day1}
              placeholder="SEG"
              className={inputStyle}
              onChange={(e) => setDay1(normalizeTime(e.target.value))}
            />
            <input
              type="tel"
              inputMode="numeric"
              value={day2}
              placeholder="TER"
              className={inputStyle}
              onChange={(e) => setDay2(normalizeTime(e.target.value))}
            />
            <input
              type="tel"
              inputMode="numeric"
              value={day3}
              placeholder="QUA"
              className={inputStyle}
              onChange={(e) => setDay3(normalizeTime(e.target.value))}
            />
            <input
              type="tel"
              inputMode="numeric"
              value={day4}
              placeholder="QUI"
              className={inputStyle}
              onChange={(e) => setDay4(normalizeTime(e.target.value))}
            />
            <input
              type="tel"
              inputMode="numeric"
              value={day5}
              placeholder="SEX"
              className={inputStyle}
              onChange={(e) => setDay5(normalizeTime(e.target.value))}
            />
            <input
              type="tel"
              inputMode="numeric"
              value={day6}
              placeholder="SAB"
              className={inputStyle}
              onChange={(e) => setDay6(normalizeTime(e.target.value))}
            />
          </div>

          {/* TOTAL */}
          <div className="mt-6">
            <p className="text-[9px] uppercase tracking-[0.22em] text-zinc-500">
              Tempo Total Semanal
            </p>
            <h2 className="mt-2 text-[clamp(1.8rem,5vw,3rem)] font-black leading-none tracking-[-0.05em] text-white">
              {formatTime(totalSeconds)}
            </h2>
          </div>

          {/* PROGRESS BAR */}
          <div className="mt-6">
            <div className="h-3 overflow-hidden rounded-full bg-zinc-900 border border-white/5">
              <div
                className="
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  from-emerald-500
                  via-emerald-400
                  to-orange-400
                  transition-all
                  duration-700
                "
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* STATUS */}
          <div className="mt-5 flex flex-col gap-2">
            <p className="text-sm text-zinc-400">
              Faltam{' '}
              <span className="font-bold text-white">{formatTime(remainingSeconds)}</span>{' '}
              para concluir a meta semanal.
            </p>
            <div className="flex items-center gap-2">
              <div
                className={`
                  w-2 h-2 rounded-full animate-pulse
                  ${
                    progress >= 70
                      ? 'bg-emerald-400'
                      : progress >= 40
                      ? 'bg-orange-400'
                      : 'bg-cyan-400'
                  }
                `}
              />
              <p className={`text-sm font-semibold ${weeklyStatusColor}`}>
                {weeklyStatus}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
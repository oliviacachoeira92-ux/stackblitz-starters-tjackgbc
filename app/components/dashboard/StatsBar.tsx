import MiniStatCard from './MiniStatCard';

interface StatsBarProps {

  usdRate: number;

  usdVariation: number;

  progress: number;

  remainingSeconds: number;

  dailyTotalSeconds: number;

  formatTime: (
    total: number
  ) => string;

  weeklyStatus: string;
}

export default function StatsBar({

  usdRate,

  usdVariation,

  progress,

  remainingSeconds,

  dailyTotalSeconds,

  formatTime,

  weeklyStatus,

}: StatsBarProps) {

  return (

    <div
      className="
        card-premium
        relative
        overflow-hidden
        p-3
        md:p-4
      "
    >

      {/* AMBIENT GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-70
        "
      >

        {/* ORANGE LIGHT */}

        <div
          className="
            absolute
            top-[-40px]
            left-[15%]
            h-36
            w-36
            rounded-full
            bg-orange-500/10
            blur-3xl
          "
        />

        {/* CYAN LIGHT */}

        <div
          className="
            absolute
            bottom-[-50px]
            right-[-20px]
            h-44
            w-44
            rounded-full
            bg-cyan-500/10
            blur-3xl
          "
        />

      </div>

      <div className="relative z-10">

        {/* HEADER */}

        <div className="flex items-center gap-3 mb-5 px-1">

          <div className="relative flex items-center justify-center">

            <div className="absolute w-3 h-3 rounded-full bg-emerald-400/30 blur-sm" />

            <div className="relative w-1.5 h-1.5 rounded-full bg-emerald-300" />

          </div>

          <p
            className="
              text-[9px]
              md:text-[10px]
              uppercase
              tracking-[0.28em]
              text-white/38
            "
          >

            PAINEL OPERACIONAL

          </p>

        </div>

        {/* GRID */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-5
            gap-3
            items-stretch
          "
        >

          <MiniStatCard
            label="Cotação USD"
            value={`R$ ${usdRate.toFixed(2)}`}
            accent="orange"
          />

          <MiniStatCard
            label="Meta Semanal"
            value={`${progress.toFixed(0)}%`}
            accent="emerald"
          />

          <MiniStatCard
            label="Tempo Restante"
            value={formatTime(remainingSeconds)}
            accent="cyan"
          />

          <MiniStatCard
            label="Tempo em Live"
            value={formatTime(dailyTotalSeconds)}
          />

          <MiniStatCard
            label="Status Atual"
            value={weeklyStatus
              .replace(/[🔥⚠️❌]/g, '')
              .trim()}
            accent={
              progress >= 70
                ? 'emerald'
                : progress >= 40
                ? 'orange'
                : 'cyan'
            }
          />

        </div>

      </div>

    </div>

  );
}
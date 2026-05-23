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
        px-3
        py-3
        md:px-4
        md:py-4
      "
    >

      {/* AMBIENT */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-50
        "
      >

        {/* TOP LIGHT */}

        <div
          className="
            absolute
            top-[-30px]
            left-[20%]
            h-24
            w-24
            rounded-full
            bg-orange-500/[0.05]
            blur-[55px]
          "
        />

        {/* SIDE LIGHT */}

        <div
          className="
            absolute
            bottom-[-40px]
            right-[-20px]
            h-28
            w-28
            rounded-full
            bg-cyan-500/[0.04]
            blur-[60px]
          "
        />

      </div>

      <div className="relative z-10">

        {/* HEADER */}

        <div className="flex items-center gap-2 mb-4 px-1">

          <div className="flex items-center justify-center">

            <div className="w-1.5 h-1.5 rounded-full bg-emerald-300" />

          </div>

          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.24em]
              text-white/28
            "
          >

            PAINEL OPERACIONAL

          </p>

        </div>

        {/* GRID */}

        <div
          className="
            grid
            grid-cols-2
            xl:grid-cols-5
            gap-2.5
            items-stretch
          "
        >

          <MiniStatCard
            label="USD"
            value={`R$ ${usdRate.toFixed(2)}`}
            accent="orange"
          />

          <MiniStatCard
            label="Meta"
            value={`${progress.toFixed(0)}%`}
            accent="emerald"
          />

          <MiniStatCard
            label="Restante"
            value={formatTime(remainingSeconds)}
            accent="cyan"
          />

          <MiniStatCard
            label="Live"
            value={formatTime(dailyTotalSeconds)}
          />

          <MiniStatCard
            label="Status"
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
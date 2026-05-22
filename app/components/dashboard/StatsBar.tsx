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

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-3 items-stretch">

      <MiniStatCard
        label="USD Hoje"
        value={`R$ ${usdRate.toFixed(2)}`}
        accent="orange"
      />

      <MiniStatCard
        label="Meta Semanal"
        value={`${progress.toFixed(0)}%`}
        accent="emerald"
      />

      <MiniStatCard
        label="Horas Restantes"
        value={formatTime(remainingSeconds)}
        accent="cyan"
      />

      <MiniStatCard
        label="Live Hoje"
        value={formatTime(dailyTotalSeconds)}
      />

      <MiniStatCard
        label="Status"
        value={weeklyStatus.replace(/[🔥⚠️❌]/g, '').trim()}
        accent={
          progress >= 70
            ? 'emerald'
            : progress >= 40
            ? 'orange'
            : 'cyan'
        }
      />

    </div>

  );
}
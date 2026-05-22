interface MiniStatCardProps {

  label: string;

  value: string;

  accent?: 'orange' | 'emerald' | 'cyan' | 'default';
}

export default function MiniStatCard({

  label,

  value,

  accent = 'default',

}: MiniStatCardProps) {

  const accents = {

    default: {
      border: 'border-white/10',
      glow: 'bg-white/[0.03]',
      text: 'text-white',
      label: 'text-zinc-500',
    },

    orange: {
      border: 'border-orange-500/15',
      glow: 'bg-orange-500/[0.04]',
      text: 'text-orange-100',
      label: 'text-orange-300/70',
    },

    emerald: {
      border: 'border-emerald-500/15',
      glow: 'bg-emerald-500/[0.04]',
      text: 'text-emerald-100',
      label: 'text-emerald-300/70',
    },

    cyan: {
      border: 'border-cyan-500/15',
      glow: 'bg-cyan-500/[0.04]',
      text: 'text-cyan-100',
      label: 'text-cyan-300/70',
    },

  };

  const style =
    accents[accent];

  return (

    <div
      className={`
        relative
        overflow-hidden
        rounded-2xl
        border
        px-4
        py-3
        min-h-[92px]
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-white/15
        hover:bg-white/[0.045]
        ${style.border}
        ${style.glow}
      `}
    >

      <div className="relative z-10 flex flex-col justify-center h-full">

        <p
          className={`
            text-[9px]
            uppercase
            tracking-[0.18em]
            mb-2
            ${style.label}
          `}
        >

          {label}

        </p>

        <h3
          className={`
            text-sm
            md:text-base
            font-black
            leading-tight
            tracking-tight
            break-words
            ${style.text}
          `}
        >

          {value}

        </h3>

      </div>

    </div>
  );
}
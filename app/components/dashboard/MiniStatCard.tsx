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
      border: 'border-white/[0.03]',
      glow: 'bg-white/[0.015]',
      text: 'text-white',
      label: 'text-white/30',
      ambient: 'bg-white/[0.025]',
    },

    orange: {
      border: 'border-orange-500/[0.05]',
      glow: 'bg-orange-500/[0.02]',
      text: 'text-orange-50',
      label: 'text-orange-200/65',
      ambient: 'bg-orange-500/[0.04]',
    },

    emerald: {
      border: 'border-emerald-500/[0.05]',
      glow: 'bg-emerald-500/[0.02]',
      text: 'text-emerald-50',
      label: 'text-emerald-200/65',
      ambient: 'bg-emerald-500/[0.04]',
    },

    cyan: {
      border: 'border-cyan-500/[0.05]',
      glow: 'bg-cyan-500/[0.02]',
      text: 'text-cyan-50',
      label: 'text-cyan-200/65',
      ambient: 'bg-cyan-500/[0.04]',
    },

  };

  const style =
    accents[accent];

  return (

    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-[1.35rem]
        border
        px-3
        py-3
        min-h-[82px]
        backdrop-blur-xl
        transition-transform
        duration-300
        hover:-translate-y-[1px]
        ${style.border}
        ${style.glow}
      `}
    >

      {/* AMBIENT */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-50
        "
      >

        <div
          className={`
            absolute
            top-[-20px]
            right-[-10px]
            h-16
            w-16
            rounded-full
            blur-[45px]
            ${style.ambient}
          `}
        />

      </div>

      {/* TOP LIGHT */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-gradient-to-b
          from-white/[0.015]
          via-transparent
          to-transparent
        "
      />

      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          flex
          flex-col
          justify-center
          h-full
        "
      >

        <p
          className={`
            text-[8px]
            uppercase
            tracking-[0.18em]
            mb-2
            font-medium
            ${style.label}
          `}
        >

          {label}

        </p>

        <h3
          className={`
            tabular-nums
            text-sm
            md:text-base
            font-semibold
            leading-tight
            tracking-[-0.03em]
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
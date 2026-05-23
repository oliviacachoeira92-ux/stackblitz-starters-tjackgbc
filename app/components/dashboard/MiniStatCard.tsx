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
      label: 'text-white/35',
      ambient: 'bg-white/[0.04]',
    },

    orange: {
      border: 'border-orange-500/15',
      glow: 'bg-orange-500/[0.04]',
      text: 'text-orange-50',
      label: 'text-orange-200/70',
      ambient: 'bg-orange-500/[0.08]',
    },

    emerald: {
      border: 'border-emerald-500/15',
      glow: 'bg-emerald-500/[0.04]',
      text: 'text-emerald-50',
      label: 'text-emerald-200/70',
      ambient: 'bg-emerald-500/[0.08]',
    },

    cyan: {
      border: 'border-cyan-500/15',
      glow: 'bg-cyan-500/[0.04]',
      text: 'text-cyan-50',
      label: 'text-cyan-200/70',
      ambient: 'bg-cyan-500/[0.08]',
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
        rounded-[1.5rem]
        border
        px-4
        py-4
        min-h-[96px]
        backdrop-blur-2xl
        transition-all
        duration-300
        hover:border-white/15
        hover:translate-y-[-2px]
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
          opacity-70
        "
      >

        <div
          className={`
            absolute
            top-[-30px]
            right-[-20px]
            h-24
            w-24
            rounded-full
            blur-3xl
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
          from-white/[0.03]
          via-transparent
          to-transparent
        "
      />

      {/* CONTENT */}

      <div className="relative z-10 flex flex-col justify-center h-full">

        <p
          className={`
            text-[9px]
            uppercase
            tracking-[0.20em]
            mb-3
            font-medium
            ${style.label}
          `}
        >

          {label}

        </p>

        <h3
          className={`
            text-base
            md:text-lg
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
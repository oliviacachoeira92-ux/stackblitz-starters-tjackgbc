interface MetricCardProps {
  title: string;
  value: string;

  color?:
    | 'default'
    | 'cyan'
    | 'emerald'
    | 'amber';

  large?: boolean;
  status?: boolean;
  featured?: boolean;
}

export default function MetricCard({
  title,
  value,
  color = 'default',
  large = false,
  status = false,
  featured = false,
}: MetricCardProps) {

  const variants = {

    default: {
      border:
        'border-white/[0.03]',

      glow:
        'from-white/[0.025]',

      label:
        'text-white/30',

      text:
        'text-white',

      ambient:
        'bg-white/[0.02]',
    },

    cyan: {
      border:
        'border-cyan-300/[0.05]',

      glow:
        'from-cyan-400/[0.04]',

      label:
        'text-cyan-100/50',

      text:
        'text-cyan-50',

      ambient:
        'bg-cyan-400/[0.03]',
    },

    emerald: {
      border:
        'border-emerald-400/[0.05]',

      glow:
        'from-emerald-400/[0.05]',

      label:
        'text-emerald-200/55',

      text:
        'text-emerald-50',

      ambient:
        'bg-emerald-400/[0.03]',
    },

    amber: {
      border:
        'border-amber-300/[0.05]',

      glow:
        'from-amber-300/[0.04]',

      label:
        'text-amber-100/45',

      text:
        'text-amber-50',

      ambient:
        'bg-amber-300/[0.03]',
    },

  };

  const style =
    variants[color];

  return (

    <div
      className={`
        card-premium
        group
        relative
        overflow-hidden
        min-h-[82px]
        md:min-h-[100px]
        px-4
        py-4
        md:px-5
        md:py-5
        flex
        flex-col
        items-center
        justify-center
        text-center
        backdrop-blur-xl
        transition-transform
        duration-300
        hover:-translate-y-[1px]
        ${style.border}
        ${
          large
            ? 'md:col-span-2 xl:col-span-4'
            : ''
        }
      `}
    >

      {/* AMBIENT */}

      <div
        className="
          absolute
          inset-0
          opacity-45
          pointer-events-none
        "
      >

        <div
          className={`
            absolute
            -top-16
            right-[-10px]
            w-28
            md:w-36
            h-28
            md:h-36
            rounded-full
            blur-[55px]
            bg-gradient-to-br
            ${style.glow}
            to-transparent
          `}
        />

      </div>

      {/* FEATURED */}

      {featured && (

        <div className="absolute inset-0 pointer-events-none">

          <div
            className="
              absolute
              top-[-10px]
              left-1/2
              -translate-x-1/2
              w-[140px]
              md:w-[180px]
              h-[70px]
              md:h-[90px]
              rounded-full
              bg-violet-500/[0.05]
              blur-[55px]
            "
          />

        </div>

      )}

      {/* STATUS */}

      {status && (

        <div className="absolute top-3 right-3 flex items-center gap-1.5">

          <div
            className="
              w-1.5
              h-1.5
              rounded-full
              bg-emerald-300
            "
          />

          <p
            className="
              text-[7px]
              uppercase
              tracking-[0.16em]
              text-white/25
            "
          >

            Ativo

          </p>

        </div>

      )}

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

      <div className="relative z-10 w-full">

        <p
          className={`
            text-[8px]
            md:text-[9px]
            uppercase
            tracking-[0.18em]
            mb-2
            font-medium
            ${style.label}
          `}
        >

          {title}

        </p>

        <h3
          className={`
            tabular-nums
            w-full
            font-semibold
            tracking-[-0.03em]
            leading-[1]
            break-words
            ${
              featured
                ? 'text-[clamp(1.2rem,7vw,2.2rem)]'
                : large
                ? 'text-[clamp(1rem,5vw,1.5rem)]'
                : 'text-[clamp(0.9rem,4vw,1.05rem)]'
            }
            ${
              status
                ? 'text-[clamp(0.82rem,4vw,0.95rem)]'
                : ''
            }
            ${style.text}
          `}
        >

          {value}

        </h3>

      </div>

    </div>

  );
}
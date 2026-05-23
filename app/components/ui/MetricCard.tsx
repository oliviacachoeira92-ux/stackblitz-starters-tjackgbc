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
        'border-white/8',

      glow:
        'from-white/[0.05]',

      label:
        'text-white/38',

      text:
        'text-white',

      ambient:
        'bg-white/[0.03]',
    },

    cyan: {
      border:
        'border-cyan-300/10',

      glow:
        'from-cyan-400/[0.07]',

      label:
        'text-cyan-100/55',

      text:
        'text-cyan-50',

      ambient:
        'bg-cyan-400/[0.05]',
    },

    emerald: {
      border:
        'border-emerald-400/10',

      glow:
        'from-emerald-400/[0.08]',

      label:
        'text-emerald-200/60',

      text:
        'text-emerald-50',

      ambient:
        'bg-emerald-400/[0.05]',
    },

    amber: {
      border:
        'border-amber-300/10',

      glow:
        'from-amber-300/[0.07]',

      label:
        'text-amber-100/50',

      text:
        'text-amber-50',

      ambient:
        'bg-amber-300/[0.05]',
    },

  };

  const style =
    variants[color];

  return (

    <div
      className={`
        card-premium
        hover-premium
        group
        relative
        overflow-hidden
        min-h-[88px]
        md:min-h-[112px]
        px-4
        py-5
        md:px-5
        md:py-6
        flex
        flex-col
        items-center
        justify-center
        text-center
        backdrop-blur-2xl
        transition-all
        duration-300
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
          opacity-60
          pointer-events-none
        "
      >

        <div
          className={`
            absolute
            -top-20
            right-[-20px]
            w-40
            md:w-48
            h-40
            md:h-48
            rounded-full
            blur-3xl
            bg-gradient-to-br
            ${style.glow}
            to-transparent
          `}
        />

        <div
          className={`
            absolute
            bottom-[-30px]
            left-[12%]
            w-14
            h-14
            rounded-full
            blur-2xl
            ${style.ambient}
          `}
        />

      </div>

      {/* FEATURED LIGHT */}

      {featured && (

        <div className="absolute inset-0 pointer-events-none">

          <div
            className="
              absolute
              top-[-10px]
              left-1/2
              -translate-x-1/2
              w-[160px]
              md:w-[200px]
              h-[80px]
              md:h-[100px]
              rounded-full
              bg-violet-500/8
              blur-[70px]
            "
          />

        </div>

      )}

      {/* STATUS */}

      {status && (

        <div className="absolute top-4 right-4 flex items-center gap-2">

          <div
            className="
              w-1.5
              h-1.5
              rounded-full
              bg-emerald-300
              shadow-[0_0_10px_rgba(52,211,153,0.6)]
            "
          />

          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-white/30
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
          from-white/[0.025]
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
            tracking-[0.22em]
            mb-3
            font-medium
            ${style.label}
          `}
        >

          {title}

        </p>

        <h3
          className={`
            w-full
            font-semibold
            tracking-[-0.04em]
            leading-[1]
            break-words
            ${
              featured
                ? 'text-[clamp(1.3rem,7vw,2.6rem)]'
                : large
                ? 'text-[clamp(1rem,5vw,1.7rem)]'
                : 'text-[clamp(0.95rem,4vw,1.15rem)]'
            }
            ${
              status
                ? 'text-[clamp(0.85rem,4vw,1rem)]'
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
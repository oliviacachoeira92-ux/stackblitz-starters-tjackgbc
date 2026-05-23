import { ChangeEvent } from 'react';

interface InputCardProps {
  title: string;

  value: string;

  placeholder?: string;

  onChange: (
    value: string
  ) => void;

  color?:
    | 'default'
    | 'cyan'
    | 'emerald'
    | 'fuchsia';

  readonly?: boolean;

  displayValue?: string;

  footer?: string;
}

export default function InputCard({

  title,

  value,

  placeholder = '',

  onChange,

  color = 'default',

  readonly = false,

  displayValue,

  footer,

}: InputCardProps) {

  const variants = {

    default: {
      border:
        'border-white/[0.03]',

      glow:
        'from-white/[0.025]',

      text:
        'text-white',

      label:
        'text-white/30',

      placeholder:
        'placeholder:text-zinc-600',

      inputGlow:
        'focus-within:border-white/[0.06]',
    },

    cyan: {
      border:
        'border-cyan-400/[0.05]',

      glow:
        'from-cyan-400/[0.04]',

      text:
        'text-cyan-50',

      label:
        'text-cyan-100/50',

      placeholder:
        'placeholder:text-cyan-100/15',

      inputGlow:
        'focus-within:border-cyan-300/[0.08]',
    },

    emerald: {
      border:
        'border-emerald-400/[0.05]',

      glow:
        'from-emerald-400/[0.04]',

      text:
        'text-emerald-50',

      label:
        'text-emerald-200/55',

      placeholder:
        'placeholder:text-emerald-100/15',

      inputGlow:
        'focus-within:border-emerald-300/[0.08]',
    },

    fuchsia: {
      border:
        'border-fuchsia-400/[0.05]',

      glow:
        'from-fuchsia-400/[0.04]',

      text:
        'text-fuchsia-50',

      label:
        'text-fuchsia-100/50',

      placeholder:
        'placeholder:text-fuchsia-100/15',

      inputGlow:
        'focus-within:border-fuchsia-300/[0.08]',
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
        min-h-[84px]
        md:min-h-[108px]
        px-4
        py-4
        md:px-5
        md:py-5
        backdrop-blur-xl
        transition-transform
        duration-300
        hover:-translate-y-[1px]
        ${style.border}
      `}
    >

      {/* AMBIENT */}

      <div
        className="
          absolute
          inset-0
          opacity-40
          pointer-events-none
        "
      >

        <div
          className={`
            absolute
            -top-14
            right-[-10px]
            w-28
            h-28
            rounded-full
            blur-[50px]
            bg-gradient-to-br
            ${style.glow}
            to-transparent
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
          h-full
          flex
          flex-col
          justify-between
        "
      >

        <div>

          {/* LABEL */}

          <p
            className={`
              uppercase
              tracking-[0.18em]
              text-[8px]
              md:text-[9px]
              mb-2
              font-medium
              ${style.label}
            `}
          >

            {title}

          </p>

          {/* READONLY */}

          {readonly ? (

            <div
              className={`
                tabular-nums
                w-full
                min-w-0
                text-[clamp(0.95rem,2.6vw,1.45rem)]
                md:text-[clamp(1rem,2vw,1.7rem)]
                font-semibold
                leading-none
                break-words
                tracking-[-0.03em]
                ${style.text}
              `}
            >

              {displayValue}

            </div>

          ) : (

            <div
              className={`
                relative
                rounded-[1.2rem]
                border
                border-white/[0.03]
                bg-black/20
                backdrop-blur-md
                transition-colors
                duration-300
                ${style.inputGlow}
              `}
            >

              {/* INPUT LIGHT */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-[1.2rem]
                  bg-gradient-to-r
                  from-white/[0.01]
                  to-transparent
                  pointer-events-none
                "
              />

              <input
                type="text"
                value={value}
                onChange={(
                  e: ChangeEvent<HTMLInputElement>
                ) =>
                  onChange(
                    e.target.value
                  )
                }
                placeholder={placeholder}
                className={`
                  relative
                  z-10
                  tabular-nums
                  w-full
                  min-w-0
                  bg-transparent
                  px-4
                  py-3
                  text-[clamp(0.95rem,2.6vw,1.45rem)]
                  md:text-[clamp(1rem,2vw,1.7rem)]
                  font-semibold
                  leading-none
                  tracking-[-0.03em]
                  outline-none
                  ${style.text}
                  ${style.placeholder}
                `}
              />

            </div>

          )}

        </div>

        {/* FOOTER */}

        {footer && (

          <p
            className="
              text-white/24
              mt-3
              text-[9px]
              tracking-wide
            "
          >

            {footer}

          </p>

        )}

      </div>

    </div>

  );
}
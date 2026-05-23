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
        'border-white/8',

      glow:
        'from-white/[0.04]',

      text:
        'text-white',

      label:
        'text-white/38',

      placeholder:
        'placeholder:text-zinc-600',

      inputGlow:
        'focus-within:border-white/10',
    },

    cyan: {
      border:
        'border-cyan-400/10',

      glow:
        'from-cyan-400/[0.07]',

      text:
        'text-cyan-50',

      label:
        'text-cyan-100/60',

      placeholder:
        'placeholder:text-cyan-100/18',

      inputGlow:
        'focus-within:border-cyan-300/18',
    },

    emerald: {
      border:
        'border-emerald-400/10',

      glow:
        'from-emerald-400/[0.07]',

      text:
        'text-emerald-50',

      label:
        'text-emerald-200/65',

      placeholder:
        'placeholder:text-emerald-100/18',

      inputGlow:
        'focus-within:border-emerald-300/18',
    },

    fuchsia: {
      border:
        'border-fuchsia-400/10',

      glow:
        'from-fuchsia-400/[0.06]',

      text:
        'text-fuchsia-50',

      label:
        'text-fuchsia-100/58',

      placeholder:
        'placeholder:text-fuchsia-100/18',

      inputGlow:
        'focus-within:border-fuchsia-300/18',
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
        min-h-[96px]
        md:min-h-[124px]
        px-4
        py-5
        md:px-5
        md:py-6
        backdrop-blur-2xl
        transition-all
        duration-300
        ${style.border}
      `}
    >

      {/* AMBIENT */}

      <div className="absolute inset-0 opacity-50 pointer-events-none">

        <div
          className={`
            absolute
            -top-20
            right-[-20px]
            w-40
            h-40
            rounded-full
            blur-3xl
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
          from-white/[0.025]
          via-transparent
          to-transparent
        "
      />

      {/* CONTENT */}

      <div className="relative z-10 h-full flex flex-col justify-between">

        <div>

          {/* LABEL */}

          <p
            className={`
              uppercase
              tracking-[0.22em]
              text-[8px]
              md:text-[9px]
              mb-3
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
                w-full
                min-w-0
                text-[clamp(1rem,2.8vw,1.65rem)]
                md:text-[clamp(1.1rem,2vw,1.9rem)]
                font-semibold
                leading-none
                break-words
                tracking-[-0.04em]
                ${style.text}
              `}
            >

              {displayValue}

            </div>

          ) : (

            <div
              className={`
                relative
                rounded-2xl
                border
                border-white/5
                bg-black/25
                backdrop-blur-xl
                transition-all
                duration-300
                ${style.inputGlow}
              `}
            >

              {/* INPUT LIGHT */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-2xl
                  bg-gradient-to-r
                  from-white/[0.015]
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
                  w-full
                  min-w-0
                  bg-transparent
                  px-4
                  py-3
                  text-[clamp(1rem,2.8vw,1.6rem)]
                  md:text-[clamp(1.1rem,2vw,1.9rem)]
                  font-semibold
                  leading-none
                  tracking-[-0.04em]
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
              text-white/30
              mt-4
              text-[10px]
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
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
        'border-orange-400/[0.08]',

      glow:
        'from-orange-500/[0.10]',

      text:
        'text-white',

      label:
        'text-orange-100/42',

      placeholder:
        'placeholder:text-zinc-600',

      inputGlow:
        'focus-within:border-orange-300/[0.18]',

      focus:
        'focus-within:shadow-[0_0_30px_rgba(255,120,40,0.12)]',
    },

    cyan: {
      border:
        'border-cyan-400/[0.08]',

      glow:
        'from-cyan-400/[0.08]',

      text:
        'text-cyan-50',

      label:
        'text-cyan-100/50',

      placeholder:
        'placeholder:text-cyan-100/15',

      inputGlow:
        'focus-within:border-cyan-300/[0.18]',

      focus:
        'focus-within:shadow-[0_0_30px_rgba(34,211,238,0.14)]',
    },

    emerald: {
      border:
        'border-emerald-400/[0.08]',

      glow:
        'from-emerald-400/[0.08]',

      text:
        'text-emerald-50',

      label:
        'text-emerald-200/55',

      placeholder:
        'placeholder:text-emerald-100/15',

      inputGlow:
        'focus-within:border-emerald-300/[0.18]',

      focus:
        'focus-within:shadow-[0_0_30px_rgba(16,185,129,0.14)]',
    },

    fuchsia: {
      border:
        'border-fuchsia-400/[0.08]',

      glow:
        'from-fuchsia-400/[0.08]',

      text:
        'text-fuchsia-50',

      label:
        'text-fuchsia-100/50',

      placeholder:
        'placeholder:text-fuchsia-100/15',

      inputGlow:
        'focus-within:border-fuchsia-300/[0.18]',

      focus:
        'focus-within:shadow-[0_0_30px_rgba(217,70,239,0.14)]',
    },

  };

  const style =
    variants[color];

  return (

    <div
      className={`
        group
        relative
        overflow-hidden

        min-h-[84px]
        md:min-h-[108px]

        rounded-[1.8rem]

        border
        ${style.border}

        bg-[linear-gradient(to_bottom,rgba(10,10,12,0.94),rgba(5,5,7,0.92))]

        px-4
        py-4

        md:px-5
        md:py-5

        backdrop-blur-[20px]

        shadow-[0_18px_60px_rgba(0,0,0,0.55)]

        transition-all
        duration-500

        hover:-translate-y-[2px]
      `}
    >

      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          overflow-hidden
          pointer-events-none
        "
      >

        {/* THERMAL GLOW */}

        <div
          className={`
            absolute
            -top-20
            right-[-20px]

            w-[180px]
            h-[180px]

            rounded-full

            blur-[90px]

            opacity-80

            bg-gradient-to-br
            ${style.glow}
            to-transparent
          `}
        />

        {/* LOWER FIRE */}

        <div
          className="
            absolute
            bottom-[-60px]
            left-[-30px]

            w-[140px]
            h-[140px]

            rounded-full

            bg-orange-500/[0.06]

            blur-[80px]
          "
        />

        {/* TOP LIGHT */}

        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2

            w-[70%]
            h-[1px]

            bg-gradient-to-r
            from-transparent
            via-orange-200/55
            to-transparent
          "
        />

      </div>

      {/* =====================================================
          INNER BORDER
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-[1px]

          rounded-[calc(1.8rem-1px)]

          border
          border-white/[0.025]
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

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
                overflow-hidden

                rounded-[1.3rem]

                border
                border-white/[0.04]

                bg-[linear-gradient(to_bottom,rgba(0,0,0,0.34),rgba(0,0,0,0.54))]

                backdrop-blur-xl

                transition-all
                duration-500

                ${style.inputGlow}
                ${style.focus}
              `}
            >

              {/* INNER LIGHT */}

              <div
                className="
                  absolute
                  inset-0

                  rounded-[1.3rem]

                  bg-[linear-gradient(to_right,rgba(255,255,255,0.02),transparent)]
                "
              />

              {/* FIRE EDGE */}

              <div
                className="
                  absolute
                  top-0
                  left-1/2
                  -translate-x-1/2

                  w-[55%]
                  h-[1px]

                  bg-gradient-to-r
                  from-transparent
                  via-orange-200/50
                  to-transparent
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
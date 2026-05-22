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
        'border-white/10',

      background:
        'bg-gradient-to-b from-white/[0.04] to-white/[0.02]',

      hover:
        'hover:border-white/20',

      text:
        'text-white',

      label:
        'text-zinc-400',

      placeholder:
        'placeholder:text-zinc-600',
    },

    cyan: {
      border:
        'border-cyan-400/10',

      background:
        'bg-cyan-400/[0.025]',

      hover:
        'hover:border-cyan-300/20 hover:bg-cyan-300/[0.04]',

      text:
        'text-cyan-50',

      label:
        'text-cyan-200/70',

      placeholder:
        'placeholder:text-cyan-100/20',
    },

    emerald: {
      border:
        'border-emerald-400/20',

      background:
        'bg-emerald-400/[0.04]',

      hover:
        'hover:border-emerald-300/30 hover:bg-emerald-300/[0.06]',

      text:
        'text-emerald-100',

      label:
        'text-emerald-300',

      placeholder:
        'placeholder:text-emerald-100/20',
    },

    fuchsia: {
      border:
        'border-fuchsia-400/10',

      background:
        'bg-fuchsia-400/[0.02]',

      hover:
        'hover:border-fuchsia-300/20',

      text:
        'text-white',

      label:
        'text-zinc-300',

      placeholder:
        'placeholder:text-zinc-600',
    },

  };

  const style =
    variants[color];

  return (

    <div
      className={`
        rounded-2xl
        min-h-[90px]
        md:min-h-[120px]
        border
        p-3
        md:p-4
        transition-all
        duration-500
        ${style.border}
        ${style.background}
        ${style.hover}
      `}
    >

      <p
        className={`
          uppercase
          tracking-[0.2em]
          text-[9px]
          md:text-[10px]
          mb-2
          ${style.label}
        `}
      >

        {title}

      </p>

      {readonly ? (

        <div
          className={`
            w-full
            min-w-0
            text-[clamp(1rem,2.8vw,1.5rem)]
            md:text-[clamp(1.2rem,2vw,2rem)]
            font-black
            leading-none
            break-words
            ${style.text}
          `}
        >

          {displayValue}

        </div>

      ) : (

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
            w-full
            min-w-0
            bg-transparent
            text-[clamp(1rem,2.8vw,1.5rem)]
            md:text-[clamp(1.2rem,2vw,2rem)]
            font-black
            leading-none
            outline-none
            rounded-xl
            ${style.text}
            ${style.placeholder}
          `}
        />

      )}

      {footer && (

        <p className="text-zinc-500 mt-2 text-[11px]">

          {footer}

        </p>

      )}

    </div>
  );
}
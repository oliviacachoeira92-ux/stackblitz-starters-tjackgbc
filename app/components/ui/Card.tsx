import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = '',
}: CardProps) {

  return (

    <div
      className={`
        glow-card
        group
        relative
        overflow-hidden
        rounded-[1.8rem]
        border
        border-white/[0.035]
        bg-[rgba(12,12,16,0.74)]
        backdrop-blur-md
        transition-all
        duration-300
        shadow-[0_4px_24px_rgba(0,0,0,0.18)]
        hover:-translate-y-[1px]
        hover:shadow-[0_8px_34px_rgba(0,0,0,0.22)]
        ${className}
      `}
    >

      {/* AMBIENT */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-30
        "
      >

        {/* TOP LIGHT */}

        <div
          className="
            absolute
            -top-16
            left-1/2
            h-24
            w-24
            -translate-x-1/2
            rounded-full
            bg-violet-500/[0.025]
            blur-[45px]
          "
        />

        {/* SIDE LIGHT */}

        <div
          className="
            absolute
            top-[45%]
            right-[-18px]
            h-16
            w-16
            rounded-full
            bg-cyan-400/[0.02]
            blur-[35px]
          "
        />

      </div>

      {/* TOP GRADIENT */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-b
          from-white/[0.012]
          via-transparent
          to-transparent
        "
      />

      {/* INNER BORDER */}

      <div
        className="
          pointer-events-none
          absolute
          inset-[1px]
          rounded-[calc(1.8rem-1px)]
          border
          border-white/[0.012]
        "
      />

      {/* CONTENT */}

      <div className="relative z-10">

        {children}

      </div>

    </div>

  );

}
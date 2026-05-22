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
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-2xl
        transition-all
        duration-500
        shadow-[0_0_50px_rgba(255,255,255,0.015)]
        hover:border-white/15
        hover:bg-white/[0.04]
        hover:shadow-[0_0_70px_rgba(255,255,255,0.025)]
        ${className}
      `}
    >

      {/* AMBIENT GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-40
        "
      >

        <div
          className="
            absolute
            -top-20
            left-1/2
            h-40
            w-40
            -translate-x-1/2
            rounded-full
            bg-orange-500/8
            blur-2xl
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            h-24
            w-24
            rounded-full
            bg-cyan-400/5
            blur-2xl
          "
        />

      </div>

      {/* INNER LIGHT */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-b
          from-white/[0.025]
          via-transparent
          to-transparent
        "
      />

      {/* CONTENT */}

      <div className="relative z-10">

        {children}

      </div>

    </div>
  );
}
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
        shadow-[0_0_80px_rgba(255,255,255,0.02)]
        hover:border-white/15
        hover:bg-white/[0.045]
        hover:shadow-[0_0_120px_rgba(255,255,255,0.04)]
        ${className}
      `}
    >

      {/* AMBIENT GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-60
        "
      >

        <div
          className="
            absolute
            -top-24
            left-1/2
            h-48
            w-48
            -translate-x-1/2
            rounded-full
            bg-orange-500/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            h-32
            w-32
            rounded-full
            bg-cyan-400/5
            blur-3xl
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
          from-white/[0.03]
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
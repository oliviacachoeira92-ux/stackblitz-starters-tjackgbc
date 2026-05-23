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
        rounded-[2rem]
        border
        border-white/[0.06]
        bg-[rgba(12,12,16,0.72)]
        backdrop-blur-[24px]
        transition-all
        duration-500
        shadow-[0_8px_40px_rgba(0,0,0,0.28)]
        hover:border-white/[0.08]
        hover:shadow-[0_12px_55px_rgba(0,0,0,0.34)]
        ${className}
      `}
    >

      {/* AMBIENT LIGHT */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-50
        "
      >

        {/* TOP LIGHT */}

        <div
          className="
            absolute
            -top-28
            left-1/2
            h-44
            w-44
            -translate-x-1/2
            rounded-full
            bg-violet-500/[0.05]
            blur-[100px]
          "
        />

        {/* RIGHT LIGHT */}

        <div
          className="
            absolute
            top-[40%]
            right-[-40px]
            h-28
            w-28
            rounded-full
            bg-cyan-400/[0.04]
            blur-[80px]
          "
        />

        {/* BOTTOM LIGHT */}

        <div
          className="
            absolute
            bottom-[-40px]
            left-[12%]
            h-20
            w-20
            rounded-full
            bg-orange-400/[0.03]
            blur-[60px]
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
          from-white/[0.025]
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
          rounded-[calc(2rem-1px)]
          border
          border-white/[0.02]
        "
      />

      {/* HOVER SHINE */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      >

        <div
          className="
            absolute
            top-0
            left-[-25%]
            h-full
            w-[26%]
            rotate-12
            bg-gradient-to-r
            from-transparent
            via-white/[0.02]
            to-transparent
            blur-2xl
          "
        />

      </div>

      {/* CONTENT */}

      <div className="relative z-10">

        {children}

      </div>

    </div>

  );
}
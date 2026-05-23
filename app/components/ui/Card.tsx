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
        rounded-[1.9rem]
        border
        border-white/[0.03]
        bg-[rgba(12,12,16,0.68)]
        backdrop-blur-xl
        transition-transform
        duration-500
        shadow-[0_6px_30px_rgba(0,0,0,0.22)]
        hover:-translate-y-[1px]
        hover:shadow-[0_10px_40px_rgba(0,0,0,0.28)]
        ${className}
      `}
    >

      {/* AMBIENT LIGHT */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-35
        "
      >

        {/* TOP LIGHT */}

        <div
          className="
            absolute
            -top-20
            left-1/2
            h-32
            w-32
            -translate-x-1/2
            rounded-full
            bg-violet-500/[0.03]
            blur-[70px]
          "
        />

        {/* SIDE LIGHT */}

        <div
          className="
            absolute
            top-[42%]
            right-[-25px]
            h-20
            w-20
            rounded-full
            bg-cyan-400/[0.025]
            blur-[50px]
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
          from-white/[0.015]
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
          rounded-[calc(1.9rem-1px)]
          border
          border-white/[0.015]
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
            left-[-20%]
            h-full
            w-[22%]
            rotate-12
            bg-gradient-to-r
            from-transparent
            via-white/[0.012]
            to-transparent
            blur-xl
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
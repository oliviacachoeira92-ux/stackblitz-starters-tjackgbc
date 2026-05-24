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
        border-white/[0.05]
        bg-[linear-gradient(to_bottom,rgba(18,18,24,0.82),rgba(10,10,14,0.72))]
        backdrop-blur-xl
        transition-all
        duration-500
        shadow-[0_20px_70px_rgba(0,0,0,0.42)]
        hover:-translate-y-[2px]
        hover:shadow-[0_28px_90px_rgba(0,0,0,0.52)]
        hover:border-white/[0.07]
        ${className}
      `}
    >

      {/* =====================================================
          GLOBAL ATMOSPHERE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >

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
            via-orange-200/45
            to-transparent
          "
        />

        {/* ORANGE BLOOM */}

        <div
          className="
            absolute
            -top-24
            right-[-40px]
            w-[240px]
            h-[180px]
            rounded-full
            bg-orange-500/[0.10]
            blur-[90px]
            opacity-80
            transition-all
            duration-700
            group-hover:opacity-100
          "
        />

        {/* VIOLET ENERGY */}

        <div
          className="
            absolute
            bottom-[-80px]
            left-[-40px]
            w-[180px]
            h-[180px]
            rounded-full
            bg-violet-500/[0.06]
            blur-[80px]
            opacity-70
          "
        />

        {/* INNER FOG */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-white/[0.03]
            via-transparent
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
          rounded-[calc(2rem-1px)]
          border
          border-white/[0.018]
        "
      />

      {/* =====================================================
          SHINE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-700
          group-hover:opacity-100
        "
      >

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-transparent
            via-white/[0.02]
            to-transparent
          "
        />

      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10">

        {children}

      </div>

    </div>

  );

}
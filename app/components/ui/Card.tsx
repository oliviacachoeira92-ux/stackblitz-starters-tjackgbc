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
        group
        relative
        overflow-hidden

        rounded-[2rem]

        border
        border-white/[0.045]

        bg-[linear-gradient(to_bottom,rgba(10,10,12,0.96),rgba(5,5,8,0.94))]

        backdrop-blur-[22px]

        shadow-[0_25px_120px_rgba(0,0,0,0.72)]

        transition-all
        duration-700

        hover:-translate-y-[3px]
        hover:border-orange-300/[0.08]
        hover:shadow-[0_35px_140px_rgba(0,0,0,0.82)]

        ${className}
      `}
    >

      {/* =====================================================
          CINEMATIC BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >

        {/* DEEP SHADOW */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.34)_100%)]
          "
        />

        {/* TOP THERMAL */}

        <div
          className="
            absolute
            -top-32
            right-[-40px]

            w-[320px]
            h-[240px]

            rounded-full

            bg-orange-500/[0.16]

            blur-[110px]

            opacity-90

            transition-all
            duration-700

            group-hover:opacity-100
            group-hover:scale-110
          "
        />

        {/* FIRE CORE */}

        <div
          className="
            absolute
            top-[12%]
            right-[8%]

            w-[180px]
            h-[180px]

            rounded-full

            bg-orange-400/[0.10]

            blur-[70px]

            animate-pulse
          "
        />

        {/* LOWER HEAT */}

        <div
          className="
            absolute
            bottom-[-120px]
            left-[-60px]

            w-[240px]
            h-[240px]

            rounded-full

            bg-red-500/[0.08]

            blur-[100px]
          "
        />

        {/* VIOLET DEPTH */}

        <div
          className="
            absolute
            bottom-[-80px]
            right-[10%]

            w-[180px]
            h-[180px]

            rounded-full

            bg-violet-500/[0.08]

            blur-[90px]
          "
        />

        {/* INNER ATMOSPHERE */}

        <div
          className="
            absolute
            inset-0

            bg-[linear-gradient(to_bottom,rgba(255,255,255,0.045),transparent_24%,transparent_100%)]
          "
        />

        {/* DARK CORNERS */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_top_right,transparent_0%,rgba(0,0,0,0.42)_72%)]
          "
        />

      </div>

      {/* =====================================================
          THERMAL BORDER
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[inherit]
          overflow-hidden
        "
      >

        {/* TOP ENERGY */}

        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2

            w-[72%]
            h-[1px]

            bg-gradient-to-r
            from-transparent
            via-orange-200/70
            to-transparent
          "
        />

        {/* RIGHT ENERGY */}

        <div
          className="
            absolute
            top-[12%]
            right-0

            h-[42%]
            w-[1px]

            bg-gradient-to-b
            from-transparent
            via-orange-300/40
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
          border-white/[0.025]
        "
      />

      {/* =====================================================
          LIGHT LEAK
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

            bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.03)_50%,transparent_80%)]
          "
        />

      </div>

      {/* =====================================================
          EMBER PARTICLES
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
          opacity-60
        "
      >

        <div
          className="
            absolute
            top-[18%]
            left-[12%]

            w-[2px]
            h-[2px]

            rounded-full
            bg-orange-200

            blur-[1px]
          "
        />

        <div
          className="
            absolute
            bottom-[22%]
            right-[18%]

            w-[3px]
            h-[3px]

            rounded-full
            bg-orange-300

            blur-[1px]
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
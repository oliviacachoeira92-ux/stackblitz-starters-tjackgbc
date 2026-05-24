import FenixRadio from './FenixRadio';

import ClockCard from '../dashboard/ClockCard';

interface HeaderProps {
  time: string;
}

export default function Header({
  time,
}: HeaderProps) {

  return (

    <header className="relative mb-8 md:mb-10">

      {/* =====================================================
          HERO ATMOSPHERE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >

        {/* TOP THERMAL */}

        <div
          className="
            absolute
            top-[-180px]
            left-1/2
            -translate-x-1/2
            w-[760px]
            h-[320px]
            rounded-full
            bg-orange-500/[0.10]
            blur-[120px]
          "
        />

        {/* SIDE ENERGY */}

        <div
          className="
            absolute
            top-[10%]
            right-[-120px]
            w-[300px]
            h-[300px]
            rounded-full
            bg-violet-500/[0.08]
            blur-[90px]
          "
        />

        {/* HERO FOG */}

        <div
          className="
            absolute
            top-[22%]
            left-[10%]
            w-[240px]
            h-[240px]
            rounded-full
            bg-orange-400/[0.04]
            blur-[70px]
          "
        />

      </div>

      {/* =====================================================
          TOP STATUS
      ===================================================== */}

      <div
        className="
          relative
          z-10
          inline-flex
          items-center
          gap-3
          px-4
          py-2
          rounded-full
          border
          border-white/[0.05]
          bg-white/[0.025]
          backdrop-blur-xl
          mb-6
          shadow-[0_8px_40px_rgba(0,0,0,0.25)]
        "
      >

        {/* STATUS DOT */}

        <div className="relative flex items-center justify-center">

          <div
            className="
              absolute
              h-4
              w-4
              rounded-full
              bg-orange-400/20
              animate-pulse
            "
          />

          <div
            className="
              relative
              h-1.5
              w-1.5
              rounded-full
              bg-orange-300
            "
          />

        </div>

        {/* LABEL */}

        <p
          className="
            text-[9px]
            uppercase
            tracking-[0.28em]
            text-white/45
            whitespace-nowrap
          "
        >

          FENIX ARCANE • OPERATIONAL SYSTEM

        </p>

      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <div
        className="
          relative
          z-10
          overflow-hidden
          rounded-[2.2rem]
          border
          border-white/[0.05]
          bg-[linear-gradient(to_bottom,rgba(18,18,24,0.84),rgba(10,10,14,0.74))]
          backdrop-blur-xl
          shadow-[0_24px_90px_rgba(0,0,0,0.42)]
        "
      >

        {/* HERO OVERLAY */}

        <div
          className="
            absolute
            inset-0
            pointer-events-none
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
              via-orange-200/50
              to-transparent
            "
          />

          {/* ORANGE BLOOM */}

          <div
            className="
              absolute
              top-[-120px]
              right-[-40px]
              w-[340px]
              h-[340px]
              rounded-full
              bg-orange-500/[0.12]
              blur-[120px]
            "
          />

          {/* VIOLET ENERGY */}

          <div
            className="
              absolute
              bottom-[-120px]
              left-[-80px]
              w-[280px]
              h-[280px]
              rounded-full
              bg-violet-500/[0.08]
              blur-[100px]
            "
          />

          {/* INNER GRADIENT */}

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

        {/* CONTENT */}

        <div
          className="
            relative
            z-10
            px-5
            py-6
            md:px-8
            md:py-8
            xl:px-10
            xl:py-10
          "
        >

          <div
            className="
              flex
              flex-col
              xl:flex-row
              xl:items-center
              xl:justify-between
              gap-8
            "
          >

            {/* =========================================
                LEFT
            ========================================= */}

            <div className="flex-1 min-w-0">

              {/* MINI TAG */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-3
                  py-1.5
                  rounded-full
                  border
                  border-orange-400/[0.08]
                  bg-orange-400/[0.04]
                  backdrop-blur-md
                "
              >

                <div
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-orange-300
                  "
                />

                <p
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.24em]
                    text-orange-100/70
                    whitespace-nowrap
                  "
                >

                  PREMIUM CREATOR PLATFORM

                </p>

              </div>

              {/* TITLE */}

              <div className="mt-5 relative">

                {/* AMBIENT */}

                <div
                  className="
                    absolute
                    -top-16
                    left-0
                    w-[280px]
                    h-[160px]
                    rounded-full
                    bg-orange-500/[0.08]
                    blur-[90px]
                  "
                />

                <h1
                  className="
                    relative
                    z-10
                    thermal-text
                    text-[clamp(2.8rem,8vw,6rem)]
                    font-black
                    tracking-[-0.08em]
                    leading-[0.88]
                  "
                >

                  Fenix Arcane

                </h1>

              </div>

              {/* SUB */}

              <div
                className="
                  mt-4
                  flex
                  items-center
                  gap-3
                  flex-wrap
                "
              >

                <div
                  className="
                    h-[1px]
                    w-10
                    bg-gradient-to-r
                    from-orange-400/40
                    to-transparent
                  "
                />

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.26em]
                    text-white/34
                  "
                >

                  by Olivia Cachoeira

                </p>

              </div>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-5
                  max-w-[680px]
                  text-[14px]
                  md:text-[15px]
                  leading-relaxed
                  text-white/48
                "
              >

                Plataforma operacional premium para streamers Alii Live.
                Conversões em tempo real, métricas operacionais,
                controle de performance e ambiente visual cinematográfico.

              </p>

            </div>

            {/* =========================================
                RIGHT
            ========================================= */}

            <div
              className="
                w-full
                xl:w-auto
                flex
                flex-col
                gap-4
                xl:min-w-[360px]
              "
            >

              {/* CLOCK */}

              <ClockCard
                time={time}
              />

              {/* RADIO */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[1.8rem]
                  border
                  border-white/[0.04]
                  bg-white/[0.02]
                  backdrop-blur-xl
                  p-2
                "
              >

                {/* TOP LIGHT */}

                <div
                  className="
                    absolute
                    top-0
                    left-1/2
                    -translate-x-1/2
                    w-[50%]
                    h-[1px]
                    bg-gradient-to-r
                    from-transparent
                    via-orange-200/40
                    to-transparent
                  "
                />

                {/* GLOW */}

                <div
                  className="
                    absolute
                    inset-0
                    pointer-events-none
                  "
                >

                  <div
                    className="
                      absolute
                      top-1/2
                      left-1/2
                      -translate-x-1/2
                      -translate-y-1/2
                      w-24
                      h-24
                      rounded-full
                      bg-orange-500/[0.06]
                      blur-[50px]
                    "
                  />

                </div>

                <div className="relative z-10">

                  <FenixRadio />

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          DIVIDER
      ===================================================== */}

      <div className="mt-6 soft-divider" />

    </header>

  );

}
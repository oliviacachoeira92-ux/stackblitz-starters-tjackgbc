import Image from 'next/image';

import FenixRadio from './FenixRadio';

import ClockCard from '../dashboard/ClockCard';

interface HeaderProps {
  time: string;
}

export default function Header({
  time,
}: HeaderProps) {

  return (

    <header className="relative mb-5 md:mb-6">

      {/* =====================================================
          STATUS
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
          border-orange-400/[0.08]

          bg-orange-400/[0.04]

          backdrop-blur-xl

          mb-4
        "
      >

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

        <p
          className="
            text-[9px]
            uppercase
            tracking-[0.28em]
            text-orange-100/72
            whitespace-nowrap
          "
        >

          FENIX ARCANE • OPERATIONAL SYSTEM

        </p>

      </div>

      {/* =====================================================
          HERO CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          overflow-hidden

          rounded-[2.2rem]

          border
          border-white/[0.05]

          bg-[linear-gradient(to_bottom,rgba(8,8,10,0.96),rgba(4,4,6,0.94))]

          backdrop-blur-[24px]

          shadow-[0_40px_140px_rgba(0,0,0,0.72)]
        "
      >

        {/* =====================================================
            PHOENIX BACKGROUND
        ===================================================== */}

        <div
          className="
            absolute
            inset-0
            overflow-hidden
            pointer-events-none
          "
        >

          {/* IMAGE */}

          <div
            className="
              absolute
              inset-0

              opacity-[0.42]

              mix-blend-screen
            "
          >

            <Image
              src="/branding/phoenix-hero.png"
              alt="Phoenix"
              fill
              priority
              className="
                object-cover
                object-right

                scale-[1.02]

                contrast-125
                brightness-[0.88]
                saturate-[1.35]

                opacity-90
              "
            />

          </div>

          {/* SOFT THERMAL OVERLAY */}

          <div
            className="
              absolute
              inset-0

              bg-[radial-gradient(circle_at_72%_42%,rgba(255,120,40,0.14),transparent_34%)]

              mix-blend-screen
            "
          />

          {/* SOFT DARK FADE */}

          <div
            className="
              absolute
              inset-0

              bg-[linear-gradient(to_right,rgba(5,5,6,0.92)_0%,rgba(5,5,6,0.76)_28%,rgba(5,5,6,0.34)_56%,rgba(5,5,6,0.10)_100%)]
            "
          />

          {/* ATMOSPHERIC GLOW */}

          <div
            className="
              absolute
              top-[10%]
              right-[10%]

              w-[460px]
              h-[460px]

              rounded-full

              bg-orange-500/[0.12]

              blur-[140px]
            "
          />

          {/* LOWER FIRE */}

          <div
            className="
              absolute
              bottom-[-80px]
              right-[18%]

              w-[320px]
              h-[220px]

              rounded-full

              bg-red-500/[0.10]

              blur-[120px]
            "
          />

          {/* TOP LIGHT */}

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
              via-orange-200/60
              to-transparent
            "
          />

          {/* INNER SHINE */}

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
            CONTENT
        ===================================================== */}

        <div
          className="
            relative
            z-10

            px-5
            py-5

            md:px-6
            md:py-6

            xl:px-7
            xl:py-7
          "
        >

          <div
            className="
              flex
              flex-col
              gap-5
            "
          >

            {/* =====================================================
                TOP
            ===================================================== */}

            <div
              className="
                flex
                flex-col

                xl:flex-row
                xl:items-start
                xl:justify-start

                gap-5
              "
            >

              {/* LEFT */}

              <div
                className="
                  flex-1
                  min-w-0
                  max-w-[620px]
                "
              >

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
                    "
                  >

                    PREMIUM CREATOR PLATFORM

                  </p>

                </div>

                <div className="mt-3 relative">

                  <div
                    className="
                      absolute
                      -top-16
                      left-[-40px]

                      w-[300px]
                      h-[180px]

                      rounded-full

                      bg-orange-500/[0.14]

                      blur-[100px]
                    "
                  />

                  <h1
                    className="
                      relative
                      z-10

                      thermal-text

                      text-[clamp(2.8rem,4.8vw,5.1rem)]

                      font-black

                      tracking-[-0.11em]

                      leading-[0.82]
                    "
                  >

                    Fenix Arcane

                  </h1>

                </div>

                <div
                  className="
                    mt-2
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
                      tracking-[0.24em]
                      text-white/34
                    "
                  >

                    by Olivia Cachoeira

                  </p>

                </div>

                <p
                  className="
                    mt-3

                    max-w-[560px]

                    text-[13px]
                    md:text-[14px]

                    leading-relaxed

                    text-white/50
                  "
                >

                  Plataforma operacional premium para streamers Alii Live.
                  Conversões em tempo real, métricas operacionais,
                  controle de performance e ambiente visual cinematográfico.

                </p>

              </div>

              {/* RIGHT */}

              <div
                className="
                  w-full
                  xl:w-[300px]
                  shrink-0
                "
              >

                <ClockCard
                  time={time}
                />

              </div>

            </div>

            {/* =====================================================
                RADIO
            ===================================================== */}

            <div>

              <div
                className="
                  relative
                  overflow-hidden

                  rounded-[1.7rem]

                  border
                  border-white/[0.04]

                  bg-black/20

                  backdrop-blur-xl
                "
              >

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
                      left-[18%]
                      -translate-y-1/2

                      w-28
                      h-28

                      rounded-full

                      bg-orange-500/[0.10]

                      blur-[60px]
                    "
                  />

                </div>

                <div className="relative z-10 p-2">

                  <FenixRadio />

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="mt-4 soft-divider" />

    </header>

  );

}
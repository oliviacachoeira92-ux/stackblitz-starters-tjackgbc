import FenixRadio from './FenixRadio';

import ClockCard from '../dashboard/ClockCard';

interface HeaderProps {
  time: string;
}

export default function Header({
  time,
}: HeaderProps) {

  return (

    <div className="relative mb-5">

      {/* AMBIENT */}

      <div
        className="
          absolute
          -top-14
          left-1/2
          -translate-x-1/2
          w-[220px]
          md:w-[280px]
          h-[120px]
          bg-violet-500/[0.05]
          blur-[60px]
          rounded-full
          pointer-events-none
        "
      />

      {/* TOP TAG */}

      <div
        className="
          inline-flex
          items-center
          gap-2
          px-3
          py-1.5
          rounded-full
          border
          border-white/[0.04]
          bg-white/[0.02]
          backdrop-blur-md
          mb-4
        "
      >

        <div className="flex items-center justify-center">

          <div className="w-1.5 h-1.5 rounded-full bg-violet-300" />

        </div>

        <p
          className="
            text-[8px]
            uppercase
            tracking-[0.22em]
            text-white/40
            whitespace-nowrap
          "
        >

          ALII LIVE CONVERSION SYSTEM

        </p>

      </div>

      {/* HERO */}

      <div
        className="
          relative
          flex
          flex-col
          xl:flex-row
          xl:items-center
          xl:justify-between
          gap-5
        "
      >

        {/* LEFT */}

        <div className="flex-1 min-w-0">

          {/* TITLE */}

          <div className="relative inline-block max-w-full">

            <div
              className="
                absolute
                inset-0
                bg-violet-500/[0.05]
                blur-[35px]
                rounded-full
              "
            />

            <h1
              className="
                relative
                title-gradient
                text-[clamp(2rem,6vw,4rem)]
                font-black
                tracking-[-0.05em]
                leading-[0.92]
                break-words
              "
            >

              Fenix Arcane

            </h1>

          </div>

          {/* SUB */}

          <div className="mt-2.5 flex items-center gap-3">

            <div
              className="
                h-[1px]
                w-7
                bg-gradient-to-r
                from-violet-400/35
                to-transparent
              "
            />

            <p
              className="
                text-white/28
                tracking-[0.22em]
                uppercase
                text-[8px]
              "
            >

              by Olivia Cachoeira

            </p>

          </div>

          {/* DESCRIPTION */}

          <p
            className="
              text-white/50
              mt-3
              text-[13px]
              md:text-[14px]
              max-w-[520px]
              leading-relaxed
            "
          >

            Ferramenta premium de conversão para streamers Alii Live.
            Calcule pontos, diamantes, USD, BRL e saques em tempo real.

          </p>

        </div>

        {/* RIGHT */}

        <div
          className="
            flex
            items-center
            gap-4
            flex-wrap
            xl:flex-nowrap
          "
        >

          {/* CLOCK */}

          <div
            className="
              w-[320px]
              shrink-0
            "
          >

            <ClockCard
              time={time}
            />

          </div>

          {/* RADIO */}

          <div
            className="
              relative
              p-2
              rounded-[1.5rem]
              border
              border-white/[0.03]
              bg-white/[0.015]
              backdrop-blur-md
              h-[104px]
              flex
              items-center
              shrink-0
            "
          >

            {/* LIGHT */}

            <div
              className="
                absolute
                inset-0
                overflow-hidden
                rounded-[1.5rem]
                pointer-events-none
                opacity-50
              "
            >

              <div
                className="
                  absolute
                  top-1/2
                  left-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  w-16
                  h-16
                  rounded-full
                  bg-violet-500/[0.05]
                  blur-[40px]
                "
              />

            </div>

            <div
              className="
                relative
                z-10
                scale-[0.84]
                md:scale-[0.88]
                origin-center
              "
            >

              <FenixRadio />

            </div>

          </div>

        </div>

      </div>

      {/* DIVIDER */}

      <div className="mt-5 soft-divider" />

    </div>

  );

}
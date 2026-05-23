import FenixRadio from './FenixRadio';

export default function Header() {

  return (

    <div className="relative mb-5 md:mb-6">

      {/* AMBIENT */}

      <div
        className="
          absolute
          -top-16
          left-1/2
          -translate-x-1/2
          w-[220px]
          md:w-[300px]
          h-[120px]
          md:h-[150px]
          bg-violet-500/[0.05]
          blur-[65px]
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
          xl:items-start
          xl:justify-between
          gap-4
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
                blur-[40px]
                rounded-full
              "
            />

            <h1
              className="
                relative
                title-gradient
                text-[clamp(1.9rem,7vw,4.2rem)]
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

          <div className="mt-3 flex items-center gap-3">

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
              mt-4
              text-[13px]
              md:text-[15px]
              max-w-[500px]
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
            relative
            flex
            items-center
            justify-start
            xl:justify-center
            min-w-0
          "
        >

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
                  blur-[45px]
                "
              />

            </div>

            <div
              className="
                relative
                z-10
                scale-[0.86]
                md:scale-[0.9]
                origin-left
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
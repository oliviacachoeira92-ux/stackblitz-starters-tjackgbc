import FenixRadio from './FenixRadio';

export default function Header() {

  return (

    <div className="relative mb-6 md:mb-8">

      {/* AMBIENT GLOW */}

      <div
        className="
          absolute
          -top-20
          left-1/2
          -translate-x-1/2
          w-[260px]
          md:w-[360px]
          h-[140px]
          md:h-[180px]
          bg-violet-500/10
          blur-[90px]
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
          md:px-4
          py-1.5
          rounded-full
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          shadow-[0_0_18px_rgba(0,0,0,0.18)]
          mb-4
        "
      >

        <div className="relative flex items-center justify-center">

          <div className="absolute w-3 h-3 rounded-full bg-violet-400/30 blur-sm" />

          <div className="relative w-1.5 h-1.5 rounded-full bg-violet-300" />

        </div>

        <p
          className="
            text-[8px]
            md:text-[9px]
            uppercase
            tracking-[0.22em]
            md:tracking-[0.26em]
            text-white/45
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

            <div className="absolute inset-0 bg-violet-500/10 blur-2xl rounded-full" />

            <h1
              className="
                relative
                title-gradient
                text-[clamp(2rem,8vw,5rem)]
                font-black
                tracking-[-0.06em]
                leading-[0.9]
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
                w-8
                md:w-10
                bg-gradient-to-r
                from-violet-400/50
                to-transparent
              "
            />

            <p
              className="
                text-white/35
                tracking-[0.22em]
                md:tracking-[0.28em]
                uppercase
                text-[8px]
                md:text-[9px]
              "
            >

              by Olivia Cachoeira

            </p>

          </div>

          {/* DESCRIPTION */}

          <p
            className="
              text-white/58
              mt-4
              text-sm
              md:text-base
              max-w-[520px]
              leading-relaxed
            "
          >

            Ferramenta premium de conversão para streamers Alii Live.
            Calcule valores, pontos, diamantes e saques com velocidade,
            precisão e uma experiência visual refinada.

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

          {/* RADIO CONTAINER */}

          <div
            className="
              card-premium
              hover-premium
              relative
              p-2
              md:p-3
              rounded-[1.6rem]
              md:rounded-[1.8rem]
              w-full
              max-w-fit
            "
          >

            {/* GLOW */}

            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[1.8rem]">

              <div
                className="
                  absolute
                  top-1/2
                  left-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  w-20
                  md:w-24
                  h-20
                  md:h-24
                  rounded-full
                  bg-violet-500/10
                  blur-3xl
                "
              />

            </div>

            <div
              className="
                relative
                z-10
                scale-[0.88]
                md:scale-[0.92]
                origin-left
              "
            >

              <FenixRadio />

            </div>

          </div>

        </div>

      </div>

      {/* DIVIDER */}

      <div className="mt-6 soft-divider" />

    </div>
  );
}
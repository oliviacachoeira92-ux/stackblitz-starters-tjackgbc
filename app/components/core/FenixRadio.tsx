'use client';

import useRadio from '@/app/hooks/useRadio';

export default function FenixRadio() {

  const {

    isPlaying,

    toggleRadio,

  } = useRadio();

  return (

    <button
      onClick={toggleRadio}
      className="
        group
        relative
        flex
        items-center
        gap-4
        overflow-hidden
        rounded-full
        border
        border-white/[0.08]
        bg-[rgba(15,15,20,0.72)]
        backdrop-blur-2xl
        px-4
        py-3
        transition-all
        duration-500
        hover:border-orange-400/20
        hover:translate-y-[-2px]
        active:scale-[0.98]
      "
    >

      {/* AMBIENT LIGHT */}

      <div className="absolute inset-0 pointer-events-none">

        {/* MAIN */}

        <div
          className={`
            absolute
            top-[-40px]
            right-[-20px]
            h-32
            w-32
            rounded-full
            blur-[90px]
            transition-all
            duration-700
            ${
              isPlaying
                ? 'bg-orange-500/[0.14] opacity-100'
                : 'bg-violet-500/[0.06] opacity-60'
            }
          `}
        />

        {/* SECONDARY */}

        <div
          className="
            absolute
            bottom-[-20px]
            left-[10%]
            h-20
            w-20
            rounded-full
            bg-cyan-500/[0.05]
            blur-[60px]
          "
        />

      </div>

      {/* VINYL */}

      <div
        className="
          relative
          flex
          items-center
          justify-center
          h-16
          w-16
          shrink-0
        "
      >

        {/* OUTER */}

        <div
          className={`
            absolute
            inset-0
            rounded-full
            border
            transition-all
            duration-500
            ${
              isPlaying
                ? 'border-orange-400/30 shadow-[0_0_60px_rgba(255,120,0,0.25)]'
                : 'border-white/10'
            }
          `}
        />

        {/* DISC */}

        <div
          className={`
            relative
            h-12
            w-12
            rounded-full
            border
            border-white/10
            bg-gradient-to-br
            from-zinc-900
            via-black
            to-zinc-800
            ${
              isPlaying
                ? 'animate-spin'
                : ''
            }
          `}
          style={{
            animationDuration: '7s',
          }}
        >

          {/* LINES */}

          <div
            className="
              absolute
              inset-1
              rounded-full
              border
              border-white/5
            "
          />

          <div
            className="
              absolute
              inset-[10px]
              rounded-full
              border
              border-white/5
            "
          />

          {/* CENTER */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              flex
              items-center
              justify-center
              h-5
              w-5
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-gradient-to-br
              from-orange-400
              to-red-500
              shadow-[0_0_25px_rgba(255,120,0,0.55)]
            "
          >

            {isPlaying ? (

              <div className="flex items-center gap-[2px]">

                <div className="h-2 w-[2px] rounded-full bg-white" />

                <div className="h-2 w-[2px] rounded-full bg-white" />

              </div>

            ) : (

              <div
                className="
                  ml-[2px]
                  h-0
                  w-0
                  border-y-[4px]
                  border-l-[6px]
                  border-y-transparent
                  border-l-white
                "
              />

            )}

          </div>

        </div>

      </div>

      {/* INFO */}

      <div className="relative z-10 flex flex-col items-start text-left">

        {/* STATUS */}

        <div className="flex items-center gap-2">

          <div
            className={`
              h-2
              w-2
              rounded-full
              transition-all
              duration-500
              ${
                isPlaying
                  ? 'bg-red-500 animate-pulse shadow-[0_0_10px_rgba(255,0,0,0.8)]'
                  : 'bg-zinc-600'
              }
            `}
          />

          <p
            className={`
              text-[9px]
              uppercase
              tracking-[0.26em]
              transition-all
              duration-500
              ${
                isPlaying
                  ? 'text-orange-200'
                  : 'text-white/35'
              }
            `}
          >

            {isPlaying
              ? 'FENIX RADIO LIVE'
              : 'FENIX RADIO'}

          </p>

        </div>

        {/* TITLE */}

        <h3
          className={`
            mt-2
            text-sm
            font-semibold
            transition-all
            duration-500
            ${
              isPlaying
                ? 'text-white'
                : 'text-white/60'
            }
          `}
        >

          {isPlaying
            ? 'Transmitindo Agora'
            : 'Clique para Ouvir'}

        </h3>

      </div>

    </button>

  );
}
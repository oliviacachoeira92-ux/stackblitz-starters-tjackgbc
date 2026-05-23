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
        gap-3
        overflow-hidden
        rounded-full
        border
        border-white/[0.03]
        bg-[rgba(15,15,20,0.58)]
        backdrop-blur-md
        px-3
        py-2.5
        transition-transform
        duration-300
        hover:-translate-y-[1px]
        active:scale-[0.985]
      "
    >

      {/* AMBIENT */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-45
        "
      >

        {/* MAIN */}

        <div
          className={`
            absolute
            top-[-25px]
            right-[-10px]
            h-20
            w-20
            rounded-full
            blur-[45px]
            transition-opacity
            duration-500
            ${
              isPlaying
                ? 'bg-orange-500/[0.08] opacity-100'
                : 'bg-violet-500/[0.03] opacity-60'
            }
          `}
        />

      </div>

      {/* VINYL */}

      <div
        className="
          relative
          flex
          items-center
          justify-center
          h-14
          w-14
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
            transition-colors
            duration-300
            ${
              isPlaying
                ? 'border-orange-400/[0.12]'
                : 'border-white/[0.04]'
            }
          `}
        />

        {/* DISC */}

        <div
          className={`
            relative
            h-10
            w-10
            rounded-full
            border
            border-white/[0.04]
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
            animationDuration: '10s',
          }}
        >

          {/* LINES */}

          <div
            className="
              absolute
              inset-1
              rounded-full
              border
              border-white/[0.03]
            "
          />

          <div
            className="
              absolute
              inset-[8px]
              rounded-full
              border
              border-white/[0.03]
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
              h-4
              w-4
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-gradient-to-br
              from-orange-400
              to-red-500
            "
          >

            {isPlaying ? (

              <div className="flex items-center gap-[2px]">

                <div className="h-1.5 w-[2px] rounded-full bg-white" />

                <div className="h-1.5 w-[2px] rounded-full bg-white" />

              </div>

            ) : (

              <div
                className="
                  ml-[1px]
                  h-0
                  w-0
                  border-y-[3px]
                  border-l-[5px]
                  border-y-transparent
                  border-l-white
                "
              />

            )}

          </div>

        </div>

      </div>

      {/* INFO */}

      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-start
          text-left
        "
      >

        {/* STATUS */}

        <div className="flex items-center gap-2">

          <div
            className={`
              h-1.5
              w-1.5
              rounded-full
              transition-colors
              duration-300
              ${
                isPlaying
                  ? 'bg-red-500'
                  : 'bg-zinc-600'
              }
            `}
          />

          <p
            className={`
              text-[8px]
              uppercase
              tracking-[0.22em]
              transition-colors
              duration-300
              ${
                isPlaying
                  ? 'text-orange-200/85'
                  : 'text-white/28'
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
            mt-1.5
            text-[13px]
            font-medium
            transition-colors
            duration-300
            ${
              isPlaying
                ? 'text-white'
                : 'text-white/55'
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
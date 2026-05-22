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
        relative
        flex
        items-center
        gap-4
        rounded-full
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        px-4
        py-3
        transition-all
        duration-500
        hover:border-orange-400/20
        hover:bg-white/[0.05]
        hover:scale-[1.02]
        active:scale-[0.98]
      "
    >

      {/* AMBIENT GLOW */}

      <div
        className={`
          absolute
          inset-0
          rounded-full
          blur-2xl
          transition-all
          duration-500
          ${
            isPlaying
              ? 'bg-orange-500/10 opacity-100'
              : 'opacity-0'
          }
        `}
      />

      {/* DISC */}

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

        {/* OUTER RING */}

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
                ? 'border-orange-400/40 shadow-[0_0_60px_rgba(255,120,0,0.35)]'
                : 'border-white/10'
            }
          `}
        />

        {/* VINYL */}

        <div
          className={`
            relative
            h-11
            w-11
            rounded-full
            border
            border-white/10
            bg-gradient-to-br
            from-zinc-900
            via-black
            to-zinc-800
            shadow-[0_0_40px_rgba(255,120,0,0.15)]
            ${
              isPlaying
                ? 'animate-spin'
                : ''
            }
          `}
          style={{
            animationDuration: '6s',
          }}
        >

          {/* VINYL LINES */}

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
              inset-3
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
              shadow-[0_0_25px_rgba(255,120,0,0.7)]
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

      {/* PLAYER INFO */}

      <div className="relative z-10 flex flex-col items-start text-left">

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
              text-[10px]
              uppercase
              tracking-[0.28em]
              transition-all
              duration-500
              ${
                isPlaying
                  ? 'text-orange-300'
                  : 'text-zinc-500'
              }
            `}
          >

            {isPlaying
              ? 'LIVE RADIO'
              : 'RADIO OFF'}

          </p>

        </div>

        <h3
          className={`
            mt-1
            text-sm
            font-semibold
            transition-all
            duration-500
            ${
              isPlaying
                ? 'text-white'
                : 'text-zinc-400'
            }
          `}
        >

          {isPlaying
            ? 'Now Playing'
            : 'Click to Play'}

        </h3>

      </div>

    </button>
  );
}
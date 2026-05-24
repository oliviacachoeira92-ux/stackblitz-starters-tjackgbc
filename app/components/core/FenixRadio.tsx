'use client';

import {
  Pause,
  Play,
  Radio,
  SkipForward,
} from 'lucide-react';

import { useEffect, useRef, useState } from 'react';

const playlist = [

  {
    title: 'Diamante Puro',
    subtitle: 'Experiência sonora Fenix Arcane',
    src: '/audio/diamante-puro.mp3',
  },

  {
    title: 'Frequência',
    subtitle: 'Atmosfera operacional premium',
    src: '/audio/frequencia.mp3',
  },

  {
    title: 'Garota Liberiana',
    subtitle: 'Ambientação cinematográfica',
    src: '/audio/garota-liberiana.mp3',
  },

];

export default function FenixRadio() {

  const audioRef =
    useRef<HTMLAudioElement | null>(
      null
    );

  const [playing, setPlaying] =
    useState(false);

  const [currentTrack, setCurrentTrack] =
    useState(0);

  // =====================================================
  // TRACK
  // =====================================================

  const track =
    playlist[currentTrack];

  // =====================================================
  // PLAY / PAUSE
  // =====================================================

  async function toggleRadio() {

    if (!audioRef.current) return;

    try {

      if (playing) {

        audioRef.current.pause();

        setPlaying(false);

      } else {

        await audioRef.current.play();

        setPlaying(true);

      }

    } catch (error) {

      console.error(
        'Erro ao reproduzir áudio:',
        error
      );

    }

  }

  // =====================================================
  // NEXT TRACK
  // =====================================================

  async function nextTrack() {

    const next =
      currentTrack ===
      playlist.length - 1
        ? 0
        : currentTrack + 1;

    setCurrentTrack(next);

  }

  // =====================================================
  // AUTO PLAY NEXT
  // =====================================================

  useEffect(() => {

    if (!audioRef.current) return;

    audioRef.current.load();

    if (playing) {

      audioRef.current
        .play()
        .catch(() => {

          setPlaying(false);

        });

    }

  }, [currentTrack]);

  // =====================================================
  // END TRACK
  // =====================================================

  function handleEnded() {

    if (
      currentTrack <
      playlist.length - 1
    ) {

      setCurrentTrack(
        currentTrack + 1
      );

    } else {

      setCurrentTrack(0);

    }

  }

  return (

    <div
      className="
        relative
        overflow-hidden
        rounded-[1.7rem]
      "
    >

      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >

        {/* ORANGE GLOW */}

        <div
          className="
            absolute
            top-1/2
            left-[20%]
            -translate-y-1/2
            w-28
            h-28
            rounded-full
            bg-orange-500/[0.10]
            blur-[60px]
          "
        />

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
            via-orange-200/50
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
          flex
          items-center
          justify-between
          gap-5
          p-4
        "
      >

        {/* =========================================
            LEFT
        ========================================= */}

        <div
          className="
            flex
            items-center
            gap-4
            min-w-0
          "
        >

          {/* PLAY BUTTON */}

          <button
            onClick={toggleRadio}
            className="
              group
              relative
              shrink-0
              flex
              items-center
              justify-center
              w-14
              h-14
              rounded-[1.3rem]
              border
              border-orange-400/[0.08]
              bg-[linear-gradient(to_bottom,rgba(255,140,60,0.12),rgba(255,140,60,0.04))]
              shadow-[0_10px_40px_rgba(255,120,40,0.10)]
              transition-all
              duration-500
              hover:scale-[1.03]
            "
          >

            {/* PULSE */}

            <div
              className={`
                absolute
                inset-0
                rounded-[1.3rem]
                border
                border-orange-300/20
                ${playing ? 'animate-ping' : ''}
              `}
            />

            {/* ICON */}

            <div
              className="
                relative
                z-10
                text-orange-100
              "
            >

              {playing ? (
                <Pause size={18} />
              ) : (
                <Play
                  size={18}
                  className="ml-[2px]"
                />
              )}

            </div>

          </button>

          {/* INFO */}

          <div
            className="
              min-w-0
              flex
              flex-col
              gap-1.5
            "
          >

            {/* TOP */}

            <div
              className="
                flex
                items-center
                gap-2
              "
            >

              <Radio
                size={11}
                className="
                  text-orange-300/70
                "
              />

              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.24em]
                  text-white/42
                "
              >

                FENIX RADIO

              </p>

            </div>

            {/* TITLE */}

            <h3
              className="
                text-[1rem]
                font-semibold
                text-white
                truncate
              "
            >

              {track.title}

            </h3>

            {/* SUB */}

            <p
              className="
                text-[12px]
                text-white/36
                truncate
              "
            >

              {track.subtitle}

            </p>

          </div>

        </div>

        {/* =========================================
            RIGHT
        ========================================= */}

        <div
          className="
            shrink-0
            flex
            items-center
            gap-3
          "
        >

          {/* NEXT */}

          <button
            onClick={nextTrack}
            className="
              flex
              items-center
              justify-center
              w-11
              h-11
              rounded-[1rem]
              border
              border-white/[0.05]
              bg-white/[0.03]
              backdrop-blur-md
              text-white/65
              transition-all
              duration-500
              hover:bg-white/[0.05]
              hover:text-white
            "
          >

            <SkipForward size={16} />

          </button>

          {/* STATUS */}

          <div
            className="
              hidden
              md:flex
              items-center
              gap-2
              px-3
              py-2
              rounded-full
              border
              border-white/[0.05]
              bg-white/[0.03]
              backdrop-blur-md
            "
          >

            <div className="relative flex items-center justify-center">

              <div
                className={`
                  absolute
                  h-3
                  w-3
                  rounded-full
                  bg-orange-400/20
                  ${playing ? 'animate-pulse' : ''}
                `}
              />

              <div
                className={`
                  relative
                  h-1.5
                  w-1.5
                  rounded-full
                  ${
                    playing
                      ? 'bg-orange-300'
                      : 'bg-white/20'
                  }
                `}
              />

            </div>

            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.18em]
                text-white/40
              "
            >

              {playing
                ? 'Transmitindo'
                : 'Offline'}
            </p>

          </div>

          {/* SPOTIFY */}

          <button
            className="
              px-4
              h-11
              rounded-[1rem]
              border
              border-white/[0.05]
              bg-white/[0.03]
              backdrop-blur-md
              text-[11px]
              font-semibold
              tracking-[0.14em]
              uppercase
              text-white/75
              transition-all
              duration-500
              hover:bg-white/[0.05]
              hover:text-white
            "
          >

            Spotify

          </button>

        </div>

      </div>

      {/* =====================================================
          AUDIO
      ===================================================== */}

      <audio
        ref={audioRef}
        src={track.src}
        loop={false}
        onEnded={handleEnded}
      />

    </div>

  );

}
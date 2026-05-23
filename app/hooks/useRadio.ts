'use client';

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

export default function useRadio() {

  // =========================
  // PLAYLIST
  // =========================

  const playlist = [

    '/audio/Diamante Puro.mp3',

    '/audio/Frequência Absoluta.mp3',

    '/audio/Garota Liberiana.mp3',

  ];

  // =========================
  // STATE
  // =========================

  const [
    isPlaying,
    setIsPlaying,
  ] = useState(false);

  const [
    volume,
    setVolume,
  ] = useState(0.5);

  const [
    currentTrack,
    setCurrentTrack,
  ] = useState(0);

  // =========================
  // AUDIO REF
  // =========================

  const audioRef =
    useRef<HTMLAudioElement | null>(
      null
    );

  // =========================
  // NEXT TRACK
  // =========================

  const handleNextTrack =
    useCallback(async () => {

      if (
        !audioRef.current
      ) return;

      const nextIndex =
        (
          currentTrack + 1
        ) % playlist.length;

      setCurrentTrack(
        nextIndex
      );

      audioRef.current.src =
        playlist[nextIndex];

      if (
        isPlaying
      ) {

        try {

          await audioRef.current.play();

        } catch (
          error
        ) {

          console.error(
            error
          );

        }

      }

    }, [
      currentTrack,
      isPlaying,
      playlist,
    ]);

  // =========================
  // PREVIOUS TRACK
  // =========================

  const handlePreviousTrack =
    useCallback(async () => {

      if (
        !audioRef.current
      ) return;

      const prevIndex =
        (
          currentTrack -
          1 +
          playlist.length
        ) % playlist.length;

      setCurrentTrack(
        prevIndex
      );

      audioRef.current.src =
        playlist[prevIndex];

      if (
        isPlaying
      ) {

        try {

          await audioRef.current.play();

        } catch (
          error
        ) {

          console.error(
            error
          );

        }

      }

    }, [
      currentTrack,
      isPlaying,
      playlist,
    ]);

  // =========================
  // INIT
  // =========================

  useEffect(() => {

    const audio =
      new Audio(
        playlist[0]
      );

    audio.volume =
      volume;

    audioRef.current =
      audio;

    audio.addEventListener(
      'ended',
      handleNextTrack
    );

    return () => {

      audio.pause();

      audio.removeEventListener(
        'ended',
        handleNextTrack
      );

    };

  }, [
    handleNextTrack,
    volume,
    playlist,
  ]);

  // =========================
  // VOLUME
  // =========================

  useEffect(() => {

    if (
      audioRef.current
    ) {

      audioRef.current.volume =
        volume;

    }

  }, [volume]);

  // =========================
  // TOGGLE
  // =========================

  const toggleRadio =
    async () => {

      if (
        !audioRef.current
      ) return;

      try {

        if (
          isPlaying
        ) {

          audioRef.current.pause();

          setIsPlaying(false);

        } else {

          await audioRef.current.play();

          setIsPlaying(true);

        }

      } catch (
        error
      ) {

        console.error(
          'Erro no rádio:',
          error
        );

      }

    };

  return {

    isPlaying,

    volume,

    setVolume,

    toggleRadio,

    currentTrack,

    playlist,

    handleNextTrack,

    handlePreviousTrack,

  };

}
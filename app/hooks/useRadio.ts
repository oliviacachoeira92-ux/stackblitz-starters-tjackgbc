'use client';

import {
  useEffect,
  useRef,
  useState,
} from 'react';

import { radioTracks } from '../data/radioTracks';

export default function useRadio() {

  const audioRef =
    useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] =
    useState(false);

  const [trackIndex, setTrackIndex] =
    useState(0);

  const currentTrack =
    radioTracks[trackIndex];

  // =========================
  // INIT
  // =========================

  useEffect(() => {

    const audio =
      new Audio(
        currentTrack.audio
      );

    audio.volume = 0.55;

    audio.preload = 'auto';

    audioRef.current = audio;

    return () => {

      audio.pause();

    };

  }, []);

  // =========================
  // TRACK CHANGE
  // =========================

  useEffect(() => {

    if (!audioRef.current)
      return;

    const audio =
      audioRef.current;

    audio.src =
      currentTrack.audio;

    audio.load();

    audio.onended = () => {

      nextTrack(true);

    };

    if (isPlaying) {

      audio.play();

    }

  }, [trackIndex]);

  // =========================
  // PLAY / PAUSE
  // =========================

  const toggleRadio =
    async () => {

      if (!audioRef.current)
        return;

      const audio =
        audioRef.current;

      try {

        if (isPlaying) {

          audio.pause();

          setIsPlaying(false);

        } else {

          await audio.play();

          setIsPlaying(true);

        }

      } catch (error) {

        console.error(
          'Radio error:',
          error
        );

      }

    };

  // =========================
  // NEXT
  // =========================

  const nextTrack = (
    autoplay = false
  ) => {

    setTrackIndex((prev) => {

      if (
        prev + 1 >=
        radioTracks.length
      ) {
        return 0;
      }

      return prev + 1;

    });

    if (autoplay) {

      setTimeout(() => {

        audioRef.current
          ?.play();

      }, 120);

    }

  };

  return {

    isPlaying,

    toggleRadio,

    nextTrack,

    currentTrack,

  };

}
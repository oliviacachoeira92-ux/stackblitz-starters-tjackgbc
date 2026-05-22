import { useEffect, useState } from 'react';

export default function useLiveTracker() {

  // =========================
  // CALCULADORA DIÁRIA
  // =========================

  const [session1, setSession1] =
    useState('');

  const [session2, setSession2] =
    useState('');

  const [session3, setSession3] =
    useState('');

  const [session4, setSession4] =
    useState('');

  // =========================
  // META SEMANAL
  // =========================

  const [day1, setDay1] =
    useState('');

  const [day2, setDay2] =
    useState('');

  const [day3, setDay3] =
    useState('');

  const [day4, setDay4] =
    useState('');

  const [day5, setDay5] =
    useState('');

  const [day6, setDay6] =
    useState('');

  // =========================
  // META
  // =========================

  const weeklyGoalSeconds =
    18 * 60 * 60;

  // =========================
  // FORMATADOR
  // =========================

  const normalizeTime = (
    value: string
  ) => {

    const numbers =
      value.replace(/\D/g, '');

    if (!numbers)
      return '';

    const padded =
      numbers.padStart(6, '0');

    const hh =
      padded.slice(-6, -4);

    const mm =
      padded.slice(-4, -2);

    const ss =
      padded.slice(-2);

    return `${hh}:${mm}:${ss}`;
  };

  // =========================
  // SEGUNDOS
  // =========================

  const convertToSeconds = (
    time: string
  ) => {

    if (!time)
      return 0;

    const parts =
      time.split(':');

    if (parts.length !== 3)
      return 0;

    const hours =
      Number(parts[0]);

    const minutes =
      Number(parts[1]);

    const seconds =
      Number(parts[2]);

    return (
      hours * 3600 +
      minutes * 60 +
      seconds
    );
  };

  // =========================
  // FORMATADOR FINAL
  // =========================

  const formatTime = (
    total: number
  ) => {

    const hours =
      Math.floor(total / 3600);

    const minutes =
      Math.floor(
        (total % 3600) / 60
      );

    const seconds =
      total % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  // =========================
  // TOTAL DIÁRIO
  // =========================

  const dailyTotalSeconds =
    convertToSeconds(session1) +
    convertToSeconds(session2) +
    convertToSeconds(session3) +
    convertToSeconds(session4);

  // =========================
  // TOTAL SEMANAL
  // =========================

  const totalSeconds =
    convertToSeconds(day1) +
    convertToSeconds(day2) +
    convertToSeconds(day3) +
    convertToSeconds(day4) +
    convertToSeconds(day5) +
    convertToSeconds(day6);

  const remainingSeconds =
    Math.max(
      weeklyGoalSeconds -
        totalSeconds,
      0
    );

  const progress =
    Math.min(
      (totalSeconds /
        weeklyGoalSeconds) *
        100,
      100
    );

  // =========================
  // STATUS
  // =========================

  let weeklyStatus =
    '🔥 Ritmo ideal';

  let weeklyStatusColor =
    'text-emerald-400';

  if (
    totalSeconds <
    weeklyGoalSeconds * 0.5
  ) {

    weeklyStatus =
      '⚠️ Atenção ao ritmo';

    weeklyStatusColor =
      'text-yellow-400';
  }

  if (
    totalSeconds <
    weeklyGoalSeconds * 0.3
  ) {

    weeklyStatus =
      '❌ Abaixo da meta mínima';

    weeklyStatusColor =
      'text-red-400';
  }

  // =========================
  // CACHE
  // =========================

  useEffect(() => {

    const savedData =
      localStorage.getItem(
        'fenix-live-data'
      );

    if (savedData) {

      const parsed =
        JSON.parse(savedData);

      setSession1(parsed.session1 || '');
      setSession2(parsed.session2 || '');
      setSession3(parsed.session3 || '');
      setSession4(parsed.session4 || '');

      setDay1(parsed.day1 || '');
      setDay2(parsed.day2 || '');
      setDay3(parsed.day3 || '');
      setDay4(parsed.day4 || '');
      setDay5(parsed.day5 || '');
      setDay6(parsed.day6 || '');
    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      'fenix-live-data',
      JSON.stringify({
        session1,
        session2,
        session3,
        session4,
        day1,
        day2,
        day3,
        day4,
        day5,
        day6,
      })
    );

  }, [
    session1,
    session2,
    session3,
    session4,
    day1,
    day2,
    day3,
    day4,
    day5,
    day6,
  ]);

  return {
    normalizeTime,
    formatTime,

    totalSeconds,
    dailyTotalSeconds,
    remainingSeconds,
    progress,

    weeklyStatus,
    weeklyStatusColor,

    session1,
    session2,
    session3,
    session4,

    day1,
    day2,
    day3,
    day4,
    day5,
    day6,

    setSession1,
    setSession2,
    setSession3,
    setSession4,

    setDay1,
    setDay2,
    setDay3,
    setDay4,
    setDay5,
    setDay6,
  };
}
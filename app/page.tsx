'use client';

import USDConverter from './components/USDConverter';
import ConversionSection from './components/ConversionSection';
import LiveTracker from './components/LiveTracker';

import { fetchUSDBRL } from './utils/currency';

import { useEffect, useState } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
  calculateFromDiamonds,
  calculateFromPoints,
  calculateFromDollars,
  calculateFromCharme,
} from './utils/conversionEngine';

import Header from './components/Header';
import Parameters from './components/Parameters';
import Rules from './components/Rules';

export default function Home() {

  // =========================
  // CAMPOS PRINCIPAIS
  // =========================

  const [diamonds, setDiamonds] =
    useState('');

  const [points, setPoints] =
    useState('');

  const [dollars, setDollars] =
    useState('');

  const [charme, setCharme] =
    useState('');

  // =========================
  // USD
  // =========================

  const [usdRate, setUsdRate] =
    useState(5);

  const [lastUpdate, setLastUpdate] =
    useState('');

  const [usdVariation, setUsdVariation] =
    useState(0);

  const [loadingRate, setLoadingRate] =
    useState(true);

  // =========================
  // HORÁRIO SP
  // =========================

  const [saoPauloTime, setSaoPauloTime] =
    useState('');

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

  const weeklyGoalSeconds =
    18 * 60 * 60;

  // =========================
  // PARÂMETROS
  // =========================

  const [pointsPerDiamond,
    setPointsPerDiamond] =
      useState(750);

  const [pointsPer20USD,
    setPointsPer20USD] =
      useState(12000000);

  const [diamondsPerCharme,
    setDiamondsPerCharme] =
      useState(5);

  // =========================
  // FORMATADOR DE HORAS
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
  // CONVERTER PRA SEGUNDOS
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
  // STATUS SEMANAL
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
  // BRL FIX
  // =========================

  const parsedDollarValue =
    parseFloat(
      dollars
        .toString()
        .trim()
    ) || 0;

  const estimatedBRL =
    (
      parsedDollarValue *
      usdRate
    ).toLocaleString(
      'pt-BR',
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }
    );

  // =========================
  // RESULTADOS
  // =========================

  const parsedPoints = Number(
    points.toString().replace(/\./g, '')
  );

  const minimumWithdraw =
    pointsPer20USD;

  const eligible =
    parsedPoints >= minimumWithdraw;

  const withdrawals =
    Math.floor(
      parsedPoints /
      minimumWithdraw
    );

  // =========================
  // CONFIG
  // =========================

  const config = {
    pointsPerDiamond,
    pointsPer20USD,
    diamondsPerCharme,
  };

  // =========================
  // HANDLERS
  // =========================

  const handleDiamonds = (
    value: string
  ) => {

    setDiamonds(value);

    if (!value) {

      setPoints('');
      setDollars('');
      setCharme('');

      return;
    }

    const result =
      calculateFromDiamonds(
        value,
        config
      );

    setPoints(result.points);
    setDollars(result.dollars);
    setCharme(result.charme);
  };

  const handlePoints = (
    value: string
  ) => {

    setPoints(value);

    if (!value) {

      setDiamonds('');
      setDollars('');
      setCharme('');

      return;
    }

    const result =
      calculateFromPoints(
        value,
        config
      );

    setDiamonds(result.diamonds);
    setDollars(result.dollars);
    setCharme(result.charme);
  };

  const handleDollars = (
    value: string
  ) => {

    setDollars(value);

    if (!value) {

      setDiamonds('');
      setPoints('');
      setCharme('');

      return;
    }

    const result =
      calculateFromDollars(
        value,
        config
      );

    setDiamonds(result.diamonds);
    setPoints(result.points);
    setCharme(result.charme);
  };

  const handleCharme = (
    value: string
  ) => {

    setCharme(value);

    if (!value) {

      setDiamonds('');
      setPoints('');
      setDollars('');

      return;
    }

    const result =
      calculateFromCharme(
        value,
        config
      );

    setDiamonds(result.diamonds);
    setPoints(result.points);
    setDollars(result.dollars);
  };

  // =========================
  // USD API
  // =========================

  useEffect(() => {

    const loadRate = async () => {

      setLoadingRate(true);

      const data =
        await fetchUSDBRL();

      if (data.success) {

        setUsdRate(data.bid);

        setUsdVariation(
          data.pctChange
        );

        setLastUpdate(
          data.createDate
        );
      }

      setLoadingRate(false);
    };

    loadRate();

    const interval =
      setInterval(
        loadRate,
        1000 * 60 * 5
      );

    return () =>
      clearInterval(interval);

  }, []);

  // =========================
  // HORÁRIO SP
  // =========================

  useEffect(() => {

    const updateClock = () => {

      const time =
        new Date()
          .toLocaleTimeString(
            'pt-BR',
            {
              timeZone:
                'America/Sao_Paulo',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
            }
          );

      setSaoPauloTime(time);
    };

    updateClock();

    const interval =
      setInterval(
        updateClock,
        1000
      );

    return () =>
      clearInterval(interval);

  }, []);

  // =========================
  // CACHE LOCAL
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

  // =========================
  // GSAP
  // =========================

  useEffect(() => {

    gsap.registerPlugin(
      ScrollTrigger
    );

    gsap.from('.glow-card', {
      y: 20,
      duration: 1,
      stagger: 0.08,
      ease: 'power2.out',
    });

  }, []);

  return (

    <main className="relative bg-black text-white min-h-screen overflow-hidden px-6 py-10">

      <div className="w-full relative z-20 pt-10 px-4 max-w-[1500px] mx-auto">

        <Header />

        <div className="mt-8 mb-8">

          <USDConverter
            usdRate={usdRate}
            lastUpdate={lastUpdate}
            usdVariation={usdVariation}
            loading={loadingRate}
          />

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">

          <ConversionSection
            diamonds={diamonds}
            points={points}
            dollars={dollars}
            charme={charme}
            estimatedBRL={estimatedBRL}
            parsedPoints={parsedPoints}
            eligible={eligible}
            withdrawals={withdrawals}
            pointsPerDiamond={pointsPerDiamond}
            diamondsPerCharme={diamondsPerCharme}
            handleDiamonds={handleDiamonds}
            handlePoints={handlePoints}
            handleDollars={handleDollars}
            handleCharme={handleCharme}
          />

          <div className="flex flex-col gap-6">

            {/* HORÁRIO */}

            <div className="glow-card rounded-3xl border border-orange-500/20 bg-black/40 backdrop-blur-2xl p-8">

              <div className="flex flex-col items-center justify-center text-center">

                <p className="text-sm uppercase tracking-[0.35em] text-orange-400">
                  Horário Oficial
                </p>

                <h2 className="mt-5 text-6xl font-black tracking-tight text-white">
                  {saoPauloTime}
                </h2>

                <p className="mt-4 text-sm text-zinc-500">
                  São Paulo • UTC -3
                </p>

              </div>

            </div>

            {/* LIVE TRACKER */}

<LiveTracker

normalizeTime={normalizeTime}

formatTime={formatTime}

totalSeconds={totalSeconds}

dailyTotalSeconds={dailyTotalSeconds}

remainingSeconds={remainingSeconds}

progress={progress}

weeklyStatus={weeklyStatus}

weeklyStatusColor={weeklyStatusColor}

session1={session1}
session2={session2}
session3={session3}
session4={session4}

day1={day1}
day2={day2}
day3={day3}
day4={day4}
day5={day5}
day6={day6}

setSession1={setSession1}
setSession2={setSession2}
setSession3={setSession3}
setSession4={setSession4}

setDay1={setDay1}
setDay2={setDay2}
setDay3={setDay3}
setDay4={setDay4}
setDay5={setDay5}
setDay6={setDay6}

/>

            {/* CONFIG */}

            <Parameters
              pointsPerDiamond={pointsPerDiamond}
              pointsPer20USD={pointsPer20USD}
              diamondsPerCharme={diamondsPerCharme}
              setPointsPerDiamond={setPointsPerDiamond}
              setPointsPer20USD={setPointsPer20USD}
              setDiamondsPerCharme={setDiamondsPerCharme}
            />

            <Rules
              pointsPerDiamond={pointsPerDiamond}
              pointsPer20USD={pointsPer20USD}
              diamondsPerCharme={diamondsPerCharme}
            />

          </div>

        </div>

      </div>

    </main>
  );
}
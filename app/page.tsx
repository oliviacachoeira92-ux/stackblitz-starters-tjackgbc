'use client';

import { useEffect, useState } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './components/core/Header';

import USDConverter from './components/dashboard/USDConverter';
import ConversionSection from './components/dashboard/ConversionSection';
import ClockCard from './components/dashboard/ClockCard';
import StatsBar from './components/dashboard/StatsBar';

import LiveTracker from './components/tracker/LiveTracker';

import Parameters from './components/system/Parameters';
import Rules from './components/system/Rules';

import useClock from './hooks/useClock';
import useUSD from './hooks/useUSD';
import useLiveTracker from './hooks/useLiveTracker';
import useConversionEngine from './hooks/useConversionEngine';

export default function Home() {

  // =========================
  // HOOKS
  // =========================

  const saoPauloTime =
    useClock();

  const {
    usdRate,
    lastUpdate,
    usdVariation,
    loadingRate,
  } = useUSD();

  const tracker =
    useLiveTracker();

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
  // CONVERSION
  // =========================

  const conversion =
    useConversionEngine(
      pointsPerDiamond,
      pointsPer20USD,
      diamondsPerCharme,
      usdRate,
    );

  // =========================
  // GSAP
  // =========================

  useEffect(() => {

    gsap.registerPlugin(
      ScrollTrigger
    );

    gsap.fromTo(
      '.glow-card',
      {
        opacity: 0,
        y: 12,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.04,
        ease: 'power2.out',
        clearProps: 'all',
      }
    );

  }, []);

  return (

    <main className="relative bg-black text-white min-h-screen overflow-hidden px-4 xl:px-6 py-6">

      <div className="w-full relative z-20 pt-6 max-w-[1450px] mx-auto">

        <Header />

        {/* MAIN GRID */}

        <div className="grid grid-cols-1 xl:grid-cols-[1.65fr_0.85fr] gap-4 mt-6">

          {/* LEFT SIDE */}

          <div className="flex flex-col gap-4">

            {/* USD HERO */}

            <USDConverter
              usdRate={usdRate}
              lastUpdate={lastUpdate}
              usdVariation={usdVariation}
              loading={loadingRate}
            />

            {/* MINI STATS BAR */}

            <StatsBar
              usdRate={usdRate}
              usdVariation={usdVariation}
              progress={tracker.progress}
              remainingSeconds={tracker.remainingSeconds}
              dailyTotalSeconds={tracker.dailyTotalSeconds}
              formatTime={tracker.formatTime}
              weeklyStatus={tracker.weeklyStatus}
            />

            {/* CONVERSION */}

            <ConversionSection
              {...conversion}
              pointsPerDiamond={pointsPerDiamond}
              diamondsPerCharme={diamondsPerCharme}
            />

          </div>

          {/* RIGHT SIDEBAR */}

          <div className="flex flex-col gap-4">

            {/* CLOCK */}

            <ClockCard
              time={saoPauloTime}
            />

            {/* LIVE TRACKER */}

            <LiveTracker
              {...tracker}
            />

            {/* PARAMETERS */}

            <Parameters
              pointsPerDiamond={pointsPerDiamond}
              pointsPer20USD={pointsPer20USD}
              diamondsPerCharme={diamondsPerCharme}
              setPointsPerDiamond={setPointsPerDiamond}
              setPointsPer20USD={setPointsPer20USD}
              setDiamondsPerCharme={setDiamondsPerCharme}
            />

            {/* RULES */}

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
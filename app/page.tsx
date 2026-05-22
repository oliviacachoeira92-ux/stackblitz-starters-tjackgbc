'use client';

import { useEffect, useState } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './components/core/Header';

import USDConverter from './components/dashboard/USDConverter';
import ConversionSection from './components/dashboard/ConversionSection';
import ClockCard from './components/dashboard/ClockCard';

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
            {...conversion}
            pointsPerDiamond={pointsPerDiamond}
            diamondsPerCharme={diamondsPerCharme}
          />

          <div className="flex flex-col gap-6">

            {/* CLOCK */}

            <ClockCard
              time={saoPauloTime}
            />

            {/* LIVE TRACKER */}

            <LiveTracker
              {...tracker}
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
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

  const saoPauloTime = useClock();

  const {
    usdRate,
    lastUpdate,
    usdVariation,
    loadingRate,
  } = useUSD();

  const tracker = useLiveTracker();

  // =========================
  // PARAMETERS
  // =========================

  const [pointsPerDiamond, setPointsPerDiamond] = useState(750);

  const [pointsPer20USD, setPointsPer20USD] =
    useState(12000000);

  const [diamondsPerCharme, setDiamondsPerCharme] =
    useState(5);

  // =========================
  // CONVERSION
  // =========================

  const conversion = useConversionEngine(
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
        y: 14,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.04,
        ease: 'power2.out',
        clearProps: 'all',
      }
    );

  }, []);

  return (

    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#07070A]
        text-white
      "
    >

      {/* BACKGROUND */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
        "
      >

        <div
          className="
            absolute
            top-[-160px]
            left-1/2
            -translate-x-1/2
            w-[720px]
            h-[420px]
            bg-violet-600/[0.05]
            blur-[90px]
            rounded-full
          "
        />

        <div
          className="
            absolute
            top-[22%]
            right-[-140px]
            w-[320px]
            h-[320px]
            bg-fuchsia-500/[0.04]
            blur-[80px]
            rounded-full
          "
        />

        <div
          className="
            absolute
            bottom-[-180px]
            left-[10%]
            w-[380px]
            h-[380px]
            bg-cyan-500/[0.03]
            blur-[90px]
            rounded-full
          "
        />

      </div>

      {/* CONTENT */}

      <div
        className="
          relative
          z-20
          max-w-[1500px]
          mx-auto
          px-4
          md:px-6
          xl:px-8
          pt-7
          pb-14
        "
      >

        {/* HEADER */}

        <Header />

        {/* MAIN LAYOUT */}

        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-[1.7fr_0.82fr]
            gap-5
            mt-4
          "
        >

          {/* LEFT SIDE */}

          <div className="flex flex-col gap-5">

            {/* USD CONVERTER */}

            <section className="glow-card">

              <USDConverter
                usdRate={usdRate}
                lastUpdate={lastUpdate}
                usdVariation={usdVariation}
                loading={loadingRate}
              />

            </section>

            {/* CONVERSION */}

            <section className="glow-card">

              <ConversionSection
                {...conversion}
                pointsPerDiamond={pointsPerDiamond}
                diamondsPerCharme={diamondsPerCharme}
              />

            </section>

            {/* STATS */}

            <section className="glow-card">

              <StatsBar
                usdRate={usdRate}
                usdVariation={usdVariation}
                progress={tracker.progress}
                remainingSeconds={tracker.remainingSeconds}
                dailyTotalSeconds={tracker.dailyTotalSeconds}
                formatTime={tracker.formatTime}
                weeklyStatus={tracker.weeklyStatus}
              />

            </section>

          </div>

          {/* RIGHT SIDE */}

          <div className="flex flex-col gap-5">

            {/* CLOCK */}

            <section className="glow-card">

              <ClockCard
                time={saoPauloTime}
              />

            </section>

            {/* TRACKER */}

            <section className="glow-card">

              <LiveTracker
                {...tracker}
              />

            </section>

            {/* PARAMETERS */}

            <section className="glow-card">

              <Parameters
                pointsPerDiamond={pointsPerDiamond}
                pointsPer20USD={pointsPer20USD}
                diamondsPerCharme={diamondsPerCharme}
                setPointsPerDiamond={setPointsPerDiamond}
                setPointsPer20USD={setPointsPer20USD}
                setDiamondsPerCharme={setDiamondsPerCharme}
              />

            </section>

            {/* RULES */}

            <section className="glow-card">

              <Rules
                pointsPerDiamond={pointsPerDiamond}
                pointsPer20USD={pointsPer20USD}
                diamondsPerCharme={diamondsPerCharme}
              />

            </section>

          </div>

        </div>

      </div>

    </main>

  );

}
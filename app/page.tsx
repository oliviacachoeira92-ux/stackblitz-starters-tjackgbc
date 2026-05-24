'use client';

import { useEffect, useState } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './components/core/Header';

import USDConverter from './components/dashboard/USDConverter';
import ConversionSection from './components/dashboard/ConversionSection';
import StatsBar from './components/dashboard/StatsBar';

import LiveTracker from './components/tracker/LiveTracker';

import Parameters from './components/system/Parameters';
import Rules from './components/system/Rules';

import TabsSystem from './components/tabs/TabsSystem';

import useClock from './hooks/useClock';
import useUSD from './hooks/useUSD';
import useLiveTracker from './hooks/useLiveTracker';
import useConversionEngine from './hooks/useConversionEngine';

export default function Home() {

  // =====================================================
  // HOOKS
  // =====================================================

  const saoPauloTime = useClock();

  const {
    usdRate,
    lastUpdate,
    usdVariation,
    loadingRate,
  } = useUSD();

  const tracker = useLiveTracker();

  // =====================================================
  // PARAMETERS
  // =====================================================

  const [pointsPerDiamond, setPointsPerDiamond] =
    useState(750);

  const [pointsPer20USD, setPointsPer20USD] =
    useState(12000000);

  const [diamondsPerCharme, setDiamondsPerCharme] =
    useState(5);

  // =====================================================
  // CONVERSION
  // =====================================================

  const conversion = useConversionEngine(
    pointsPerDiamond,
    pointsPer20USD,
    diamondsPerCharme,
    usdRate,
  );

  // =====================================================
  // GSAP
  // =====================================================

  useEffect(() => {

    gsap.registerPlugin(
      ScrollTrigger
    );

    gsap.fromTo(
      '.cinematic-enter',
      {
        opacity: 0,
        y: 18,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.06,
        ease: 'power3.out',
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
        text-white
      "
    >

      {/* =====================================================
          PAGE ATMOSPHERE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >

        {/* TOP ENERGY */}

        <div
          className="
            absolute
            top-[-240px]
            left-1/2
            -translate-x-1/2
            w-[1200px]
            h-[500px]
            rounded-full
            bg-orange-500/[0.08]
            blur-[140px]
          "
        />

        {/* RIGHT LIGHT */}

        <div
          className="
            absolute
            top-[18%]
            right-[-180px]
            w-[420px]
            h-[420px]
            rounded-full
            bg-violet-500/[0.08]
            blur-[120px]
          "
        />

        {/* LEFT FOG */}

        <div
          className="
            absolute
            bottom-[-120px]
            left-[-120px]
            w-[360px]
            h-[360px]
            rounded-full
            bg-cyan-500/[0.05]
            blur-[120px]
          "
        />

      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

<div
  className="
    relative
    z-10

    w-full

    px-3
    md:px-4
    xl:px-5

    pt-5
    md:pt-6

    pb-20
  "
>
      >

        {/* =====================================================
            HERO
        ===================================================== */}

        <div className="cinematic-enter">

          <Header
            time={saoPauloTime}
          />

        </div>

        {/* =====================================================
            TABS SYSTEM
        ===================================================== */}

        <div
          className="
            cinematic-enter
            mt-6
          "
        >

          <TabsSystem
            tabs={[

              // =====================================================
              // CONVERSOR
              // =====================================================

              {
                id: 'converter',
                label: 'Conversor',

                content: (

                  <div
                    className="
                      grid
                      grid-cols-1
                      gap-5
                    "
                  >

                    {/* USD */}

                    <section className="cinematic-enter">

                      <USDConverter
                        usdRate={usdRate}
                        lastUpdate={lastUpdate}
                        usdVariation={usdVariation}
                        loading={loadingRate}
                      />

                    </section>

                    {/* CONVERSION */}

                    <section className="cinematic-enter">

                      <ConversionSection
                        {...conversion}
                        pointsPerDiamond={pointsPerDiamond}
                        diamondsPerCharme={diamondsPerCharme}
                      />

                    </section>

                  </div>

                ),
              },

              // =====================================================
              // OPERACIONAL
              // =====================================================

              {
                id: 'operacional',
                label: 'Operacional',

                content: (

                  <div
                    className="
                      grid
                      grid-cols-1
                      gap-5
                    "
                  >

                    {/* TRACKER */}

                    <section className="cinematic-enter">

                      <LiveTracker
                        {...tracker}
                      />

                    </section>

                    {/* STATS */}

                    <section className="cinematic-enter">

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

                ),
              },

              // =====================================================
              // SISTEMA
              // =====================================================

              {
                id: 'sistema',
                label: 'Sistema',

                content: (

                  <div
                    className="
                      grid
                      grid-cols-1
                      gap-5
                    "
                  >

                    {/* PARAMETERS */}

                    <section className="cinematic-enter">

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

                    <section className="cinematic-enter">

                      <Rules
                        pointsPerDiamond={pointsPerDiamond}
                        pointsPer20USD={pointsPer20USD}
                        diamondsPerCharme={diamondsPerCharme}
                      />

                    </section>

                  </div>

                ),
              },

            ]}
          />

        </div>

      </div>

    </main>

  );

}
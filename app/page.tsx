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
  const [pointsPer20USD, setPointsPer20USD] = useState(12000000);
  const [diamondsPerCharme, setDiamondsPerCharme] = useState(5);

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
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      '.glow-card',
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.05, ease: 'power3.out', clearProps: 'all' }
    );
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07070A] text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-violet-600/[0.08] blur-[160px] rounded-full" />
        <div className="absolute top-[20%] right-[-180px] w-[420px] h-[420px] bg-fuchsia-500/[0.05] blur-[140px] rounded-full" />
        <div className="absolute bottom-[-220px] left-[10%] w-[520px] h-[520px] bg-cyan-500/[0.04] blur-[160px] rounded-full" />

      </div>

      {/* CONTENT */}
      <div className="relative z-20 max-w-[1500px] mx-auto px-4 md:px-6 xl:px-8 pt-8 pb-16">

        {/* HEADER */}
        <Header />

        {/* HERO / INTRO */}
        <section className="glow-card mb-8 p-6 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs tracking-[0.3em] text-white/40 uppercase">Fenix Arcane</p>
              <h2 className="text-lg font-medium text-white/90 mt-1">Sistema de Conversão</h2>
            </div>
            <div className="text-xs text-green-400 font-medium">Sistema Ativo</div>
          </div>
        </section>

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 xl:grid-cols-[1.7fr_0.82fr] gap-5 mt-5">

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

            {/* CONVERSION */}
            <section className="glow-card">
              <ConversionSection
                {...conversion}
                pointsPerDiamond={pointsPerDiamond}
                diamondsPerCharme={diamondsPerCharme}
              />
            </section>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-5">

            {/* CLOCK */}
            <section className="glow-card">
              <ClockCard time={saoPauloTime} />
            </section>

            {/* TRACKER */}
            <section className="glow-card">
              <LiveTracker {...tracker} />
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
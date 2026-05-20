'use client';

import USDConverter from './components/USDConverter';

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
import CalculatorPanel from './components/CalculatorPanel';
import Parameters from './components/Parameters';
import Rules from './components/Rules';

export default function Home() {

  // CAMPOS

  const [diamonds, setDiamonds] =
    useState('');

  const [points, setPoints] =
    useState('');

  const [dollars, setDollars] =
    useState('');

  const [charme, setCharme] =
    useState('');

  // USD REALTIME

  const [usdRate, setUsdRate] =
    useState(5);

  const [lastUpdate, setLastUpdate] =
    useState('');

  const [usdVariation, setUsdVariation] =
    useState(0);

  const [loadingRate, setLoadingRate] =
    useState(true);

  // PARÂMETROS

  const [pointsPerDiamond,
    setPointsPerDiamond] =
      useState(750);

  const [pointsPer20USD,
    setPointsPer20USD] =
      useState(12000000);

  const [diamondsPerCharme,
    setDiamondsPerCharme] =
      useState(5);

  // RESULTADOS

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

  // BRL DINÂMICO

  const estimatedBRL =
    dollars
      ? (
          Number(dollars) *
          usdRate
        ).toFixed(2)
      : '0.00';

  // CONFIG

  const config = {
    pointsPerDiamond,
    pointsPer20USD,
    diamondsPerCharme,
  };

  // HANDLERS

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

  // USD REALTIME

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

  // EFFECTS

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

    const glow =
      document.getElementById(
        'mouse-glow'
      );

    const move = (
      e: MouseEvent
    ) => {

      if (!glow) return;

      gsap.to(glow, {
        background: `radial-gradient(
          600px at ${e.clientX}px ${e.clientY}px,
          rgba(255,255,255,0.10),
          transparent 80%
        )`,
        duration: 0.4,
      });
    };

    window.addEventListener(
      'mousemove',
      move
    );

    return () => {

      window.removeEventListener(
        'mousemove',
        move
      );

    };

  }, []);

  return (

    <main className="relative bg-black text-white min-h-screen overflow-hidden px-6 py-10">

      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-40"
        id="mouse-glow"
      />

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

        <div className="absolute ambient-orb top-[-250px] left-[-180px] w-[700px] h-[700px] rounded-full bg-white/[0.025] blur-[140px]" />

        <div className="absolute bottom-[-300px] right-[-200px] w-[800px] h-[800px] rounded-full bg-white/[0.02] blur-[180px]" />

      </div>

      <div className="noise pointer-events-none" />

      <div className="ambient-gradient pointer-events-none" />

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

          <CalculatorPanel
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

      <style jsx global>{`
        .ambient-gradient {
          position: fixed;
          width: 1400px;
          height: 1400px;
          border-radius: 9999px;
          background: radial-gradient(
            circle,
            rgba(255,255,255,0.06),
            transparent 70%
          );
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          filter: blur(120px);
          animation: ambientMove 18s ease-in-out infinite alternate;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes ambientMove {
          0% {
            transform: translate(-50%, -50%) scale(1);
          }

          50% {
            transform: translate(-45%, -55%) scale(1.1);
          }

          100% {
            transform: translate(-55%, -45%) scale(0.95);
          }
        }

        .glow-card {
          position: relative;
          overflow: hidden;
        }

        .glow-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          padding: 1px;

          pointer-events: none;

          background: linear-gradient(
            135deg,
            rgba(255,255,255,0.15),
            rgba(255,255,255,0.02),
            rgba(255,255,255,0.15)
          );

          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);

          -webkit-mask-composite: xor;
          mask-composite: exclude;

          opacity: 0.4;
        }

        .noise {
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.035;
          z-index: 999;
          background-image: url('/noise.png');
          mix-blend-mode: soft-light;
        }
      `}</style>

    </main>
  );
}
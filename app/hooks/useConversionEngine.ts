import { useState } from 'react';

import {
  calculateFromDiamonds,
  calculateFromPoints,
  calculateFromDollars,
  calculateFromCharme,
} from '../utils/conversionEngine';

export default function useConversionEngine(
  pointsPerDiamond: number,
  pointsPer20USD: number,
  diamondsPerCharme: number,
  usdRate: number,
) {

  // =========================
  // CAMPOS
  // =========================

  const [diamonds, setDiamonds] =
    useState('');

  const [points, setPoints] =
    useState('');

  const [dollars, setDollars] =
    useState('');

  const [brl, setBRL] =
    useState('');

  const [charme, setCharme] =
    useState('');

  // =========================
  // CONFIG
  // =========================

  const config = {
    pointsPerDiamond,
    pointsPer20USD,
    diamondsPerCharme,
  };

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
  // HELPERS
  // =========================

  const convertUSDToBRL = (
    usd: string
  ) => {

    const parsed =
      parseFloat(
        usd
          .toString()
          .replace(',', '.')
          .trim()
      ) || 0;

    return (
      parsed *
      usdRate
    ).toFixed(2);

  };

  const convertBRLToUSD = (
    brlValue: string
  ) => {

    const parsed =
      parseFloat(
        brlValue
          .toString()
          .replace(',', '.')
          .trim()
      ) || 0;

    return (
      parsed /
      usdRate
    ).toFixed(2);

  };

  // =========================
  // RESET
  // =========================

  const resetAll = () => {

    setDiamonds('');
    setPoints('');
    setDollars('');
    setBRL('');
    setCharme('');

  };

  // =========================
  // HANDLERS
  // =========================

  const handleDiamonds = (
    value: string
  ) => {

    setDiamonds(value);

    if (!value) {

      resetAll();

      return;
    }

    const result =
      calculateFromDiamonds(
        value,
        config
      );

    setPoints(result.points);
    setDollars(result.dollars);
    setBRL(
      convertUSDToBRL(
        result.dollars
      )
    );
    setCharme(result.charme);

  };

  const handlePoints = (
    value: string
  ) => {

    setPoints(value);

    if (!value) {

      resetAll();

      return;
    }

    const result =
      calculateFromPoints(
        value,
        config
      );

    setDiamonds(result.diamonds);
    setDollars(result.dollars);
    setBRL(
      convertUSDToBRL(
        result.dollars
      )
    );
    setCharme(result.charme);

  };

  const handleDollars = (
    value: string
  ) => {

    setDollars(value);

    if (!value) {

      resetAll();

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

    setBRL(
      convertUSDToBRL(value)
    );

  };

  const handleBRL = (
    value: string
  ) => {

    setBRL(value);

    if (!value) {

      resetAll();

      return;
    }

    const usd =
      convertBRLToUSD(value);

    setDollars(usd);

    const result =
      calculateFromDollars(
        usd,
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

      resetAll();

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

    setBRL(
      convertUSDToBRL(
        result.dollars
      )
    );

  };

  return {

    diamonds,
    points,
    dollars,
    brl,
    charme,

    parsedPoints,
    eligible,
    withdrawals,

    handleDiamonds,
    handlePoints,
    handleDollars,
    handleBRL,
    handleCharme,

  };

}
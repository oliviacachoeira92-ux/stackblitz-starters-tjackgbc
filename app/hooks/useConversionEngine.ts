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
  // BRL
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

  return {
    diamonds,
    points,
    dollars,
    charme,

    estimatedBRL,
    parsedPoints,
    eligible,
    withdrawals,

    handleDiamonds,
    handlePoints,
    handleDollars,
    handleCharme,
  };
}
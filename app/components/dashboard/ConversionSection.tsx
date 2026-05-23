'use client';

import CalculatorPanel from './CalculatorPanel';

type Props = {

  diamonds: string;

  points: string;

  dollars: string;

  brl: string;

  charme: string;

  parsedPoints: number;

  eligible: boolean;

  withdrawals: number;

  pointsPerDiamond: number;

  diamondsPerCharme: number;

  handleDiamonds: (
    value: string
  ) => void;

  handlePoints: (
    value: string
  ) => void;

  handleDollars: (
    value: string
  ) => void;

  handleBRL: (
    value: string
  ) => void;

  handleCharme: (
    value: string
  ) => void;
};

export default function ConversionSection({

  diamonds,

  points,

  dollars,

  brl,

  charme,

  parsedPoints,

  eligible,

  withdrawals,

  pointsPerDiamond,

  diamondsPerCharme,

  handleDiamonds,

  handlePoints,

  handleDollars,

  handleBRL,

  handleCharme,

}: Props) {

  return (

    <CalculatorPanel

      diamonds={diamonds}

      points={points}

      dollars={dollars}

      brl={brl}

      charme={charme}

      parsedPoints={parsedPoints}

      eligible={eligible}

      withdrawals={withdrawals}

      pointsPerDiamond={pointsPerDiamond}

      diamondsPerCharme={diamondsPerCharme}

      handleDiamonds={handleDiamonds}

      handlePoints={handlePoints}

      handleDollars={handleDollars}

      handleBRL={handleBRL}

      handleCharme={handleCharme}

    />

  );

}
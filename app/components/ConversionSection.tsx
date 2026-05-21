'use client';

import CalculatorPanel from './CalculatorPanel';

type Props = {

  diamonds: string;
  points: string;
  dollars: string;
  charme: string;

  estimatedBRL: string;

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

  handleCharme: (
    value: string
  ) => void;
};

export default function ConversionSection({

  diamonds,
  points,
  dollars,
  charme,

  estimatedBRL,

  parsedPoints,

  eligible,

  withdrawals,

  pointsPerDiamond,

  diamondsPerCharme,

  handleDiamonds,
  handlePoints,
  handleDollars,
  handleCharme,

}: Props) {

  return (

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

  );
}
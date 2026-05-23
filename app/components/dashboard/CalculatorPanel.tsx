'use client';

import Card from '../ui/Card';
import InputCard from '../ui/InputCard';
import MetricCard from '../ui/MetricCard';

type CalculatorProps = {
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

  handleDiamonds: (value: string) => void;
  handlePoints: (value: string) => void;
  handleDollars: (value: string) => void;
  handleBRL: (value: string) => void;
  handleCharme: (value: string) => void;
};

const format = (value: string) => {

  if (!value) return '';

  const numeric = Number(
    value.replace(/\./g, '')
  );

  if (isNaN(numeric)) return '';

  return new Intl.NumberFormat(
    'pt-BR'
  ).format(numeric);

};

const formatCurrency = (
  value: string | number
) => {

  return Number(
    value || 0
  ).toLocaleString(
    'pt-BR',
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  );

};

export default function CalculatorPanel({

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

}: CalculatorProps) {

  return (

    <Card
      className="
        xl:col-span-3
        relative
        z-30
        overflow-hidden
        p-4
        md:p-5
      "
    >

      {/* BACKGROUND */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-55
        "
      >

        <div
          className="
            absolute
            top-[-60px]
            left-1/2
            h-[220px]
            md:h-[320px]
            w-[220px]
            md:w-[320px]
            -translate-x-1/2
            rounded-full
            bg-emerald-500/[0.05]
            blur-[70px]
          "
        />

        <div
          className="
            absolute
            bottom-[-40px]
            right-[-20px]
            h-[140px]
            w-[140px]
            rounded-full
            bg-cyan-500/[0.04]
            blur-[55px]
          "
        />

      </div>

      <div className="relative z-10">

        {/* HEADER */}

        <div className="mb-5">

          <div
            className="
              flex
              items-center
              justify-between
              gap-4
              flex-wrap
            "
          >

            <div>

              <p
                className="
                  text-white/30
                  uppercase
                  tracking-[0.28em]
                  text-[9px]
                "
              >

                FENIX ARCANE

              </p>

              <h2
                className="
                  mt-2
                  text-[1rem]
                  md:text-[1.2rem]
                  font-semibold
                  tracking-[-0.03em]
                  text-white/90
                "
              >

                Sistema de Conversão

              </h2>

            </div>

            <div
              className="
                w-fit
                flex
                items-center
                gap-2
                px-3
                py-1.5
                rounded-full
                border
                border-emerald-400/[0.06]
                bg-emerald-400/[0.03]
                backdrop-blur-xl
              "
            >

              <div className="w-1.5 h-1.5 rounded-full bg-emerald-300" />

              <p
                className="
                  text-emerald-300/75
                  uppercase
                  tracking-[0.16em]
                  text-[9px]
                  whitespace-nowrap
                "
              >

                Sistema Ativo

              </p>

            </div>

          </div>

        </div>

        {/* INPUTS */}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">

          <InputCard
            title="Diamantes Recebidos"
            value={format(diamonds)}
            placeholder="Ex: 12.500"
            onChange={handleDiamonds}
          />

          <InputCard
            title="Pontos Acumulados"
            value={format(points)}
            placeholder="Ex: 9.375.000"
            onChange={handlePoints}
          />

          <InputCard
            title="Valor em USD"
            value={dollars || ''}
            placeholder="Ex: 15.62"
            onChange={handleDollars}
            color="cyan"
          />

          <InputCard
            title="Valor em BRL"
            value={brl || ''}
            placeholder="Ex: 500"
            onChange={handleBRL}
            color="emerald"
          />

        </div>

        {/* CHARME */}

        <div className="mt-3">

          <InputCard
            title="Charm Estimado"
            value={format(charme)}
            placeholder="Ex: 2.500"
            onChange={handleCharme}
            color="fuchsia"
            footer={`${diamondsPerCharme} diamantes = 1 Charm`}
          />

        </div>

        {/* METRICS */}

        <div className="mt-7">

          <div className="flex items-center justify-between mb-4">

            <p
              className="
                text-white/30
                uppercase
                tracking-[0.24em]
                text-[9px]
                whitespace-nowrap
              "
            >

              Métricas de Conversão

            </p>

            <div
              className="
                h-[1px]
                flex-1
                ml-4
                bg-gradient-to-r
                from-white/[0.06]
                to-transparent
              "
            />

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">

            <MetricCard
              title="Diamantes"
              value={
                format(diamonds) || '—'
              }
              color="cyan"
            />

            <MetricCard
              title="Status de Saque"
              value={
                eligible
                  ? 'Disponível'
                  : 'Indisponível'
              }
              color={
                eligible
                  ? 'emerald'
                  : 'amber'
              }
              status
            />

            <MetricCard
              title="Saques Possíveis"
              value={String(withdrawals)}
            />

            <MetricCard
              title="Valor em USD"
              value={`US$ ${formatCurrency(dollars)}`}
              color="cyan"
            />

            <MetricCard
              title="Valor em BRL"
              value={`R$ ${formatCurrency(brl)}`}
              color="emerald"
              large
              featured
            />

          </div>

        </div>

      </div>

    </Card>

  );
}
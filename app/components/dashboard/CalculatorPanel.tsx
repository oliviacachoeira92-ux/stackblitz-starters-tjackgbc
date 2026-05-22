'use client';

import Card from '../ui/Card';
import InputCard from '../ui/InputCard';
import MetricCard from '../ui/MetricCard';

type CalculatorProps = {
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

  handleDiamonds: (value: string) => void;
  handlePoints: (value: string) => void;
  handleDollars: (value: string) => void;
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

}: CalculatorProps) {

  return (

    <Card
      className="
        group
        xl:col-span-3
        relative
        z-30
        p-3
        md:p-5
      "
    >

      {/* INPUTS */}

      <div className="flex flex-col gap-3">

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
          title="Valor USD"
          value={dollars || ''}
          placeholder="Ex: 15.62"
          onChange={handleDollars}
          color="cyan"
        />

        <InputCard
          title="Valor BRL"
          value=""
          readonly
          displayValue={`R$ ${estimatedBRL}`}
          onChange={() => {}}
          color="emerald"
        />

        <InputCard
          title="Charme Estimado"
          value={format(charme)}
          placeholder="Ex: 2.500"
          onChange={handleCharme}
          color="fuchsia"
          footer={`${diamondsPerCharme} diamantes = 1 charme`}
        />

      </div>

      {/* RESULTADOS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 mt-6">

        <MetricCard
          title="Diamantes"
          value={
            format(diamonds) || '—'
          }
          color="cyan"
        />

        <MetricCard
          title="Pronto para saque"
          value={
            eligible
              ? 'Sim'
              : 'Não'
          }
          color={
            eligible
              ? 'emerald'
              : 'amber'
          }
          status
        />

        <MetricCard
          title="Saques possíveis"
          value={String(withdrawals)}
        />

        <MetricCard
          title="Valor USD"
          value={`US$ ${formatCurrency(dollars)}`}
          color="cyan"
        />

        <MetricCard
          title="Valor estimado em reais"
          value={`R$ ${estimatedBRL}`}
          color="emerald"
          large
        />

      </div>

      {/* INFO */}

      <div className="mt-6 overflow-hidden rounded-3xl min-h-[100px] md:min-h-[130px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-4">

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">

          <div>

            <p className="text-zinc-400 uppercase tracking-[0.2em] text-[10px] md:text-xs">

              Conversão

            </p>

            <h2 className="text-[clamp(1rem,4vw,2rem)] font-black tracking-tight text-white mt-2 break-words">

              {format(points) || '—'}

            </h2>

          </div>

          <div className="text-right">

            <p className="text-zinc-400 text-[10px] md:text-xs">

              Conversão média

            </p>

            <h3 className="text-[clamp(0.9rem,2vw,1.3rem)] font-black tracking-tight text-white">

              {parsedPoints
                ? (
                    parsedPoints /
                    pointsPerDiamond
                  ).toFixed(0)
                : '—'}

            </h3>

          </div>

        </div>

        <p className="mt-4 text-[11px] text-zinc-500 leading-relaxed max-w-[900px]">

          As conversões exibidas são estimativas em tempo real e podem sofrer variações conforme alterações de câmbio, plataforma e arredondamentos.

        </p>

      </div>

    </Card>
  );
}
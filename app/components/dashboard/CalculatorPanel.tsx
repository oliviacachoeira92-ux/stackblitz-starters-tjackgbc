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
        overflow-hidden
        p-4
        md:p-6
      "
    >

      {/* BACKGROUND */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-80
        "
      >

        {/* MAIN GLOW */}

        <div
          className="
            absolute
            top-[-80px]
            md:top-[-120px]
            left-1/2
            h-[260px]
            md:h-[420px]
            w-[260px]
            md:w-[420px]
            -translate-x-1/2
            rounded-full
            bg-emerald-500/[0.08]
            blur-[120px]
            md:blur-[160px]
          "
        />

        {/* CYAN LIGHT */}

        <div
          className="
            absolute
            bottom-[-60px]
            right-[-40px]
            h-[180px]
            md:h-[260px]
            w-[180px]
            md:w-[260px]
            rounded-full
            bg-cyan-500/[0.08]
            blur-[90px]
            md:blur-[120px]
          "
        />

      </div>

      <div className="relative z-10">

        {/* HEADER */}

        <div className="mb-6 md:mb-7">

          <div
            className="
              flex
              items-center
              justify-between
              gap-4
              flex-wrap
            "
          >

            {/* LEFT */}

            <div>

              <p
                className="
                  text-white/35
                  uppercase
                  tracking-[0.30em]
                  text-[10px]
                "
              >

                FENIX ARCANE

              </p>

              <h2
                className="
                  mt-2
                  text-[1.1rem]
                  md:text-[1.3rem]
                  font-semibold
                  tracking-[-0.03em]
                  text-white/90
                "
              >

                Sistema de Conversão

              </h2>

            </div>

            {/* STATUS */}

            <div
              className="
                w-fit
                flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                border
                border-emerald-400/20
                bg-emerald-400/[0.05]
                backdrop-blur-xl
              "
            >

              <div className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />

              <p
                className="
                  text-emerald-300
                  uppercase
                  tracking-[0.18em]
                  text-[10px]
                  whitespace-nowrap
                "
              >

                SISTEMA ATIVO

              </p>

            </div>

          </div>

        </div>

        {/* INPUTS */}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 md:gap-4">

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
            title="Valor Estimado em BRL"
            value=""
            readonly
            displayValue={`R$ ${estimatedBRL}`}
            onChange={() => {}}
            color="emerald"
          />

        </div>

        {/* CHARME */}

        <div className="mt-3 md:mt-4">

          <InputCard
            title="Charm Estimado"
            value={format(charme)}
            placeholder="Ex: 2.500"
            onChange={handleCharme}
            color="fuchsia"
            footer={`${diamondsPerCharme} diamantes = 1 Charm`}
          />

        </div>

        {/* RESULTS */}

        <div className="mt-7 md:mt-8">

          {/* TITLE */}

          <div className="flex items-center justify-between mb-5">

            <p
              className="
                text-white/35
                uppercase
                tracking-[0.22em]
                md:tracking-[0.28em]
                text-[9px]
                md:text-[10px]
                whitespace-nowrap
              "
            >

              MÉTRICAS OPERACIONAIS

            </p>

            <div
              className="
                h-[1px]
                flex-1
                ml-4
                md:ml-5
                bg-gradient-to-r
                from-white/10
                to-transparent
              "
            />

          </div>

          {/* GRID */}

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
              title="Valor Estimado"
              value={`R$ ${estimatedBRL}`}
              color="emerald"
              large
              featured
            />

          </div>

        </div>

        {/* LIVE STATUS */}

        <div
          className="
            relative
            overflow-hidden
            mt-7
            md:mt-8
            rounded-[1.8rem]
            md:rounded-[2rem]
            border
            border-white/10
            bg-gradient-to-b
            from-white/[0.04]
            to-white/[0.02]
            p-4
            md:p-6
          "
        >

          {/* GLOW */}

          <div
            className="
              absolute
              top-0
              right-0
              h-32
              md:h-44
              w-32
              md:w-44
              rounded-full
              bg-emerald-500/10
              blur-3xl
            "
          />

          <div className="relative z-10">

            <div
              className="
                flex
                flex-col
                lg:flex-row
                items-start
                lg:items-center
                justify-between
                gap-6
              "
            >

              {/* LEFT */}

              <div className="min-w-0">

                <p
                  className="
                    text-white/35
                    uppercase
                    tracking-[0.18em]
                    md:tracking-[0.24em]
                    text-[9px]
                    md:text-[10px]
                  "
                >

                  STATUS OPERACIONAL

                </p>

                <h2
                  className="
                    mt-3
                    text-[clamp(1.2rem,7vw,2.8rem)]
                    font-black
                    tracking-[-0.05em]
                    leading-[0.95]
                    text-white
                    break-words
                  "
                >

                  {format(points) || '—'} Pontos

                </h2>

              </div>

              {/* RIGHT */}

              <div className="text-left lg:text-right">

                <p
                  className="
                    text-white/35
                    uppercase
                    tracking-[0.16em]
                    md:tracking-[0.2em]
                    text-[9px]
                    md:text-[10px]
                  "
                >

                  Conversão Média

                </p>

                <h3
                  className="
                    mt-2
                    text-[clamp(1rem,5vw,1.7rem)]
                    font-black
                    text-emerald-300
                  "
                >

                  {parsedPoints
                    ? (
                        parsedPoints /
                        pointsPerDiamond
                      ).toFixed(0)
                    : '—'} 💎

                </h3>

              </div>

            </div>

            {/* DIVIDER */}

            <div
              className="
                mt-6
                h-[1px]
                w-full
                bg-gradient-to-r
                from-white/10
                via-white/5
                to-transparent
              "
            />

            {/* DISCLAIMER */}

            <p
              className="
                mt-5
                text-[11px]
                md:text-xs
                text-white/35
                leading-relaxed
                max-w-[950px]
              "
            >

              As conversões exibidas são estimativas operacionais em tempo real
              e podem sofrer alterações conforme variações cambiais,
              arredondamentos e atualizações internas da plataforma.

            </p>

          </div>

        </div>

      </div>

    </Card>

  );

}
'use client';

type CalculatorProps = {
  diamonds: string;
  points: string;
  dollars: string;
  charme: string;
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

export default function Calculator({
  diamonds,
  points,
  dollars,
  charme,
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
    <div className="group xl:col-span-3 glow-card relative z-30 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-[0_0_80px_rgba(255,255,255,0.06)]">

      {/* INPUTS */}

      <div className="grid md:grid-cols-2 auto-rows-fr gap-5">

        {/* DIAMANTES */}

        <div className="rounded-3xl min-h-[180px] border border-white/10 bg-white/[0.02] p-7 md:col-span-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:bg-white/[0.03]">

          <p className="text-zinc-400 uppercase tracking-[0.18em] text-xs mb-5">
            Diamantes Recebidos
          </p>

          <input
            type="text"
            value={format(diamonds)}
            onChange={(e) =>
              handleDiamonds(
                e.target.value
              )
            }
            placeholder="Ex: 12.500"
            className="w-full bg-transparent text-4xl font-black outline-none placeholder:text-zinc-400 cursor-text transition-all duration-300 focus:ring-2 focus:ring-white/20 hover:bg-white/[0.02] focus:bg-white/[0.03] rounded-xl"
          />

        </div>

        {/* PONTOS */}

        <div className="rounded-3xl min-h-[180px] border border-white/10 bg-white/[0.02] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:bg-white/[0.03]">

          <p className="text-zinc-400 uppercase tracking-[0.18em] text-xs mb-5">
            Pontos Acumulados
          </p>

          <input
            type="text"
            value={format(points)}
            onChange={(e) =>
              handlePoints(
                e.target.value
              )
            }
            placeholder="Ex: 9.375.000"
            className="w-full bg-transparent text-4xl font-black outline-none placeholder:text-zinc-600 cursor-text transition-all duration-300 focus:ring-2 focus:ring-white/20 hover:bg-white/[0.02] focus:bg-white/[0.03] rounded-xl"
          />

        </div>

        {/* DÓLARES */}

        <div className="rounded-3xl min-h-[180px] border border-white/10 bg-white/[0.02] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:bg-white/[0.03]">

          <p className="text-zinc-400 uppercase tracking-[0.18em] text-xs mb-5">
            Valor Estimado
          </p>

          <input
            type="text"
            value={dollars || ''}
            onChange={(e) =>
              handleDollars(
                e.target.value
              )
            }
            placeholder="Ex: 15.62"
            className="w-full bg-transparent text-4xl font-black outline-none placeholder:text-zinc-600 cursor-text transition-all duration-300 focus:ring-2 focus:ring-white/20 hover:bg-white/[0.02] focus:bg-white/[0.03] rounded-xl"
          />

        </div>

        {/* CHARME */}

        <div className="rounded-3xl h-full min-h-[180px] border border-white/10 bg-white/[0.02] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:bg-white/[0.03]">

          <p className="text-zinc-400 uppercase tracking-[0.18em] text-xs mb-5">
            Charme Estimado
          </p>

          <input
            type="text"
            value={format(charme)}
            onChange={(e) =>
              handleCharme(
                e.target.value
              )
            }
            placeholder="Ex: 2.500"
            className="w-full bg-transparent text-4xl font-black outline-none placeholder:text-zinc-600 cursor-text transition-all duration-300 focus:ring-2 focus:ring-white/20 hover:bg-white/[0.02] focus:bg-white/[0.03] rounded-xl"
          />

          <p className="text-zinc-600 mt-4">
            {diamondsPerCharme} diamantes = 1 charme
          </p>

        </div>

      </div>

               {/* RESULTADOS */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">

{/* DIAMANTES */}

<div className="rounded-3xl min-h-[180px] border border-white/10 bg-white/[0.03] p-5 flex flex-col items-center justify-center text-center ">

  <p className="text-xs uppercase tracking-[0.18em] text-white/40 mb-5">
    Diamantes
  </p>

  <h3 className="w-full text-[clamp(1.2rem,1.8vw,2.8rem)] font-black tracking-[-0.04em] leading-none text-white">

    {format(diamonds) || '—'}

  </h3>

</div>

{/* SAQUE */}

<div className="rounded-3xl min-h-[180px] border border-white/10 bg-white/[0.03] p-5 flex flex-col items-center justify-center text-center ">

  <p className="text-xs uppercase tracking-[0.18em] text-white/40 mb-5">
    Pronto para saque
  </p>

  <h3 className="w-full text-[clamp(1.8rem,2.4vw,3rem)] font-black tracking-tight leading-none text-white">

    {eligible ? 'Sim' : 'Não'}

  </h3>

</div>

{/* SAQUES */}

<div className="rounded-3xl min-h-[180px] border border-white/10 bg-white/[0.03] p-5 flex flex-col items-center justify-center text-center ">

  <p className="text-xs uppercase tracking-[0.18em] text-white/40 mb-5">
    Saques possíveis
  </p>

  <h3 className="w-full text-[clamp(1.8rem,2.5vw,3.2rem)] font-black tracking-[-0.03em] leading-none text-white truncate">

    {withdrawals}

  </h3>

</div>

{/* US$ */}

<div className="rounded-3xl min-h-[180px] border border-white/20 bg-white/[0.08] p-5 flex flex-col items-center justify-center text-center shadow-[0_0_40px_rgba(255,255,255,0.05)]">

  <p className="text-xs uppercase tracking-[0.18em] text-white/50 mb-5">
    Valor estimado
  </p>

  <h3 className="w-full text-[clamp(1.4rem,2vw,3rem)] font-black tracking-[-0.05em] leading-[0.9] text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.08)]">

    {dollars || '—'}

  </h3>

</div>

</div>


      {/* INFO */}

      <div className="mt-10 rounded-3xl min-h-[180px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-zinc-400 uppercase tracking-[0.2em] text-sm">
              Conversão
            </p>

            <h2 className="text-5xl font-black tracking-tight text-white mt-3">
              {format(points) || '—'}
            </h2>

          </div>

          <div className="text-right">

            <p className="text-zinc-400 text-sm">
              Conversão média
            </p>

            <h3 className="text-4xl font-black tracking-tight text-white">
              {parsedPoints
                ? (
                    parsedPoints /
                    pointsPerDiamond
                  ).toFixed(0)
                : '—'}
            </h3>

          </div>

        </div>

      </div>

    </div>
  );
}
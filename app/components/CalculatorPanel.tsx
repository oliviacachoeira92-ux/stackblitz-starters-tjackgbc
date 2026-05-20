'use client';

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

    <div className="group xl:col-span-3 glow-card relative z-30 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-4 md:p-8 transition-all duration-700 hover:border-white/20 hover:bg-white/[0.045] shadow-[0_0_80px_rgba(255,255,255,0.02)]">

      {/* INPUTS */}

      <div className="flex flex-col gap-4 md:gap-5">

        {/* DIAMANTES */}

        <div className="rounded-3xl min-h-[120px] md:min-h-[180px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-4 md:p-6 transition-all duration-500 hover:border-cyan-300/10 hover:bg-white/[0.04]">

          <p className="text-zinc-400 uppercase tracking-[0.22em] text-[10px] md:text-xs mb-4">
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
            className="w-full min-w-0 bg-transparent text-[clamp(1rem,3.8vw,1.7rem)] md:text-[clamp(1.8rem,4vw,3rem)] font-black outline-none placeholder:text-zinc-600 rounded-xl text-white"
          />

        </div>

        {/* PONTOS */}

        <div className="rounded-3xl min-h-[120px] md:min-h-[180px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-4 md:p-6 transition-all duration-500 hover:border-white/20">

          <p className="text-zinc-400 uppercase tracking-[0.22em] text-[10px] md:text-xs mb-4">
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
            className="w-full min-w-0 bg-transparent text-[clamp(1rem,3.8vw,1.7rem)] md:text-[clamp(1.8rem,4vw,3rem)] font-black outline-none placeholder:text-zinc-600 rounded-xl text-white"
          />

        </div>

        {/* USD */}

        <div className="rounded-3xl min-h-[120px] md:min-h-[180px] border border-cyan-400/10 bg-cyan-400/[0.025] p-4 md:p-6 transition-all duration-500 hover:border-cyan-300/20 hover:bg-cyan-300/[0.04]">

          <p className="text-cyan-200/70 uppercase tracking-[0.22em] text-[10px] md:text-xs mb-4">
            Valor USD
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
            className="w-full min-w-0 bg-transparent text-[clamp(1rem,3.8vw,1.7rem)] md:text-[clamp(1.8rem,4vw,3rem)] font-black outline-none placeholder:text-cyan-100/20 rounded-xl text-cyan-50"
          />

        </div>

        {/* BRL */}

        <div className="rounded-3xl min-h-[120px] md:min-h-[180px] border border-emerald-400/20 bg-emerald-400/[0.04] p-4 md:p-6 transition-all duration-500 hover:border-emerald-300/30 hover:bg-emerald-300/[0.06] shadow-[0_0_80px_rgba(16,185,129,0.05)]">

          <p className="text-emerald-300 uppercase tracking-[0.22em] text-[10px] md:text-xs mb-4">
            Valor BRL
          </p>

          <div className="w-full min-w-0 bg-transparent text-[clamp(1rem,3.8vw,1.7rem)] md:text-[clamp(1.8rem,4vw,3rem)] font-black text-emerald-100 break-words">

            R$ {formatCurrency(estimatedBRL)}

          </div>

        </div>

        {/* CHARME */}

        <div className="rounded-3xl min-h-[120px] md:min-h-[180px] border border-fuchsia-400/10 bg-fuchsia-400/[0.02] p-4 md:p-6 transition-all duration-500 hover:border-fuchsia-300/20">

          <p className="text-zinc-300 uppercase tracking-[0.22em] text-[10px] md:text-xs mb-4">
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
            className="w-full min-w-0 bg-transparent text-[clamp(1rem,3.8vw,1.7rem)] md:text-[clamp(1.8rem,4vw,3rem)] font-black outline-none placeholder:text-zinc-600 rounded-xl text-white"
          />

          <p className="text-zinc-500 mt-3 text-sm">
            {diamondsPerCharme} diamantes = 1 charme
          </p>

        </div>

      </div>

      {/* RESULTADOS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-10">

        {/* DIAMANTES */}

        <div className="rounded-3xl min-h-[110px] md:min-h-[180px] border border-cyan-300/10 bg-cyan-300/[0.02] p-4 md:p-5 flex flex-col items-center justify-center text-center transition-all duration-500 hover:border-cyan-200/20">

          <p className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-cyan-100/40 mb-4">
            Diamantes
          </p>

          <h3 className="w-full text-[clamp(0.9rem,3vw,1.5rem)] font-black tracking-tight leading-none text-white break-words">

            {format(diamonds) || '—'}

          </h3>

        </div>

        {/* SAQUE */}

        <div className={`rounded-3xl min-h-[110px] md:min-h-[180px] border p-4 md:p-5 flex flex-col items-center justify-center text-center transition-all duration-500 ${
          eligible
            ? 'border-emerald-400/20 bg-emerald-400/[0.04]'
            : 'border-amber-300/15 bg-amber-300/[0.03]'
        }`}>

          <p className={`text-[10px] md:text-xs uppercase tracking-[0.18em] mb-4 ${
            eligible
              ? 'text-emerald-200/50'
              : 'text-amber-100/40'
          }`}>

            Pronto para saque

          </p>

          <h3 className={`w-full text-[clamp(0.9rem,3vw,1.6rem)] font-black tracking-tight leading-none ${
            eligible
              ? 'text-emerald-100'
              : 'text-amber-100'
          }`}>

            {eligible ? 'Sim' : 'Não'}

          </h3>

        </div>

        {/* SAQUES */}

        <div className="rounded-3xl min-h-[110px] md:min-h-[180px] border border-white/10 bg-white/[0.03] p-4 md:p-5 flex flex-col items-center justify-center text-center">

          <p className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-white/40 mb-4">
            Saques possíveis
          </p>

          <h3 className="w-full text-[clamp(0.9rem,3vw,1.5rem)] font-black tracking-tight leading-none text-white">

            {withdrawals}

          </h3>

        </div>

        {/* USD */}

        <div className="rounded-3xl min-h-[110px] md:min-h-[180px] border border-cyan-300/15 bg-cyan-300/[0.04] p-4 md:p-5 flex flex-col items-center justify-center text-center shadow-[0_0_60px_rgba(103,232,249,0.03)]">

          <p className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-cyan-100/50 mb-4">
            Valor USD
          </p>

          <h3 className="w-full text-[clamp(1rem,4vw,2rem)] font-black tracking-tight leading-none text-cyan-50 break-words">

            US$ {formatCurrency(dollars)}

          </h3>

        </div>

        {/* BRL */}

        <div className="rounded-3xl min-h-[110px] md:min-h-[180px] border border-emerald-400/20 bg-emerald-400/[0.05] p-4 md:p-5 flex flex-col items-center justify-center text-center md:col-span-2 xl:col-span-4 shadow-[0_0_100px_rgba(16,185,129,0.05)]">

          <p className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-emerald-200/70 mb-4">
            Valor estimado em reais
          </p>

          <h3 className="w-full text-[clamp(1.1rem,5vw,2.8rem)] font-black tracking-tight leading-none text-emerald-50 break-words">

            R$ {formatCurrency(estimatedBRL)}

          </h3>

        </div>

      </div>

      {/* INFO */}

      <div className="mt-10 overflow-hidden rounded-3xl min-h-[120px] md:min-h-[180px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-4 md:p-6">

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">

          <div>

            <p className="text-zinc-400 uppercase tracking-[0.2em] text-[10px] md:text-sm">
              Conversão
            </p>

            <h2 className="text-[clamp(1rem,5vw,2.3rem)] font-black tracking-tight text-white mt-3 break-words">

              {format(points) || '—'}

            </h2>

          </div>

          <div className="text-right">

            <p className="text-zinc-400 text-[10px] md:text-sm">
              Conversão média
            </p>

            <h3 className="text-[clamp(0.9rem,3vw,1.5rem)] font-black tracking-tight text-white">

              {parsedPoints
                ? (
                    parsedPoints /
                    pointsPerDiamond
                  ).toFixed(0)
                : '—'}

            </h3>

          </div>

        </div>

        {/* AVISO */}

        <p className="mt-6 text-xs text-zinc-500 leading-relaxed max-w-[900px]">

          As conversões exibidas são estimativas em tempo real e podem sofrer variações conforme alterações de câmbio, plataforma e arredondamentos.

        </p>

      </div>

    </div>

  );
}
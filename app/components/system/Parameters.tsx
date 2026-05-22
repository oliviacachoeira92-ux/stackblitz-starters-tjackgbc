type ParametersProps = {
  pointsPerDiamond: number;
  pointsPer20USD: number;
  diamondsPerCharme: number;

  setPointsPerDiamond: (
    value: number
  ) => void;

  setPointsPer20USD: (
    value: number
  ) => void;

  setDiamondsPerCharme: (
    value: number
  ) => void;
};

const format = (value: number) =>
  new Intl.NumberFormat('pt-BR').format(
    value
  );

const parse = (value: string) =>
  Number(value.replace(/\./g, ''));

export default function Parameters({
  pointsPerDiamond,
  pointsPer20USD,
  diamondsPerCharme,
  setPointsPerDiamond,
  setPointsPer20USD,
  setDiamondsPerCharme,
}: ParametersProps) {

  return (

    <div className="glow-card rounded-[1.6rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-4">

      <p className="text-zinc-500 uppercase tracking-[0.18em] text-[10px] mb-4">
        Parâmetros
      </p>

      <div className="space-y-3">

        {/* PONTOS POR DIAMANTE */}

        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-3">

          <p className="text-zinc-500 text-[11px] mb-2">
            Pontos por diamante
          </p>

          <input
            type="text"
            value={format(pointsPerDiamond)}
            onChange={(e) =>
              setPointsPerDiamond(
                parse(e.target.value)
              )
            }
            className="w-full bg-transparent text-xl md:text-2xl font-black leading-none outline-none cursor-text"
          />

        </div>

        {/* PONTOS POR US$20 */}

        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-3">

          <p className="text-zinc-500 text-[11px] mb-2">
            Pontos por US$20
          </p>

          <input
            type="text"
            value={format(pointsPer20USD)}
            onChange={(e) =>
              setPointsPer20USD(
                parse(e.target.value)
              )
            }
            className="w-full bg-transparent text-xl md:text-2xl font-black leading-none outline-none cursor-text"
          />

        </div>

        {/* DIAMANTES POR CHARME */}

        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-3">

          <p className="text-zinc-500 text-[11px] mb-2">
            Diamantes por charme
          </p>

          <input
            type="text"
            value={format(diamondsPerCharme)}
            onChange={(e) =>
              setDiamondsPerCharme(
                parse(e.target.value)
              )
            }
            className="w-full bg-transparent text-xl md:text-2xl font-black leading-none outline-none cursor-text"
          />

        </div>

      </div>

    </div>
  );
}
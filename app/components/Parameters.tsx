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
    <div className="glow-card rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8">

      <p className="text-zinc-500 uppercase tracking-[0.2em] text-sm mb-6">
        Parâmetros
      </p>

      <div className="space-y-5">

        {/* PONTOS POR DIAMANTE */}

        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5">

          <p className="text-zinc-500 text-sm mb-3">
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
            className="w-full bg-transparent text-3xl font-black outline-none cursor-text"
          />

        </div>

        {/* PONTOS POR US$20 */}

        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5">

          <p className="text-zinc-500 text-sm mb-3">
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
            className="w-full bg-transparent text-3xl font-black outline-none cursor-text"
          />

        </div>

        {/* DIAMANTES POR CHARME */}

        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5">

          <p className="text-zinc-500 text-sm mb-3">
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
            className="w-full bg-transparent text-3xl font-black outline-none cursor-text"
          />

        </div>

      </div>

    </div>
  );
}
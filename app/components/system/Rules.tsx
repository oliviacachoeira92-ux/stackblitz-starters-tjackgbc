type RulesProps = {
  pointsPerDiamond: number;
  pointsPer20USD: number;
  diamondsPerCharme: number;
};

export default function Rules({
  pointsPerDiamond,
  pointsPer20USD,
  diamondsPerCharme,
}: RulesProps) {

  return (

    <div className="glow-card rounded-[1.6rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-4">

      <p className="text-zinc-500 uppercase tracking-[0.18em] text-[10px] mb-4">
        Regras
      </p>

      <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">

        <p>
          • 1 Diamante = {pointsPerDiamond} pontos
        </p>

        <p>
          •{' '}
          {pointsPer20USD.toLocaleString(
            'pt-BR'
          )}{' '}
          pontos = US$20
        </p>

        <p>
          • {diamondsPerCharme} diamantes = 1 charme
        </p>

        <p>
          • Saque mínimo:{' '}
          {pointsPer20USD.toLocaleString(
            'pt-BR'
          )}{' '}
          pontos
        </p>

      </div>

    </div>
  );
}
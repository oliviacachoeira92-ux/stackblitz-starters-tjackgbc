import Card from '../ui/Card';

interface Props {
  usdRate: number;
  lastUpdate: string;
  usdVariation: number;
  loading: boolean;
}

export default function USDConverter({
  usdRate,
  lastUpdate,
  usdVariation,
  loading,
}: Props) {

  const usdExample = 100;

  const brl =
    usdExample * usdRate;

  return (

    <Card className="px-6 py-5">

      <div className="flex items-start justify-between gap-4">

        <div>

          <p className="text-[10px] uppercase tracking-[0.28em] text-white/35">

            USD → BRL

          </p>

          <h2 className="mt-3 text-2xl md:text-3xl font-black leading-none">

            {loading
              ? '...'
              : `$${usdExample} = R$${brl.toFixed(
                  2
                )}`}

          </h2>

        </div>

        <div
          className={`text-xs md:text-sm font-semibold ${
            usdVariation >= 0
              ? 'text-green-400'
              : 'text-red-400'
          }`}
        >

          {usdVariation >= 0
            ? '▲'
            : '▼'}{' '}

          {usdVariation.toFixed(2)}%

        </div>

      </div>

      <div className="mt-4 flex items-end justify-between gap-4 flex-wrap">

        <div>

          <p className="text-white/45 text-xs mb-1">

            Cotação atual

          </p>

          <h3 className="text-lg md:text-xl font-bold leading-none">

            1 USD = R$
            {usdRate.toFixed(2)}

          </h3>

        </div>

        <p className="text-white/25 text-[11px]">

          Atualizado:
          {' '}
          {lastUpdate || '...'}

        </p>

      </div>

    </Card>
  );
}
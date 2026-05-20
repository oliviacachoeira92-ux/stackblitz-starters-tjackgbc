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
      <div className="glow-card rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 overflow-hidden">
  
        <div className="flex items-center justify-between">
  
          <div>
  
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">
  
              USD → BRL
  
            </p>
  
            <h2 className="mt-4 text-3xl md:text-4xl font-black">
  
              {loading
                ? '...'
                : `$${usdExample} = R$${brl.toFixed(
                    2
                  )}`}
  
            </h2>
  
          </div>
  
          <div
            className={`text-sm font-semibold ${
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
  
        <div className="mt-6 flex flex-col gap-2">
  
          <p className="text-white/60 text-sm">
  
            Cotação atual:
  
          </p>
  
          <h3 className="text-2xl font-bold">
  
            1 USD = R$
            {usdRate.toFixed(2)}
  
          </h3>
  
          <p className="text-white/30 text-xs">
  
            Atualizado:
            {' '}
            {lastUpdate || '...'}
          </p>
  
        </div>
  
      </div>
    );
  }
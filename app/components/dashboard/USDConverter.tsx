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

  const isPositive =
    usdVariation >= 0;

  const formattedDate =
    lastUpdate && lastUpdate !== 'offline'
      ? `${new Date(lastUpdate).toLocaleDateString(
          'pt-BR',
          {
            timeZone: 'UTC',
          }
        )} às ${new Date(
          lastUpdate
        ).toLocaleTimeString(
          'pt-BR',
          {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'UTC',
          }
        )} UTC`
      : lastUpdate || '...';

  return (

    <Card
      className="
        relative
        overflow-hidden
        px-4
        py-4
        md:px-6
        md:py-5
      "
    >

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-45
        "
      >

        <div
          className="
            absolute
            -top-12
            right-0
            w-[180px]
            md:w-[220px]
            h-[120px]
            md:h-[140px]
            bg-violet-500/[0.05]
            blur-[65px]
            rounded-full
          "
        />

        <div
          className="
            absolute
            bottom-[-30px]
            left-[-20px]
            w-[90px]
            md:w-[110px]
            h-[90px]
            md:h-[110px]
            bg-cyan-400/[0.03]
            blur-[45px]
            rounded-full
          "
        />

      </div>

      <div className="relative z-10">

        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-start
            md:justify-between
            gap-4
          "
        >

          <div className="min-w-0">

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-3
                py-1.5
                rounded-full
                border
                border-white/[0.04]
                bg-white/[0.02]
                backdrop-blur-sm
              "
            >

              <div className="w-1.5 h-1.5 rounded-full bg-violet-300" />

              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.22em]
                  text-white/40
                  whitespace-nowrap
                "
              >

                USD → BRL LIVE

              </p>

            </div>

            <div className="mt-4">

              <h2
                className="
                  tabular-nums
                  text-[clamp(1.8rem,8vw,3rem)]
                  font-bold
                  leading-[0.92]
                  tracking-[-0.05em]
                  title-gradient
                  break-words
                "
              >

                {loading
                  ? '...'
                  : `R$ ${brl.toFixed(2)}`}

              </h2>

              <div
                className="
                  mt-3
                  flex
                  items-center
                  gap-3
                  flex-wrap
                "
              >

                <p
                  className="
                    text-white/42
                    text-sm
                  "
                >

                  Conversão Referencial

                </p>

                <div
                  className="
                    hidden
                    sm:block
                    h-1
                    w-1
                    rounded-full
                    bg-white/15
                  "
                />

                <p
                  className="
                    text-white/22
                    text-[11px]
                    tracking-wide
                  "
                >

                  Base: ${usdExample} USD

                </p>

              </div>

            </div>

          </div>

          <div
            className={`
              w-fit
              flex
              items-center
              gap-2
              px-3
              py-1.5
              rounded-[1rem]
              border
              backdrop-blur-sm
              ${
                isPositive
                  ? 'border-emerald-400/[0.08] bg-emerald-400/[0.03] text-emerald-300'
                  : 'border-red-400/[0.08] bg-red-400/[0.03] text-red-300'
              }
            `}
          >

            <span className="text-xs">

              {isPositive
                ? '▲'
                : '▼'}

            </span>

            <span
              className="
                tabular-nums
                text-xs
                font-semibold
                tracking-wide
              "
            >

              {usdVariation.toFixed(2)}%

            </span>

          </div>

        </div>

        <div
          className="
            mt-6
            pt-4
            border-t
            border-white/[0.03]
            flex
            flex-col
            md:flex-row
            md:items-end
            md:justify-between
            gap-5
          "
        >

          <div className="min-w-0">

            <p
              className="
                text-white/28
                text-[9px]
                uppercase
                tracking-[0.18em]
                mb-2
              "
            >

              Cotação Atual

            </p>

            <h3
              className="
                tabular-nums
                text-[clamp(1.4rem,7vw,2.1rem)]
                font-bold
                leading-[0.95]
                tracking-[-0.04em]
                text-white
                break-words
              "
            >

              1 USD

              <span className="text-white/20 mx-2">

                =

              </span>

              <span className="title-gradient">

                R$ {usdRate.toFixed(2)}

              </span>

            </h3>

          </div>

          <div className="text-left md:text-right">

            <p
              className="
                text-white/18
                text-[9px]
                uppercase
                tracking-[0.20em]
                mb-2
              "
            >

              BASE CAMBIAL

            </p>

            <p
              className="
                text-white/38
                text-sm
                tabular-nums
              "
            >

              {formattedDate}

            </p>

          </div>

        </div>

      </div>

    </Card>

  );

}
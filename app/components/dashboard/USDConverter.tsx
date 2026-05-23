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

  return (

    <Card
      className="
        relative
        overflow-hidden
        px-5
        py-5
        md:px-8
        md:py-7
      "
    >

      {/* AMBIENT LIGHT */}

      <div className="absolute inset-0 pointer-events-none">

        {/* TOP GLOW */}

        <div
          className="
            absolute
            -top-16
            right-0
            w-[220px]
            md:w-[280px]
            h-[150px]
            md:h-[180px]
            bg-violet-500/[0.10]
            blur-[90px]
            rounded-full
          "
        />

        {/* SIDE GLOW */}

        <div
          className="
            absolute
            bottom-[-50px]
            left-[-30px]
            w-[130px]
            md:w-[160px]
            h-[130px]
            md:h-[160px]
            bg-cyan-400/[0.05]
            blur-[70px]
            rounded-full
          "
        />

      </div>

      {/* CONTENT */}

      <div className="relative z-10">

        {/* TOP */}

        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-start
            md:justify-between
            gap-5
          "
        >

          {/* LEFT */}

          <div className="min-w-0">

            {/* LABEL */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-3
                py-1.5
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-md
              "
            >

              <div className="w-1.5 h-1.5 rounded-full bg-violet-300" />

              <p
                className="
                  text-[8px]
                  md:text-[9px]
                  uppercase
                  tracking-[0.22em]
                  md:tracking-[0.28em]
                  text-white/45
                  whitespace-nowrap
                "
              >

                USD → BRL LIVE

              </p>

            </div>

            {/* HERO VALUE */}

            <div className="mt-5">

              <h2
                className="
                  text-[clamp(1.9rem,9vw,3.4rem)]
                  font-black
                  leading-[0.92]
                  tracking-[-0.07em]
                  title-gradient
                  break-words
                "
              >

                {loading
                  ? '...'
                  : `R$${brl.toFixed(2)}`}

              </h2>

              <div
                className="
                  mt-4
                  flex
                  items-center
                  gap-3
                  flex-wrap
                "
              >

                <p
                  className="
                    text-white/50
                    text-sm
                    md:text-base
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
                    bg-white/20
                  "
                />

                <p
                  className="
                    text-white/28
                    text-xs
                    tracking-wide
                  "
                >

                  Base: ${usdExample} USD

                </p>

              </div>

            </div>

          </div>

          {/* VARIATION */}

          <div
            className={`
              w-fit
              flex
              items-center
              gap-2
              px-4
              py-2
              rounded-2xl
              border
              backdrop-blur-md
              ${
                isPositive
                  ? 'border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-300'
                  : 'border-red-400/20 bg-red-400/[0.06] text-red-300'
              }
            `}
          >

            <span className="text-sm">

              {isPositive
                ? '▲'
                : '▼'}

            </span>

            <span className="text-sm font-bold tracking-wide">

              {usdVariation.toFixed(2)}%

            </span>

          </div>

        </div>

        {/* BOTTOM */}

        <div
          className="
            mt-7
            pt-5
            border-t
            border-white/[0.06]
            flex
            flex-col
            md:flex-row
            md:items-end
            md:justify-between
            gap-6
          "
        >

          {/* RATE */}

          <div className="min-w-0">

            <p
              className="
                text-white/35
                text-[10px]
                md:text-[11px]
                uppercase
                tracking-[0.18em]
                md:tracking-[0.20em]
                mb-3
              "
            >

              Cotação Atual

            </p>

            <h3
              className="
                text-[clamp(1.6rem,8vw,2.5rem)]
                font-black
                leading-[0.95]
                tracking-[-0.05em]
                text-white
                break-words
              "
            >

              1 USD

              <span className="text-white/25 mx-2">

                =

              </span>

              <span className="title-gradient">

                R${usdRate.toFixed(2)}

              </span>

            </h3>

          </div>

          {/* UPDATE */}

          <div className="text-left md:text-right">

            <p
              className="
                text-white/20
                text-[10px]
                uppercase
                tracking-[0.22em]
                mb-2
              "
            >

              Última Atualização

            </p>

            <p
              className="
                text-white/45
                text-sm
              "
            >

              {lastUpdate || '...'}

            </p>

          </div>

        </div>

      </div>

    </Card>

  );
}
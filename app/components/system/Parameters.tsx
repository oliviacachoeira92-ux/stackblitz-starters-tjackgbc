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

  const inputStyle =
    `
      w-full
      bg-transparent
      text-2xl
      md:text-3xl
      font-black
      leading-none
      tracking-tight
      outline-none
      text-white
      placeholder:text-white/20
    `;

  return (

    <div
      className="
        glow-card
        relative
        overflow-hidden
        rounded-[2rem]
        border
        border-white/[0.07]
        bg-[rgba(15,15,20,0.72)]
        backdrop-blur-2xl
        p-5
      "
    >

      {/* AMBIENT LIGHT */}

      <div className="absolute inset-0 pointer-events-none">

        {/* MAIN */}

        <div
          className="
            absolute
            top-[-80px]
            right-[-40px]
            h-52
            w-52
            rounded-full
            bg-violet-500/[0.08]
            blur-[120px]
          "
        />

        {/* SECONDARY */}

        <div
          className="
            absolute
            bottom-[-40px]
            left-[10%]
            h-32
            w-32
            rounded-full
            bg-cyan-400/[0.05]
            blur-[80px]
          "
        />

      </div>

      {/* CONTENT */}

      <div className="relative z-10">

        {/* HEADER */}

        <div className="mb-6">

          <p
            className="
              text-white/35
              uppercase
              tracking-[0.24em]
              text-[10px]
            "
          >

            CONFIGURAÇÕES OPERACIONAIS

          </p>

          <h2
            className="
              mt-3
              text-2xl
              md:text-3xl
              font-black
              tracking-[-0.05em]
              title-gradient
            "
          >

            Parâmetros do Sistema

          </h2>

        </div>

        {/* GRID */}

        <div className="space-y-4">

          {/* PONTOS POR DIAMANTE */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[1.6rem]
              border
              border-white/10
              bg-white/[0.03]
              p-4
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-white/15
            "
          >

            <div
              className="
                absolute
                top-0
                right-0
                h-24
                w-24
                rounded-full
                bg-violet-500/[0.05]
                blur-3xl
              "
            />

            <div className="relative z-10">

              <p
                className="
                  text-white/35
                  text-[11px]
                  uppercase
                  tracking-[0.18em]
                  mb-3
                "
              >

                Pontos por Diamante

              </p>

              <input
                type="text"
                value={format(pointsPerDiamond)}
                onChange={(e) =>
                  setPointsPerDiamond(
                    parse(e.target.value)
                  )
                }
                className={inputStyle}
              />

            </div>

          </div>

          {/* PONTOS POR USD */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[1.6rem]
              border
              border-white/10
              bg-white/[0.03]
              p-4
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-white/15
            "
          >

            <div
              className="
                absolute
                top-0
                right-0
                h-24
                w-24
                rounded-full
                bg-cyan-500/[0.05]
                blur-3xl
              "
            />

            <div className="relative z-10">

              <p
                className="
                  text-white/35
                  text-[11px]
                  uppercase
                  tracking-[0.18em]
                  mb-3
                "
              >

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
                className={inputStyle}
              />

            </div>

          </div>

          {/* CHARM */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[1.6rem]
              border
              border-white/10
              bg-white/[0.03]
              p-4
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-white/15
            "
          >

            <div
              className="
                absolute
                top-0
                right-0
                h-24
                w-24
                rounded-full
                bg-fuchsia-500/[0.05]
                blur-3xl
              "
            />

            <div className="relative z-10">

              <p
                className="
                  text-white/35
                  text-[11px]
                  uppercase
                  tracking-[0.18em]
                  mb-3
                "
              >

                Diamantes por Charm

              </p>

              <input
                type="text"
                value={format(diamondsPerCharme)}
                onChange={(e) =>
                  setDiamondsPerCharme(
                    parse(e.target.value)
                  )
                }
                className={inputStyle}
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
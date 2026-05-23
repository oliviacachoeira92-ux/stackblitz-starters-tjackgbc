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
            bg-emerald-500/[0.08]
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
            bg-orange-400/[0.05]
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

            REGRAS OPERACIONAIS

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

            Regras do Sistema

          </h2>

        </div>

        {/* RULES */}

        <div className="space-y-4">

          {/* ITEM */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[1.4rem]
              border
              border-white/10
              bg-white/[0.03]
              p-4
              backdrop-blur-xl
            "
          >

            <p className="text-white/70 text-sm leading-relaxed">

              <span className="font-bold text-cyan-200">

                1 Diamante

              </span>

              {' '}equivale a{' '}

              <span className="font-bold text-white">

                {pointsPerDiamond}

              </span>

              {' '}pontos.

            </p>

          </div>

          {/* ITEM */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[1.4rem]
              border
              border-white/10
              bg-white/[0.03]
              p-4
              backdrop-blur-xl
            "
          >

            <p className="text-white/70 text-sm leading-relaxed">

              <span className="font-bold text-emerald-200">

                {pointsPer20USD.toLocaleString(
                  'pt-BR'
                )}

              </span>

              {' '}pontos equivalem a{' '}

              <span className="font-bold text-white">

                US$20

              </span>

              .

            </p>

          </div>

          {/* ITEM */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[1.4rem]
              border
              border-white/10
              bg-white/[0.03]
              p-4
              backdrop-blur-xl
            "
          >

            <p className="text-white/70 text-sm leading-relaxed">

              <span className="font-bold text-fuchsia-200">

                {diamondsPerCharme} diamantes

              </span>

              {' '}equivalem a{' '}

              <span className="font-bold text-white">

                1 Charm

              </span>

              .

            </p>

          </div>

          {/* ITEM */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[1.4rem]
              border
              border-white/10
              bg-white/[0.03]
              p-4
              backdrop-blur-xl
            "
          >

            <p className="text-white/70 text-sm leading-relaxed">

              O saque mínimo operacional é de{' '}

              <span className="font-bold text-orange-200">

                {pointsPer20USD.toLocaleString(
                  'pt-BR'
                )} pontos

              </span>

              .

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}
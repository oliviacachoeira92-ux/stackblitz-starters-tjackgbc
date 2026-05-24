import Card from '../ui/Card';

interface ClockCardProps {
  time: string;
}

export default function ClockCard({
  time,
}: ClockCardProps) {

  return (

    <Card
      className="
        relative
        overflow-hidden
        min-h-[112px]
        px-5
        py-5
        flex
        items-center
      "
    >

      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          overflow-hidden
          pointer-events-none
        "
      >

        {/* CENTER GLOW */}

        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-28
            h-28
            rounded-full
            bg-orange-500/[0.06]
            blur-[65px]
          "
        />

        {/* TOP LIGHT */}

        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[55%]
            h-[1px]
            bg-gradient-to-r
            from-transparent
            via-orange-200/35
            to-transparent
          "
        />

      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          w-full
          flex
          items-center
          justify-between
          gap-5
        "
      >

        {/* =========================================
            LEFT
        ========================================= */}

        <div
          className="
            min-w-0
            flex
            flex-col
            gap-3
          "
        >

          {/* BADGE */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-3
              py-1.5
              rounded-full
              border
              border-orange-400/[0.08]
              bg-orange-400/[0.04]
              backdrop-blur-md
              w-fit
            "
          >

            <div className="relative flex items-center justify-center">

              <div
                className="
                  absolute
                  h-3
                  w-3
                  rounded-full
                  bg-orange-400/20
                  animate-pulse
                "
              />

              <div
                className="
                  relative
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-orange-300
                "
              />

            </div>

            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.24em]
                text-orange-100/70
                whitespace-nowrap
              "
            >

              HORÁRIO OFICIAL

            </p>

          </div>

          {/* LOCATION */}

          <div className="flex flex-col gap-1">

            <p
              className="
                text-[12px]
                text-white/70
                font-medium
              "
            >

              São Paulo

            </p>

            <p
              className="
                text-[11px]
                text-white/34
              "
            >

              UTC -3 • Tempo Real

            </p>

          </div>

        </div>

        {/* =========================================
            TIME
        ========================================= */}

        <div
          className="
            shrink-0
            text-right
          "
        >

          <h2
            className="
              thermal-text
              tabular-nums
              text-[1.95rem]
              md:text-[2.3rem]
              font-semibold
              tracking-[-0.05em]
              leading-none
              whitespace-nowrap
            "
          >

            {time}

          </h2>

          <p
            className="
              mt-2
              text-[10px]
              uppercase
              tracking-[0.22em]
              text-white/24
            "
          >

            LIVE CLOCK

          </p>

        </div>

      </div>

    </Card>

  );

}
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
        px-4
        py-4
        md:px-5
        md:py-5
      "
    >

      {/* AMBIENT LIGHT */}

      <div className="absolute inset-0 pointer-events-none opacity-60">

        {/* MAIN GLOW */}

        <div
          className="
            absolute
            top-[-40px]
            right-[-20px]
            w-32
            h-32
            rounded-full
            bg-orange-500/[0.06]
            blur-[60px]
          "
        />

      </div>

      {/* CONTENT */}

      <div className="relative z-10">

        <div
          className="
            flex
            items-center
            justify-between
            gap-4
            flex-wrap
          "
        >

          {/* LEFT */}

          <div>

            {/* LABEL */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-2.5
                py-1
                rounded-full
                border
                border-orange-400/[0.06]
                bg-orange-400/[0.03]
                backdrop-blur-sm
              "
            >

              <div className="w-1.5 h-1.5 rounded-full bg-orange-300" />

              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.22em]
                  text-orange-200/70
                "
              >

                HORÁRIO OFICIAL

              </p>

            </div>

            {/* LOCATION */}

            <div className="mt-3">

              <p
                className="
                  text-white/60
                  text-sm
                  font-medium
                "
              >

                São Paulo

              </p>

              <p
                className="
                  mt-1
                  text-white/25
                  text-[11px]
                  tracking-wide
                "
              >

                UTC -3 • Brasil

              </p>

            </div>

          </div>

          {/* TIME */}

          <div className="text-left md:text-right">

            <h2
              className="
                tabular-nums
                text-[clamp(1.8rem,5vw,3.4rem)]
                font-semibold
                tracking-[-0.06em]
                leading-none
                text-white
              "
            >

              {time}

            </h2>

          </div>

        </div>

      </div>

    </Card>

  );
}
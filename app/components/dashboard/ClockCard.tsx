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
        px-5
        py-5
        md:px-6
      "
    >

      {/* AMBIENT LIGHT */}

      <div className="absolute inset-0 pointer-events-none">

        {/* MAIN GLOW */}

        <div
          className="
            absolute
            top-[-60px]
            right-[-30px]
            w-40
            h-40
            rounded-full
            bg-orange-500/[0.10]
            blur-[90px]
          "
        />

        {/* SECONDARY */}

        <div
          className="
            absolute
            bottom-[-30px]
            left-[10%]
            w-24
            h-24
            rounded-full
            bg-violet-500/[0.06]
            blur-[70px]
          "
        />

      </div>

      {/* CONTENT */}

      <div className="relative z-10">

        <div className="flex items-center justify-between gap-5 flex-wrap">

          {/* LEFT */}

          <div>

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
                border-orange-400/15
                bg-orange-400/[0.04]
                backdrop-blur-md
              "
            >

              <div className="w-1.5 h-1.5 rounded-full bg-orange-300 animate-pulse" />

              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.26em]
                  text-orange-200/80
                "
              >

                HORÁRIO OFICIAL

              </p>

            </div>

            {/* LOCATION */}

            <div className="mt-4">

              <p
                className="
                  text-white/65
                  text-sm
                  font-medium
                "
              >

                São Paulo

              </p>

              <p
                className="
                  mt-1
                  text-white/28
                  text-xs
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
                text-[clamp(2rem,5vw,4rem)]
                font-black
                tracking-[-0.08em]
                leading-none
                title-gradient
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
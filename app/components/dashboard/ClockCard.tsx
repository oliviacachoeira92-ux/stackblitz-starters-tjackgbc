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
        h-[104px]
        px-5
        flex
        items-center
      "
    >

      {/* LIGHT */}

      <div
        className="
          absolute
          inset-0
          overflow-hidden
          rounded-[1.5rem]
          pointer-events-none
          opacity-50
        "
      >

        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-20
            h-20
            rounded-full
            bg-orange-500/[0.05]
            blur-[45px]
          "
        />

      </div>

      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          w-full
          flex
          items-center
          justify-between
          gap-4
        "
      >

        {/* LEFT */}

        <div
          className="
            min-w-0
            flex
            flex-col
            gap-2
          "
        >

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
              w-fit
            "
          >

            <div className="w-1.5 h-1.5 rounded-full bg-orange-300" />

            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.22em]
                text-orange-200/70
                whitespace-nowrap
              "
            >

              HORÁRIO OFICIAL

            </p>

          </div>

          {/* LOCATION */}

          <p
            className="
              text-white/38
              text-[11px]
              whitespace-nowrap
            "
          >

            São Paulo • UTC -3

          </p>

        </div>

        {/* TIME */}

        <div className="shrink-0">

          <h2
            className="
              tabular-nums
              text-[2.25rem]
              font-semibold
              tracking-[-0.08em]
              leading-none
              text-white
              whitespace-nowrap
            "
          >

            {time}

          </h2>

        </div>

      </div>

    </Card>

  );

}
import Card from '../ui/Card';

interface ClockCardProps {
  time: string;
}

export default function ClockCard({
  time,
}: ClockCardProps) {

  return (

    <Card className="px-5 py-4">

      <div className="flex items-center justify-between gap-4">

        <div>

          <p className="text-[10px] uppercase tracking-[0.28em] text-orange-400/80">

            Horário Oficial

          </p>

          <p className="mt-1 text-xs text-zinc-500">

            São Paulo • UTC -3

          </p>

        </div>

        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white leading-none">

          {time}

        </h2>

      </div>

    </Card>
  );
}
import Card from '../ui/Card';

interface ClockCardProps {
  time: string;
}

export default function ClockCard({
  time,
}: ClockCardProps) {

  return (

    <Card className="p-8">

      <div className="flex flex-col items-center justify-center text-center">

        <p className="text-sm uppercase tracking-[0.35em] text-orange-400">

          Horário Oficial

        </p>

        <h2 className="mt-5 text-6xl font-black tracking-tight text-white">

          {time}

        </h2>

        <p className="mt-4 text-sm text-zinc-500">

          São Paulo • UTC -3

        </p>

      </div>

    </Card>
  );
}
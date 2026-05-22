type AnalyticsProps = {
  dollars: string;
};

export default function Analytics({ dollars }: AnalyticsProps) {
  return (
    <div className="glow-card rounded-[2rem] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-8">
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="text-zinc-500 uppercase tracking-[0.2em] text-sm">
            Analytics
          </p>

          <h2 className="text-4xl font-black mt-3">Performance</h2>
        </div>

        <div className="text-right">
          <p className="text-zinc-500 text-sm">Conversão</p>

          <h3 className="text-3xl font-black">{dollars || '—'}</h3>
        </div>
      </div>

      <div className="h-[320px] w-full flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
        <div className="text-center">
          <p className="text-zinc-500 uppercase tracking-[0.2em] text-sm mb-4">
            Analytics
          </p>

          <h2 className="text-5xl font-black">{dollars || '—'}</h2>

          <p className="text-zinc-500 mt-3">Conversão estimada</p>
        </div>
      </div>
    </div>
  );
}

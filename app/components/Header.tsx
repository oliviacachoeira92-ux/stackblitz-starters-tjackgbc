export default function Header() {
  return (
    <div className="mb-14">

      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl mb-6">

        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />

        <p className="text-[11px] uppercase tracking-[0.28em] text-white/50">
          Alii Live Conversion System
        </p>

      </div>

      <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.06em] leading-none text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.08)]">

        Fenix Arcane

      </h1>

      <div className="mt-5 flex items-center gap-3">

        <div className="h-[1px] w-12 bg-white/10" />

        <p className="text-zinc-500 tracking-[0.32em] uppercase text-xs">

          by Olivia Cachoeira

        </p>

      </div>

      <p className="text-zinc-400 mt-8 text-lg md:text-xl max-w-[720px] leading-relaxed">

        Ferramenta premium de conversão para streamers Alii Live.
        Calcule valores, pontos, diamantes e saques de forma rápida e precisa.

      </p>

    </div>
  );
}
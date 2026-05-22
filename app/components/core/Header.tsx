import FenixRadio from './FenixRadio';

export default function Header() {

  return (

    <div className="mb-10 overflow-hidden">

      {/* TOP TAG */}

      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl mb-5">

        <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />

        <p className="text-[10px] uppercase tracking-[0.24em] text-white/45">

          Alii Live Conversion System

        </p>

      </div>

      {/* TITLE */}

      <div className="flex items-center gap-4 flex-wrap max-w-full">

        <h1 className="text-5xl md:text-6xl xl:text-[5.5rem] font-black tracking-[-0.05em] leading-[0.92] text-white drop-shadow-[0_0_24px_rgba(255,255,255,0.05)] break-words">

          Fenix Arcane

        </h1>

        {/* RADIO */}

        <div className="translate-y-0.5 scale-90 origin-left shrink-0">

          <FenixRadio />

        </div>

      </div>

      {/* SUB */}

      <div className="mt-3 flex items-center gap-3">

        <div className="h-[1px] w-10 bg-white/10" />

        <p className="text-zinc-500 tracking-[0.28em] uppercase text-[10px]">

          by Olivia Cachoeira

        </p>

      </div>

      {/* DESCRIPTION */}

      <p className="text-zinc-400 mt-5 text-base md:text-lg max-w-[680px] leading-relaxed">

        Ferramenta premium de conversão para streamers Alii Live.
        Calcule valores, pontos, diamantes e saques de forma rápida e precisa.

      </p>

    </div>
  );
}
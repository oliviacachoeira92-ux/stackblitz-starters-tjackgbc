interface MetricCardProps {

    title: string;
  
    value: string;
  
    color?:
      | 'default'
      | 'cyan'
      | 'emerald'
      | 'amber';
  
    large?: boolean;
  
    status?: boolean;
  }
  
  export default function MetricCard({
  
    title,
  
    value,
  
    color = 'default',
  
    large = false,
  
    status = false,
  
  }: MetricCardProps) {
  
    const variants = {
  
      default: {
        border:
          'border-white/10',
  
        background:
          'bg-white/[0.03]',
  
        hover:
          'hover:border-white/20',
  
        label:
          'text-white/40',
  
        text:
          'text-white',
      },
  
      cyan: {
        border:
          'border-cyan-300/15',
  
        background:
          'bg-cyan-300/[0.04]',
  
        hover:
          'hover:border-cyan-200/20',
  
        label:
          'text-cyan-100/50',
  
        text:
          'text-cyan-50',
      },
  
      emerald: {
        border:
          'border-emerald-400/20',
  
        background:
          'bg-emerald-400/[0.05]',
  
        hover:
          'hover:border-emerald-300/30',
  
        label:
          'text-emerald-200/70',
  
        text:
          'text-emerald-50',
      },
  
      amber: {
        border:
          'border-amber-300/15',
  
        background:
          'bg-amber-300/[0.03]',
  
        hover:
          'hover:border-amber-200/20',
  
        label:
          'text-amber-100/40',
  
        text:
          'text-amber-100',
      },
  
    };
  
    const style =
      variants[color];
  
    return (
  
      <div
        className={`
          rounded-3xl
          border
          min-h-[110px]
          md:min-h-[180px]
          p-4
          md:p-5
          flex
          flex-col
          items-center
          justify-center
          text-center
          transition-all
          duration-500
          ${style.border}
          ${style.background}
          ${style.hover}
          ${
            large
              ? 'md:col-span-2 xl:col-span-4'
              : ''
          }
        `}
      >
  
        <p
          className={`
            text-[10px]
            md:text-xs
            uppercase
            tracking-[0.18em]
            mb-4
            ${style.label}
          `}
        >
  
          {title}
  
        </p>
  
        <h3
          className={`
            w-full
            font-black
            tracking-tight
            leading-none
            break-words
            ${
              large
                ? 'text-[clamp(1.1rem,5vw,2.8rem)]'
                : 'text-[clamp(0.9rem,3vw,1.7rem)]'
            }
            ${
              status
                ? 'text-[clamp(0.9rem,3vw,1.6rem)]'
                : ''
            }
            ${style.text}
          `}
        >
  
          {value}
  
        </h3>
  
      </div>
    );
  }
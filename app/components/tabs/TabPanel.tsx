interface TabPanelProps {
  children: React.ReactNode;
}

export default function TabPanel({
  children,
}: TabPanelProps) {

  return (

    <div
      className="
        relative
        animate-[tabFade_.32s_cubic-bezier(0.22,1,0.36,1)]
        will-change-transform
      "
    >

      {/* TOP AMBIENT */}

      <div
        className="
          pointer-events-none
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[280px]
          h-[80px]
          bg-orange-500/[0.025]
          blur-[55px]
          opacity-60
        "
      />

      {/* CONTENT */}

      <div className="relative z-10">

        {children}

      </div>

    </div>

  );

}
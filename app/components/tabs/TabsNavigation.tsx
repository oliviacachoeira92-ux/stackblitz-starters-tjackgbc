interface TabsNavigationProps {

  tabs: {
    id: string;
    label: string;
  }[];

  activeTab: string;

  setActiveTab: (
    id: string
  ) => void;

}

export default function TabsNavigation({
  tabs,
  activeTab,
  setActiveTab,
}: TabsNavigationProps) {

  return (

    <div className="relative">

      {/* =========================================
          AMBIENT
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >

        <div
          className="
            absolute
            top-[-60px]
            left-1/2
            -translate-x-1/2
            w-[320px]
            h-[120px]
            rounded-full
            bg-orange-500/[0.06]
            blur-[70px]
          "
        />

      </div>

      {/* =========================================
          CONTAINER
      ========================================= */}

      <div
        className="
          relative
          z-10
          overflow-x-auto
          no-scrollbar
          rounded-[1.8rem]
          border
          border-white/[0.05]
          bg-[rgba(14,14,18,0.72)]
          backdrop-blur-xl
          shadow-[0_14px_50px_rgba(0,0,0,0.28)]
          p-2
        "
      >

        {/* INNER LIGHT */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-[1.8rem]
            overflow-hidden
          "
        >

          <div
            className="
              absolute
              top-0
              left-1/2
              -translate-x-1/2
              w-[60%]
              h-[1px]
              bg-gradient-to-r
              from-transparent
              via-orange-200/40
              to-transparent
            "
          />

        </div>

        {/* TABS */}

        <div
          className="
            relative
            z-10
            flex
            items-center
            gap-2
            min-w-max
          "
        >

          {tabs.map((tab) => {

            const active =
              activeTab === tab.id;

            return (

              <button
                key={tab.id}
                onClick={() =>
                  setActiveTab(tab.id)
                }
                className={`
                  group
                  relative
                  overflow-hidden
                  px-5
                  md:px-6
                  py-3.5
                  rounded-[1.3rem]
                  border
                  transition-all
                  duration-500
                  whitespace-nowrap
                  backdrop-blur-xl

                  ${
                    active
                      ? `
                        border-orange-400/[0.10]
                        bg-[linear-gradient(to_bottom,rgba(255,140,60,0.12),rgba(255,140,60,0.04))]
                        shadow-[0_10px_40px_rgba(255,120,40,0.10)]
                      `
                      : `
                        border-transparent
                        bg-transparent
                        hover:border-white/[0.04]
                        hover:bg-white/[0.03]
                      `
                  }
                `}
              >

                {/* ACTIVE ATMOSPHERE */}

                {active && (

                  <>

                    {/* TOP LIGHT */}

                    <div
                      className="
                        absolute
                        top-0
                        left-1/2
                        -translate-x-1/2
                        w-[60%]
                        h-[1px]
                        bg-gradient-to-r
                        from-transparent
                        via-orange-200/70
                        to-transparent
                      "
                    />

                    {/* GLOW */}

                    <div
                      className="
                        absolute
                        inset-0
                        pointer-events-none
                      "
                    >

                      <div
                        className="
                          absolute
                          top-[-20px]
                          left-1/2
                          -translate-x-1/2
                          w-24
                          h-16
                          rounded-full
                          bg-orange-500/[0.12]
                          blur-[40px]
                        "
                      />

                    </div>

                  </>

                )}

                {/* HOVER SHINE */}

                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-500
                    pointer-events-none
                    group-hover:opacity-100
                  "
                >

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-r
                      from-transparent
                      via-white/[0.03]
                      to-transparent
                    "
                  />

                </div>

                {/* CONTENT */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    gap-3
                  "
                >

                  {/* DOT */}

                  <div
                    className={`
                      h-1.5
                      w-1.5
                      rounded-full
                      transition-all
                      duration-500

                      ${
                        active
                          ? 'bg-orange-300 shadow-[0_0_14px_rgba(255,180,120,0.8)]'
                          : 'bg-white/18 group-hover:bg-white/35'
                      }
                    `}
                  />

                  {/* LABEL */}

                  <span
                    className={`
                      text-[13px]
                      font-medium
                      tracking-[0.01em]
                      transition-colors
                      duration-500

                      ${
                        active
                          ? 'text-white'
                          : 'text-white/42 group-hover:text-white/78'
                      }
                    `}
                  >

                    {tab.label}

                  </span>

                </div>

              </button>

            );

          })}

        </div>

      </div>

    </div>

  );

}
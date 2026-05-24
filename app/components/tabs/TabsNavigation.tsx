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

    <div
      className="
        relative
        flex
        gap-2
        overflow-x-auto
        pb-1
        no-scrollbar
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
              py-3
              rounded-[1.2rem]
              text-sm
              font-medium
              whitespace-nowrap
              border
              transition-all
              duration-300

              ${
                active
                  ? `
                    border-orange-400/[0.10]
                    bg-gradient-to-b
                    from-orange-500/[0.10]
                    to-orange-500/[0.03]
                    text-white
                    shadow-[0_0_30px_rgba(255,140,60,0.08)]
                  `
                  : `
                    border-white/[0.04]
                    bg-white/[0.02]
                    text-white/42
                    hover:text-white/75
                    hover:bg-white/[0.04]
                  `
              }
            `}
          >

            {/* ACTIVE GLOW */}

            {active && (

              <>

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
                      w-14
                      h-14
                      rounded-full
                      bg-orange-400/[0.12]
                      blur-[28px]
                    "
                  />

                </div>

                {/* TOP LIGHT */}

                <div
                  className="
                    absolute
                    top-0
                    left-0
                    w-full
                    h-[1px]
                    bg-gradient-to-r
                    from-transparent
                    via-orange-200/45
                    to-transparent
                  "
                />

              </>

            )}

            {/* HOVER LIGHT */}

            <div
              className="
                absolute
                inset-0
                opacity-0
                transition-opacity
                duration-300
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

            {/* LABEL */}

            <span className="relative z-10">

              {tab.label}

            </span>

          </button>

        );

      })}

    </div>

  );

}
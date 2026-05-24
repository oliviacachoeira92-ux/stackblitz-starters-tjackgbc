'use client';

import Image from 'next/image';

import {
  BarChart3,
  Flame,
  LayoutDashboard,
  Settings,
  Shield,
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (
    value: string
  ) => void;
}

const navigation = [

  {
    id: 'converter',
    label: 'Conversor',
    icon: Flame,
  },

  {
    id: 'operacional',
    label: 'Operacional',
    icon: BarChart3,
  },

  {
    id: 'sistema',
    label: 'Sistema',
    icon: Settings,
  },

];

export default function Sidebar({
  activeTab,
  setActiveTab,
}: SidebarProps) {

  return (

    <aside
      className="
        hidden
        xl:flex
        relative
        w-[290px]
        shrink-0
      "
    >

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <div
        className="
          sticky
          top-4

          w-full

          min-h-[calc(100vh-24px)]

          overflow-hidden

          rounded-[2.2rem]

          border
          border-white/[0.05]

          bg-[linear-gradient(to_bottom,rgba(18,18,24,0.96),rgba(10,10,14,0.92))]

          backdrop-blur-xl

          shadow-[0_24px_120px_rgba(0,0,0,0.46)]
        "
      >

        {/* =====================================================
            ATMOSPHERE
        ===================================================== */}

        <div
          className="
            absolute
            inset-0
            overflow-hidden
            pointer-events-none
          "
        >

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
              via-orange-200/50
              to-transparent
            "
          />

          {/* THERMAL GLOW */}

          <div
            className="
              absolute
              top-[-100px]
              left-1/2
              -translate-x-1/2

              w-[240px]
              h-[240px]

              rounded-full

              bg-orange-500/[0.14]

              blur-[100px]
            "
          />

          {/* LOWER DEPTH */}

          <div
            className="
              absolute
              bottom-[-120px]
              left-[-40px]

              w-[200px]
              h-[200px]

              rounded-full

              bg-violet-500/[0.08]

              blur-[90px]
            "
          />

          {/* SIDE FIRE */}

          <div
            className="
              absolute
              top-[30%]
              right-[-60px]

              w-[140px]
              h-[140px]

              rounded-full

              bg-orange-500/[0.08]

              blur-[70px]
            "
          />

        </div>

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div
          className="
            relative
            z-10

            flex
            min-h-[calc(100vh-24px)]
            flex-col

            p-5
            pb-8
          "
        >

          {/* =====================================================
              BRAND
          ===================================================== */}

          <div>

            <div
              className="
                relative
                overflow-hidden

                rounded-[1.9rem]

                border
                border-orange-400/[0.08]

                bg-[linear-gradient(to_bottom,rgba(255,140,60,0.08),rgba(255,140,60,0.03))]

                p-5
              "
            >

              {/* GLOW */}

              <div
                className="
                  absolute
                  top-[-60px]
                  right-[-20px]

                  w-32
                  h-32

                  rounded-full

                  bg-orange-500/[0.12]

                  blur-[80px]
                "
              />

              {/* INNER LIGHT */}

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
                  via-orange-200/60
                  to-transparent
                "
              />

              {/* CONTENT */}

              <div className="relative z-10">

                {/* SYMBOL */}

                <div
                  className="
                    relative
                    flex
                    items-center
                    justify-center
                    w-full
                  "
                >

                  <div
                    className="
                      absolute
                      w-28
                      h-28

                      rounded-full

                      bg-orange-500/[0.12]

                      blur-[60px]
                    "
                  />

                  <Image
                    src="/branding/fenix-symbol.png"
                    alt="Fenix Arcane"
                    width={120}
                    height={120}
                    priority
                    className="
                      relative
                      z-10
                      object-contain
                      drop-shadow-[0_0_24px_rgba(255,120,40,0.35)]
                    "
                  />

                </div>

                {/* TITLE */}

                <div className="mt-4 text-center">

                  <h2
                    className="
                      thermal-text
                      text-[1.35rem]
                      font-black
                      tracking-[-0.06em]
                    "
                  >

                    Fenix Arcane

                  </h2>

                  <p
                    className="
                      mt-2
                      text-[10px]
                      uppercase
                      tracking-[0.24em]
                      text-white/34
                    "
                  >

                    Arcane Operational System

                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* =====================================================
              NAVIGATION
          ===================================================== */}

          <div className="mt-8 flex-1">

            {/* LABEL */}

            <div
              className="
                flex
                items-center
                gap-2

                px-2
                mb-4
              "
            >

              <LayoutDashboard
                size={12}
                className="
                  text-orange-300/60
                "
              />

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.24em]
                  text-white/30
                "
              >

                Navigation

              </p>

            </div>

            {/* ITEMS */}

            <div className="flex flex-col gap-2">

              {navigation.map((item) => {

                const active =
                  activeTab === item.id;

                const Icon =
                  item.icon;

                return (

                  <button
                    key={item.id}
                    onClick={() =>
                      setActiveTab(item.id)
                    }
                    className={`
                      group
                      relative
                      overflow-hidden

                      rounded-[1.4rem]

                      border

                      transition-all
                      duration-500

                      text-left

                      ${
                        active
                          ? `
                            border-orange-400/[0.10]
                            bg-[linear-gradient(to_right,rgba(255,140,60,0.12),rgba(255,140,60,0.03))]
                            shadow-[0_10px_40px_rgba(255,120,40,0.08)]
                          `
                          : `
                            border-transparent
                            hover:border-white/[0.04]
                            hover:bg-white/[0.03]
                          `
                      }
                    `}
                  >

                    {/* ACTIVE LINE */}

                    {active && (

                      <div
                        className="
                          absolute
                          inset-y-0
                          left-0
                          w-[2px]
                          bg-orange-300
                        "
                      />

                    )}

                    {/* CONTENT */}

                    <div
                      className="
                        relative
                        z-10

                        flex
                        items-center
                        gap-4

                        px-4
                        py-4
                      "
                    >

                      {/* ICON */}

                      <div
                        className={`
                          flex
                          items-center
                          justify-center

                          w-11
                          h-11

                          rounded-[1rem]

                          border

                          transition-all
                          duration-500

                          ${
                            active
                              ? `
                                border-orange-400/[0.10]
                                bg-orange-500/[0.08]
                                text-orange-200
                              `
                              : `
                                border-white/[0.04]
                                bg-white/[0.02]
                                text-white/42
                                group-hover:text-white/72
                              `
                          }
                        `}
                      >

                        <Icon size={18} />

                      </div>

                      {/* TEXT */}

                      <div>

                        <h3
                          className={`
                            text-[14px]
                            font-medium
                            transition-colors
                            duration-500

                            ${
                              active
                                ? 'text-white'
                                : 'text-white/55 group-hover:text-white/80'
                            }
                          `}
                        >

                          {item.label}

                        </h3>

                        <p
                          className="
                            mt-1
                            text-[11px]
                            text-white/28
                          "
                        >

                          Sistema operacional

                        </p>

                      </div>

                    </div>

                  </button>

                );

              })}

            </div>

          </div>

          {/* =====================================================
              FOOTER
          ===================================================== */}

          <div className="pt-5">

            <div
              className="
                overflow-hidden

                rounded-[1.6rem]

                border
                border-white/[0.05]

                bg-white/[0.02]

                backdrop-blur-md

                p-4
              "
            >

              <div
                className="
                  flex
                  items-start
                  gap-3
                "
              >

                <div
                  className="
                    flex
                    items-center
                    justify-center

                    w-11
                    h-11

                    rounded-[1rem]

                    border
                    border-orange-400/[0.10]

                    bg-orange-500/[0.08]
                  "
                >

                  <Shield
                    size={18}
                    className="
                      text-orange-200
                    "
                  />

                </div>

                <div>

                  <h3
                    className="
                      text-[13px]
                      font-medium
                      text-white
                    "
                  >

                    Sistema protegido

                  </h3>

                  <p
                    className="
                      mt-1
                      text-[11px]
                      leading-relaxed
                      text-white/36
                    "
                  >

                    Estrutura operacional premium
                    Fenix Arcane.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </aside>

  );

}
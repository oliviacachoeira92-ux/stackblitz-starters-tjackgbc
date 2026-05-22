'use client';

import Card from '../ui/Card';

type Props = {

  normalizeTime: (
    value: string
  ) => string;

  formatTime: (
    total: number
  ) => string;

  totalSeconds: number;

  dailyTotalSeconds: number;

  remainingSeconds: number;

  progress: number;

  weeklyStatus: string;

  weeklyStatusColor: string;

  session1: string;
  session2: string;
  session3: string;
  session4: string;

  day1: string;
  day2: string;
  day3: string;
  day4: string;
  day5: string;
  day6: string;

  setSession1: (
    value: string
  ) => void;

  setSession2: (
    value: string
  ) => void;

  setSession3: (
    value: string
  ) => void;

  setSession4: (
    value: string
  ) => void;

  setDay1: (
    value: string
  ) => void;

  setDay2: (
    value: string
  ) => void;

  setDay3: (
    value: string
  ) => void;

  setDay4: (
    value: string
  ) => void;

  setDay5: (
    value: string
  ) => void;

  setDay6: (
    value: string
  ) => void;
};

export default function LiveTracker({

  normalizeTime,
  formatTime,

  totalSeconds,
  dailyTotalSeconds,
  remainingSeconds,
  progress,

  weeklyStatus,
  weeklyStatusColor,

  session1,
  session2,
  session3,
  session4,

  day1,
  day2,
  day3,
  day4,
  day5,
  day6,

  setSession1,
  setSession2,
  setSession3,
  setSession4,

  setDay1,
  setDay2,
  setDay3,
  setDay4,
  setDay5,
  setDay6,

}: Props) {

  const inputStyle =
    `
      rounded-xl
      border
      border-zinc-800
      bg-black/40
      px-3
      py-2.5
      text-sm
      text-white
      outline-none
      transition-all
      duration-300
      focus:border-orange-500/40
    `;

  return (

    <>

      {/* CALCULADORA DIÁRIA */}

      <Card className="p-4 border-orange-500/20 bg-black/40">

        <p className="text-[10px] uppercase tracking-[0.22em] text-orange-400">

          Calculadora Diária

        </p>

        <div className="mt-3 grid grid-cols-2 gap-2">

          <input
            type="tel"
            inputMode="numeric"
            value={session1}
            placeholder="LIVE 1"
            className={inputStyle}
            onChange={(e) =>
              setSession1(
                normalizeTime(
                  e.target.value
                )
              )
            }
          />

          <input
            type="tel"
            inputMode="numeric"
            value={session2}
            placeholder="LIVE 2"
            className={inputStyle}
            onChange={(e) =>
              setSession2(
                normalizeTime(
                  e.target.value
                )
              )
            }
          />

          <input
            type="tel"
            inputMode="numeric"
            value={session3}
            placeholder="LIVE 3"
            className={inputStyle}
            onChange={(e) =>
              setSession3(
                normalizeTime(
                  e.target.value
                )
              )
            }
          />

          <input
            type="tel"
            inputMode="numeric"
            value={session4}
            placeholder="LIVE 4"
            className={inputStyle}
            onChange={(e) =>
              setSession4(
                normalizeTime(
                  e.target.value
                )
              )
            }
          />

        </div>

        <h2 className="mt-4 text-2xl md:text-3xl font-black text-white leading-none">

          {formatTime(dailyTotalSeconds)}

        </h2>

      </Card>

      {/* META SEMANAL */}

      <Card className="p-4 border-emerald-500/20 bg-black/40">

        <p className="text-[10px] uppercase tracking-[0.22em] text-emerald-400">

          Meta Semanal

        </p>

        <div className="mt-3 grid grid-cols-2 gap-2">

          <input
            type="tel"
            inputMode="numeric"
            value={day1}
            placeholder="SEG"
            className={inputStyle}
            onChange={(e) =>
              setDay1(
                normalizeTime(
                  e.target.value
                )
              )
            }
          />

          <input
            type="tel"
            inputMode="numeric"
            value={day2}
            placeholder="TER"
            className={inputStyle}
            onChange={(e) =>
              setDay2(
                normalizeTime(
                  e.target.value
                )
              )
            }
          />

          <input
            type="tel"
            inputMode="numeric"
            value={day3}
            placeholder="QUA"
            className={inputStyle}
            onChange={(e) =>
              setDay3(
                normalizeTime(
                  e.target.value
                )
              )
            }
          />

          <input
            type="tel"
            inputMode="numeric"
            value={day4}
            placeholder="QUI"
            className={inputStyle}
            onChange={(e) =>
              setDay4(
                normalizeTime(
                  e.target.value
                )
              )
            }
          />

          <input
            type="tel"
            inputMode="numeric"
            value={day5}
            placeholder="SEX"
            className={inputStyle}
            onChange={(e) =>
              setDay5(
                normalizeTime(
                  e.target.value
                )
              )
            }
          />

          <input
            type="tel"
            inputMode="numeric"
            value={day6}
            placeholder="SAB"
            className={inputStyle}
            onChange={(e) =>
              setDay6(
                normalizeTime(
                  e.target.value
                )
              )
            }
          />

        </div>

        <h2 className="mt-4 text-2xl md:text-3xl font-black text-white leading-none">

          {formatTime(totalSeconds)}

        </h2>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-900">

          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-orange-400 transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        <div className="mt-4 flex flex-col gap-1">

          <p className="text-xs text-zinc-400">

            Faltam{' '}

            <span className="font-semibold text-white">

              {formatTime(remainingSeconds)}

            </span>

            {' '}para concluir a meta.

          </p>

          <p className={`text-xs font-medium ${weeklyStatusColor}`}>

            {weeklyStatus}

          </p>

        </div>

      </Card>

    </>

  );
}
import { useEffect, useMemo, useState } from "react";
import SectionDivider from "../components/SectionDivider";

const sketchPrompts = [
  {
    title: "Рука художника",
    image: "/images/process/sketch-hand.png",
  },
  {
    title: "Силует людини",
    image: "/images/process/sketch-person.png",
  },
  {
    title: "Квітка",
    image: "/images/process/sketch-flower.png",
  },
  {
    title: "Старе дерево",
    image: "/images/process/sketch-tree.png",
  },
  {
    title: "Чашка на столі",
    image: "/images/process/sketch-cup.png",
  },
];

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const restSeconds = seconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(restSeconds).padStart(
    2,
    "0",
  )}`;
};

const randomPrompt = () =>
  sketchPrompts[Math.floor(Math.random() * sketchPrompts.length)];

export default function ProcessPage() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isRunning, setIsRunning] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState(() => randomPrompt());
  const [isImageVisible, setIsImageVisible] = useState(true);

  const selectedTime = useMemo(() => {
    const total = minutes * 60 + seconds;
    return total > 0 ? total : 10;
  }, [minutes, seconds]);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) {
      return;
    }

    const timer = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          setIsImageVisible(false);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    if (timeLeft <= 0) {
      setTimeLeft(selectedTime);
      setIsImageVisible(true);
    }

    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(selectedTime);
    setIsImageVisible(true);
  };

  const handleSetTime = () => {
    setIsRunning(false);
    setTimeLeft(selectedTime);
    setIsImageVisible(true);
  };

  const handleGeneratePrompt = () => {
    setCurrentPrompt(randomPrompt());
    setTimeLeft(selectedTime);
    setIsRunning(false);
    setIsImageVisible(true);
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      <SectionDivider />

      <section className="mt-14">
        <div className="flex items-start gap-5">
          <div className="rounded-xl bg-[var(--color-primary)] px-4 py-3 text-xl font-bold text-[var(--color-background-soft)]">
            01
          </div>

          <div className="max-w-4xl">
            <h1
              className="text-4xl font-bold text-[var(--color-text-primary)] md:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Скетч
            </h1>

            <p className="mt-4 text-lg leading-8 text-[var(--color-text-secondary)] md:text-xl">
              Скетч — це перший і найважливіший етап. Це не має бути ідеально —
              це має передати ідею. Існують різні типи скетчів: швидкий скетч
              для передачі руху, лінійний скетч для чистої форми, тональний
              скетч для роботи зі світлом і тінню.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-primary)]/70 p-7 shadow-[var(--shadow-md)]">
          <h2
            className="text-2xl font-bold text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Поради:
          </h2>

          <ul className="mt-4 space-y-2 text-white">
            <li>Почніть з великих форм, потім додавайте деталі.</li>
            <li>Не бійтеся “брудних” ліній — це нормально для скетчу.</li>
            <li>Практикуйте gesture drawing щодня по 15–20 хвилин.</li>
            <li>Використовуйте референси — це інструмент, а не шахрайство.</li>
            <li>Малюйте з плеча, а не з зап’ястка — лінії будуть впевненішими.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-primary)]/55 p-6 shadow-[var(--shadow-lg)] md:p-8">
        <h2
          className="text-center text-3xl font-bold text-[var(--color-text-primary)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Тренажер скетчів
        </h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-[240px_1fr]">
          <div className="space-y-6">
            <div className="rounded-xl bg-[var(--color-background-soft)] px-6 py-5 text-center text-2xl font-bold text-[var(--color-text-primary)] shadow-[var(--shadow-sm)]">
              {formatTime(timeLeft)}
            </div>

            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={handleStart}
                className="rounded-lg bg-[var(--color-background-soft)] px-3 py-3 text-sm font-semibold text-[var(--color-text-primary)] transition hover:bg-[var(--color-surface)]"
              >
                Старт
              </button>

              <button
                type="button"
                onClick={handlePause}
                className="rounded-lg bg-[var(--color-background-soft)] px-3 py-3 text-sm font-semibold text-[var(--color-text-primary)] transition hover:bg-[var(--color-surface)]"
              >
                Пауза
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="rounded-lg bg-[var(--color-background-soft)] px-3 py-3 text-sm font-semibold text-[var(--color-text-primary)] transition hover:bg-[var(--color-surface)]"
              >
                Скинути
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <label className="rounded-xl bg-[var(--color-background-soft)] p-4 text-center shadow-[var(--shadow-sm)]">
                <input
                  type="number"
                  min="0"
                  value={minutes}
                  onChange={(event) => setMinutes(Number(event.target.value))}
                  className="w-full bg-transparent text-center text-2xl font-bold text-[var(--color-text-primary)] outline-none"
                />
                <span className="text-sm text-[var(--color-text-muted)]">
                  Хвилини
                </span>
              </label>

              <label className="rounded-xl bg-[var(--color-background-soft)] p-4 text-center shadow-[var(--shadow-sm)]">
                <input
                  type="number"
                  min="0"
                  max="59"
                  value={seconds}
                  onChange={(event) => setSeconds(Number(event.target.value))}
                  className="w-full bg-transparent text-center text-2xl font-bold text-[var(--color-text-primary)] outline-none"
                />
                <span className="text-sm text-[var(--color-text-muted)]">
                  Секунди
                </span>
              </label>
            </div>

            <button
              type="button"
              onClick={handleSetTime}
              className="w-full rounded-xl bg-[var(--color-background-soft)] px-5 py-3 font-semibold text-[var(--color-text-primary)] transition hover:bg-[var(--color-surface)]"
            >
              Встановити час
            </button>
          </div>

          <div>
            <div className="flex min-h-[360px] items-center justify-center overflow-hidden rounded-2xl border-4 border-[var(--color-accent)] bg-[var(--color-background-soft)] shadow-[var(--shadow-md)]">
              {isImageVisible ? (
                <img
                  src={currentPrompt.image}
                  alt={currentPrompt.title}
                  className="h-full max-h-[360px] w-full object-contain p-6"
                />
              ) : (
                <p
                  className="px-6 text-center text-3xl font-bold text-[var(--color-text-muted)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Час вийшов
                </p>
              )}
            </div>

            <div className="mt-5 flex justify-center">
              <button
                type="button"
                onClick={handleGeneratePrompt}
                className="rounded-xl bg-[var(--color-background-soft)] px-10 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-text-primary)] shadow-[var(--shadow-sm)] transition hover:bg-[var(--color-surface)]"
              >
                Генерувати ціль
              </button>
            </div>

            {isImageVisible && (
              <p className="mt-4 text-center text-lg font-semibold text-[var(--color-text-primary)]">
                {currentPrompt.title}
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
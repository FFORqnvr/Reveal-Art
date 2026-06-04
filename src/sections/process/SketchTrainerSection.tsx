import { useEffect, useMemo, useState } from "react";
import { formatTime } from "../../utils/formatTime";
import { getRandomSketchPrompt } from "../../data/sketchPrompts";

export default function SketchTrainerSection() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isRunning, setIsRunning] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState(() =>
    getRandomSketchPrompt(),
  );
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
    setCurrentPrompt(getRandomSketchPrompt());
    setTimeLeft(selectedTime);
    setIsRunning(false);
    setIsImageVisible(true);
  };

  return (
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
  );
}
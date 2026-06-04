export default function SketchIntroSection() {
  return (
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
            для передачі руху, лінійний скетч для чистої форми, тональний скетч
            для роботи зі світлом і тінню.
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
  );
}
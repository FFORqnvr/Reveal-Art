const habits = [
  {
    title: "Малюй щодня",
    text: "Навіть 10–15 хвилин щодня дають результат. Ведіть скетчбук і не пропускайте дні — звичка важливіша за натхнення.",
  },
  {
    title: "Ставте конкретні цілі",
    text: 'Замість "хочу малювати краще" — "намалюю 10 рук цього тижня". Конкретність дає напрямок.',
  },
  {
    title: "Копіюй майстрів",
    text: "Це не плагіат — це навчання. Аналізуйте роботи художників, яких поважаєте, і намагайтеся зрозуміти їх стиль.",
  },
  {
    title: "Беріть участь у челенджах",
    text: "#Inktober, #MerMay, #100DayProject — спільноти, де ви отримаєте мотивацію, зворотний зв’язок та нових підписників.",
  },
];

export default function ArtistHabitsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-8">
      <h2
        className="text-4xl font-bold text-[var(--color-text-idea-heading)]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Звички, що роблять художника
      </h2>

      <p
        className="mt-4 text-3xl text-[var(--color-text-idea-p)]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Невеликі дії, що мають великий вплив
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {habits.map((habit) => (
          <article
            key={habit.title}
            className="rounded-2xl border-2 border-[var(--color-text-primary)]/30    bg-[var(--color-habit-bg-card)]/15 p-8 shadow-sm"
          >
            <h3
              className="text-3xl font-bold text-[var(--color-text-idea-head-card)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {habit.title}
            </h3>

            <p className="mt-4 leading-8 text-[var(--color-text-idea-p-card)]">
              {habit.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
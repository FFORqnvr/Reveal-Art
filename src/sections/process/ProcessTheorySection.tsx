import { useState } from "react";

const palettes = [
  ["#5A3F37", "#7A5A50", "#C9A397", "#F3E8DF", "#D1C0B9"],
  ["#3B2F2F", "#6F4E37", "#A67B5B", "#D8BFA3", "#F2E4D2"],
  ["#2F3A2F", "#5C6B4E", "#9A8F6A", "#D6C6A8", "#F1E7D0"],
  ["#2D3142", "#4F5D75", "#BFC0C0", "#E6D5B8", "#A37C40"],
  ["#4A2C2A", "#7B3F3F", "#B85C5C", "#E0AFA0", "#F4E1D2"],
  ["#3E2F5B", "#6A4C93", "#9A8C98", "#C9ADA7", "#F2E9E4"],
  ["#283618", "#606C38", "#BC6C25", "#DDA15E", "#FEFAE0"],
  ["#1F2933", "#3E4C59", "#7B8794", "#CBD2D9", "#F5F7FA"],
  ["#4B3832", "#854442", "#BE9B7B", "#E6CCB2", "#FFF4E6"],
  ["#2B2D42", "#8D99AE", "#EDF2F4", "#EF233C", "#D90429"],
];

const processSections = [
  {
    number: "02",
    title: "Фон",
    text: "Фон — це не просто заливка позаду персонажа. Це атмосфера, простір, історія. Багато художників бояться малювати фони, але секрет у тому, щоб не ускладнювати. Починайте з простого: градієнти, абстрактні форми, розмиті фони. Потім переходьте до перспективи та деталізованих середовищ.",
    tips: [
      "Вивчіть базову перспективу: 1-точкову і 2-точкову.",
      "Використовуйте великі плями для фону, щоб не загубитися в деталях.",
      "Атмосферна перспектива: далекі об’єкти світліші та менш контрастні.",
      "Почніть з мініатюрних ескізів композиції.",
      "Фон має доповнювати головний об’єкт, а не відволікати від нього.",
    ],
  },
  {
    number: "03",
    title: "Кольори",
    text: "Робота з кольором — це мистецтво саме по собі. Розуміння теорії кольору допоможе створювати гармонійні та емоційні роботи. Колірне коло, комплементарні кольори, аналогові палітри — ці знання стануть вашим секретним інструментом.",
    tips: [
      "Обмежуйте палітру: 3–5 основних кольорів достатньо.",
      "Теплі кольори — ближче, холодні — далі у просторі.",
      "Використовуйте насичені кольори точково, а не скрізь.",
      "Спробуйте малювати в відтінках сірого, а потім додавати колір.",
      "Дивіться на реальний світ — природа ніколи не помиляється з кольорами.",
    ],
  },
  {
    number: "04",
    title: "Рендер",
    text: "Рендер — фінальний етап, де ваш скетч перетворюється на завершену роботу. Це робота з деталями, текстурами, освітленням та загальною поліровкою. Не поспішайте — якість рендеру визначає загальне враження від роботи.",
    tips: [
      "Починайте з великого і рухайтеся до малого.",
      "Зверніть увагу на освітлення — воно визначає об’єм і настрій.",
      "Використовуйте різні пензлі для різних текстур.",
      "Регулярно зменшуйте зображення, щоб бачити загальну картину.",
      "Знайте, коли зупинитися — перероблений рендер виглядає гірше.",
      "Додавайте ефекти обережно: блики, світіння, кольорокорекція мають підсилювати роботу, а не перекривати її.",
    ],
  },
];

function getRandomPalette() {
  return palettes[Math.floor(Math.random() * palettes.length)];
}

export default function ProcessTheorySection() {
  const [currentPalette, setCurrentPalette] = useState<string[]>(palettes[0]);

  const handleGeneratePalette = () => {
    let newPalette = getRandomPalette();

    while (newPalette === currentPalette) {
      newPalette = getRandomPalette();
    }

    setCurrentPalette(newPalette);
  };

  return (
    <section className="mt-24 space-y-20">
      {processSections.map((section) => (
        <div key={section.title} className="space-y-10">
          <article>
            <div className="flex items-start gap-5">
              <div className="rounded-xl bg-[var(--color-surface-muted)] px-4 py-3 text-xl font-bold text-[var(--color-text-primary)] shadow-[var(--shadow-sm)]">
                {section.number}
              </div>

              <div className="max-w-4xl">
                <h2
                  className="text-4xl font-bold text-[var(--color-text-idea-heading)] md:text-5xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {section.title}
                </h2>

                <p className="mt-4 text-lg font-semibold leading-8 text-[var(--color-text-idea-p)] md:text-xl">
                  {section.text}
                </p>
              </div>
            </div>

            <div className="ml-0 mt-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-primary)]/35 p-7 shadow-[var(--shadow-md)] md:ml-[92px]">
              <h3
                className="text-2xl font-bold text-[var(--color-text-idea-head-card)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Поради:
              </h3>

              <ul className="mt-4 space-y-2 text-[var(--color-text-idea-head-card)]">
                {section.tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>
          </article>

          {section.title === "Кольори" && (
            <article className="ml-0 rounded-2xl border border-[var(--color-border)] bg-[var(--color-primary)]/25 p-7 shadow-[var(--shadow-md)] md:ml-[92px]">
              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                    Генератор палітр
                  </p>

                  <h2
                    className="mt-2 text-3xl font-bold text-[var(--color-text-idea-heading)] md:text-4xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Створи випадкову кольорову палітру для своєї роботи
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={handleGeneratePalette}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-background-soft)] px-6 py-3 text-base font-semibold text-[var(--color-text-primary)] transition duration-200 hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-background-soft)]"
                >
                  Генерувати
                </button>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
                {currentPalette.map((color) => (
                  <div key={color} className="space-y-2">
                    <div
                      className="h-28 rounded-xl border border-[var(--color-border)] shadow-[var(--shadow-sm)]"
                      style={{ backgroundColor: color }}
                    />

                    <p className="text-center text-sm font-semibold text-[var(--color-text-idea-p)]">
                      {color}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          )}
        </div>
      ))}
    </section>
  );
}
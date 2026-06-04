import SectionDivider from "../../components/SectionDivider";

const tips = [
  {
    number: "01",
    title: "Зроби перерву",
    text: "Іноді найкраще, що можна зробити — це відійти. Пройдися, випий чаю, подивися на небо.",
  },
  {
    number: "02",
    title: "Зміни перспективу",
    text: "Подивись на роботи інших митців, відвідай музей чи галерею, подивись фільм з гарною візуальною складовою.",
  },
  {
    number: "03",
    title: "Скетчбук без очікувань",
    text: "Малюй щось без мети. Лінії, фігури, дудли — дай руці рухатись вільно без критики.",
  },
  {
    number: "04",
    title: "Спільнота допоможе",
    text: "Поговори з іншими художниками. Челенджі, колаби та зворотний зв’язок можуть розблокувати потік.",
  },
  {
    number: "05",
    title: "Будь добрим до себе",
    text: "Артблок — це нормально. Це не знак слабкості, а знак того, що ти розвиваєшся.",
  },
];

export default function ArtBlockSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      <SectionDivider />

      <div className="mt-14">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[var(--color-text-muted)]">
            Creative recovery
          </p>

          <h2
            className="text-4xl font-bold leading-tight text-[var(--color-text-primary)] md:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Артблок: що це і як подолати
          </h2>

          <p
            className="mt-5 text-2xl text-[var(--color-text-secondary)] md:text-3xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Коли натхнення зникає — це нормально
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="relative overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-primary)] p-8 shadow-[var(--shadow-lg)] md:p-10">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[var(--color-accent)]/25 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-[var(--color-background-soft)]/20 blur-3xl" />

            <div className="relative">
              <span
                className="text-6xl"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "rgba(255, 255, 255, 0.3)",
                }}
              >
                “
              </span>

              <p
                className="-mt-4 text-lg leading-8"
                style={{ color: "#cfb8aeff" }}
              >
                Артблок — це стан, коли художник не може створювати нове.
                Причини різні: вигорання, страх критики, перфекціонізм,
                порівняння себе з іншими або просто втома.
              </p>

              <p
                className="mt-5 text-lg leading-8"
                style={{ color: "#D1C0B9    " }}
              >
                Це не привід панікувати — з ним стикається кожен митець.
                Головне — не змушувати себе “через силу”. Натхнення
                повернеться, але йому потрібно трохи допомогти.
              </p>
            </div>
          </article>

          <div className="space-y-4">
            {tips.map((tip) => (
              <article
                key={tip.number}
                className="group grid overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-background-soft)] shadow-[var(--shadow-sm)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/50 hover:shadow-[var(--shadow-md)] sm:grid-cols-[104px_1fr]"
              >
                <div className="flex items-center justify-center border-b border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-5 transition duration-300 group-hover:bg-[var(--color-surface-muted)] sm:border-b-0 sm:border-r">
                  <span
                    className="text-4xl text-[var(--color-text-muted)]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {tip.number}
                  </span>
                </div>

                <div className="p-6">
                  <h3
                    className="text-2xl font-bold text-[var(--color-text-primary)]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {tip.title}
                  </h3>

                  <p className="mt-2 leading-7 text-[var(--color-text-secondary)]">
                    {tip.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
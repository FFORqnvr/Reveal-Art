
import {
  earningPlatforms,
  priceItems,
  promotionSteps,
  type EarningPlatform,
} from "../data/monetizationSections";
import SectionDivider from "../components/SectionDivider";

function PlatformCard({ item }: { item: EarningPlatform }) {
  return (
    <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background-soft)] p-6 shadow-[var(--shadow-sm)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">
      <h3
        className="text-2xl font-bold text-[var(--color-text-primary)]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {item.title}
      </h3>

      <p className="mt-3 min-h-[112px] text-lg leading-7 text-[var(--color-text-secondary)]">
        {item.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[var(--color-primary)]/55 px-4 py-2 text-sm text-[var(--color-background-soft)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function MonetizationPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-24 md:px-8">


      <section className="mt-14 text-center">
        <h1
          className="text-4xl font-bold text-[var(--color-text-idea-p)] md:text-6xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Заробіток на творчості
        </h1>

        <p
          className="mx-auto mt-5 font-bold mb-11 text-xl leading-relaxed text-[var(--color-text-idea-p)] md:text-3xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Ваше мистецтво має цінність. Дізнайтеся, де та як можна
          монетизувати свою творчість.
        </p>
      </section>

            <div className="relative left-1/2 w-[1500px] -translate-x-1/2 px-4 md:px-8">
              <SectionDivider />
            </div>

      <section className="mx-auto mt-14 max-w-5xl rounded-[28px] border border-[var(--color-border)] bg-[var(--color-gallery-warning-bg)]/30 p-7 shadow-[var(--shadow-md)] md:p-8">
        <h2
          className="text-3xl font-bold text-[var(--color-text-idea-p)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          «Мої скіли недостатньо високі»
        </h2>

        <div className="mt-5 space-y-4 text-lg leading-8 text-[var(--color-text-idea-p)]">
          <p>
            Це найпоширеніший страх серед художників. Але правда в тому, що
            завжди є хтось, кому потрібні саме ваші навички. Студент, який
            малює 6 місяців, може навчити того, хто малює 1 місяць. Початківець
            на Fiverr може знайти клієнтів, яким потрібні прості ілюстрації за
            доступною ціною.
          </p>

          <p>
            Не чекайте, поки станете “достатньо гарними”. Починайте зараз,
            ростіть разом зі своєю аудиторією, і з часом ви здивуєтеся, як
            далеко зайшли.
          </p>
        </div>

        <div className="mt-8 rounded-2xl bg-[var(--color-primary)]/35 px-6 py-4 text-[var(--color-text-secondary)]">
          Порівнюйте себе тільки з собою вчорашнім. Ваш прогрес — це ваша
          суперсила.
        </div>
      </section>

      <section className="mt-24">
        <h2
          className="text-3xl font-bold text-[var(--color-text-idea-p)] md:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Де заробляти
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {earningPlatforms.map((item) => (
            <PlatformCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="mt-24">
        <h2
          className="text-3xl font-bold text-[var(--color-text-idea-p)] md:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Скільки брати за роботу
        </h2>

        <div className="mt-8 rounded-[28px] border border-[var(--color-border)] bg-[var(--color-primary)]/50 p-6 shadow-[var(--shadow-md)] md:p-8">
          <p className="text-lg leading-8 text-[var(--color-background-soft)]">
            Орієнтовні ціни для початківців на міжнародних платформах в USD. З
            досвідом та портфоліо ціни зростають.
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {priceItems.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background-soft)] px-5 py-4 shadow-[var(--shadow-sm)]"
              >
                <span
                  className="text-xl text-[var(--color-text-primary)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </span>

                <span
                  className="text-xl font-bold text-[var(--color-text-secondary)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.price}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-2xl bg-[var(--color-primary)]/45 px-6 py-5 text-[var(--color-background-soft)]">
            Не занижуйте ціну нижче прожиткового мінімуму. Дешеві замовлення
            часто коштують більше нервів і часу, ніж дорогі. Цінуйте свою працю.
          </div>
        </div>
      </section>

      <section className="mt-14 ">
        <SectionDivider/>
        <h2
          className="text-3xl font-bold text-[var(--color-text-idea-p)] md:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Як просувати свою творчість
        </h2>

        <div className="mt-8 rounded-[28px] border border-[var(--color-border)] bg-[var(--color-background-soft)] p-6 shadow-[var(--shadow-md)] md:p-8">
          <ol className="space-y-4">
            {promotionSteps.map((step, index) => (
              <li key={step} className="flex items-start gap-4">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface)] text-2xl font-bold text-[var(--color-text-primary)] shadow-[var(--shadow-sm)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {index + 1}
                </span>

                <p className="pt-2 text-lg leading-7 text-[var(--color-text-secondary)]">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
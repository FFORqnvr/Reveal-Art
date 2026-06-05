const sources = [
  {
    title: "Природа",
    desc: "Прогулянки, парки, захід сонця — найстаріше джерело натхнення для митців усіх часів.",
  },
  {
    title: "Музика",
    desc: "Увімкни улюблену мелодію та уяви, як би вона виглядала у вигляді картини.",
  },
  {
    title: "Кіно та анімація",
    desc: "Фільми, аніме, мультфільми — все це кладезь композиції, кольорів та атмосфери.",
  },
  {
    title: "Книги та міфи",
    desc: "Легенди, казки, фентезі-романи — візуалізуй те, що читаєш.",
  },
  {
    title: "Фотографія",
    desc: "Використовуй референси з Pinterest, Unsplash, ArtStation для ідей композиції.",
  },
  {
    title: "Культури світу",
    desc: "Архітектура, одяг, орнаменти різних народів — нескінченне джерело візуальних ідей.",
  },
];

export default function InspirationSourcesSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-8">
      <h2
        className="text-4xl font-bold text-[var(--color-text-inspiration)]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Де шукати натхнення
      </h2>

      <p
        className="mt-4 text-3xl text-[var(--color-text-inspiration)]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Натхнення скрізь — потрібно лише навчитись його бачити
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {sources.map((source) => (
          <article
            key={source.title}
            className="rounded-2xl border-2 border-[var(--color-text-primary)]/70 bg-[var(--color-card-bg)]/45 p-7 shadow-sm"
          >
            <h3
              className="text-3xl font-bold text-[var(--color-text-head-insp-card)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {source.title}
            </h3>

            <p className="mt-4 leading-7 text-[var(--color-text-p-insp-card)]">
              {source.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
export default function ExploreSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="relative flex items-center justify-center">
          <div className="h-px flex-1 bg-[var(--color-text-primary)]/60" />

          <div className="mx-10 text-[var(--color-text-primary)]">
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 0L23 18L42 21L23 24L21 42L19 24L0 21L19 18L21 0Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="h-px flex-1 bg-[var(--color-text-primary)]/60" />
        </div>

        <div className="mx-auto mt-12 max-w-4xl text-center">
          <blockquote
            className="text-4xl leading-relaxed text-[var(--color-text-primary)] md:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Кожен майстер колись був початківцем. Кожен професіонал колись був
            аматором. Кожен великий шлях починається з першого кроку.
          </blockquote>

          <p
            className="mt-10 text-3xl text-[var(--color-accent)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            — Хелен Хейз
          </p>
        </div>
      </div>
    </section>
  );
}
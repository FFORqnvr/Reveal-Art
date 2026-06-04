import SectionDivider from "../../components/SectionDivider";

export default function ExploreSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
      <SectionDivider />
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
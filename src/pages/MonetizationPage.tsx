import PageTitle from "../components/PageTitle";
import { monetizationSections } from "../data/monetizationSections";

export default function MonetizationPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <PageTitle
        title="Monetization"
        subtitle="Ways artists can earn from their creative work"
      />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {monetizationSections.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border bg-[var(--color-surface)] p-5 transition hover:shadow-md"
          >
            <div className="text-lg font-semibold">
              {item.title}
            </div>

            <div className="mt-2 text-sm opacity-80">
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
import PageTitle from "../components/PageTitle";

export default function ProcessPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <PageTitle
        title="Artist Process"
        subtitle="How an artwork is created from idea to final piece."
      />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[
          "Idea & References",
          "Sketching",
          "Color Selection",
          "Main Artwork",
          "Detailing",
          "Final Presentation",
        ].map((step, index) => (
          <div
            key={index}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
          >
            <div className="text-sm opacity-60">Step {index + 1}</div>
            <div className="mt-2 text-lg font-semibold">{step}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
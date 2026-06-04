import PageTitle from "../components/PageTitle";
import { processSteps } from "../data/processSteps";

export default function ProcessPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <PageTitle
        title="Artist Process"
        subtitle="Step-by-step workflow of creating digital art"
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {processSteps.map((step, index) => (
          <div
            key={step.title}
            className="rounded-xl border bg-[var(--color-surface)] p-5 transition hover:shadow-md"
          >
            <div className="text-sm opacity-60">
              Step {index + 1}
            </div>

            <div className="mt-1 text-lg font-semibold">
              {step.title}
            </div>

            <div className="mt-2 text-sm opacity-70">
              {step.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
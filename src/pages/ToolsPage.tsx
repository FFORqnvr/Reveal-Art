import PageTitle from "../components/PageTitle";
import { artTools } from "../data/artTools";

export default function ToolsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <PageTitle
        title="Art Tools"
        subtitle="Essential tools for digital and traditional artists"
      />

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border bg-[var(--color-surface)] p-5">
          <div className="mb-3 text-lg font-semibold">
            Digital Tools
          </div>

          <ul className="space-y-2 text-sm opacity-80">
            {artTools.digital.map((item) => (
              <li key={item}>
                • {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border bg-[var(--color-surface)] p-5">
          <div className="mb-3 text-lg font-semibold">
            Drawing Tools
          </div>

          <ul className="space-y-2 text-sm opacity-80">
            {artTools.drawing.map((item) => (
              <li key={item}>
                • {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border bg-[var(--color-surface)] p-5">
          <div className="mb-3 text-lg font-semibold">
            Painting Tools
          </div>

          <ul className="space-y-2 text-sm opacity-80">
            {artTools.painting.map((item) => (
              <li key={item}>
                • {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
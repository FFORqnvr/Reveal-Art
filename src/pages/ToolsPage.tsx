import PageTitle from "../components/PageTitle";

export default function ToolsPage() {
  const digital = ["Photoshop", "Procreate", "Blender", "Clip Studio Paint"];
  const drawing = ["Pencils", "Ink Pens", "Markers", "Charcoal"];
  const painting = ["Acrylic", "Oil Paint", "Watercolor", "Gouache"];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <PageTitle
        title="Art Tools"
        subtitle="Essential tools for digital and traditional artists"
      />

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {/* Digital */}
        <div className="p-5 border rounded-xl bg-[var(--color-surface)]">
          <div className="text-lg font-semibold mb-3">Digital Tools</div>
          <ul className="space-y-2 text-sm opacity-80">
            {digital.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        {/* Drawing */}
        <div className="p-5 border rounded-xl bg-[var(--color-surface)]">
          <div className="text-lg font-semibold mb-3">Drawing Tools</div>
          <ul className="space-y-2 text-sm opacity-80">
            {drawing.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        {/* Painting */}
        <div className="p-5 border rounded-xl bg-[var(--color-surface)]">
          <div className="text-lg font-semibold mb-3">Painting Tools</div>
          <ul className="space-y-2 text-sm opacity-80">
            {painting.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
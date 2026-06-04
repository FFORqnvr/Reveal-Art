import PageTitle from "../components/PageTitle";

export default function ToolsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <PageTitle
        title="Art Tools"
        subtitle="A simple overview of tools used in digital and traditional art."
      />

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Digital Tools",
            items: ["Photoshop", "Procreate", "Blender"],
          },
          {
            title: "Drawing Tools",
            items: ["Pencils", "Ink Pens", "Markers"],
          },
          {
            title: "Painting Tools",
            items: ["Acrylic", "Oil Paint", "Watercolor"],
          },
        ].map((group, index) => (
          <div
            key={index}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
          >
            <div className="text-lg font-semibold">{group.title}</div>

            <ul className="mt-4 space-y-2 text-sm opacity-80">
              {group.items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
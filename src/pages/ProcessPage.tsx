import PageTitle from "../components/PageTitle";

export default function ProcessPage() {
  const steps = [
    {
      title: "Idea & Inspiration",
      desc: "Finding references, mood and concept for the artwork.",
    },
    {
      title: "Sketching",
      desc: "Creating rough sketches and composition planning.",
    },
    {
      title: "Color Planning",
      desc: "Choosing palette and visual mood of the piece.",
    },
    {
      title: "Main Artwork",
      desc: "Building the final composition and shapes.",
    },
    {
      title: "Detailing",
      desc: "Adding light, texture and small details.",
    },
    {
      title: "Final Render",
      desc: "Polishing and preparing artwork for presentation.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <PageTitle
        title="Artist Process"
        subtitle="Step-by-step workflow of creating digital art"
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-5 border rounded-xl bg-[var(--color-surface)] hover:shadow-md transition"
          >
            <div className="text-sm opacity-60">Step {index + 1}</div>
            <div className="text-lg font-semibold mt-1">{step.title}</div>
            <div className="text-sm opacity-70 mt-2">{step.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
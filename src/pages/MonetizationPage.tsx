import PageTitle from "../components/PageTitle";

export default function MonetizationPage() {
  const sections = [
    {
      title: "Sell Original Art",
      desc: "Sell your original digital or physical artworks directly to collectors.",
    },
    {
      title: "Prints",
      desc: "Create and sell high-quality prints of your artworks.",
    },
    {
      title: "Commissions",
      desc: "Take custom requests and create personalized artwork for clients.",
    },
    {
      title: "Digital Products",
      desc: "Sell brushes, textures, templates and other digital assets.",
    },
    {
      title: "Portfolio & Social Media",
      desc: "Grow audience through platforms like Instagram, ArtStation, Behance.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <PageTitle
        title="Monetization"
        subtitle="Ways artists can earn from their creative work"
      />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {sections.map((item) => (
          <div
            key={item.title}
            className="p-5 border rounded-xl bg-[var(--color-surface)] hover:shadow-md transition"
          >
            <div className="text-lg font-semibold">{item.title}</div>
            <div className="text-sm opacity-80 mt-2">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
import PageTitle from "../components/PageTitle";

export default function MonetizationPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <PageTitle
        title="Monetization for Artists"
        subtitle="Ways artists can earn from their creativity."
      />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[
          {
            title: "Sell Original Art",
            desc: "Sell physical or digital original artworks.",
          },
          {
            title: "Prints",
            desc: "Create and sell prints of your artworks.",
          },
          {
            title: "Commissions",
            desc: "Take custom orders from clients.",
          },
          {
            title: "Digital Products",
            desc: "Sell brushes, packs, or templates.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
          >
            <div className="text-lg font-semibold">{item.title}</div>
            <div className="mt-2 text-sm opacity-80">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
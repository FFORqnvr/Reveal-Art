
import {
  computerTools,
  phoneTabletTools,
  type ArtTool,
} from "../data/artTools";
import SectionDivider from "../components/SectionDivider";

function ToolCard({ tool }: { tool: ArtTool }) {
  return (
    <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background-soft)] p-5 shadow-[var(--shadow-sm)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">
      <h3
        className="text-2xl font-bold text-[var(--color-text-primary)]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {tool.title}
      </h3>

      <p className="mt-3 min-h-[72px] leading-7 text-[var(--color-text-secondary)]">
        {tool.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tool.platforms.map((platform) => (
          <span
            key={platform}
            className="rounded-full bg-[var(--color-primary)]/55 px-3 py-1 text-xs font-semibold text-[var(--color-background-soft)]"
          >
            {platform}
          </span>
        ))}
      </div>
    </article>
  );
}

function ToolsSection({
  title,
  tools,
}: {
  title: string;
  tools: ArtTool[];
}) {
  return (
    <section className="mt-14">
      <h2
        className="text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>

      <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.title} tool={tool} />
        ))}
      </div>
    </section>
  );
}

export default function ToolsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-24 md:px-8">

      <section className="mt-14 text-center">
        <h1
          className="text-4xl font-bold text-[var(--color-text-idea-p)] md:text-6xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Інструменти
        </h1>

        <p
          className="mx-auto mt-5 mb-10 text-xl leading-relaxed text-[var(--color-text-idea-p)] md:text-2xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Малювати можна будь-де і на чому завгодно — від телефону до
          професійного графічного планшета.
        </p>
        <SectionDivider/>
      </section>

      <section className="mx-auto mt-10 max-w-5xl rounded-2xl border border-[var(--color-border)] bg-[var(--color-gallery-card-bg)] p-6 shadow-[var(--shadow-sm)]">
        <p className="leading-7 text-[var(--color-text-secondary)]">
          <strong className="text-[var(--color-text-primary)]">
            Важливо:
          </strong>{" "}
          інструмент не визначає художника. Починаємо з того, що вже маєте під
          рукою, і поступово покращуємо набір.
        </p>

        <p className="mt-3 leading-7 text-[var(--color-text-secondary)]">
          Нижче — добірка найкращих програм для різних пристроїв. Починайте з
          безкоштовних — вони дійсно потужні.
        </p>
      </section>

      <ToolsSection
        title="Телефони та планшети"
        tools={phoneTabletTools}
      />

      <ToolsSection
        title="Комп’ютер та графічні планшети"
        tools={computerTools}
      />
    </main>
  );
}
import AboutCard from "../../components/AboutCard";
import { aboutCards } from "../../data/aboutCards";

export default function AboutSection() {
  const mainCards = aboutCards.slice(0, 4);
  const galleryCard = aboutCards[4];

  return (
    <section className="relative min-h-[620px]">
      <div className="mx-auto flex min-h-[620px] max-w-6xl flex-col items-center justify-center px-4 py-20 md:px-8">
        <h2
          className="max-w-4xl text-center text-4xl font-bold leading-tight text-[var(--color-text-primary)] md:text-5xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Відкрийте двері до знань, що перетворюють бачення на майстерність
        </h2>

        <div className="mt-12 grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {mainCards.map((card) => (
            <AboutCard
              key={card.to}
              to={card.to}
              title={card.title}
              desc={card.desc}
              image={card.image}
            />
          ))}
        </div>

        <div className="mt-8 w-full max-w-md">
          <AboutCard
            to={galleryCard.to}
            title={galleryCard.title}
            desc={galleryCard.desc}
            image={galleryCard.image}
          />
        </div>
      </div>
    </section>
  );
}
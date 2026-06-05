import { useState } from "react";
import IdeaGeneratorForm from "../sections/ideas/IdeaGeneratorForm";
import { ideaOptions } from "../data/IdeaOptions";
import { generateIdea } from "../utils/generateIdea";
import InspirationSourcesSection from "../sections/ideas/InspirationSourcesSection";
import ArtistHabitsSection from "../sections/ideas/ArtistHabitsSection";
import ArtBlockSection from "../sections/ideas/ArtBlockSection";
import SectionDivider from "../components/SectionDivider";

const randomItem = (items: string[]) => {
  return items[Math.floor(Math.random() * items.length)];
};

export default function IdeasPage() {
  const [theme, setTheme] = useState("");
  const [object, setObject] = useState("");
  const [mood, setMood] = useState("");
  const [palette, setPalette] = useState("");
  const [place, setPlace] = useState("");
  const [details, setDetails] = useState("");
  const [idea, setIdea] = useState("");

  const handleGenerateIdea = () => {
    const nextTheme = randomItem(ideaOptions.theme);
    const nextObject = randomItem(ideaOptions.object);
    const nextMood = randomItem(ideaOptions.mood);
    const nextPalette = randomItem(ideaOptions.palette);
    const nextPlace = randomItem(ideaOptions.place);
    const nextDetails = randomItem(ideaOptions.details);

    setTheme(nextTheme);
    setObject(nextObject);
    setMood(nextMood);
    setPalette(nextPalette);
    setPlace(nextPlace);
    setDetails(nextDetails);

    setIdea(
      generateIdea({
        theme: nextTheme,
        object: nextObject,
        mood: nextMood,
        palette: nextPalette,
        place: nextPlace,
        details: nextDetails,
      }),
    );
  };

  return (
    <main className="min-h-screen bg-[var(--color-background)] px-4 py-24 sm:px-6">
      <section className="text-center">
              <h1
                className="text-4xl mt-15 font-bold text-[var(--color-text-idea-p)] md:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Ідеї
              </h1>
      
              <p
                className="mx-auto max-w-[1100px] mt-10 mb-11 font-bold text-3xl leading-relaxed text-[var(--color-text-idea-p)] md:text-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Кожен шедевр починається з іскри ідеї.Тут ви знайдете інструменти для пошуку натхнення та підтримку у складні моменти.
              </p>
      </section>

            <div className="relative left-1/2 w-[1500px] -translate-x-1/2 px-4 md:px-8">
              <SectionDivider />
            </div>

      <IdeaGeneratorForm
        theme={theme}
        object={object}
        mood={mood}
        palette={palette}
        place={place}
        details={details}
        idea={idea}
        onGenerate={handleGenerateIdea}
      />
      <InspirationSourcesSection />
      <ArtistHabitsSection />
      <ArtBlockSection />
    </main>
  );
}
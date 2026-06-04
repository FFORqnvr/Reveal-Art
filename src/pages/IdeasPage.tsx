import { useState } from "react";
import IdeaGeneratorForm from "../sections/ideas/IdeaGeneratorForm";
import { ideaOptions } from "../data/IdeaOptions";
import { generateIdea } from "../utils/generateIdea";
import InspirationSourcesSection from "../sections/ideas/InspirationSourcesSection";
import ArtistHabitsSection from "../sections/ideas/ArtistHabitsSection";

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
    </main>
  );
}
import { useState } from "react";
import PageTitle from "../components/PageTitle";
import IdeaGeneratorForm from "../sections/ideas/IdeaGeneratorForm";
import GeneratedIdeaResult from "../sections/ideas/GeneratedIdeaResult";
import { generateIdea } from "../utils/generateIdea";

export default function IdeasPage() {
  const [theme, setTheme] = useState("");
  const [object, setObject] = useState("");
  const [mood, setMood] = useState("");
  const [palette, setPalette] = useState("");
  const [place, setPlace] = useState("");
  const [details, setDetails] = useState("");

  const [idea, setIdea] = useState("");
  const [error, setError] = useState("");

  const handleGenerateIdea = () => {
    if (!theme || !object || !mood || !palette || !place || !details) {
      setError("Please select all parameters before generating an idea.");
      setIdea("");
      return;
    }

    setError("");

    setIdea(
      generateIdea({
        theme,
        object,
        mood,
        palette,
        place,
        details,
      }),
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <PageTitle
        title="Idea Generator"
        subtitle="Generate inspiration for your next artwork. Works completely locally without AI APIs."
      />

      <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
        <IdeaGeneratorForm
          theme={theme}
          object={object}
          mood={mood}
          palette={palette}
          place={place}
          details={details}
          error={error}
          onThemeChange={setTheme}
          onObjectChange={setObject}
          onMoodChange={setMood}
          onPaletteChange={setPalette}
          onPlaceChange={setPlace}
          onDetailsChange={setDetails}
          onGenerate={handleGenerateIdea}
        />

        {idea && (
          <GeneratedIdeaResult
            idea={idea}
            theme={theme}
            object={object}
            mood={mood}
            palette={palette}
            place={place}
            details={details}
            onGenerateAgain={handleGenerateIdea}
          />
        )}
      </div>
    </div>
  );
}
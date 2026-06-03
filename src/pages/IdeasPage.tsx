import { useState } from "react";
import { ideaOptions } from "../data/IdeaOptions";
import type { IdeaPrompt } from "../types/Idea";

export default function IdeasPage() {
  const [idea, setIdea] = useState<IdeaPrompt | null>(null);

  const generateIdea = () => {
    const pick = <T,>(arr: T[]) =>
      arr[Math.floor(Math.random() * arr.length)];

    setIdea({
      theme: pick(ideaOptions.theme),
      object: pick(ideaOptions.object),
      mood: pick(ideaOptions.mood),
      palette: pick(ideaOptions.palette),
      place: pick(ideaOptions.place),
      details: pick(ideaOptions.details),
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold">Idea Generator</h1>

      <button
        onClick={generateIdea}
        className="mt-4 px-4 py-2 border rounded hover:opacity-80"
      >
        Generate idea
      </button>

      {idea && (
        <div className="mt-6 border border-[var(--color-border)] rounded-[14px] bg-[var(--color-surface)] p-4 space-y-2">
          <div><b>Theme:</b> {idea.theme}</div>
          <div><b>Object:</b> {idea.object}</div>
          <div><b>Mood:</b> {idea.mood}</div>
          <div><b>Palette:</b> {idea.palette}</div>
          <div><b>Place:</b> {idea.place}</div>
          <div><b>Details:</b> {idea.details}</div>
        </div>
      )}
    </div>
  );
}
import { useState } from "react";
import PageTitle from "../components/PageTitle";
import Select from "../components/Select";
import Button from "../components/Button";

const themes = [
  "Fantasy",
  "Sci-Fi",
  "Nature",
  "Cyberpunk",
  "History",
  "Dreams",
];

const subjects = [
  "Warrior",
  "Dragon",
  "Robot",
  "Explorer",
  "Castle",
  "Ancient Tree",
];

const moods = [
  "Mysterious",
  "Peaceful",
  "Epic",
  "Melancholic",
  "Hopeful",
  "Dark",
];

const palettes = [
  "Warm Colors",
  "Cold Colors",
  "Neon",
  "Pastel",
  "Monochrome",
];

const locations = [
  "Forest",
  "Mountains",
  "Future City",
  "Desert",
  "Ocean",
  "Space Station",
];

const details = [
  "Glowing particles",
  "Rain",
  "Fog",
  "Floating islands",
  "Ancient ruins",
  "Magic symbols",
];

const templates = [
  "Create a {mood} {theme} artwork featuring a {subject} in a {location}. Use a {palette} palette and include {detail}.",
  "Illustrate a {subject} inspired by {theme}. The scene takes place in a {location} with a {mood} atmosphere and {detail}. Use {palette} colors.",
  "Design a {theme} composition set in a {location}. Focus on a {subject}, create a {mood} feeling, and add {detail}. Palette: {palette}.",
];

export default function IdeasPage() {
  const [theme, setTheme] = useState("");
  const [subject, setSubject] = useState("");
  const [mood, setMood] = useState("");
  const [palette, setPalette] = useState("");
  const [location, setLocation] = useState("");
  const [detail, setDetail] = useState("");

  const [idea, setIdea] = useState("");
  const [error, setError] = useState("");

  const generateIdea = () => {
    if (!theme || !subject || !mood || !palette || !location || !detail) {
      setError("Please select all parameters before generating an idea.");
      setIdea("");
      return;
    }

    setError("");

    const template =
      templates[Math.floor(Math.random() * templates.length)];

    const generatedIdea = template
      .replace("{theme}", theme)
      .replace("{subject}", subject)
      .replace("{mood}", mood)
      .replace("{palette}", palette)
      .replace("{location}", location)
      .replace("{detail}", detail);

    setIdea(generatedIdea);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <PageTitle
        title="Idea Generator"
        subtitle="Generate inspiration for your next artwork. Works completely locally without AI APIs."
      />

      <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
        <div className="mb-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-4 text-sm opacity-80">
          Select artwork parameters and generate a creative concept for your next project.
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Theme
            </label>
            <Select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option value="">Select theme</option>
              {themes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Subject
            </label>
            <Select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option value="">Select subject</option>
              {subjects.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Mood
            </label>
            <Select
              value={mood}
              onChange={(e) => setMood(e.target.value)}
            >
              <option value="">Select mood</option>
              {moods.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Palette
            </label>
            <Select
              value={palette}
              onChange={(e) => setPalette(e.target.value)}
            >
              <option value="">Select palette</option>
              {palettes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Location
            </label>
            <Select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Select location</option>
              {locations.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Detail
            </label>
            <Select
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            >
              <option value="">Select detail</option>
              {details.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {error && (
          <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
            {error}
          </div>
        )}

        <div className="mt-6">
          <Button onClick={generateIdea}>
            Generate Idea
          </Button>
        </div>

        {idea && (
          <div className="mt-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-6 shadow-sm">
            <h3 className="text-xl font-semibold">
              Generated Idea
            </h3>

            <p className="mt-4 leading-7">
              {idea}
            </p>

            <div className="mt-6">
              <h4 className="mb-3 text-sm font-medium">
                Selected Parameters
              </h4>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border px-3 py-1 text-sm">
                  {theme}
                </span>

                <span className="rounded-full border px-3 py-1 text-sm">
                  {subject}
                </span>

                <span className="rounded-full border px-3 py-1 text-sm">
                  {mood}
                </span>

                <span className="rounded-full border px-3 py-1 text-sm">
                  {palette}
                </span>

                <span className="rounded-full border px-3 py-1 text-sm">
                  {location}
                </span>

                <span className="rounded-full border px-3 py-1 text-sm">
                  {detail}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <Button onClick={generateIdea}>
                Generate Another Idea
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
import PageTitle from "../components/PageTitle";

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

export default function IdeasPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <PageTitle
        title="Idea Generator"
        subtitle="Generate inspiration for your next artwork. Everything works locally without AI APIs."
      />

      <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
        <p className="font-medium">Generator data loaded:</p>

        <ul className="mt-4 space-y-2 text-sm">
          <li>Themes: {themes.length}</li>
          <li>Subjects: {subjects.length}</li>
          <li>Moods: {moods.length}</li>
          <li>Palettes: {palettes.length}</li>
          <li>Locations: {locations.length}</li>
          <li>Details: {details.length}</li>
        </ul>
      </div>
    </div>
  );
}
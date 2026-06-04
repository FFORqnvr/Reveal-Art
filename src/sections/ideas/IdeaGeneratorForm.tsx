import Select from "../../components/Select";
import Button from "../../components/Button";
import { ideaOptions } from "../../data/IdeaOptions";

type IdeaGeneratorFormProps = {
  theme: string;
  object: string;
  mood: string;
  palette: string;
  place: string;
  details: string;
  error: string;
  onThemeChange: (value: string) => void;
  onObjectChange: (value: string) => void;
  onMoodChange: (value: string) => void;
  onPaletteChange: (value: string) => void;
  onPlaceChange: (value: string) => void;
  onDetailsChange: (value: string) => void;
  onGenerate: () => void;
};

export default function IdeaGeneratorForm({
  theme,
  object,
  mood,
  palette,
  place,
  details,
  error,
  onThemeChange,
  onObjectChange,
  onMoodChange,
  onPaletteChange,
  onPlaceChange,
  onDetailsChange,
  onGenerate,
}: IdeaGeneratorFormProps) {
  return (
    <>
      <div className="mb-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-4 text-sm opacity-80">
        Select artwork parameters and generate a creative concept for your next
        project.
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Theme
          </label>

          <Select
            value={theme}
            onChange={(e) => onThemeChange(e.target.value)}
          >
            <option value="">Select theme</option>
            {ideaOptions.theme.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Object
          </label>

          <Select
            value={object}
            onChange={(e) => onObjectChange(e.target.value)}
          >
            <option value="">Select object</option>
            {ideaOptions.object.map((item) => (
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
            onChange={(e) => onMoodChange(e.target.value)}
          >
            <option value="">Select mood</option>
            {ideaOptions.mood.map((item) => (
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
            onChange={(e) => onPaletteChange(e.target.value)}
          >
            <option value="">Select palette</option>
            {ideaOptions.palette.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Place
          </label>

          <Select
            value={place}
            onChange={(e) => onPlaceChange(e.target.value)}
          >
            <option value="">Select place</option>
            {ideaOptions.place.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Details
          </label>

          <Select
            value={details}
            onChange={(e) => onDetailsChange(e.target.value)}
          >
            <option value="">Select details</option>
            {ideaOptions.details.map((item) => (
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
        <Button onClick={onGenerate}>
          Generate Idea
        </Button>
      </div>
    </>
  );
}
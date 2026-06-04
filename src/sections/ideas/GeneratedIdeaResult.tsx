import Button from "../../components/Button";

type GeneratedIdeaResultProps = {
  idea: string;
  theme: string;
  object: string;
  mood: string;
  palette: string;
  place: string;
  details: string;
  onGenerateAgain: () => void;
};

export default function GeneratedIdeaResult({
  idea,
  theme,
  object,
  mood,
  palette,
  place,
  details,
  onGenerateAgain,
}: GeneratedIdeaResultProps) {
  return (
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
            {object}
          </span>

          <span className="rounded-full border px-3 py-1 text-sm">
            {mood}
          </span>

          <span className="rounded-full border px-3 py-1 text-sm">
            {palette}
          </span>

          <span className="rounded-full border px-3 py-1 text-sm">
            {place}
          </span>

          <span className="rounded-full border px-3 py-1 text-sm">
            {details}
          </span>
        </div>
      </div>

      <div className="mt-6">
        <Button onClick={onGenerateAgain}>
          Generate Another Idea
        </Button>
      </div>
    </div>
  );
}
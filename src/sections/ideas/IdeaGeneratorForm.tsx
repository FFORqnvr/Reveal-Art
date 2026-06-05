
type IdeaGeneratorFormProps = {
  theme: string;
  object: string;
  mood: string;
  palette: string;
  place: string;
  details: string;
  idea: string;
  onGenerate: () => void;
};

const fields = [
  { label: "Тема", key: "theme" },
  { label: "Хто/Що?", key: "object" },
  { label: "Настрій", key: "mood" },
  { label: "Палітра", key: "palette" },
  { label: "Де?", key: "place" },
  { label: "Деталі", key: "details" },
] as const;

export default function IdeaGeneratorForm({
  theme,
  object,
  mood,
  palette,
  place,
  details,
  idea,
  onGenerate,
}: IdeaGeneratorFormProps) {
  const values = {
    theme,
    object,
    mood,
    palette,
    place,
    details,
  };

  return (
    <section className="mt-6 mx-auto max-w-4xl rounded-3xl bg-[var(--color-generator)]/85 p-6 shadow-lg md:p-8">
      
      <h1
        className="text-2xl font-bold text-[var(--color-text-generator-heading)]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Генератор ідей
      </h1>

      <p className="mt-3 text-base text-[var(--color-text-generator-p)]/85">
        Не знаєш що малювати? Ми підкажемо!
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {fields.map((field) => (
          <div
            key={field.key}
            className="relative flex min-h-[90px] items-center justify-center rounded-2xl bg-[var(--color-background-soft)] px-4 text-center shadow-md"
          >
            {values[field.key] && (
              <span className="absolute left-4 top-3 text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                {field.label}
              </span>
            )}

            <span
              key={values[field.key] || field.label}
              className="animate-soft-reveal text-2xl font-bold text-[var(--color-primary)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {values[field.key] || field.label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={onGenerate}
          className="rounded-2xl border border-[var(--color-primary-hover)] bg-[var(--color-background-soft)] px-8 py-2 text-2xl font-bold text-[var(--color-primary)] shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Генерувати
        </button>
      </div>

      {idea && (
        <div className="animate-soft-reveal mt-6 rounded-2xl bg-[var(--color-background-soft)]/90 p-5 text-[var(--color-text-primary)] shadow-md">
          <h2
            className="text-xl font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ідея
          </h2>

          <p className="mt-3 leading-7">
            {idea}
          </p>
        </div>
      )}
    </section>
  );
}
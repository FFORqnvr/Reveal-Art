import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";
import ImageUploadField from "./ImageUploadField";
import type { SubmitFormErrors, SubmitFormState } from "../../types/submit";

type SubmitArtworkFormProps = {
  form: SubmitFormState;
  errors: SubmitFormErrors;
  preview: string | null;
  isSubmitting: boolean;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => void;
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SubmitArtworkForm({
  form,
  errors,
  preview,
  isSubmitting,
  onSubmit,
  onChange,
  onFileChange,
}: SubmitArtworkFormProps) {
  return (
    <form className="space-y-8" onSubmit={onSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
            Назва роботи
          </label>

          <Input
            name="title"
            placeholder="Наприклад: Silent Garden"
            value={form.title}
            onChange={onChange}
          />

          {errors.title && (
            <p className="text-sm text-[var(--color-danger)]">
              {errors.title}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
            Ім’я автора
          </label>

          <Input
            name="artistName"
            placeholder="Ваше ім’я"
            value={form.artistName}
            onChange={onChange}
          />

          {errors.artistName && (
            <p className="text-sm text-[var(--color-danger)]">
              {errors.artistName}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
          Опис роботи
        </label>

        <Textarea
          name="description"
          placeholder="Коротко опишіть ідею, настрій або історію роботи"
          value={form.description}
          onChange={onChange}
        />

        {errors.description && (
          <p className="text-sm text-[var(--color-danger)]">
            {errors.description}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
          Нікнейм автора
        </label>

        <Input
          name="artistNickname"
          placeholder="Наприклад: art_muse"
          value={form.artistNickname}
          onChange={onChange}
        />

        {errors.artistNickname && (
          <p className="text-sm text-[var(--color-danger)]">
            {errors.artistNickname}
          </p>
        )}
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <div className="space-y-2">
          <label className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
            Категорія
          </label>

          <Select name="category" value={form.category} onChange={onChange}>
            <option value="">Оберіть категорію</option>
            <option value="painting">Painting</option>
            <option value="digital">Digital</option>
          </Select>

          {errors.category && (
            <p className="text-sm text-[var(--color-danger)]">
              {errors.category}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
            Стиль
          </label>

          <Select name="style" value={form.style} onChange={onChange}>
            <option value="">Оберіть стиль</option>
            <option value="modern">Modern</option>
            <option value="classic">Classic</option>
          </Select>

          {errors.style && (
            <p className="text-sm text-[var(--color-danger)]">
              {errors.style}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
            Техніка
          </label>

          <Select name="technique" value={form.technique} onChange={onChange}>
            <option value="">Оберіть техніку</option>
            <option value="oil">Oil</option>
            <option value="3d">3D</option>
          </Select>

          {errors.technique && (
            <p className="text-sm text-[var(--color-danger)]">
              {errors.technique}
            </p>
          )}
        </div>
      </div>

      <div className="rounded-[24px] border border-dashed border-[var(--color-primary)]/60 bg-[var(--color-surface)]/45 p-5">
        <div className="mb-4">
          <p
            className="text-2xl font-bold text-[var(--color-text-primary)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Зображення роботи
          </p>

          <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
            Натисніть кнопку нижче, щоб вибрати файл з комп’ютера.
          </p>
        </div>

        <ImageUploadField
          preview={preview}
          error={errors.image}
          onChange={onFileChange}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-[var(--color-primary)] px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-background-soft)] transition duration-300 hover:-translate-y-1 hover:bg-[var(--color-primary-hover)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Відправляємо..." : "Відправити роботу"}
      </button>
    </form>
  );
}
type ImageUploadFieldProps = {
  preview: string | null;
  error?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function ImageUploadField({
  preview,
  error,
  onChange,
}: ImageUploadFieldProps) {
  return (
    <div className="space-y-4">
      <label className="cursor-pointer rounded-xl bg-[var(--color-primary)] px-5 py-2 text-white">
        Обрати файл

        <input
          type="file"
          accept="image/*"
          onChange={onChange}
          className="hidden"
        />
      </label>

      {preview && (
        <div
          className="mt-10 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-background-soft)] shadow-[var(--shadow-sm)]"
          onContextMenu={(event) => event.preventDefault()}
        >
          <img
            src={preview}
            alt="Artwork preview"
            draggable={false}
            onContextMenu={(event) => event.preventDefault()}
            className="max-h-[360px] w-full select-none object-contain p-4"
          />
        </div>
      )}

      {error && (
        <p className="text-sm text-[var(--color-danger)]">
          {error}
        </p>
      )}
    </div>
  );
}

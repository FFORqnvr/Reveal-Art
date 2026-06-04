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
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={onChange}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}

      {preview && (
        <div className="mt-3">
          <img
            src={preview}
            alt="Preview"
            className="max-h-[280px] w-full rounded-xl border object-cover"
          />
        </div>
      )}
    </div>
  );
}
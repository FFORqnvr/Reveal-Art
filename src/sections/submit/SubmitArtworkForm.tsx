import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";
import Button from "../../components/Button";
import ImageUploadField from "./ImageUploadField";
import type {
  SubmitFormErrors,
  SubmitFormState,
} from "../../types/submit";

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
  onFileChange: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
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
    <form
      className="space-y-5"
      onSubmit={onSubmit}
    >
      <Input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={onChange}
      />

      {errors.title && (
        <p className="text-sm text-red-500">
          {errors.title}
        </p>
      )}

      <Textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={onChange}
      />

      {errors.description && (
        <p className="text-sm text-red-500">
          {errors.description}
        </p>
      )}

      <Input
        name="artistName"
        placeholder="Artist name"
        value={form.artistName}
        onChange={onChange}
      />

      {errors.artistName && (
        <p className="text-sm text-red-500">
          {errors.artistName}
        </p>
      )}

      <Input
        name="artistNickname"
        placeholder="Artist nickname"
        value={form.artistNickname}
        onChange={onChange}
      />

      {errors.artistNickname && (
        <p className="text-sm text-red-500">
          {errors.artistNickname}
        </p>
      )}

      <Select
        name="category"
        value={form.category}
        onChange={onChange}
      >
        <option value="">Category</option>
        <option value="painting">Painting</option>
        <option value="digital">Digital</option>
      </Select>

      {errors.category && (
        <p className="text-sm text-red-500">
          {errors.category}
        </p>
      )}

      <Select
        name="style"
        value={form.style}
        onChange={onChange}
      >
        <option value="">Style</option>
        <option value="modern">Modern</option>
        <option value="classic">Classic</option>
      </Select>

      {errors.style && (
        <p className="text-sm text-red-500">
          {errors.style}
        </p>
      )}

      <Select
        name="technique"
        value={form.technique}
        onChange={onChange}
      >
        <option value="">Technique</option>
        <option value="oil">Oil</option>
        <option value="3d">3D</option>
      </Select>

      {errors.technique && (
        <p className="text-sm text-red-500">
          {errors.technique}
        </p>
      )}

      <ImageUploadField
        preview={preview}
        error={errors.image}
        onChange={onFileChange}
      />

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting
          ? "Submitting..."
          : "Submit artwork"}
      </Button>
    </form>
  );
}
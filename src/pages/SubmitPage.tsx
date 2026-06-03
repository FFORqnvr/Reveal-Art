import { useState } from "react";
import PageTitle from "../components/PageTitle";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Select from "../components/Select";
import Button from "../components/Button";

type FormState = {
  title: string;
  description: string;
  artistName: string;
  artistNickname: string;
  category: string;
  style: string;
  technique: string;
  image: File | null;
};

type Errors = Partial<Record<keyof FormState, string>>;

export default function SubmitPage() {
  const [form, setForm] = useState<FormState>({
    title: "",
    description: "",
    artistName: "",
    artistNickname: "",
    category: "",
    style: "",
    technique: "",
    image: null,
  });

  const [errors, setErrors] = useState<Errors>({});
  const [preview, setPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Errors = {};

    if (!form.title) newErrors.title = "Title is required";
    if (!form.description) newErrors.description = "Description is required";
    if (!form.artistName) newErrors.artistName = "Artist name is required";
    if (!form.artistNickname) newErrors.artistNickname = "Artist nickname is required";
    if (!form.category) newErrors.category = "Category is required";
    if (!form.style) newErrors.style = "Style is required";
    if (!form.technique) newErrors.technique = "Technique is required";
    if (!form.image) newErrors.image = "Image is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    setForm((prev) => ({
      ...prev,
      image: file,
    }));

    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validate();
    if (!isValid) return;

    setIsSubmitting(true);
    setSuccess(false);

    await new Promise((res) => setTimeout(res, 1000));

    console.log("PENDING ARTWORK:", {
      ...form,
      status: "pending",
    });

    setForm({
      title: "",
      description: "",
      artistName: "",
      artistNickname: "",
      category: "",
      style: "",
      technique: "",
      image: null,
    });

    setPreview(null);
    setErrors({});
    setIsSubmitting(false);
    setSuccess(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <PageTitle
        title="Submit Artwork"
        subtitle="Send your artwork for moderation"
      />

      {success && (
        <div className="mt-6 p-4 rounded-xl border border-green-200 bg-green-50 text-green-700">
          Artwork successfully submitted for review. It will appear in the gallery after approval.
        </div>
      )}

      <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm p-4 sm:p-6">
        <form className="space-y-5" onSubmit={handleSubmit}>
          <Input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

          <Textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}

          <Input name="artistName" placeholder="Artist name" value={form.artistName} onChange={handleChange} />
          {errors.artistName && <p className="text-red-500 text-sm">{errors.artistName}</p>}

          <Input name="artistNickname" placeholder="Artist nickname" value={form.artistNickname} onChange={handleChange} />
          {errors.artistNickname && <p className="text-red-500 text-sm">{errors.artistNickname}</p>}

          <Select name="category" value={form.category} onChange={handleChange}>
            <option value="">Category</option>
            <option value="painting">Painting</option>
            <option value="digital">Digital</option>
          </Select>
          {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}

          <Select name="style" value={form.style} onChange={handleChange}>
            <option value="">Style</option>
            <option value="modern">Modern</option>
            <option value="classic">Classic</option>
          </Select>
          {errors.style && <p className="text-red-500 text-sm">{errors.style}</p>}

          <Select name="technique" value={form.technique} onChange={handleChange}>
            <option value="">Technique</option>
            <option value="oil">Oil</option>
            <option value="3d">3D</option>
          </Select>
          {errors.technique && <p className="text-red-500 text-sm">{errors.technique}</p>}

          <div>
            <input type="file" accept="image/*" onChange={handleFile} />
            {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}

            {preview && (
              <div className="mt-3">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full max-h-[280px] object-cover rounded-xl border"
                />
              </div>
            )}
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Submitting..." : "Submit artwork"}
          </Button>
        </form>
      </div>
    </div>
  );
}
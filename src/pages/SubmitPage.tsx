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
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validate();
    if (!isValid) return;

    console.log("SUBMIT:", form);

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

    setErrors({});
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <PageTitle
        title="Submit Artwork"
        subtitle="Send your artwork for moderation"
      />

      <form
        onSubmit={handleSubmit}
        className="mt-6 rounded-[14px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 space-y-4"
      >
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

        <input type="file" accept="image/*" onChange={handleFile} />
        {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}

        <Button type="submit">Submit artwork</Button>
      </form>
    </div>
  );
}
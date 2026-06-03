import { useState } from "react";
import PageTitle from "../components/PageTitle";

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
        <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        <input
          type="text"
          name="artistName"
          placeholder="Artist name"
          value={form.artistName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="artistNickname"
          placeholder="Artist nickname"
          value={form.artistNickname}
          onChange={handleChange}
        />

        <select name="category" value={form.category} onChange={handleChange}>
          <option value="">Category</option>
          <option value="painting">Painting</option>
          <option value="digital">Digital</option>
        </select>

        <select name="style" value={form.style} onChange={handleChange}>
          <option value="">Style</option>
          <option value="modern">Modern</option>
          <option value="classic">Classic</option>
        </select>

        <select name="technique" value={form.technique} onChange={handleChange}>
          <option value="">Technique</option>
          <option value="oil">Oil</option>
          <option value="3d">3D</option>
        </select>

        <input type="file" accept="image/*" onChange={handleFile} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
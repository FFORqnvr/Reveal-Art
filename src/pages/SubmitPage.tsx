import { useState } from "react";
import SectionDivider from "../components/SectionDivider";

import SuccessMessage from "../sections/submit/SuccessMessage";
import SubmitArtworkForm from "../sections/submit/SubmitArtworkForm";

import type { SubmitFormErrors, SubmitFormState } from "../types/submit";

import { validateSubmitForm } from "../utils/validateSubmitForm";

export default function SubmitPage() {
  const [form, setForm] = useState<SubmitFormState>({
    title: "",
    description: "",
    artistName: "",
    artistNickname: "",
    category: "",
    style: "",
    technique: "",
    image: null,
  });

  const [errors, setErrors] = useState<SubmitFormErrors>({});
  const [preview, setPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;

    setForm((prev) => ({
      ...prev,
      image: file,
    }));

    if (!file) {
      setPreview(null);
      return;
    }

    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  const resetForm = () => {
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
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateSubmitForm(form);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    if (!form.image) {
      return;
    }

    setSuccess(false);
    setSubmitError("");
    setIsSubmitting(true);

    try {
      const formData = new FormData();

      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("artistName", form.artistName);
      formData.append("artistNickname", form.artistNickname);
      formData.append("category", form.category);
      formData.append("style", form.style);
      formData.append("technique", form.technique);
      formData.append("image", form.image);

      const response = await fetch("http://localhost:4000/api/artworks", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit artwork");
      }

      resetForm();
      setSuccess(true);
    } catch {
      setSubmitError("Не удалось отправить работу на сервер.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="mx-auto max-w-6xl mb px-4 py-24 md:px-8">

      <section className="mt-14 text-center">

        <h1
          className="text-4xl font-bold text-[var(--color-text-primary)] md:text-6xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Додати свою роботу
        </h1>

        <p
          className="mx-auto mt-5 mb-11 text-2xl leading-relaxed text-[var(--color-text-secondary)] md:text-3xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Надішліть свою роботу до галереї. Після перевірки вона з’явиться серед інших творчих робіт.
        </p>
      <SectionDivider/>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="space-y-6">
          <div className="rounded-[28px] border border-[var(--color-border)] bg-[var(--color-primary)] p-8 shadow-[var(--shadow-lg)]">
            <h2
              className="text-3xl font-bold text-[var(--color-background-soft)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Перед публікацією
            </h2>

            <p className="mt-4 leading-8 text-[var(--color-background-soft)]/85">
              Завантажуйте лише власні роботи. Якщо у створенні був використаний AI, це потрібно чесно вказати в описі або техніці.
            </p>

          </div>

          <div className="rounded-[28px] border border-[var(--color-border)] bg-[var(--color-background-soft)] p-7 shadow-[var(--shadow-sm)]">
            <h3
              className="text-2xl font-bold text-[var(--color-text-primary)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Що варто додати?
            </h3>

            <ul className="mt-5 space-y-3 leading-7 text-[var(--color-text-secondary)]">
              <li>Назву роботи.</li>
              <li>Короткий опис і задум.</li>
              <li>Ім'я автора або нікнейм.</li>
              <li>Категорію, стиль та техніку.</li>
              <li>Зображення хорошої якості.</li>
            </ul>
          </div>
        </aside>

        <section className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-background-soft)] p-5 shadow-[var(--shadow-lg)] md:p-8">
          <div className="mb-7 border-b border-[var(--color-border)] pb-5">
            <h2
              className="text-3xl font-bold text-[var(--color-text-primary)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Форма публікації
            </h2>

            <p className="mt-2 text-[var(--color-text-secondary)]">
              Заповніть поля нижче, щоб відправити роботу на модерацію.
            </p>
          </div>

          <SuccessMessage isVisible={success} />

          {submitError && (
            <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
              {submitError}
            </div>
          )}

          <div className="mt-6">
            <SubmitArtworkForm
              form={form}
              errors={errors}
              preview={preview}
              isSubmitting={isSubmitting}
              onSubmit={handleSubmit}
              onChange={handleChange}
              onFileChange={handleFileChange}
            />
          </div>
        </section>
      </section>
    </main>
  );
}

import { useState } from "react";
import PageTitle from "../components/PageTitle";

import SuccessMessage from "../sections/submit/SuccessMessage";
import SubmitArtworkForm from "../sections/submit/SubmitArtworkForm";

import type {
  SubmitFormErrors,
  SubmitFormState,
} from "../types/submit";

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

  const [errors, setErrors] =
    useState<SubmitFormErrors>({});

  const [preview, setPreview] =
    useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

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

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file =
      e.target.files?.[0] ?? null;

    setForm((prev) => ({
      ...prev,
      image: file,
    }));

    if (!file) {
      setPreview(null);
      return;
    }

    const url =
      URL.createObjectURL(file);

    setPreview(url);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    const validationErrors =
      validateSubmitForm(form);

    setErrors(validationErrors);

    if (
      Object.keys(validationErrors).length > 0
    ) {
      return;
    }

    setSuccess(false);
    setIsSubmitting(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 1000),
    );

    console.log("PENDING ARTWORK", {
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
    setSuccess(true);
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <PageTitle
        title="Submit Artwork"
        subtitle="Send your artwork for moderation"
      />

      <SuccessMessage
        isVisible={success}
      />

      <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-sm sm:p-6">
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
    </div>
  );
}
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
    <main className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      <SectionDivider />

      <section className="mt-14 text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[var(--color-text-muted)]">
          Share your artwork
        </p>

        <h1
          className="text-4xl font-bold text-[var(--color-text-primary)] md:text-6xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Р”РѕРґР°С‚Рё СЃРІРѕСЋ СЂРѕР±РѕС‚Сѓ
        </h1>

        <p
          className="mx-auto mt-5  text-2xl leading-relaxed text-[var(--color-text-secondary)] md:text-3xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          РќР°РґС–С€Р»С–С‚СЊ СЃРІРѕСЋ СЂРѕР±РѕС‚Сѓ РґРѕ РіР°Р»РµСЂРµС—. РџС–СЃР»СЏ РїРµСЂРµРІС–СЂРєРё РІРѕРЅР° Р·вЂ™СЏРІРёС‚СЊСЃСЏ СЃРµСЂРµРґ
          С–РЅС€РёС… С‚РІРѕСЂС‡РёС… СЂРѕР±С–С‚.
        </p>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="space-y-6">
          <div className="rounded-[28px] border border-[var(--color-border)] bg-[var(--color-primary)] p-8 shadow-[var(--shadow-lg)]">
            <h2
              className="text-3xl font-bold text-[var(--color-background-soft)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              РџРµСЂРµРґ РїСѓР±Р»С–РєР°С†С–С”СЋ
            </h2>

            <p className="mt-4 leading-8 text-[var(--color-background-soft)]/85">
              Р—Р°РІР°РЅС‚Р°Р¶СѓР№С‚Рµ Р»РёС€Рµ РІР»Р°СЃРЅС– СЂРѕР±РѕС‚Рё. РЇРєС‰Рѕ Сѓ СЃС‚РІРѕСЂРµРЅРЅС– Р±СѓРІ РІРёРєРѕСЂРёСЃС‚Р°РЅРёР№
              AI, С†Рµ РїРѕС‚СЂС–Р±РЅРѕ С‡РµСЃРЅРѕ РІРєР°Р·Р°С‚Рё РІ РѕРїРёСЃС– Р°Р±Рѕ С‚РµС…РЅС–С†С–.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl bg-[var(--color-background-soft)]/12 p-4">
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-background-soft)]/60">
                  Р¤РѕСЂРјР°С‚
                </p>

                <p
                  className="mt-1 text-2xl font-bold text-[var(--color-background-soft)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Р”С–РґР¶РёС‚Р°Р»
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-[var(--color-border)] bg-[var(--color-background-soft)] p-7 shadow-[var(--shadow-sm)]">
            <h3
              className="text-2xl font-bold text-[var(--color-text-primary)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Р©Рѕ РІР°СЂС‚Рѕ РґРѕРґР°С‚Рё?
            </h3>

            <ul className="mt-5 space-y-3 leading-7 text-[var(--color-text-secondary)]">
              <li>РќР°Р·РІСѓ СЂРѕР±РѕС‚Рё.</li>
              <li>РљРѕСЂРѕС‚РєРёР№ РѕРїРёСЃ С– Р·Р°РґСѓРј.</li>
              <li>Р†РјвЂ™СЏ Р°РІС‚РѕСЂР° Р°Р±Рѕ РЅС–РєРЅРµР№Рј.</li>
              <li>РљР°С‚РµРіРѕСЂС–СЋ, СЃС‚РёР»СЊ С– С‚РµС…РЅС–РєСѓ.</li>
              <li>Р—РѕР±СЂР°Р¶РµРЅРЅСЏ С…РѕСЂРѕС€РѕС— СЏРєРѕСЃС‚С–.</li>
            </ul>
          </div>
        </aside>

        <section className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-background-soft)] p-5 shadow-[var(--shadow-lg)] md:p-8">
          <div className="mb-7 border-b border-[var(--color-border)] pb-5">
            <h2
              className="text-3xl font-bold text-[var(--color-text-primary)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Р¤РѕСЂРјР° РїСѓР±Р»С–РєР°С†С–С—
            </h2>

            <p className="mt-2 text-[var(--color-text-secondary)]">
              Р—Р°РїРѕРІРЅС–С‚СЊ РїРѕР»СЏ РЅРёР¶С‡Рµ, С‰РѕР± РІС–РґРїСЂР°РІРёС‚Рё СЂРѕР±РѕС‚Сѓ РЅР° РјРѕРґРµСЂР°С†С–СЋ.
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

import { useState } from "react";
import { Link } from "react-router-dom";

import GalleryGrid from "../sections/gallery/GalleryGrid";

import { artworks } from "../data/Artworks";

export default function GalleryPage() {
  const [isRulesOpen, setIsRulesOpen] = useState(false);

  return (
    <main className="mx-auto max-w-6xl px-4 py-35 md:px-8">
      <section className="text-center">
        <h1
          className="text-4xl font-bold text-[var(--color-text-primary)] md:text-5xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Галерея робіт
        </h1>

        <p
          className="mx-auto mt-5  text-2xl leading-relaxed text-[var(--color-text-secondary)] md:text-3xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Тут художники діляться своїми роботами. Натхнення поруч — варто лише
          подивитись.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            to="/submit"
            className="rounded-full bg-[var(--color-primary)] px-8 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-background-soft)] shadow-[var(--shadow-md)] transition duration-300 hover:-translate-y-1 hover:bg-[var(--color-primary-hover)] hover:!text-[var(--color-background-soft)] hover:shadow-[var(--shadow-lg)]"
          >
            Додати свою роботу
          </Link>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-primary)] shadow-[var(--shadow-md)]">
        <button
          type="button"
          onClick={() => setIsRulesOpen((prev) => !prev)}
          className="flex w-full items-start justify-between gap-6 p-6 text-left md:p-7"
        >
          <div>
            <h2
              className="text-2xl font-bold text-[var(--color-background-soft)] md:text-3xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Важливо! Авторське право та AI
            </h2>

            <p className="mt-1 text-sm text-[var(--color-background-soft)]/70">
              Перед публікацією ознайомтесь із правилами
            </p>
          </div>

          <span
            className={`mt-2 block h-7 w-7 border-l border-t border-[var(--color-background-soft)] transition-transform duration-300 ${
              isRulesOpen ? "rotate-45" : "rotate-[225deg]"
            }`}
          />
        </button>

        <div
          className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
            isRulesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div
              className={`grid gap-5 px-6 pb-6 transition-all duration-500 ease-in-out md:grid-cols-3 md:px-7 md:pb-7 ${
                isRulesOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-4 opacity-0"
              }`}
            >
              <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background-soft)] p-5 shadow-[var(--shadow-sm)]">
                <h3
                  className="text-xl font-bold text-[var(--color-text-primary)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Тільки власні роботи
                </h3>

                <p className="mt-3 leading-7 text-[var(--color-text-secondary)]">
                  Ви маєте право публікувати лише ті роботи, автором яких є ви.
                  Публікація чужих робіт без дозволу — порушення авторського
                  права.
                </p>
              </article>

              <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background-soft)] p-5 shadow-[var(--shadow-sm)]">
                <h3
                  className="text-xl font-bold text-[var(--color-text-primary)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Роботи з AI
                </h3>

                <p className="mt-3 leading-7 text-[var(--color-text-secondary)]">
                  Якщо робота була створена або частково згенерована за
                  допомогою AI — обов’язково позначайте це. Видавати
                  AI-генерацію за власноруч намальовану роботу заборонено.
                </p>
              </article>

              <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background-soft)] p-5 shadow-[var(--shadow-sm)]">
                <h3
                  className="text-xl font-bold text-[var(--color-text-primary)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Відповідальність
                </h3>

                <p className="mt-3 leading-7 text-[var(--color-text-secondary)]">
                  Публікуючи роботу, ви підтверджуєте, що маєте всі права на
                  неї. У разі порушень робота буде видалена, а акаунт
                  заблокований.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <GalleryGrid artworks={artworks} />
      </section>
    </main>
  );
}
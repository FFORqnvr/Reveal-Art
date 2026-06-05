import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionDivider from "../components/SectionDivider";

import GalleryGrid from "../sections/gallery/GalleryGrid";

import type { Artwork } from "../types/Artwork";

export default function GalleryPage() {
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadArtworks() {
      try {
        setError("");

        const response = await fetch(
          "http://localhost:4000/api/artworks/published",
        );

        if (!response.ok) {
          throw new Error("Failed to load artworks");
        }

        const data = await response.json();

        setArtworks(data);
      } catch {
        setError("Не удалось загрузить работы с сервера.");
      } finally {
        setIsLoading(false);
      }
    }

    loadArtworks();
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-4 py-35 md:px-8">
      <section className="text-center">
        <h1
          className="text-4xl font-bold text-[var(--color-text-primary)] md:text-5xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Р“Р°Р»РµСЂРµСЏ СЂРѕР±С–С‚
        </h1>

        <p
          className="mx-auto mt-5 text-2xl leading-relaxed text-[var(--color-text-idea-p)] md:text-3xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          РўСѓС‚ С…СѓРґРѕР¶РЅРёРєРё РґС–Р»СЏС‚СЊСЃСЏ СЃРІРѕС—РјРё СЂРѕР±РѕС‚Р°РјРё. РќР°С‚С…РЅРµРЅРЅСЏ РїРѕСЂСѓС‡ вЂ” РІР°СЂС‚Рѕ Р»РёС€Рµ
          РїРѕРґРёРІРёС‚РёСЃСЊ.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            to="/submit"
            className="mb-11 rounded-full bg-[var(--color-primary)] px-8 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-background-soft)] shadow-[var(--shadow-md)] transition duration-300 hover:-translate-y-1 hover:bg-[var(--color-primary-hover)] hover:!text-[var(--color-background-soft)] hover:shadow-[var(--shadow-lg)]"
          >
            Р”РѕРґР°С‚Рё СЃРІРѕСЋ СЂРѕР±РѕС‚Сѓ
          </Link>
        </div>
      </section>

      <div className="relative left-1/2 w-screen -translate-x-1/2 px-4 md:px-8">
        <SectionDivider />
      </div>

      <section className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-gallery-warning-bg)] shadow-[var(--shadow-md)]">
        <button
          type="button"
          onClick={() => setIsRulesOpen((prev) => !prev)}
          className="flex w-full items-start justify-between gap-6 p-6 text-left md:p-7"
        >
          <div>
            <h2
              className="text-2xl font-bold text-[var(--color-gallery-text)] md:text-3xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Р’Р°Р¶Р»РёРІРѕ! РђРІС‚РѕСЂСЃСЊРєРµ РїСЂР°РІРѕ С‚Р° AI
            </h2>

            <p className="mt-1 text-sm text-[var(--color-background-soft)]/70">
              РџРµСЂРµРґ РїСѓР±Р»С–РєР°С†С–С”СЋ РѕР·РЅР°Р№РѕРјС‚РµСЃСЊ С–Р· РїСЂР°РІРёР»Р°РјРё
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
              <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-gallery-card-bg)] p-5 shadow-[var(--shadow-sm)]">
                <h3
                  className="text-xl font-bold text-[var(--color-text-idea-head-card)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  РўС–Р»СЊРєРё РІР»Р°СЃРЅС– СЂРѕР±РѕС‚Рё
                </h3>

                <p className="mt-3 leading-7 text-[var(--color-text-idea-p-card)]">
                  Р’Рё РјР°С”С‚Рµ РїСЂР°РІРѕ РїСѓР±Р»С–РєСѓРІР°С‚Рё Р»РёС€Рµ С‚С– СЂРѕР±РѕС‚Рё, Р°РІС‚РѕСЂРѕРј СЏРєРёС… С” РІРё.
                  РџСѓР±Р»С–РєР°С†С–СЏ С‡СѓР¶РёС… СЂРѕР±С–С‚ Р±РµР· РґРѕР·РІРѕР»Сѓ вЂ” РїРѕСЂСѓС€РµРЅРЅСЏ Р°РІС‚РѕСЂСЃСЊРєРѕРіРѕ
                  РїСЂР°РІР°.
                </p>
              </article>

              <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-gallery-card-bg)] p-5 shadow-[var(--shadow-sm)]">
                <h3
                  className="text-xl font-bold text-[var(--color-text-idea-head-card)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Р РѕР±РѕС‚Рё Р· AI
                </h3>

                <p className="mt-3 leading-7 text-[var(--color-text-idea-p-card)]">
                  РЇРєС‰Рѕ СЂРѕР±РѕС‚Р° Р±СѓР»Р° СЃС‚РІРѕСЂРµРЅР° Р°Р±Рѕ С‡Р°СЃС‚РєРѕРІРѕ Р·РіРµРЅРµСЂРѕРІР°РЅР° Р·Р°
                  РґРѕРїРѕРјРѕРіРѕСЋ AI вЂ” РѕР±РѕРІвЂ™СЏР·РєРѕРІРѕ РїРѕР·РЅР°С‡Р°Р№С‚Рµ С†Рµ. Р’РёРґР°РІР°С‚Рё
                  AI-РіРµРЅРµСЂР°С†С–СЋ Р·Р° РІР»Р°СЃРЅРѕСЂСѓС‡ РЅР°РјР°Р»СЊРѕРІР°РЅСѓ СЂРѕР±РѕС‚Сѓ Р·Р°Р±РѕСЂРѕРЅРµРЅРѕ.
                </p>
              </article>

              <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-gallery-card-bg)] p-5 shadow-[var(--shadow-sm)]">
                <h3
                  className="text-xl font-bold text-[var(--color-text-idea-head-card)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Р’С–РґРїРѕРІС–РґР°Р»СЊРЅС–СЃС‚СЊ
                </h3>

                <p className="mt-3 leading-7 text-[var(--color-text-idea-p-card)]">
                  РџСѓР±Р»С–РєСѓСЋС‡Рё СЂРѕР±РѕС‚Сѓ, РІРё РїС–РґС‚РІРµСЂРґР¶СѓС”С‚Рµ, С‰Рѕ РјР°С”С‚Рµ РІСЃС– РїСЂР°РІР° РЅР°
                  РЅРµС—. РЈ СЂР°Р·С– РїРѕСЂСѓС€РµРЅСЊ СЂРѕР±РѕС‚Р° Р±СѓРґРµ РІРёРґР°Р»РµРЅР°, Р° Р°РєР°СѓРЅС‚
                  Р·Р°Р±Р»РѕРєРѕРІР°РЅРёР№.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14">
        {isLoading && (
          <p className="text-center text-xl text-[var(--color-text-secondary)]">
            Loading artworks...
          </p>
        )}

        {error && (
          <p className="text-center text-xl text-[var(--color-danger)]">
            {error}
          </p>
        )}

        {!isLoading && !error && <GalleryGrid artworks={artworks} />}
      </section>
    </main>
  );
}

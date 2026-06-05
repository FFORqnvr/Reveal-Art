import SectionDivider from "../components/SectionDivider";
import SketchIntroSection from "../sections/process/SketchIntroSection";
import SketchTrainerSection from "../sections/process/SketchTrainerSection";
import ProcessTheorySection from "../sections/process/ProcessTheorySection";

export default function ProcessPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-24 mt-11 md:px-8">
      <section className="text-center">
        <h1
          className="text-4xl mt-5 font-bold text-[var(--color-text-idea-p)] md:text-5xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Етапи роботи
        </h1>

        <p
          className="mx-auto mt-10 mb-11 font-bold text-3xl leading-relaxed text-[var(--color-text-idea-p)] md:text-3xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Від першої лінії до фінальної деталі - розберемо кожен крок створення цифрового арту.
        </p>
      </section>

            <div className="relative left-1/2 w-[1500px] -translate-x-1/2 px-4 md:px-8">
              <SectionDivider />
            </div>

      <SketchIntroSection />
      <SketchTrainerSection />
      <ProcessTheorySection />
    </main>
  );
}
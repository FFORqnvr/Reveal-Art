import SectionDivider from "../components/SectionDivider";
import SketchIntroSection from "../sections/process/SketchIntroSection";
import SketchTrainerSection from "../sections/process/SketchTrainerSection";

export default function ProcessPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      <SectionDivider />

      <SketchIntroSection />
      <SketchTrainerSection />
    </main>
  );
}
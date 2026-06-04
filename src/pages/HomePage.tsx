import HeroSection from "../sections/home/HeroSection";
import AboutSection from "../sections/home/AboutSection";
import ExploreSection from "../sections/home/ExploreSection";


export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        {/* Shared background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-bg2.png')",
          }}
        />

        {/* Shared overlay */}
        <div className="absolute inset-0 bg-[var(--color-background)]/40" />

        {/* Sections */}
        <div className="relative z-10">
          <HeroSection />
          <AboutSection />
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
         
        <ExploreSection />
      </div>
    </>
  );
}
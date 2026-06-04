import HeroSection from "../sections/home/HeroSection";
import AboutSection from "../sections/home/AboutSection";
import ExploreSection from "../sections/home/ExploreSection";
import SupportSection from "../sections/home/SupportSection";
import FeaturedArtworksSection from "../sections/home/FeaturedArtworksSection";
import FinalCtaSection from "../sections/home/FinalCtaSection";

import { artworks } from "../data/Artworks";

export default function HomePage() {
  const previewArtworks = artworks
    .filter((artwork) => artwork.status === "published")
    .slice(0, 3);

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
        <SupportSection />
        <FeaturedArtworksSection artworks={previewArtworks} />
        <FinalCtaSection />
      </div>
    </>
  );
}
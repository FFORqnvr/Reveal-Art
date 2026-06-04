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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <HeroSection />
      <AboutSection />
      <ExploreSection />
      <SupportSection />
      <FeaturedArtworksSection artworks={previewArtworks} />
      <FinalCtaSection />
    </div>
  );
}
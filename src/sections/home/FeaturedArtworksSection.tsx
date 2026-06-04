import { Link } from "react-router-dom";
import Button from "../../components/Button";
import ArtworkCard from "../../components/ArtworkCard";
import type { Artwork } from "../../types/Artwork";

type FeaturedArtworksSectionProps = {
  artworks: Artwork[];
};

export default function FeaturedArtworksSection({
  artworks,
}: FeaturedArtworksSectionProps) {
  return (
    <section className="mt-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">
          Featured Artworks
        </h2>

        <Link to="/gallery">
          <Button>View All</Button>
        </Link>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {artworks.map((artwork) => (
          <ArtworkCard
            key={artwork.id}
            artwork={artwork}
          />
        ))}
      </div>
    </section>
  );
}
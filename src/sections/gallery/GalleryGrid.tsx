import ArtworkCard from "../../components/ArtworkCard";
import type { Artwork } from "../../types/Artwork";

type GalleryGridProps = {
  artworks: Artwork[];
};

export default function GalleryGrid({
  artworks,
}: GalleryGridProps) {
  if (artworks.length === 0) {
    return (
      <div className="py-12 text-center opacity-60">
        No artworks found
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {artworks.map((artwork) => (
        <ArtworkCard
          key={artwork.id}
          artwork={artwork}
        />
      ))}
    </div>
  );
}
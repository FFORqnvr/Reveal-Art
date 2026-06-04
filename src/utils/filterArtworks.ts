import type { Artwork } from "../types/Artwork";
import type { GalleryFilterState } from "../types/gallery";

export function filterArtworks(
  artworks: Artwork[],
  filters: GalleryFilterState,
): Artwork[] {
  let result = artworks.filter(
    (artwork) => artwork.status === "published",
  );

  if (filters.category !== "all") {
    result = result.filter(
      (artwork) => artwork.category === filters.category,
    );
  }

  if (filters.style !== "all") {
    result = result.filter(
      (artwork) => artwork.style === filters.style,
    );
  }

  if (filters.technique !== "all") {
    result = result.filter(
      (artwork) => artwork.technique === filters.technique,
    );
  }

  if (filters.sort === "title") {
    result = [...result].sort((a, b) =>
      a.title.localeCompare(b.title),
    );
  }

  if (filters.sort === "artist") {
    result = [...result].sort((a, b) =>
      a.artistName.localeCompare(b.artistName),
    );
  }

  return result;
}
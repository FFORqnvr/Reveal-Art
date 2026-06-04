import { useMemo, useState } from "react";

import PageTitle from "../components/PageTitle";

import GalleryFilters from "../sections/gallery/GalleryFilters";
import GalleryGrid from "../sections/gallery/GalleryGrid";

import { artworks } from "../data/Artworks";

import { filterArtworks } from "../utils/filterArtworks";

import type { GalleryFilterState } from "../types/gallery";

export default function GalleryPage() {
  const [filters, setFilters] =
    useState<GalleryFilterState>({
      category: "all",
      style: "all",
      technique: "all",
      sort: "new",
    });

  const filteredArtworks = useMemo(
    () => filterArtworks(artworks, filters),
    [filters],
  );

  const handleFilterChange = (
    name: keyof GalleryFilterState,
    value: string,
  ) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6 md:px-6">
      <PageTitle
        title="Gallery"
        subtitle="Published artworks from the community"
      />

      <GalleryFilters
        filters={filters}
        onChange={handleFilterChange}
      />

      <div className="mt-6">
        <GalleryGrid
          artworks={filteredArtworks}
        />
      </div>
    </div>
  );
}
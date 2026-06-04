import type { GalleryFilterState } from "../../types/gallery";

type GalleryFiltersProps = {
  filters: GalleryFilterState;
  onChange: (
    name: keyof GalleryFilterState,
    value: string,
  ) => void;
};

export default function GalleryFilters({
  filters,
  onChange,
}: GalleryFiltersProps) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      <select
        value={filters.category}
        onChange={(e) =>
          onChange("category", e.target.value)
        }
        className="w-full rounded border px-2 py-1 sm:w-auto"
      >
        <option value="all">All categories</option>
      </select>

      <select
        value={filters.style}
        onChange={(e) =>
          onChange("style", e.target.value)
        }
        className="w-full rounded border px-2 py-1 sm:w-auto"
      >
        <option value="all">All styles</option>
      </select>

      <select
        value={filters.technique}
        onChange={(e) =>
          onChange("technique", e.target.value)
        }
        className="w-full rounded border px-2 py-1 sm:w-auto"
      >
        <option value="all">All techniques</option>
      </select>

      <select
        value={filters.sort}
        onChange={(e) =>
          onChange("sort", e.target.value)
        }
        className="w-full rounded border px-2 py-1 sm:w-auto"
      >
        <option value="new">Newest</option>
        <option value="title">Title</option>
        <option value="artist">Artist</option>
      </select>
    </div>
  );
}
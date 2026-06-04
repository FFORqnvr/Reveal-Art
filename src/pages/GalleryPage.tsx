import { useMemo, useState } from "react";
import { artworks } from "../data/Artworks";
import PageTitle from "../components/PageTitle";
import ArtworkCard from "../components/ArtworkCard";

type FilterState = {
  category: string;
  style: string;
  technique: string;
  sort: string;
};

export default function GalleryPage() {
  const [filters, setFilters] = useState<FilterState>({
    category: "all",
    style: "all",
    technique: "all",
    sort: "new",
  });

  const published = useMemo(() => {
    let result = artworks.filter((a) => a.status === "published");

    if (filters.category !== "all") {
      result = result.filter((a) => a.category === filters.category);
    }

    if (filters.style !== "all") {
      result = result.filter((a) => a.style === filters.style);
    }

    if (filters.technique !== "all") {
      result = result.filter((a) => a.technique === filters.technique);
    }

    if (filters.sort === "title") {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    }

    if (filters.sort === "artist") {
      result = [...result].sort((a, b) =>
        a.artistName.localeCompare(b.artistName)
      );
    }

    return result;
  }, [filters]);

  const isEmpty = published.length === 0;

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-6">
      <PageTitle
        title="Gallery"
        subtitle="Published artworks from the community"
      />

      {/* Filters */}
      <div className="mt-4 flex gap-2 flex-wrap">
        <select
          onChange={(e) =>
            setFilters((p) => ({ ...p, category: e.target.value }))
          }
          className="border px-2 py-1 rounded w-full sm:w-auto"
        >
          <option value="all">All categories</option>
        </select>

        <select
          onChange={(e) =>
            setFilters((p) => ({ ...p, style: e.target.value }))
          }
          className="border px-2 py-1 rounded w-full sm:w-auto"
        >
          <option value="all">All styles</option>
        </select>

        <select
          onChange={(e) =>
            setFilters((p) => ({ ...p, technique: e.target.value }))
          }
          className="border px-2 py-1 rounded w-full sm:w-auto"
        >
          <option value="all">All techniques</option>
        </select>

        <select
          onChange={(e) =>
            setFilters((p) => ({ ...p, sort: e.target.value }))
          }
          className="border px-2 py-1 rounded w-full sm:w-auto"
        >
          <option value="new">Newest</option>
          <option value="title">Title</option>
          <option value="artist">Artist</option>
        </select>
      </div>

      {/* Grid */}
      <div className="mt-6">
        {isEmpty ? (
          <div className="text-center opacity-60 py-12">
            No artworks found
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {published.map((art) => (
              <ArtworkCard key={art.id} artwork={art} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
import { useState } from "react";
import { artworks } from "../data/Artworks";
import ArtworkCard from "../components/ArtworkCard";
import type { ArtworkStatus } from "../types/ArtworkStatus";

type FilterStatus = ArtworkStatus | "all";

const statuses: FilterStatus[] = ["all", "published", "pending", "rejected"];

export default function GalleryPage() {
  const [status, setStatus] = useState<FilterStatus>("published");

  const filtered =
    status === "all"
      ? artworks
      : artworks.filter((a) => a.status === status);

  return (
    <div>
      <h1 className="text-2xl font-semibold">Gallery</h1>

      <div className="mt-4 flex gap-2 flex-wrap">
        {statuses.map((s) => (
          <button
            key={s}
            onClick={() => setStatus(s)}
            className={`px-3 py-1 rounded border ${
              status === s ? "opacity-100" : "opacity-50"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.length > 0 ? (
          filtered.map((art) => (
            <ArtworkCard key={art.id} art={art} />
          ))
        ) : (
          <div className="col-span-full opacity-50 text-center py-10">
            No artworks found
          </div>
        )}
      </div>
    </div>
  );
}
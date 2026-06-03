import { useState } from "react";
import { artworks as initialArtworks } from "../data/Artworks";
import type { Artwork } from "../types/Artwork";

export default function AdminPage() {
  const [artworks, setArtworks] = useState<Artwork[]>(initialArtworks);

  const updateStatus = (id: string, status: Artwork["status"]) => {
    setArtworks((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status } : a))
    );
  };

  const pending = artworks.filter((a) => a.status === "pending");

  return (
    <div>
      <h1 className="text-2xl font-semibold">Admin</h1>

      <div className="mt-6 space-y-4">
        {pending.length === 0 ? (
          <div className="opacity-50">No pending artworks</div>
        ) : (
          pending.map((art) => (
            <div
              key={art.id}
              className="border border-[var(--color-border)] rounded-[14px] bg-[var(--color-surface)] p-4 flex gap-4 items-center justify-between"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={art.imageUrl}
                  className="w-16 h-16 object-cover rounded"
                />

                <div>
                  <div className="font-medium">{art.title}</div>
                  <div className="text-sm opacity-70">
                    {art.artistName} (@{art.artistNickname})
                  </div>

                  <div className="text-xs mt-1 opacity-50">
                    {art.category} • {art.style}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => updateStatus(art.id, "published")}
                  className="px-3 py-1 border rounded hover:opacity-80"
                >
                  Publish
                </button>

                <button
                  onClick={() => updateStatus(art.id, "rejected")}
                  className="px-3 py-1 border rounded hover:opacity-80"
                >
                  Reject
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
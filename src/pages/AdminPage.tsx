import { useState } from "react";
import PageTitle from "../components/PageTitle";
import { artworks as mockArtworks } from "../data/Artworks";
import type { Artwork } from "../data/Artworks";

export default function AdminPage() {
  const [artworks, setArtworks] = useState<Artwork[]>(mockArtworks);

  const pendingArtworks = artworks.filter(
    (artwork) => artwork.status === "pending"
  );

  const publishArtwork = (id: string) => {
    setArtworks((prev) =>
      prev.map((artwork) =>
        artwork.id === id
          ? { ...artwork, status: "published" }
          : artwork
      )
    );
  };

  const rejectArtwork = (id: string) => {
    setArtworks((prev) =>
      prev.map((artwork) =>
        artwork.id === id
          ? { ...artwork, status: "rejected" }
          : artwork
      )
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <PageTitle
        title="Admin Moderation"
        subtitle="Review submitted artworks (mock mode, no backend)"
      />

      <div className="mt-6 space-y-4">
        {pendingArtworks.length === 0 ? (
          <div className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
            No pending artworks. Everything is already processed.
          </div>
        ) : (
          pendingArtworks.map((artwork) => (
            <div
              key={artwork.id}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm p-5"
            >
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full max-h-[300px] object-cover rounded-xl border"
              />

              <div className="mt-4">
                <h3 className="text-lg font-semibold">{artwork.title}</h3>
                <p className="text-sm opacity-70">
                  {artwork.artistName} (@{artwork.artistNickname})
                </p>
              </div>

              <p className="mt-3 text-sm">{artwork.description}</p>

              <div className="flex flex-wrap gap-2 mt-3 text-xs">
                <span className="px-2 py-1 rounded bg-gray-100">
                  {artwork.category}
                </span>
                <span className="px-2 py-1 rounded bg-gray-100">
                  {artwork.style}
                </span>
                <span className="px-2 py-1 rounded bg-gray-100">
                  {artwork.technique}
                </span>
              </div>

              <div className="mt-3 text-xs text-orange-600 font-medium">
                Status: {artwork.status}
              </div>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => publishArtwork(artwork.id)}
                  className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
                >
                  Publish
                </button>

                <button
                  onClick={() => rejectArtwork(artwork.id)}
                  className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
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
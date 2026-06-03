import { useState } from "react";
import PageTitle from "../components/PageTitle";
import { artworks as mockArtworks } from "../data/Artworks";
import type { Artwork } from "../data/Artworks";

export default function AdminPage() {
  const [artworks, setArtworks] = useState<Artwork[]>(mockArtworks);
  const [message, setMessage] = useState<string | null>(null);

  const pendingArtworks = artworks.filter(
    (artwork) => artwork.status === "pending"
  );

  const publishArtwork = (id: string) => {
    setArtworks((prev) =>
      prev.map((artwork) =>
        artwork.id === id ? { ...artwork, status: "published" } : artwork
      )
    );

    setMessage("Artwork published successfully");
    setTimeout(() => setMessage(null), 2000);
  };

  const rejectArtwork = (id: string) => {
    setArtworks((prev) =>
      prev.map((artwork) =>
        artwork.id === id ? { ...artwork, status: "rejected" } : artwork
      )
    );

    setMessage("Artwork rejected");
    setTimeout(() => setMessage(null), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <PageTitle
        title="Admin Moderation"
        subtitle="Review submitted artworks (mock mode, no backend)"
      />

      {message && (
        <div className="mt-4 p-3 sm:p-4 rounded-xl border border-blue-200 bg-blue-50 text-blue-700 text-sm sm:text-base">
          {message}
        </div>
      )}

      <div className="mt-6 space-y-4">
        {pendingArtworks.length === 0 ? (
          <div className="p-8 sm:p-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] text-center">
            <div className="text-lg font-semibold mb-2">
              🎉 All caught up!
            </div>
            <div className="text-sm opacity-70">
              There are no pending artworks to review.
            </div>
          </div>
        ) : (
          pendingArtworks.map((artwork) => (
            <div
              key={artwork.id}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm p-4 sm:p-5 transition hover:shadow-md"
            >
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full max-h-[260px] sm:max-h-[320px] object-cover rounded-xl border"
              />

              <div className="mt-4">
                <h3 className="text-base sm:text-lg font-semibold">
                  {artwork.title}
                </h3>
                <p className="text-sm opacity-70">
                  {artwork.artistName} (@{artwork.artistNickname})
                </p>
              </div>

              <p className="mt-3 text-sm line-clamp-3">
                {artwork.description}
              </p>

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

              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <button
                  onClick={() => publishArtwork(artwork.id)}
                  className="w-full sm:w-auto px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
                >
                  Publish
                </button>

                <button
                  onClick={() => rejectArtwork(artwork.id)}
                  className="w-full sm:w-auto px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
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
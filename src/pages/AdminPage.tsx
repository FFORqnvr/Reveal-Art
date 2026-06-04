import { useState } from "react";

import PageTitle from "../components/PageTitle";

import { artworks as mockArtworks } from "../data/Artworks";
import type { Artwork } from "../data/Artworks";

import AdminArtworkCard from "../sections/admin/AdminArtworkCard";
import AdminEmptyState from "../sections/admin/AdminEmptyState";
import AdminMessage from "../sections/admin/AdminMessage";

export default function AdminPage() {
  const [artworks, setArtworks] =
    useState<Artwork[]>(mockArtworks);

  const [message, setMessage] =
    useState<string | null>(null);

  const pendingArtworks = artworks.filter(
    (artwork) => artwork.status === "pending",
  );

  const publishArtwork = (id: string) => {
    setArtworks((prev) =>
      prev.map((artwork) =>
        artwork.id === id
          ? {
              ...artwork,
              status: "published",
            }
          : artwork,
      ),
    );

    setMessage(
      "Artwork published successfully",
    );

    setTimeout(
      () => setMessage(null),
      2000,
    );
  };

  const rejectArtwork = (id: string) => {
    setArtworks((prev) =>
      prev.map((artwork) =>
        artwork.id === id
          ? {
              ...artwork,
              status: "rejected",
            }
          : artwork,
      ),
    );

    setMessage("Artwork rejected");

    setTimeout(
      () => setMessage(null),
      2000,
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 sm:px-6">
      <PageTitle
        title="Admin Moderation"
        subtitle="Review submitted artworks (mock mode, no backend)"
      />

      <AdminMessage
        message={message}
      />

      <div className="mt-6 space-y-4">
        {pendingArtworks.length === 0 ? (
          <AdminEmptyState />
        ) : (
          pendingArtworks.map((artwork) => (
            <AdminArtworkCard
              key={artwork.id}
              artwork={artwork}
              onPublish={publishArtwork}
              onReject={rejectArtwork}
            />
          ))
        )}
      </div>
    </div>
  );
}
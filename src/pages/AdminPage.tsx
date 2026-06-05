import { useEffect, useState } from "react";

import PageTitle from "../components/PageTitle";

import type { Artwork } from "../types/Artwork";

import AdminArtworkCard from "../sections/admin/AdminArtworkCard";
import AdminEmptyState from "../sections/admin/AdminEmptyState";
import AdminMessage from "../sections/admin/AdminMessage";

export default function AdminPage() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const loadPendingArtworks = async () => {
    try {
      setError("");

      const response = await fetch("http://localhost:4000/api/artworks/pending");

      if (!response.ok) {
        throw new Error("Failed to load pending artworks");
      }

      const data = await response.json();

      setArtworks(data);
    } catch {
      setError("Failed to load artworks from server.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadPendingArtworks();
  }, []);

  const updateArtworkStatus = async (
    id: string,
    status: "published" | "rejected",
  ) => {
    try {
      setError("");

      const response = await fetch(
        `http://localhost:4000/api/artworks/${id}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to update artwork status");
      }

      setArtworks((prev) =>
        prev.filter((artwork) => artwork.id !== id),
      );

      setMessage(
        status === "published"
          ? "Artwork published successfully"
          : "Artwork rejected",
      );

      setTimeout(() => setMessage(null), 2000);
    } catch {
      setError("Failed to update artwork status.");
    }
  };

  const publishArtwork = (id: string) => {
    updateArtworkStatus(id, "published");
  };

  const rejectArtwork = (id: string) => {
    updateArtworkStatus(id, "rejected");
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-28 sm:px-6">
      <PageTitle
        title="Admin Moderation"
        subtitle="Review submitted artworks from backend"
      />

      <AdminMessage message={message} />

      {error && (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700 sm:p-4 sm:text-base">
          {error}
        </div>
      )}

      <div className="mt-6 space-y-4">
        {isLoading ? (
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center sm:p-10">
            Loading artworks...
          </div>
        ) : artworks.length === 0 ? (
          <AdminEmptyState />
        ) : (
          artworks.map((artwork) => (
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

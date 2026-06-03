import { useParams } from "react-router-dom";

import { artworks } from "../data/Artworks";
import { artists } from "../data/Artists";

export default function ArtworkDetailPage() {
  const { id } = useParams();

  const artwork = artworks.find((art) => art.id === id);

  if (!artwork) {
    return (
      <div className="py-10">
        <h1 className="text-2xl font-semibold">Artwork not found</h1>
      </div>
    );
  }

  const artist = artists.find(
    (artist) => artist.id === artwork.artistId
  );

  return (
    <div className="py-10 space-y-8">
      <div className="overflow-hidden rounded-[24px] border border-[var(--color-border)]">
        <img
          src={artwork.imageUrl}
          alt={artwork.title}
          loading="lazy"
          className="w-full max-h-[700px] object-cover"
        />
      </div>

      <div>
        <h1 className="text-4xl font-semibold">{artwork.title}</h1>

        {artist && (
          <div className="mt-3">
            <p className="font-medium">{artist.name}</p>
            <p className="opacity-70">@{artist.nickname}</p>
          </div>
        )}

        <p className="mt-6 leading-7 opacity-90">
          {artwork.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <div className="rounded-full border px-3 py-1 text-sm">
            Category: {artwork.category}
          </div>

          <div className="rounded-full border px-3 py-1 text-sm">
            Style: {artwork.style}
          </div>

          <div className="rounded-full border px-3 py-1 text-sm">
            Technique: {artwork.technique}
          </div>

          {artwork.year && (
            <div className="rounded-full border px-3 py-1 text-sm">
              Year: {artwork.year}
            </div>
          )}
        </div>
      </div>

      {artist && (
        <div className="rounded-3xl border p-6">
          <h2 className="text-2xl font-semibold mb-4">
            About the Artist
          </h2>

          <p className="font-medium">{artist.name}</p>

          <p className="opacity-70 mb-4">
            @{artist.nickname}
          </p>

          <p>{artist.bio}</p>
        </div>
      )}
    </div>
  );
}
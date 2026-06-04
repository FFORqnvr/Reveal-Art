import type { Artwork } from "../types/Artwork";

type Props = {
  artwork?: Artwork;
};

export default function ArtworkCard({ artwork }: Props) {
  if (!artwork) {
    console.warn("ArtworkCard: artwork is undefined or null");
    return null;
  }

  const hasImage = Boolean(artwork.imageUrl);

  if (!hasImage) {
    console.warn(
      `ArtworkCard: missing imageUrl for artwork id=${artwork.id}, title="${artwork.title}"`
    );
  }

  return (
    <div className="overflow-hidden rounded-[14px] border border-[var(--color-border)] bg-[var(--color-surface)] transition duration-200 hover:scale-[1.02]">
      {hasImage ? (
        <img
          src={artwork.imageUrl}
          alt={artwork.title}
          loading="lazy"
          className="h-48 w-full object-cover"
        />
      ) : (
        <div className="flex h-48 w-full items-center justify-center bg-gray-100 text-sm text-gray-500">
          Изображение не найдено
        </div>
      )}

      <div className="p-4">
        <div className="font-medium">{artwork.title}</div>

        <div className="text-sm opacity-70">
          {artwork.artistName} (@{artwork.artistNickname})
        </div>

        <div className="mt-2 text-xs opacity-50">
          {artwork.category} • {artwork.style} • {artwork.technique}
        </div>
      </div>
    </div>
  );
}
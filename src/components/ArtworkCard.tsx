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
      `ArtworkCard: missing imageUrl for artwork id=${artwork.id}, title="${artwork.title}"`,
    );
  }

  return (
    <article
      className="mx-auto w-full max-w-[280px] overflow-hidden rounded-[14px] border border-[var(--color-border)] bg-[var(--color-background-soft)] shadow-[var(--shadow-sm)] transition duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
      onContextMenu={(event) => event.preventDefault()}
    >
      {hasImage ? (
        <img
          src={artwork.imageUrl}
          alt={artwork.title}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          draggable={false}
          onContextMenu={(event) => event.preventDefault()}
          className="aspect-[4/5] w-full select-none object-cover"
        />
      ) : (
        <div className="flex aspect-[4/5] w-full items-center justify-center bg-[var(--color-surface)] text-sm text-[var(--color-text-muted)]">
          Image not found
        </div>
      )}

      <div className="p-3">
        <h3
          className="text-base font-bold text-[var(--color-text-primary)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {artwork.title}
        </h3>

        <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
          {artwork.artistName} (@{artwork.artistNickname})
        </p>

        <p className="mt-2 text-[10px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
          {artwork.category} • {artwork.style} • {artwork.technique}
        </p>
      </div>
    </article>
  );
}

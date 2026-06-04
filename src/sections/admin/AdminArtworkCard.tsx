import type { Artwork } from "../../data/Artworks";

type AdminArtworkCardProps = {
  artwork: Artwork;
  onPublish: (id: string) => void;
  onReject: (id: string) => void;
};

export default function AdminArtworkCard({
  artwork,
  onPublish,
  onReject,
}: AdminArtworkCardProps) {
  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-sm transition hover:shadow-md sm:p-5">
      <img
        src={artwork.imageUrl}
        alt={artwork.title}
        className="max-h-[260px] w-full rounded-xl border object-cover sm:max-h-[320px]"
      />

      <div className="mt-4">
        <h3 className="text-base font-semibold sm:text-lg">
          {artwork.title}
        </h3>

        <p className="text-sm opacity-70">
          {artwork.artistName} (@{artwork.artistNickname})
        </p>
      </div>

      <p className="mt-3 line-clamp-3 text-sm">
        {artwork.description}
      </p>

      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        <span className="rounded bg-gray-100 px-2 py-1">
          {artwork.category}
        </span>

        <span className="rounded bg-gray-100 px-2 py-1">
          {artwork.style}
        </span>

        <span className="rounded bg-gray-100 px-2 py-1">
          {artwork.technique}
        </span>
      </div>

      <div className="mt-3 text-xs font-medium text-orange-600">
        Status: {artwork.status}
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => onPublish(artwork.id)}
          className="w-full rounded-lg bg-green-600 px-4 py-2 text-white transition hover:bg-green-700 sm:w-auto"
        >
          Publish
        </button>

        <button
          type="button"
          onClick={() => onReject(artwork.id)}
          className="w-full rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700 sm:w-auto"
        >
          Reject
        </button>
      </div>
    </div>
  );
}
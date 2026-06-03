import type { Artwork } from "../types/Artwork";
import { artists } from "../data/Artists";

type Props = {
  art: Artwork;
};

export default function ArtworkCard({ art }: Props) {
  const artist = artists.find((a) => a.id === art.artistId);

  return (
    <div className="relative border border-[var(--color-border)] rounded-[14px] bg-[var(--color-surface)] overflow-hidden transition-all duration-200 hover:scale-[1.02] hover:shadow-md">
      {/* image */}
      <div className="relative overflow-hidden">
        <img
          src={art.imageUrl}
          alt={art.title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />

        {/* watermark */}
        <div className="absolute bottom-2 right-2 text-xs opacity-60 bg-black/40 text-white px-2 py-1 rounded">
          @{artist?.nickname ?? art.artistNickname}
        </div>
      </div>

      {/* content */}
      <div className="p-4">
        <div className="font-medium">{art.title}</div>

        <div className="text-sm opacity-70">
          {artist?.name ?? art.artistName}
        </div>

        <div className="mt-2 text-xs opacity-50">
          {art.category} • {art.style}
        </div>

        {/* status */}
        <div className="mt-3 text-xs">
          <span
            className={`px-2 py-1 rounded border text-[10px] ${
              art.status === "published"
                ? "opacity-100"
                : art.status === "pending"
                ? "opacity-60"
                : "opacity-40"
            }`}
          >
            {art.status}
          </span>
        </div>
      </div>
    </div>
  );
}
import type { Artwork } from "../types/Artwork";

type Props = {
  art: Artwork;
};

export default function ArtworkCard({ art }: Props) {
  return (
    <div className="rounded-[14px] border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden hover:scale-[1.02] transition duration-200">
      <img
        src={art.imageUrl}
        alt={art.title}
        loading="lazy"
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <div className="font-medium">{art.title}</div>

        <div className="text-sm opacity-70">
          {art.artistName} (@{art.artistNickname})
        </div>

        <div className="text-xs mt-2 opacity-50">
          {art.category} • {art.style} • {art.technique}
        </div>
      </div>
    </div>
  );
}
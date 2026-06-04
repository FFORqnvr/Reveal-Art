export type ArtworkStatus = "pending" | "published" | "rejected";

export type Artwork = {
  id: string;
  title: string;
  description: string;
  artistId: string;
  artistName: string;
  artistNickname: string;
  imageUrl: string;
  category: string;
  style: string;
  technique: string;
  year?: number;
  status: ArtworkStatus;
  createdAt: string;
};

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Neon Dreams",
    description: "A futuristic neon city landscape with cyberpunk vibes.",
    artistId: "a1",
    artistName: "Alex Morgan",
    artistNickname: "alexm",
    imageUrl: "/images/process/gallery-img.png",
    category: "digital",
    style: "modern",
    technique: "3d",
    year: 2024,
    status: "pending",
    createdAt: "2026-01-10",
  },
  {
    id: "2",
    title: "Silent Forest",
    description: "A calm and atmospheric forest painting with soft light.",
    artistId: "a2",
    artistName: "Emma Stone",
    artistNickname: "emstone",
    imageUrl: "/images/process/gallery-img-2.png",
    category: "painting",
    style: "classic",
    technique: "oil",
    year: 2023,
    status: "published",
    createdAt: "2026-01-05",
  },
  {
    id: "3",
    title: "Fragmented Reality",
    description: "Abstract composition exploring broken perception of reality.",
    artistId: "a3",
    artistName: "Daniel Lee",
    artistNickname: "dlee",
    imageUrl: "/images/process/gallery-img-3.png",
    category: "digital",
    style: "modern",
    technique: "3d",
    year: 2025,
    status: "pending",
    createdAt: "2026-01-12",
  },
];
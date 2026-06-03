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
    imageUrl: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
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
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
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
    imageUrl: "https://images.unsplash.com/photo-1541963463532-d68292c34b19",
    category: "digital",
    style: "modern",
    technique: "3d",
    year: 2025,
    status: "pending",
    createdAt: "2026-01-12",
  },
  {
    id: "4",
    title: "Golden Horizon",
    description: "Sunset over vast mountains painted in warm golden tones.",
    artistId: "a4",
    artistName: "Sophia White",
    artistNickname: "swhite",
    imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    category: "painting",
    style: "classic",
    technique: "oil",
    year: 2022,
    status: "rejected",
    createdAt: "2026-01-01",
  }
];
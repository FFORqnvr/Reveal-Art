import type { ArtworkStatus } from "./ArtworkStatus";

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
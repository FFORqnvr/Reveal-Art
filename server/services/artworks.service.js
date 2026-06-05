import { randomUUID } from "crypto";

import {
  readArtworks,
  writeArtworks,
} from "../storage/artworks.storage.js";

const PORT = 4000;

const allowedStatuses = ["pending", "published", "rejected"];

const requiredArtworkFields = [
  "title",
  "description",
  "artistName",
  "artistNickname",
  "category",
  "style",
  "technique",
];

export function getAllArtworks() {
  return readArtworks();
}

export function getPublishedArtworks() {
  const artworks = readArtworks();

  return artworks.filter(
    (artwork) => artwork.status === "published",
  );
}

export function getPendingArtworks() {
  const artworks = readArtworks();

  return artworks.filter(
    (artwork) => artwork.status === "pending",
  );
}

export function createArtwork({
  body,
  file,
}) {
  if (!file) {
    return {
      error: "Image is required",
      statusCode: 400,
    };
  }

  const missingField = requiredArtworkFields.find(
    (field) => !body[field]?.trim(),
  );

  if (missingField) {
    return {
      error: `${missingField} is required`,
      statusCode: 400,
    };
  }

  const artworks = readArtworks();

  const newArtwork = {
    id: randomUUID(),
    title: body.title,
    description: body.description,
    artistId: randomUUID(),
    artistName: body.artistName,
    artistNickname: body.artistNickname,
    category: body.category,
    style: body.style,
    technique: body.technique,
    imageUrl: `http://localhost:${PORT}/uploads/${file.filename}`,
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  artworks.unshift(newArtwork);
  writeArtworks(artworks);

  return {
    data: newArtwork,
    statusCode: 201,
  };
}

export function updateArtworkStatus({
  id,
  status,
}) {
  if (!allowedStatuses.includes(status)) {
    return {
      error: "Invalid artwork status",
      statusCode: 400,
    };
  }

  const artworks = readArtworks();

  const artworkExists = artworks.some(
    (artwork) => artwork.id === id,
  );

  if (!artworkExists) {
    return {
      error: "Artwork not found",
      statusCode: 404,
    };
  }

  const updatedArtworks = artworks.map((artwork) =>
    artwork.id === id
      ? {
          ...artwork,
          status,
        }
      : artwork,
  );

  writeArtworks(updatedArtworks);

  const updatedArtwork = updatedArtworks.find(
    (artwork) => artwork.id === id,
  );

  return {
    data: updatedArtwork,
    statusCode: 200,
  };
}

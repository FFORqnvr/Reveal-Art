import { randomUUID } from "crypto";

import {
  readArtworks,
  writeArtworks,
} from "../storage/artworks.storage.js";

const PORT = 4000;

export function getAllArtworks(req, res) {
  const artworks = readArtworks();

  res.json(artworks);
}

export function getPublishedArtworks(req, res) {
  const artworks = readArtworks();

  const publishedArtworks = artworks.filter(
    (artwork) => artwork.status === "published",
  );

  res.json(publishedArtworks);
}

export function getPendingArtworks(req, res) {
  const artworks = readArtworks();

  const pendingArtworks = artworks.filter(
    (artwork) => artwork.status === "pending",
  );

  res.json(pendingArtworks);
}

export function createArtwork(req, res) {
  const artworks = readArtworks();

  if (!req.file) {
    res.status(400).json({
      message: "Image is required",
    });
    return;
  }

  const requiredFields = [
    "title",
    "description",
    "artistName",
    "artistNickname",
    "category",
    "style",
    "technique",
  ];

  const missingField = requiredFields.find(
    (field) => !req.body[field]?.trim(),
  );

  if (missingField) {
    res.status(400).json({
      message: `${missingField} is required`,
    });
    return;
  }

  const newArtwork = {
    id: randomUUID(),
    title: req.body.title,
    description: req.body.description,
    artistId: randomUUID(),
    artistName: req.body.artistName,
    artistNickname: req.body.artistNickname,
    category: req.body.category,
    style: req.body.style,
    technique: req.body.technique,
    imageUrl: `http://localhost:${PORT}/uploads/${req.file.filename}`,
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  artworks.unshift(newArtwork);
  writeArtworks(artworks);

  res.status(201).json(newArtwork);
}

export function updateArtworkStatus(req, res) {
  const { id } = req.params;
  const { status } = req.body;

  const allowedStatuses = ["pending", "published", "rejected"];

  if (!allowedStatuses.includes(status)) {
    res.status(400).json({
      message: "Invalid artwork status",
    });
    return;
  }

  const artworks = readArtworks();

  const artworkExists = artworks.some(
    (artwork) => artwork.id === id,
  );

  if (!artworkExists) {
    res.status(404).json({
      message: "Artwork not found",
    });
    return;
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

  res.json(updatedArtwork);
}

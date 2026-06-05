import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { randomUUID } from "crypto";

import {
  ensureArtworksStorage,
  readArtworks,
  writeArtworks,
} from "./storage/artworks.storage.js";

const app = express();
const PORT = 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadsDir = path.join(__dirname, "uploads");

ensureArtworksStorage();

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(uploadsDir));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },

  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, filename);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith("image/")) {
      cb(new Error("Only image files are allowed"));
      return;
    }

    cb(null, true);
  },
});

app.get("/api/artworks", (req, res) => {
  const artworks = readArtworks();

  res.json(artworks);
});

app.get("/api/artworks/published", (req, res) => {
  const artworks = readArtworks();

  const publishedArtworks = artworks.filter(
    (artwork) => artwork.status === "published",
  );

  res.json(publishedArtworks);
});

app.get("/api/artworks/pending", (req, res) => {
  const artworks = readArtworks();

  const pendingArtworks = artworks.filter(
    (artwork) => artwork.status === "pending",
  );

  res.json(pendingArtworks);
});

app.post("/api/artworks", upload.single("image"), (req, res) => {
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
});

app.patch("/api/artworks/:id/status", (req, res) => {
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
});

app.use((error, req, res, next) => {
  res.status(400).json({
    message: error.message || "Server error",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

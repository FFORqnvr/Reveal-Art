import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = path.join(__dirname, "data");
const uploadsDir = path.join(__dirname, "uploads");
const artworksFile = path.join(dataDir, "artworks.json");

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

if (!fs.existsSync(artworksFile)) {
  fs.writeFileSync(artworksFile, JSON.stringify([], null, 2));
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

const upload = multer({ storage });

function readArtworks() {
  const data = fs.readFileSync(artworksFile, "utf-8");
  return JSON.parse(data);
}

function writeArtworks(artworks) {
  fs.writeFileSync(artworksFile, JSON.stringify(artworks, null, 2));
}

app.get("/api/artworks", (req, res) => {
  const artworks = readArtworks();
  res.json(artworks);
});

app.post("/api/artworks", upload.single("image"), (req, res) => {
  const artworks = readArtworks();

  const newArtwork = {
    id: crypto.randomUUID(),
    title: req.body.title,
    description: req.body.description,
    artistName: req.body.artistName,
    artistNickname: req.body.artistNickname,
    category: req.body.category,
    style: req.body.style,
    technique: req.body.technique,
    imageUrl: req.file ? `http://localhost:${PORT}/uploads/${req.file.filename}` : "",
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  artworks.unshift(newArtwork);
  writeArtworks(artworks);

  res.status(201).json(newArtwork);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
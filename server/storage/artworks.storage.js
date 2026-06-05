import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const serverDir = path.join(__dirname, "..");
const dataDir = path.join(serverDir, "data");
const artworksFile = path.join(dataDir, "artworks.json");

export function ensureArtworksStorage() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  if (!fs.existsSync(artworksFile)) {
    fs.writeFileSync(artworksFile, JSON.stringify([], null, 2));
  }
}

export function readArtworks() {
  ensureArtworksStorage();

  try {
    const data = fs.readFileSync(artworksFile, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export function writeArtworks(artworks) {
  ensureArtworksStorage();

  fs.writeFileSync(artworksFile, JSON.stringify(artworks, null, 2));
}

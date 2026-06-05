import express from "express";
import cors from "cors";

import { ensureArtworksStorage } from "./storage/artworks.storage.js";
import { uploadsDir } from "./middleware/upload.js";
import artworksRoutes from "./routes/artworks.routes.js";

const app = express();
const PORT = 4000;

ensureArtworksStorage();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(uploadsDir));

app.use("/api/artworks", artworksRoutes);

app.use((error, req, res, next) => {
  res.status(400).json({
    message: error.message || "Server error",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

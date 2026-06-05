import { Router } from "express";

import { upload } from "../middleware/upload.js";

import {
  createArtwork,
  getAllArtworks,
  getPendingArtworks,
  getPublishedArtworks,
  updateArtworkStatus,
} from "../controllers/artworks.controller.js";

const router = Router();

router.get("/", getAllArtworks);
router.get("/published", getPublishedArtworks);
router.get("/pending", getPendingArtworks);

router.post("/", upload.single("image"), createArtwork);

router.patch("/:id/status", updateArtworkStatus);

export default router;

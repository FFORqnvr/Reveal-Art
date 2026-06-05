import {
  createArtwork as createArtworkService,
  getAllArtworks as getAllArtworksService,
  getPendingArtworks as getPendingArtworksService,
  getPublishedArtworks as getPublishedArtworksService,
  updateArtworkStatus as updateArtworkStatusService,
} from "../services/artworks.service.js";

export function getAllArtworks(req, res) {
  const artworks = getAllArtworksService();

  res.json(artworks);
}

export function getPublishedArtworks(req, res) {
  const artworks = getPublishedArtworksService();

  res.json(artworks);
}

export function getPendingArtworks(req, res) {
  const artworks = getPendingArtworksService();

  res.json(artworks);
}

export function createArtwork(req, res) {
  const result = createArtworkService({
    body: req.body,
    file: req.file,
  });

  if (result.error) {
    res.status(result.statusCode).json({
      message: result.error,
    });
    return;
  }

  res.status(result.statusCode).json(result.data);
}

export function updateArtworkStatus(req, res) {
  const result = updateArtworkStatusService({
    id: req.params.id,
    status: req.body.status,
  });

  if (result.error) {
    res.status(result.statusCode).json({
      message: result.error,
    });
    return;
  }

  res.status(result.statusCode).json(result.data);
}

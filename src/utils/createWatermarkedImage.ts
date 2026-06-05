export async function createWatermarkedImage(
  file: File,
  artistNickname: string,
): Promise<File> {
  const imageUrl = URL.createObjectURL(file);
  const image = new Image();

  image.src = imageUrl;

  await new Promise<void>((resolve, reject) => {
    image.onload = () => resolve();
    image.onerror = () => reject(new Error("Failed to load image"));
  });

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    URL.revokeObjectURL(imageUrl);
    return file;
  }

  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;

  ctx.drawImage(image, 0, 0);

  const watermarkText = `@${artistNickname || "artist"} · Reveal Art`;

  const fontSize = Math.max(36, Math.floor(canvas.width * 0.075));

  ctx.save();

  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(-Math.atan(canvas.height / canvas.width));

  ctx.font = `700 ${fontSize}px Georgia, "Times New Roman", serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
  ctx.strokeStyle = "rgba(0, 0, 0, 0.20)";
  ctx.lineWidth = Math.max(2, Math.floor(fontSize * 0.07));

  ctx.strokeText(watermarkText, 0, 0);
  ctx.fillText(watermarkText, 0, 0);

  ctx.restore();

  URL.revokeObjectURL(imageUrl);

  const blob = await new Promise<Blob | null>((resolve) => {
    canvas.toBlob(resolve, "image/jpeg", 0.92);
  });

  if (!blob) {
    return file;
  }

  return new File(
    [blob],
    file.name.replace(/\.[^/.]+$/, "") + "-watermarked.jpg",
    {
      type: "image/jpeg",
      lastModified: Date.now(),
    },
  );
}


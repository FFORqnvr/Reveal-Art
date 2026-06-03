import { useMemo } from "react";
import { artworks } from "../data/Artworks";
import PageTitle from "../components/PageTitle";

export default function GalleryPage() {
  useMemo(() => {
    return artworks.filter((a) => a.status === "published");
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-6">
      <PageTitle
        title="Gallery"
        subtitle="Published artworks from the community"
      />
    </div>
  );
}
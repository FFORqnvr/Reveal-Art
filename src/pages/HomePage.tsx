import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import Button from "../components/Button";
import ArtworkCard from "../components/ArtworkCard";
import { artworks } from "../data/Artworks";

export default function HomePage() {
  const previewArtworks = artworks
    .filter((artwork) => artwork.status === "published")
    .slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-12 shadow-sm">
        <div className="max-w-3xl">
          <PageTitle
            title="Reveal Art"
            subtitle="A digital space where artists can share their creations, discover inspiration, and explore artworks from other creators."
          />

          <p className="mt-6 text-base leading-7 opacity-80">
            Browse a curated gallery, generate creative ideas for future
            projects, and submit your own artwork for review and publication.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/gallery">
              <Button>Explore Gallery</Button>
            </Link>

            <Link to="/ideas">
              <Button>Generate Ideas</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-sm">
        <h2 className="text-2xl font-semibold">
          What is Reveal Art?
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[var(--color-border)] p-5">
            <h3 className="font-semibold">Share Your Art</h3>

            <p className="mt-3 text-sm leading-6 opacity-80">
              Artists can submit their artworks and present their creativity
              to a wider audience through a curated gallery experience.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--color-border)] p-5">
            <h3 className="font-semibold">Explore the Gallery</h3>

            <p className="mt-3 text-sm leading-6 opacity-80">
              Visitors can discover artworks, learn about artists, and enjoy
              a growing collection of creative projects.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--color-border)] p-5">
            <h3 className="font-semibold">Find Inspiration</h3>

            <p className="mt-3 text-sm leading-6 opacity-80">
              The built-in idea generator helps artists overcome creative
              blocks and discover new directions for future artwork.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">
          Explore Reveal Art
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm transition hover:-translate-y-1">
            <h3 className="text-lg font-semibold">
              Gallery
            </h3>

            <p className="mt-3 text-sm leading-6 opacity-80">
              Discover published artworks from artists and explore the growing collection.
            </p>

            <div className="mt-5">
              <Link to="/gallery">
                <Button>Open Gallery</Button>
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm transition hover:-translate-y-1">
            <h3 className="text-lg font-semibold">
              Idea Generator
            </h3>

            <p className="mt-3 text-sm leading-6 opacity-80">
              Generate concepts and creative prompts for your next artwork.
            </p>

            <div className="mt-5">
              <Link to="/ideas">
                <Button>Generate Ideas</Button>
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm transition hover:-translate-y-1">
            <h3 className="text-lg font-semibold">
              Submit Artwork
            </h3>

            <p className="mt-3 text-sm leading-6 opacity-80">
              Send your artwork for moderation and future publication in the gallery.
            </p>

            <div className="mt-5">
              <Link to="/submit">
                <Button>Submit Work</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-10 shadow-sm">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-semibold">
            Supporting Emerging Artists
          </h2>

          <p className="mt-4 leading-7 opacity-80">
            Reveal Art is designed as a space where artists can showcase their
            creativity, gain visibility, and share their work with a wider
            audience.
          </p>

          <p className="mt-4 leading-7 opacity-80">
            The platform combines a curated gallery, artwork moderation,
            inspiration tools, and a simple submission process into one
            experience focused on artistic growth.
          </p>

          <p className="mt-4 leading-7 opacity-80">
            Our goal is to make discovering art and finding inspiration easier
            for both creators and visitors.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">
            Featured Artworks
          </h2>

          <Link to="/gallery">
            <Button>View All</Button>
          </Link>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {previewArtworks.map((artwork) => (
            <ArtworkCard
              key={artwork.id}
              artwork={artwork}
            />
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-12 text-center shadow-sm">
        <h2 className="text-3xl font-semibold">
          Ready to Explore More Art?
        </h2>

        <p className="mt-4 max-w-2xl mx-auto opacity-80">
          Discover new artists, browse unique artworks, or submit your own
          creative work to become part of the Reveal Art community.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link to="/gallery">
            <Button>Browse Gallery</Button>
          </Link>

          <Link to="/submit">
            <Button>Submit Artwork</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function ExploreSection() {
  return (
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
  );
}
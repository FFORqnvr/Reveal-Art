import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button"

export default function HeroSection() {
  return (
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
  );
}
import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function FinalCtaSection() {
  return (
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
  );
}
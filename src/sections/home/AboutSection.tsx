export default function AboutSection() {
  return (
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
  );
}
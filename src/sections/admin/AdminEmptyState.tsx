export default function AdminEmptyState() {
  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center sm:p-10">
      <div className="mb-2 text-lg font-semibold">
        🎉 All caught up!
      </div>

      <div className="text-sm opacity-70">
        There are no pending artworks to review.
      </div>
    </div>
  );
}
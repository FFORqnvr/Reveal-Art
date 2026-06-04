export default function SectionDivider() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="h-[2px] flex-1 bg-[var(--color-text-primary)]/60" />

      <div className="mx-10 text-[var(--color-text-primary)]">
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 0L23 18L42 21L23 24L21 42L19 24L0 21L19 18L21 0Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="h-[2px] flex-1 bg-[var(--color-text-primary)]/60" />
    </div>
  );
}
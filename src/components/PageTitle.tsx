type PageTitleProps = {
  title: string;
  subtitle?: string;
};

export default function PageTitle({
  title,
  subtitle,
}: PageTitleProps) {
  return (
    <div className="mb-8">
      <h1>{title}</h1>

      {subtitle && (
        <p
          className="mt-2"
          style={{
            color: "var(--color-text-muted)",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
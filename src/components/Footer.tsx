import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="mt-16 border-t"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-4 py-8 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div>
            <h3
              className="mb-2 text-lg"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--color-text-primary)",
              }}
            >
              Reveal Art
            </h3>

            <p
              className="max-w-md text-sm"
              style={{
                color: "var(--color-text-secondary)",
              }}
            >
              Демонстрационная арт-платформа для публикации работ,
              вдохновения художников и просмотра творческих проектов.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Link to="/">Главная</Link>
            <Link to="/gallery">Галерея</Link>
            <Link to="/submit">Добавить работу</Link>
            <Link to="/ideas">Генератор идей</Link>
          </div>
        </div>

        <div
          className="mt-6 border-t pt-4 text-sm"
          style={{
            borderColor: "var(--color-border)",
            color: "var(--color-text-muted)",
          }}
        >
          © 2026 Reveal Art — Diploma MVP Project
        </div>
      </div>
    </footer>
  );
}
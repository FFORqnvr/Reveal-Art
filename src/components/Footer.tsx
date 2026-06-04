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
      <div className="mx-auto max-w-[1200px] px-4 py-5 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
         <div className="flex h-full flex-col pt-1">
            <h3
              className="mb-20 text-xl "
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

          <div className="grid grid-cols-2 ">
                <Link className="flex items-center" to="/">
                  Главная
                </Link>

                <Link className="flex items-center" to="/submit">
                  Добавить работу
                </Link>

                <Link className="flex items-center" to="/gallery">
                  Галерея
                </Link>
                
                <Link className="flex items-center" to="/ideas">
                  Генератор идей
                </Link>
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
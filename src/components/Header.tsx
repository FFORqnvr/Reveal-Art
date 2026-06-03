import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Главная" },
  { to: "/gallery", label: "Галерея" },
  { to: "/submit", label: "Добавить работу" },
  { to: "/ideas", label: "Генератор идей" },
  { to: "/admin", label: "Админка" },
];

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-sm"
      style={{
        backgroundColor: "var(--color-background-soft)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-4 py-5 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1
              className="text-3xl"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--color-text-primary)",
              }}
            >
              Reveal Art
            </h1>

            <p
              className="text-sm"
              style={{
                color: "var(--color-text-muted)",
              }}
            >
              Художественная галерея и пространство для вдохновения
            </p>
          </div>

          <nav className="flex flex-wrap gap-5">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="transition-colors duration-200"
                style={({ isActive }) => ({
                  color: isActive
                    ? "var(--color-primary)"
                    : "var(--color-text-secondary)",
                  fontWeight: isActive ? 600 : 400,
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
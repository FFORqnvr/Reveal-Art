import { NavLink } from "react-router-dom";

const linksLeft = [
  { to: "/ideas", label: "Ідеї" },
  { to: "/process", label: "Етапи роботи" },
  { to: "/gallery", label: "Галерея" },
];

const linksRight = [
  { to: "/tools", label: "Інструменти" },
  { to: "/monetization", label: "Заробіток" },
];

export default function Header() {
  const navLinkStyle = ({ isActive }: { isActive: boolean }) => ({
    color: isActive
      ? "var(--color-background-soft)"
      : "var(--color-background)",
    fontWeight: isActive ? 600 : 400,
  });

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <div
        className="relative mx-auto max-w-[1200px] overflow-hidden shadow-md"
        style={{
          backgroundColor: "var(--color-primary)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-lg)",
        }}
      >
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1200 90"
          preserveAspectRatio="none"
        >
          <path
            d="
             M 10 35
            Q 10 75 90 80
            L 1110 80
            Q 1190 75 1190 35
            "
            fill="none"
            stroke="rgba(243,232,223,0.75)"
            strokeWidth="1.5"
          />
        </svg>

        <nav className="relative z-10 flex items-center justify-between px-12 py-5">
          <div className="flex items-center gap-8">
            {linksLeft.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-sm transition-opacity duration-200 hover:opacity-80"
                style={navLinkStyle}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <NavLink
            to="/"
            className="flex items-center gap-4 uppercase tracking-[0.12em]"
            style={{
              color: "var(--color-background-soft)",
              fontFamily: "var(--font-heading)",
            }}
          >
            <span className="opacity-70">✦ ─</span>

            <span className="text-lg">Reveal Art</span>

            <span className="opacity-70">─ ✦</span>
          </NavLink>

          <div className="flex items-center gap-8">
            {linksRight.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-sm transition-opacity duration-200 hover:opacity-80"
                style={navLinkStyle}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
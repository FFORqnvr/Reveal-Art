import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      {/* Header */}
      <header
        style={{
          padding: "16px",
          borderBottom: "1px solid #C7A99F",
          display: "flex",
          gap: "12px",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/submit">Submit</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/ideas">Ideas</Link>
      </header>

      {/* Page content */}
      <main style={{ padding: "16px" }}>
        <Outlet />
      </main>
    </div>
  );
}
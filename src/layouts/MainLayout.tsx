import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: "var(--color-background)",
        color: "var(--color-text-primary)",
      }}
    >
      <Header />

      <main className="flex-1">
  <div className="container">
    <Outlet />
  </div>
</main>

      <Footer />
    </div>
  );
}
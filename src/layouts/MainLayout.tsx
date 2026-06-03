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
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}
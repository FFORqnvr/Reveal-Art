import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/HomePage";
import GalleryPage from "../pages/GalleryPage";
import IdeasPage from "../pages/IdeasPage";
import SubmitPage from "../pages/SubmitPage";
import AdminPage from "../pages/AdminPage";

import ProcessPage from "../pages/ProcessPage";
import ToolsPage from "../pages/ToolsPage";
import MonetizationPage from "../pages/MonetizationPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/ideas" element={<IdeasPage />} />
          <Route path="/submit" element={<SubmitPage />} />
          <Route path="/admin" element={<AdminPage />} />

          <Route path="/process" element={<ProcessPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/monetization" element={<MonetizationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

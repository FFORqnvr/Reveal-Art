import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/HomePage";
import GalleryPage from "../pages/GalleryPage";
import SubmitPage from "../pages/SubmitPage";
import AdminPage from "../pages/AdminPage";
import IdeasPage from "../pages/IdeasPage";
import ArtworkDetailPage from "../pages/ArtworkDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
  path: "artwork/:id",
  element: <ArtworkDetailPage />,
},
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "gallery",
        element: <GalleryPage />,
      },
      {
        path: "submit",
        element: <SubmitPage />,
      },
      {
        path: "admin",
        element: <AdminPage />,
      },
      {
        path: "ideas",
        element: <IdeasPage />,
      },
      {
  path: "/ideas",
  element: <IdeasPage />,
}
    ],
  },
]);

export default router;
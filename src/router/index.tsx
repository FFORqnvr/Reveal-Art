import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import GalleryPage from "../pages/GalleryPage";
import SubmitPage from "../pages/SubmitPage";
import AdminPage from "../pages/AdminPage";
import IdeasPage from "../pages/IdeasPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/gallery",
    element: <GalleryPage />,
  },
  {
    path: "/submit",
    element: <SubmitPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/ideas",
    element: <IdeasPage />,
  },
]);

export default router;
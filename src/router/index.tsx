import { createBrowserRouter, Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/gallery">Перейти в галерею</Link>
    </div>
  );
}

function GalleryPage() {
  return (
    <div>
      <h1>Gallery Page</h1>
      <Link to="/">На главную</Link>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/gallery",
    element: <GalleryPage />,
  },
]);

export default router;
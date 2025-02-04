import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);

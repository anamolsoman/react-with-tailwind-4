import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Users from "./pages/Users.tsx";
import User from "./pages/User.tsx";
import NotFoundPage from "./pages/NotFoundPage.js";
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
  {
    path: "/users",
    element: <Users />,
    children: [{ path: "/users/:id", element: <User /> }],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);

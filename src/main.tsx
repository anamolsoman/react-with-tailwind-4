import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { RouterProvider } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage.js";
import { Layout } from "./app/Layout.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <Layout>
      {" "}
      <RouterProvider router={router}></RouterProvider>
    </Layout>
  </StrictMode>
);

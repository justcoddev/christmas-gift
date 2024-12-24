import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import GiftAnimation from "./pages/GiftAnimation";



const NotImplementedYet = () => <h1>Not implemented yet</h1>;


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home/christmas-gift",
        element: <GiftAnimation />,
      },
    ]
  },
  {
    path: "/christmas-gift",
    element: <GiftAnimation />,
  },
  {
    path: "not-found",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <Navigate to="/not-found" replace />,
  },
]);

export default router;



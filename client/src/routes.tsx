import { createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import ErrorPage from "./pages/UI/Error.page";
import BlogspherePage from "./pages/Blogsphere.page";
import ConstellationPage from "./pages/Constellation.page";
import InsightsPage from "./pages/Insights.page";
import OverviewPage from "./pages/Overview.page";
import SettingsPage from "./pages/Settings.page";
import StarsPage from "./pages/Stars.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoutes />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/blogsphere",
        element: <BlogspherePage />,
      },
      {
        path: "/constellation",
        element: <ConstellationPage />,
      },
      {
        path: "/insights",
        element: <InsightsPage />,
      },
      {
        path: "/overview",
        element: <OverviewPage />,
      },
      {
        path: "/",
        element: <OverviewPage />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
      {
        path: "/stars",
        element: <StarsPage />,
      },
    ],
  },
]);

export const routePaths = router.routes[0].children!;

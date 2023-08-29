import HomePage from "../pages/home-page";
import LoginPage from "../pages/login-page";

export const PrivateRoutes = [
  {
    path: "/",
    element: <HomePage />,
    name: "Home",
    index: 0,
  },
];

export const PublicRoutes = [
  {
    path: "/login",
    element: <LoginPage />,
    name: "Login",
  },
];

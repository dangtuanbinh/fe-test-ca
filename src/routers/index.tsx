import HomePage from "../pages/home-page";
import RegisterPage from "../pages/register-page";

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
    path: "/auth",
    element: <RegisterPage />,
    name: "Login",
  },
];

import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";

// read users cookies
import { Cookies } from "react-cookie";

const RedirectAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();
  const cookies = new Cookies();

  // Check if the user is not authenticated and the token is not present
  if (
    !auth?.user &&
    ((cookies.get("userToken") === "null" &&
      cookies.get("userRefreshToken") === "null") ||
      !cookies.get("userToken") ||
      !cookies.get("userRefreshToken"))
  ) {
    // Check if the route is /login or /signup
    if (
      location.pathname === "/login" ||
      location.pathname === "/signup"
    ) {
      // If the user is already authenticated, redirect back to the profile
      if (cookies.get("userToken") && cookies.get("userRefreshToken")) {
        return <Navigate to="/profile" replace />;
      }
    }

    // If not authenticated and the token is not present, redirect to /login
    return <Navigate to={location.pathname} state={{ from: location }} replace />;
  }

  // If authenticated or token is present, allow access to the route
  return <Outlet />;
};

export default RedirectAuth;

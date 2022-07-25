import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";

//read users cookies
import { useCookies } from "react-cookie";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    const [cookies, removeCookie ] = useCookies(["user"]);

    if (!auth?.user && !cookies.user) {

        //removeCookie("user");

        return <Navigate to='/login' state={{ from: location }} replace />

    } else {

        return <Outlet />

    }

}

export default RequireAuth;
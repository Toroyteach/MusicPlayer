import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";

//read users cookies
import { Cookies } from "react-cookie";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();
    const cookies = new Cookies();

    if (!auth?.user && ((cookies.get('userToken') === 'null' && cookies.get('userRefreshToken') === 'null') || !cookies.get('userToken') || !cookies.get('userRefreshToken'))) {

        return <Navigate to='/login' state={{ from: location }} replace />

    }

    return <Outlet />;

}

export default RequireAuth;
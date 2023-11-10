import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";

//read users cookies
const AdminAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    if (!auth?.user && auth.role != "Admin") {

        return <Navigate to='/profile' state={{ from: location }} replace />

    }

    return <Outlet />;

}

export default AdminAuth;
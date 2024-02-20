import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
    const { currentUser } = useAuth();

    if (currentUser) {
        return <Outlet />;
    }

    return <Navigate to="/login" replace />;
}

export default PrivateRoute;

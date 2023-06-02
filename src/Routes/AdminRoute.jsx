import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import UseAdmin from '../Hooks/UseAdmin';

const AdminRoute = ({ children }) => {
    const [isAdmin, isAdminLoading] = UseAdmin()
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading || isAdminLoading) {
        return (
            <div className='w-full h-screen flex justify-center items-center'>
                <BeatLoader
                    color='#BB8506'
                    size={15}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                >
                </BeatLoader>
            </div>
        );
    }
    else if (user && isAdmin) {
        return children
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;
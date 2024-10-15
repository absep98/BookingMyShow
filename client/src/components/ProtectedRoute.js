import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { hideLoading, showLoading} from '../redux/loaderSlice';
import { getCurrentUser } from '../apicalls/user';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({children}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getValiduser = async () => {
        try {
            dispatch(showLoading);
            const response  = await getCurrentUser();
            console.log(response);
            dispatch(hideLoading)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(localStorage.getItem('token')){
            getValiduser();
        } else{
            navigate('/login');
        }
    }, []);

    return (
        <div>
            {children}
        </div>
    )
}

export default ProtectedRoute
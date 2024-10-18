import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { hideLoading, showLoading} from '../redux/loaderSlice';
import { getCurrentUser } from '../apicalls/user';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '../redux/userSlice';
import { useSelector } from 'react-redux';
import { Layout, Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { HomeOutlined, LogoutOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons';

function ProtectedRoute({children}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector(state => state.user);
    console.log('user is ',user);

    const navItems = [
        {
            label: 'Home',
            icon: <HomeOutlined />,
        },
        {
            label: `${user?.name}`,
            icon: <UserOutlined />,
            children: [
                {
                    label: (
                        <span onClick={() => {user.isAdmin ? navigate('/admin') : navigate('/profile')}}>
                            My Profile
                        </span>
                    ),
                    icon: <ProfileOutlined />
                },
                {
                    label: (<Link to="/login" onClick={() => localStorage.removeItem('token')}>Log out</Link>),
                    icon: <LogoutOutlined />
                },
            ],
        }
    ]

    
    const getValiduser = async () => {
        try {
            dispatch(showLoading());
            const response  = await getCurrentUser();
            if(response.success){
                dispatch(setUser(response.data));
            } else {
                dispatch(setUser(null));
                localStorage.removeItem('token');
                navigate('/login');
                dispatch(hideLoading())
            }
            dispatch(hideLoading()) 
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
    }, [navigate]);

    return (
        user && (
            <>
                <Layout>
                    <Header className="d-flex justify-content-between"
                        style={{
                            position: 'sticky',
                            top: 0,
                            zIndex: 1,
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <h3 className="demo-logo text-white m-0" style={{color : "white"}}>Book My Show</h3>
                        <Menu theme='dark' mode="horizontal" items={navItems}></Menu>
                    </Header>
                    <div
                        style={{
                            pading: 24,
                            minHeight: 380,
                            backgroundColor: '#fff',
                        }}
                        
                    >
                        {children}
                    </div>
                </Layout>
            </>
        )
    )
}

export default ProtectedRoute
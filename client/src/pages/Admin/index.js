import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
function Admin() {
  const navigate = useNavigate();
  const userData = useSelector(state => state.user.user);
  console.log('user Data is ', userData);
  
  if(!userData?.isAdmin){
    message.warning('You are not authorized to view this page');
    navigate('/profile');
  }

  return (
    <div>
        <h1>This is Admin page</h1>
    </div>
  )
}

export default Admin;
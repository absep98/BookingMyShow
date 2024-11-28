import React from 'react'
import { Tabs } from 'antd';
import { useSelector } from 'react-redux';
import TheatresTable from './TheatresTable';
import MovieList from './MovieList';

function Profile() {
  const { user } = useSelector(state => state.user);
  const TabItems = [
    {
      key: '1',
      label: "Movies",
      children: <MovieList />
    },
    {
      key: '2',
      label: "Theatre Requests",
      children: <TheatresTable />
    }
  ]
  return (
    <div>
        <h1>Welcome {user.name}! to your Profile</h1>
        <Tabs defaultActiveKey='1' items={TabItems} />
    </div>
  )
}

export default Profile;
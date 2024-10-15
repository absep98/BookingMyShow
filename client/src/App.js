import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { useSelector } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoute';
// import Loader from './loader';
// import { lazy } from 'react';

function App() {
  const { loading } = useSelector((state) => state.loader);
  const {user} = useSelector((state) => state.user);
  console.log('user state is ', user);
  
  console.log(loading);
  return (
    <div className="App">
        {loading && (
          <div className='loader-container'>
            {" "}
            <div className="loader"></div>{" "}
          </div>
        )}

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

import React , {useEffect, useState} from 'react'
import {Form , Input , Button, message} from 'antd'
import {Link, useNavigate} from 'react-router-dom'
import {loginUser} from '../apicalls/user';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitForm = async (values) => {
    try {
      const res = await loginUser(values);
      if(res.success){
        message.success(res.message);
        console.log(message);
        localStorage.setItem('token', res.token);
        dispatch(setUser(res.user));
        window.location.href = '/';
      }else{
        message.error(res.message);
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if(localStorage.getItem('token')){
      navigate('/');
    }
  }, [])

  return (
     <>
      <header className="App-header">
        <main className="main-area mw-500 text-center px-3">
          <section className="left-section">
            <h1>Welcome back to BookMyShow</h1>
          </section>
          <section className="right-section">
            <Form layout="vertical" onFinish={submitForm}>
              <Form.Item
                label="Email"
                name="email"
                className="d-block"
                rules={[{ required: true, message: "Email is required!" }]}
              >
                <Input
                  id="email"
                  type="text"
                  placeholder="Enter your email"
                  autoComplete="username"
                ></Input>
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                className="d-block"
                rules={[{ required: true, message: "Password is required!" }]}
              >
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter the password"
                  autoComplete="current-password"
                ></Input>
              </Form.Item>
              <Form.Item>
                <Button
                  block
                  type="primary"
                  htmlType="submit"
                  style={{ fontSize: "1rem", fontWeight: "600" }}
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
            <div>
              <p>
                Not registered yet? <Link to="/register">Register now</Link>
              </p>
            </div>
          </section>
        </main>
      </header>
     </>
  )
}

export default Login
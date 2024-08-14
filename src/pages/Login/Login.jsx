import React, { useState } from 'react';
import './Login.css';
import avatar from '../../assets/avatar.jpg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = { email, password };

    try {
      const response = await axios.post('https://flybetter-1.onrender.com/login', form).then((response) =>{
        alert('Success')
      })
      console.log(response.data);
      // localStorage.setItem('userId', response.data.userId);

      // Navigate to the dashboard or home page after successful login
      navigate('/dashboard');
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div>
      <section className="logini">
        <div className="loginbox">
          <img src={avatar} className="avatar" alt="Avatar" />
          <h1>Log in</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input  type="submit" value="Login" />
            <br />
            <a href="#">Lost your password?</a>
            <br />
            <Link to='/register'><p>Don't have an account?</p></Link>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import './Register.css';
import avatar from '../../assets/avatar.jpg';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'https://flybetter-1.onrender.com/register',
      data: {
        name:name,
        email:email,
        password:password,
      },
    }).then((response)=>{
      alert('User registered successfully');
      // setName('');
      // setEmail('');
      // setPassword('');
      console.log(response.data);
      
    }).catch((error)=>{
      console.log(error);
      
      alert('Failed to register user');
    })

  };

  return (
    <div>
      <section className="logini">
        <div className="loginbox">
          <img src={avatar} className="avatar" alt="Avatar" />
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">FullName</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your email address"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            <button type="submit"  > Register</button>
            <br />
            <a href="#">Lost your password?</a>
            <br />
            <a href="login"> Have an account?</a>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;

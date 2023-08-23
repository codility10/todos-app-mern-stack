import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import classes from './AuthForm.module.scss';

function Login() {
  const navigate = useNavigate();
  const [eror, seterr] = useState('');

  const login = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      await axios.post('/api/auth/login', {
        email,
        password,
      });
      navigate('/');
    } catch (err) {
      seterr('invalid email or password');
    }
  };
  return (
    <div className={classes.register}>
      <h1 className={classes.title}>Login</h1>
      <form className={classes.authForm} onSubmit={login}>
        <label htmlFor="email">
          email:
          <input name="email" type="email" placeholder="email" required />
        </label>
        <br />
        <label htmlFor="password">
          password:
          <input
            name="password"
            type="password"
            placeholder="password"
            required
          />
          <p style={{ color: 'red' }}>{eror}</p>
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

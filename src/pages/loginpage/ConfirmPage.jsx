import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginpage.scss'

function LoginPage() {
  const [confCode, setConfCode] = useState('');
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('https://brendyol-fashion-backend.vercel.app/api/users', confCode)
    .then(res => {
      console.log(res.data);
      document.cookie = `token=${res.data.token}`;
      const cookieUser = JSON.stringify(res.data.user)
      document.cookie = `user=${cookieUser}`;
      navigate("/");
      window.location.reload()
    })
    .catch(err => console.log('errorr', err))
  }

  return (
    <div className='signup-container'>
      <div className='signup-container-inner'>
        <h3>Confirm</h3>
        <form onSubmit={handleLogin} className='form'>
          <div className='form-div'>
            <label htmlFor="text">Confirm code:</label>
            <input type="text" name="text" defaultValue={confCode} onChange={(e) => setConfCode({confirmCode:e.target.value})}/>
          </div>
          <button type='submit' className='submitButton'>Confirm</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
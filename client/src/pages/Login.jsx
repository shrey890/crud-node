import { useState } from 'react';
import axios from 'axios';

const Login =  ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
      axios.post('http://localhost:3000/login', { username, password })
          .then(response => localStorage.setItem('token', response.data.token));
  };

  return (
      <div>
          <input type="text" onChange={e => setUsername(e.target.value)} />
          <input type="password" onChange={e => setPassword(e.target.value)} />
          <button onClick={login}>Login</button>
      </div>
  );
};


export default Login;

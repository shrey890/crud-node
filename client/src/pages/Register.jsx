import axios from 'axios';
import  { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const register = () => {
      axios.post('http://localhost:3000/register', { username, password });
  };

  return (
      <div>
          <input type="text" onChange={e => setUsername(e.target.value)} />
          <input type="password" onChange={e => setPassword(e.target.value)} />
          <button onClick={register}>Register</button>
      </div>
  );
};

export default Register;


import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {

    if (username === 'pprajith' && password === 'prajith') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <Box sx={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column",
      height:"100vh"}}>
      <Typography variant='h4'>Login</Typography>
      <TextField
        className='mt-3'
        id="standard-basic"
        label="Username"
        variant="standard"
        value={username}
        onChange={(e) => setUsername(e.target.value)} />

      <TextField
      className='mt-3' 
      id="standard-basic" 
      label="Password" 
      variant="standard" 
      value={password}
      onChange={(e) => setPassword(e.target.value)}/>

      <Button className='mt-3' variant='contained' onClick={handleLogin}> Login</Button>
     
      
    </Box>
  );
}

export default Login;

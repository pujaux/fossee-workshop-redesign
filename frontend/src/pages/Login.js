import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={{minHeight: '100vh', background: '#f5f7fa', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'}}>
      <div style={{background: 'white', borderRadius: '16px', padding: '40px', width: '100%', maxWidth: '420px', boxShadow: '0 2px 16px rgba(0,0,0,0.1)'}}>
        <h2 style={{color: '#003366', textAlign: 'center', marginBottom: '8px'}}>Welcome Back</h2>
        <p style={{color: '#666', textAlign: 'center', marginBottom: '32px'}}>Login to your FOSSEE account</p>

        <div style={{marginBottom: '20px'}}>
          <label style={{color: '#333', fontWeight: 'bold', display: 'block', marginBottom: '8px'}}>Email</label>
          <div style={{display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: '8px', padding: '12px'}}>
            <FaEnvelope style={{color: '#0066cc', marginRight: '10px'}}/>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{border: 'none', outline: 'none', width: '100%', fontSize: '1rem'}}
            />
          </div>
        </div>

        <div style={{marginBottom: '28px'}}>
          <label style={{color: '#333', fontWeight: 'bold', display: 'block', marginBottom: '8px'}}>Password</label>
          <div style={{display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: '8px', padding: '12px'}}>
            <FaLock style={{color: '#0066cc', marginRight: '10px'}}/>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{border: 'none', outline: 'none', width: '100%', fontSize: '1rem'}}
            />
          </div>
        </div>

        <button style={{
          background: '#003366', color: 'white', width: '100%',
          padding: '14px', borderRadius: '8px', border: 'none',
          fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer'
        }}>Login</button>

        <p style={{textAlign: 'center', marginTop: '20px', color: '#666'}}>
          Don't have an account? <Link to="/register" style={{color: '#0066cc', fontWeight: 'bold'}}>Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
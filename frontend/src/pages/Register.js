import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={{minHeight: '100vh', background: '#f5f7fa', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'}}>
      <div style={{background: 'white', borderRadius: '16px', padding: '40px', width: '100%', maxWidth: '420px', boxShadow: '0 2px 16px rgba(0,0,0,0.1)'}}>
        <h2 style={{color: '#003366', textAlign: 'center', marginBottom: '8px'}}>Create Account</h2>
        <p style={{color: '#666', textAlign: 'center', marginBottom: '32px'}}>Join FOSSEE Workshops today</p>

        <div style={{marginBottom: '20px'}}>
          <label style={{color: '#333', fontWeight: 'bold', display: 'block', marginBottom: '8px'}}>Full Name</label>
          <div style={{display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: '8px', padding: '12px'}}>
            <FaUser style={{color: '#0066cc', marginRight: '10px'}}/>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={e => setName(e.target.value)}
              style={{border: 'none', outline: 'none', width: '100%', fontSize: '1rem'}}
            />
          </div>
        </div>

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
              placeholder="Create a password"
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
        }}>Create Account</button>

        <p style={{textAlign: 'center', marginTop: '20px', color: '#666'}}>
          Already have an account? <Link to="/login" style={{color: '#0066cc', fontWeight: 'bold'}}>Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
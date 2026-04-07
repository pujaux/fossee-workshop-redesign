import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaLaptopCode, FaCertificate } from 'react-icons/fa';

function Home() {
  return (
    <div>
      <section style={{
        background: 'linear-gradient(135deg, #003366, #0066cc)',
        color: 'white',
        textAlign: 'center',
        padding: '80px 20px'
      }}>
        <h1 style={{fontSize: '2.5rem', marginBottom: '16px'}}>Learn. Build. Grow.</h1>
        <p style={{fontSize: '1.1rem', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px'}}>
          Join free hands-on workshops on Python, Scilab, and more — designed for students across India.
        </p>
        <Link to="/workshops" style={{
          background: 'white',
          color: '#003366',
          padding: '12px 30px',
          borderRadius: '25px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>Explore Workshops</Link>
      </section>

      <section style={{padding: '60px 20px', textAlign: 'center', background: '#f5f7fa'}}>
        <h2 style={{fontSize: '1.8rem', marginBottom: '40px', color: '#003366'}}>Why FOSSEE Workshops?</h2>
        <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
          <div style={{background: 'white', borderRadius: '12px', padding: '30px 20px', width: '240px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)'}}>
            <FaGraduationCap style={{fontSize: '2.5rem', color: '#0066cc'}} />
            <h3 style={{color: '#003366', margin: '12px 0 8px'}}>Free to Join</h3>
            <p style={{color: '#666'}}>All workshops are completely free for students.</p>
          </div>
          <div style={{background: 'white', borderRadius: '12px', padding: '30px 20px', width: '240px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)'}}>
            <FaLaptopCode style={{fontSize: '2.5rem', color: '#0066cc'}} />
            <h3 style={{color: '#003366', margin: '12px 0 8px'}}>Hands-on Learning</h3>
            <p style={{color: '#666'}}>Practice with real tools used in research and industry.</p>
          </div>
          <div style={{background: 'white', borderRadius: '12px', padding: '30px 20px', width: '240px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)'}}>
            <FaCertificate style={{fontSize: '2.5rem', color: '#0066cc'}} />
            <h3 style={{color: '#003366', margin: '12px 0 8px'}}>Get Certified</h3>
            <p style={{color: '#666'}}>Receive certificates upon successful completion.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
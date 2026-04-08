import React from 'react';

function Footer() {
  return (
    <footer style={{
      background: '#003366',
      color: 'white',
      textAlign: 'center',
      padding: '24px 20px',
      marginTop: '40px'
    }}>
      <p style={{margin: 0}}>© 2026 FOSSEE, IIT Bombay. All rights reserved.</p>
      <p style={{margin: '8px 0 0', fontSize: '0.85rem', color: '#aac4e8'}}>
        Free and Open Source Software for Education
      </p>
    </footer>
  );
}
export default Footer;
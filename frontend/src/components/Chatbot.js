import React, { useState } from 'react';
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';

const responses = {
  'hello': 'Hi there! How can I help you with FOSSEE Workshops?',
  'hi': 'Hello! Ask me anything about FOSSEE Workshops!',
  'workshop': 'We offer free workshops on Python, Scilab, Django and more. Check the Workshops page!',
  'register': 'Click on any workshop and hit the Register button to sign up!',
  'free': 'Yes! All FOSSEE workshops are completely free for students.',
  'certificate': 'Yes, you will receive a certificate after successfully completing a workshop.',
  'contact': 'You can reach FOSSEE at fossee@iitb.ac.in',
  'python': 'We have a Python for Beginners workshop starting April 20, 2026!',
  'scilab': 'Our Scilab Fundamentals workshop starts April 25, 2026!',
  'default': 'I am not sure about that. Please visit our Workshops page or contact fossee@iitb.ac.in'
};

function getResponse(input) {
  const lower = input.toLowerCase();
  for (let key of Object.keys(responses)) {
    if (lower.includes(key)) return responses[key];
  }
  return responses['default'];
}

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I am FOSSEE Assistant. Ask me anything!' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    const botMsg = { from: 'bot', text: getResponse(input) };
    setMessages(prev => [...prev, userMsg, botMsg]);
    setInput('');
  };

  return (
    <div style={{position: 'fixed', bottom: '24px', right: '24px', zIndex: 1000}}>
      {open && (
        <div style={{
          width: '320px', background: 'white', borderRadius: '16px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.15)', marginBottom: '12px',
          overflow: 'hidden'
        }}>
          <div style={{background: '#003366', color: 'white', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span style={{fontWeight: 'bold'}}>FOSSEE Assistant</span>
            <FaTimes style={{cursor: 'pointer'}} onClick={() => setOpen(false)}/>
          </div>

          <div style={{height: '280px', overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                alignSelf: msg.from === 'user' ? 'flex-end' : 'flex-start',
                background: msg.from === 'user' ? '#003366' : '#f0f4ff',
                color: msg.from === 'user' ? 'white' : '#333',
                padding: '10px 14px',
                borderRadius: '12px',
                maxWidth: '80%',
                fontSize: '0.9rem'
              }}>
                {msg.text}
              </div>
            ))}
          </div>

          <div style={{display: 'flex', padding: '12px', borderTop: '1px solid #eee', gap: '8px'}}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Type a message..."
              style={{flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none', fontSize: '0.9rem'}}
            />
            <button onClick={sendMessage} style={{
              background: '#003366', color: 'white', border: 'none',
              borderRadius: '8px', padding: '10px 14px', cursor: 'pointer'
            }}>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}

      <button onClick={() => setOpen(!open)} style={{
        background: '#003366', color: 'white', border: 'none',
        borderRadius: '50%', width: '56px', height: '56px',
        fontSize: '1.5rem', cursor: 'pointer', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)', float: 'right'
      }}>
        <FaComments />
      </button>
    </div>
  );
}

export default Chatbot;
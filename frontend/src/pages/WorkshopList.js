import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserTie, FaCalendarAlt, FaChair } from 'react-icons/fa';

const workshops = [
  { id: 1, title: 'Python for Beginners', instructor: 'Dr. Sharma', date: 'April 20, 2026', seats: 30 },
  { id: 2, title: 'Scilab Fundamentals', instructor: 'Prof. Mehta', date: 'April 25, 2026', seats: 25 },
  { id: 3, title: 'Django Web Development', instructor: 'Dr. Rao', date: 'May 5, 2026', seats: 20 },
  { id: 4, title: 'Data Analysis with NumPy', instructor: 'Prof. Iyer', date: 'May 10, 2026', seats: 35 },
];

function WorkshopList() {
  return (
    <div style={{padding: '40px 20px', background: '#f5f7fa', minHeight: '100vh'}}>
      <h1 style={{textAlign: 'center', color: '#003366', marginBottom: '40px'}}>Available Workshops</h1>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center'}}>
        {workshops.map(workshop => (
          <div key={workshop.id} style={{
            background: 'white',
            borderRadius: '12px',
            padding: '24px',
            width: '280px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
          }}>
            <h3 style={{color: '#003366', marginBottom: '12px'}}>{workshop.title}</h3>
            
            <p style={{color: '#555', marginBottom: '6px'}}><FaUserTie style={{color: '#0066cc', marginRight: '8px'}}/>{workshop.instructor}</p>
            <p style={{color: '#555', marginBottom: '6px'}}><FaCalendarAlt style={{color: '#0066cc', marginRight: '8px'}}/>{workshop.date}</p>
            <p style={{color: '#555', marginBottom: '20px'}}><FaChair style={{color: '#0066cc', marginRight: '8px'}}/>{workshop.seats} seats available</p>
            <Link to={`/workshops/${workshop.id}`} style={{
              background: '#003366',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'inline-block'
            }}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkshopList;
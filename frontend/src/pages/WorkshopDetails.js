import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaUserTie, FaCalendarAlt, FaChair, FaArrowLeft } from 'react-icons/fa';

const workshops = [
  { id: 1, title: 'Python for Beginners', instructor: 'Dr. Sharma', date: 'April 20, 2026', seats: 30, description: 'Learn Python programming from scratch with hands-on exercises.' },
  { id: 2, title: 'Scilab Fundamentals', instructor: 'Prof. Mehta', date: 'April 25, 2026', seats: 25, description: 'Master Scilab for numerical computation and data analysis.' },
  { id: 3, title: 'Django Web Development', instructor: 'Dr. Rao', date: 'May 5, 2026', seats: 20, description: 'Build powerful web applications using Django framework.' },
  { id: 4, title: 'Data Analysis with NumPy', instructor: 'Prof. Iyer', date: 'May 10, 2026', seats: 35, description: 'Explore data analysis techniques using NumPy and Python.' },
];

function WorkshopDetails() {
  const { id } = useParams();
  const workshop = workshops.find(w => w.id === parseInt(id));

  if (!workshop) return <h2 style={{textAlign: 'center', padding: '40px'}}>Workshop not found</h2>;

  return (
    <div style={{maxWidth: '700px', margin: '40px auto', padding: '0 20px'}}>
      <Link to="/workshops" style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        color: '#003366', textDecoration: 'none', marginBottom: '24px'
      }}>
        <FaArrowLeft /> Back to Workshops
      </Link>

      <div style={{background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 2px 16px rgba(0,0,0,0.1)'}}>
        <h1 style={{color: '#003366', marginBottom: '24px'}}>{workshop.title}</h1>
        <p style={{color: '#555', marginBottom: '12px', fontSize: '1.05rem'}}>
          <FaUserTie style={{color: '#0066cc', marginRight: '8px'}}/>{workshop.instructor}
        </p>
        <p style={{color: '#555', marginBottom: '12px', fontSize: '1.05rem'}}>
          <FaCalendarAlt style={{color: '#0066cc', marginRight: '8px'}}/>{workshop.date}
        </p>
        <p style={{color: '#555', marginBottom: '24px', fontSize: '1.05rem'}}>
          <FaChair style={{color: '#0066cc', marginRight: '8px'}}/>{workshop.seats} seats available
        </p>
        <p style={{color: '#444', lineHeight: '1.7', marginBottom: '32px'}}>{workshop.description}</p>
        <button style={{
          background: '#05417c', color: 'white', padding: '14px 32px',
          borderRadius: '8px', border: 'none', fontSize: '1rem',
          fontWeight: 'bold', cursor: 'pointer', width: '100%'
        }}>
          Register for this Workshop
        </button>
      </div>
    </div>
  );
}

export default WorkshopDetails;
import React from'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from'./components/Navbar';
import Home from'./pages/Home';
import './App.css';
import WorkshopList from './pages/WorkshopList';
import WorkshopDetails from './pages/WorkshopDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
function App(){
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/workshops/:id" element={<WorkshopDetails />} />
        <Route path="/workshops" element={<WorkshopList />} />
        <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home/>}/>
        
         </Routes>
         
      <Footer />
      <Chatbot />
    </Router>
  );
}
export default App;


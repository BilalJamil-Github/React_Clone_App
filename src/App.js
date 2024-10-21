import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, RouterProvider, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Aboutus from './components/Aboutus/Aboutus';
import Services from './components/Services/Services';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Latestproject from './components/Latestproject/Latestproject';
import Client from './components/Client/Client';
import Contactus from './components/Contactus/Contactus';
function App() {

  return <>
     <BrowserRouter>
     <Navbar/>
        <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/about" element={<Aboutus/>} />
        <Route path="/features" element={<Features/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/projects" element={<Latestproject/>} />
        <Route path="/clients" element={<Client/>} />
        <Route path="/contactus" element={<Contactus/>} />
        </Routes>
     </BrowserRouter>
  </>
}

export default App;

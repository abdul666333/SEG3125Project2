import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Programs from "./pages/Programs";
import Confirmation from './pages/Contact_Confirmation';
import Book from './pages/Book';
import Book2 from './pages/Book2';
import Book4 from './pages/Book4';
import Book1 from './pages/Book1';
import Beginner from './pages/Beginner';
import Amateur from './pages/Amateur';
import Pro from './pages/Pro';
import Spring from './pages/Spring';
import Summer from './pages/Summer';
import Fall from './pages/Fall';
import Winter from './pages/Winter';
import Cost1 from './pages/Cost1';
import Cost2 from './pages/Cost2';
import Cost3 from './pages/Cost3';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/book" element={<Book />} />
          <Route path="/book1" element={<Book1 />} />
          <Route path="/book2" element={<Book2 />} />
          <Route path="/book4" element={<Book4 />} />
          <Route path="/beginner" element={<Beginner />} />
          <Route path="/amateur" element={<Amateur />} />
          <Route path="/pro" element={<Pro />} />
          <Route path="/spring" element={<Spring />} />
          <Route path="/summer" element={<Summer />} />
          <Route path="/fall" element={<Fall />} />
          <Route path="/winter" element={<Winter />} />
          <Route path="/cost1" element={<Cost1 />} />
          <Route path="/cost2" element={<Cost2 />} />
          <Route path="/cost3" element={<Cost3 />} />
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product1 from './Product1.jsx';
import Product2 from './Product2.jsx';
import Product3 from './Product3.jsx';
import Product4 from './Product4.jsx';
import Product5 from './Product5.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Product1 />} />
        <Route path="/product2" element={<Product2 />} />
        <Route path="/product3" element={<Product3 />} />
        <Route path="/product4" element={<Product4 />} />
        <Route path="/product5" element={<Product5 />} />

      </Routes>
    </Router>
  );
}

export default App;

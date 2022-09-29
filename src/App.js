
import React from 'react';
import './Style/App.scss';
import Context from './components/Context';
import Index from './pages/Index';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalog from './pages/Catalog';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  
  return (
    <div className="App">
      
      <ChakraProvider>
      <Router>
      <Context>
    
      <Navbar/>
     
      <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path=":id" element={<ProductDetail />} />
      </Routes>

      
      </Context>
      </Router>
      
      </ChakraProvider>
    </div>
  );
}

export default App;

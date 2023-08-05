// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Screenshots from './components/Screenshots';
import PrivacyPolicy from './components/PrivacyPolicy'; // Import the PrivacyPolicyPage component
import Footer from './components/Footer';
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";



function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
        <Route path="/" element={<Screenshots/>}/>
        <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
        </Routes>
        <Footer />
      </div>
      </BrowserRouter>
  );
}

export default App;

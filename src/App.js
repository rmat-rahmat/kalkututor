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
import { ChakraProvider } from '@chakra-ui/react'
import Home from './Home';


function App() {

  return (
    <BrowserRouter basename="/kalkututor">
      <ChakraProvider>
        <Home/>
        {/* <Header />
        <Routes>
        <Route path="/" element={<Screenshots/>}/>
        <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
        </Routes>
        <Footer /> */}
        </ChakraProvider>
      </BrowserRouter>
  );
}

export default App;

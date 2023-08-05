// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>KalkuTutor</h1>
      <p>Your Interactive Calculator and Learning Tool</p>
      <Link to="/privacy-policy">Privacy Policy</Link>
    </header>
  );
};

export default Header;

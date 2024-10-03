import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Handloom Fashion</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/auth">Login / Sign Up</Link> {/* Updated link for unified Auth component */}
      </nav>
    </header>
  );
};

export default Header;

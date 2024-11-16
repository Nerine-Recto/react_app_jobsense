import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import Home from '@mui/icons-material/Home';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Logout from '@mui/icons-material/Logout';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="logo" />
      </div>
      <Link to="/">
        <div className="navbar-icon">
          <Home />
        </div>
      </Link>
      <Link to="/profile">
        <div className="navbar-icon">
          <AccountCircle />
        </div>
      </Link>
      <Link to="/logout">
        <div className="navbar-icon">
          <Logout />
        </div>
      </Link>
      <button>
        <ReorderIcon />
      </button>
    </div>
  );
}

export default Navbar;

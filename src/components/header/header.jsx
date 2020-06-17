import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="options">
        <Link className="option" to="/">
          Template List
        </Link>
      </div>
      <div className="options">
        <Link className="option" to="/create">
          Add
        </Link>
      </div>
    </div>
  );
};

export default Header;

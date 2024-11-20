'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import { MdShoppingCart } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; 
import './Navbar.css';

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const router = useRouter();

  const handleCartClick = () => {
    router.push('/cart');
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://www.thehosteller.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fnewlogo.e62095cc.jpg&w=640&q=75"
          alt="Logo"
          width={150}
        />
      </div>

      <div className="rightSide">
        <div className="links">
          <a href="/" className="link">
            Locations
          </a>
          <a href="/" className="link">
            Hostels
          </a>
          <a href="/hostelcount" className="link">
            Hostels Count
          </a>
        </div>

        <div className="cart" onClick={handleCartClick}>
          <span className="cartCount">{cart.length}</span>
          <MdShoppingCart size={30} />
        </div>

        <div className="profile">
          <FaUserCircle size={40} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addOrRemoveFromCart } from '../../redux/action';
import './CartPage.css';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      {cart.length > 0 ? (
        <div className="cart-list">
          {cart.map((hostel) => (
            <div key={hostel.id} className="cart-item">
              <img src={hostel.image} alt={hostel.name} className="cart-item-image" />
              <div className="cart-item-info">
                <h2 className="cart-item-name">{hostel.name}</h2>
                <p className="cart-item-details">
                  "Escape the ordinary. Experience extraordinary comfort and hospitality."
                </p>
                <button
                  onClick={() => dispatch(addOrRemoveFromCart(hostel))}
                  className="remove-button"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-cart">
          <img
            src="https://ecartweb.thewrteam.in/theme-2/public/images/empty-cart.png"
            alt="Empty Cart"
            className="empty-cart-image"
          />
        </div>
      )}
    </div>
  );
};

export default CartPage;

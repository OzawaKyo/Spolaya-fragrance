import React from 'react';
import { useCart } from '../../contexts/CartContext';
import Navbar from '../Navbar/Navbar';
import './Cart.css';

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.Price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart__container">
      <Navbar />
      <div className="cart__content">
        <h1 className="cart__title">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="cart__empty-message">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart__items">
              {cart.map((product) => (
                <div key={product.id} className="cart__item">
                  <img className="cart__item-image" src={product.Image} alt={product.Name} />
                  <div className="cart__item-details">
                    <h3 className="cart__item-name">{product.Name}</h3>
                    <p className="cart__item-brand">by {product.Brand}</p>
                    <p className="cart__item-price">{product.Price} DH</p>
                    <p className="cart__item-quantity">Quantity: {product.quantity}</p>
                  </div>
                  <button className="cart__item-remove" onClick={() => removeFromCart(product.id)}>Remove</button>
                </div>
              ))}
            </div>
            <div className="cart__summary">
              <h2 className="cart__summary-total">Total: {calculateTotal()} DH</h2>
              <button className="cart__checkout-button">Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
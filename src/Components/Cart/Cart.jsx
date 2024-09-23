import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { motion } from 'framer-motion';  // Import motion from Framer Motion
import Navbar from '../Navbar/Navbar';
import './Cart.css';

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.Price * item.quantity, 0).toFixed(2);
  };

  // Variants for the container, items, and summary
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        when: "beforeChildren", // Ensure it animates before children
        staggerChildren: 0.2,   // Stagger children animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="cart__container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Navbar />
      <motion.div
        className="cart__content"
        variants={containerVariants}
      >
        <motion.h1
          className="cart__title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your Cart
        </motion.h1>

        {cart.length === 0 ? (
          <motion.p
            className="cart__empty-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Your cart is empty.
          </motion.p>
        ) : (
          <>
            <motion.div
              className="cart__items"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {cart.map((product) => (
                <motion.div
                  key={product.id}
                  className="cart__item"
                  variants={itemVariants}
                >
                  <img
                    className="cart__item-image"
                    src={product.Image}
                    alt={product.Name}
                  />
                  <div className="cart__item-details">
                    <h3 className="cart__item-name">{product.Name}</h3>
                    <p className="cart__item-brand">by {product.Brand}</p>
                    <p className="cart__item-price">{product.Price} DH</p>
                    <p className="cart__item-quantity">Quantity: {product.quantity}</p>
                  </div>
                  <button
                    className="cart__item-remove"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </button>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="cart__summary"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="cart__summary-total">
                Total: {calculateTotal()} DH
              </h2>
              <button className="cart__checkout-button">Checkout</button>
            </motion.div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

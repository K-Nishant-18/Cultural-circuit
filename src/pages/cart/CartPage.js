import React, { useState } from 'react';
import './CartPage.css';

const CartPage = ({ cart, handleRemoveFromCart }) => {
  const [showCheckoutModal, setShowCheckoutModal] = useState(false); 
  const [orderConfirmed, setOrderConfirmed] = useState(false); // State to show order confirmation
  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

  const handleCheckout = () => {
    setShowCheckoutModal(true); // Open the modal
  };

  const handleConfirmPurchase = () => {
    // Simulate order confirmation (In real use, integrate with payment gateway)
    
    // For now, let's assume the order is confirmed:
    setOrderConfirmed(true); // Set order as confirmed
    setShowCheckoutModal(false); // Close the modal
    // Optionally, clear the cart or reset the state
    // handleClearCart(); 
  };

  const handleCloseModal = () => {
    setShowCheckoutModal(false); // Close the modal
  };

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      {orderConfirmed ? (
        <div className="order-confirmation">
          <h3>Order Confirmed!</h3>
          <p>Thank you for your purchase. Here is your order summary:</p>
          <div className="order-details">
            {cart.map((product, index) => (
              <div key={index} className="order-item">
                <img src={product.image} alt={product.name} />
                <div>
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <p className="price">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="total-price">
            <h3>Total: ${totalPrice}</h3>
          </div>
          <p>You will receive a confirmation email soon.</p>
        </div>
      ) : cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <div className="cart-items">
            {cart.map((product, index) => (
              <div key={index} className="cart-item">
                <img src={product.image} alt={product.name} />
                <div>
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <p className="price">${product.price}</p>
                  <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="total-price">
            <h3>Total: ${totalPrice}</h3>
            <button onClick={handleCheckout}>Proceed to Checkout</button>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {showCheckoutModal && (
        <div className="checkout-modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h3>Checkout</h3>
            <p>Your total is: ${totalPrice}</p>
            <p>Proceed to payment...</p>
            <button onClick={handleConfirmPurchase}>Confirm Purchase</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

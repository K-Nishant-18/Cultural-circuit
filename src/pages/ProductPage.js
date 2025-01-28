import React, { useState } from 'react';
import './ProductPage.css';
import CartPage from './cart/CartPage'; // Import the CartPage component

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewCart, setViewCart] = useState(false); // State to toggle between product page and cart page

  const products = [
    { id: 1, name: 'Traditional Saree', description: 'Elegant handwoven sarees from Banaras.', price: 50, image: 'https://via.placeholder.com/300x300.png?text=Traditional+Saree' },
    { id: 2, name: 'Wooden Toys', description: 'Handcrafted toys from Channapatna.', price: 20, image: 'https://via.placeholder.com/300x300.png?text=Wooden+Toys' },
    { id: 3, name: 'Handcrafted Vase', description: 'Beautiful handcrafted vase for your home.', price: 30, image: 'https://via.placeholder.com/300x300.png?text=Handcrafted+Vase' },
    { id: 4, name: 'Designer Kurta', description: 'Stylish kurtas for festive occasions.', price: 40, image: 'https://via.placeholder.com/300x300.png?text=Designer+Kurta' },
    { id: 5, name: 'Silver Earrings', description: 'Delicate silver earrings with intricate designs.', price: 15, image: 'https://via.placeholder.com/300x300.png?text=Silver+Earrings' },
    { id: 6, name: 'Hand-painted Mug', description: 'Hand-painted ceramic mugs with vibrant designs.', price: 10, image: 'https://via.placeholder.com/300x300.png?text=Hand-painted+Mug' },
    { id: 7, name: 'Brass Lantern', description: 'Vintage brass lantern to add elegance to your space.', price: 60, image: 'https://via.placeholder.com/300x300.png?text=Brass+Lantern' },
    { id: 8, name: 'Wooden Clock', description: 'Eco-friendly wooden wall clock with a unique design.', price: 35, image: 'https://via.placeholder.com/300x300.png?text=Wooden+Clock' },
    { id: 9, name: 'Woolen Shawl', description: 'Cozy woolen shawls for the winter season.', price: 45, image: 'https://via.placeholder.com/300x300.png?text=Woolen+Shawl' },
    { id: 10, name: 'Leather Wallet', description: 'Genuine leather wallet for men and women.', price: 25, image: 'https://via.placeholder.com/300x300.png?text=Leather+Wallet' },
    { id: 11, name: 'Table Lamp', description: 'Modern table lamp with adjustable light intensity.', price: 40, image: 'https://via.placeholder.com/300x300.png?text=Table+Lamp' },
    { id: 12, name: 'Handcrafted Basket', description: 'Durable woven baskets for storage and decor.', price: 15, image: 'https://via.placeholder.com/300x300.png?text=Handcrafted+Basket' },
    { id: 13, name: 'Terracotta Pot', description: 'Handmade terracotta pot for your plants.', price: 20, image: 'https://via.placeholder.com/300x300.png?text=Terracotta+Pot' },
    { id: 14, name: 'Kumkum Box', description: 'Traditional wooden kumkum box for pooja rituals.', price: 25, image: 'https://via.placeholder.com/300x300.png?text=Kumkum+Box' },
    { id: 15, name: 'Cotton Blanket', description: 'Soft and breathable cotton blankets for comfort.', price: 50, image: 'https://via.placeholder.com/300x300.png?text=Cotton+Blanket' },
    { id: 16, name: 'Wooden Frame', description: 'Handcrafted wooden frames for your precious memories.', price: 18, image: 'https://via.placeholder.com/300x300.png?text=Wooden+Frame' },
    { id: 17, name: 'Beaded Necklace', description: 'Beautiful handmade beaded necklaces for any occasion.', price: 28, image: 'https://via.placeholder.com/300x300.png?text=Beaded+Necklace' },
    { id: 18, name: 'Traditional Pottery', description: 'Authentic pottery made using traditional techniques.', price: 60, image: 'https://via.placeholder.com/300x300.png?text=Traditional+Pottery' },
    { id: 19, name: 'Channapatna Toys', description: 'Authentic wooden toys from the Channapatna region.', price: 22, image: 'https://via.placeholder.com/300x300.png?text=Channapatna+Toys' },
    { id: 20, name: 'Pashmina Scarf', description: 'Luxurious Pashmina scarf for all seasons.', price: 70, image: 'https://via.placeholder.com/300x300.png?text=Pashmina+Scarf' },
    { id: 21, name: 'Handwoven Carpet', description: 'Traditional carpets to add elegance to your home.', price: 150, image: 'https://via.placeholder.com/300x300.png?text=Handwoven+Carpet' },
    { id: 22, name: 'Ceramic Plates', description: 'Hand-painted ceramic plates for dining.', price: 35, image: 'https://via.placeholder.com/300x300.png?text=Ceramic+Plates' },
    { id: 23, name: 'Wicker Basket', description: 'Eco-friendly wicker baskets for home storage.', price: 25, image: 'https://via.placeholder.com/300x300.png?text=Wicker+Basket' },
    { id: 24, name: 'Bamboo Furniture', description: 'Sustainable bamboo furniture for modern homes.', price: 200, image: 'https://via.placeholder.com/300x300.png?text=Bamboo+Furniture' },
    { id: 25, name: 'Handmade Candles', description: 'Fragrant handmade candles for every occasion.', price: 15, image: 'https://via.placeholder.com/300x300.png?text=Handmade+Candles' },
    { id: 26, name: 'Artisanal Soap', description: 'Natural and handmade soaps for skincare.', price: 10, image: 'https://via.placeholder.com/300x300.png?text=Artisanal+Soap' },
    { id: 27, name: 'Embroidered Cushion', description: 'Beautiful embroidered cushions for living rooms.', price: 30, image: 'https://via.placeholder.com/300x300.png?text=Embroidered+Cushion' },
    { id: 28, name: 'Marble Statue', description: 'Hand-carved marble statues for decor.', price: 500, image: 'https://via.placeholder.com/300x300.png?text=Marble+Statue' },
    { id: 29, name: 'Leather Belt', description: 'Durable leather belts for everyday use.', price: 20, image: 'https://via.placeholder.com/300x300.png?text=Leather+Belt' },
    { id: 30, name: 'Glassware Set', description: 'Elegant glassware set for special occasions.', price: 60, image: 'https://via.placeholder.com/300x300.png?text=Glassware+Set' }
  ];

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const nextPage = () => {
    if (currentPage * productsPerPage < products.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      {viewCart ? (
        <CartPage cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
      ) : (
        <div>
          {/* Banner Section */}
          <section className="ecommerce-banner">
            <div className="ecommerce-banner-overlay">
              <div className="ecommerce-banner-content">
                <h2>Shop the Best Deals</h2>
                <p>Discover exclusive offers on top products! Start shopping now and enjoy unbeatable prices.</p>
              </div>
            </div>
          </section>

          {/* Navbar */}
          <nav className="navbar">
            <button className="cart-button" onClick={() => setViewCart(true)}>
              Cart ({cart.length})
            </button>
          </nav>

          {/* Main Content */}
          <div className="main-content">
            
        {/* Advertisement Section */}
        <div className="advertisement-section">
          <img src="https://images.unsplash.com/photo-1542992015-8b34590ec327?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Advertisement" className="ad-image" />
          <img src="https://images.unsplash.com/photo-1527264935190-1401c51b5bbc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <img src="https://images.unsplash.com/photo-1542992015-8b34590ec327?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Advertisement" className="ad-image" />
          <img src="https://images.unsplash.com/photo-1527264935190-1401c51b5bbc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

        </div>
            <div className="product-section">
              <div id="products-grid" className="products-grid">
                {currentProducts.map((product) => (
                  <div key={product.id} className="product-card">
                    <img
                      src={product.image}
                      alt={product.name}
                      onClick={() => handleProductClick(product)}
                    />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p className="price">${product.price}</p>
                    <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                  </div>
                ))}
              </div>

              <div className="pagination-container">
                <button onClick={prevPage} disabled={currentPage === 1}>
                  Back
                </button>
                <button onClick={nextPage} disabled={currentPage * productsPerPage >= products.length}>
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Product Detail Modal */}
          {showModal && selectedProduct && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={handleCloseModal}>
                  &times;
                </span>
                <img src={selectedProduct.image} alt={selectedProduct.name} />
                <h3>{selectedProduct.name}</h3>
                <p>{selectedProduct.description}</p>
                <p className="price">${selectedProduct.price}</p>
                <button onClick={() => handleAddToCart(selectedProduct)}>Add to Cart</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductPage;

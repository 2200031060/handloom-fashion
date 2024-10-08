import React from 'react';
import ProductCard from '../components/ProductCard';
import backgroundImage from '../assets/background.jpg'; // Import the background image
import productImage1 from '../assets/1.jpg'; // Import product image 1
import productImage2 from '../assets/5.jpg'; // Import product image 2
import bagImage1 from '../assets/3.jpeg'; // Replace with your actual image paths
import bagImage2 from '../assets/8.jpeg'; // Replace with your actual image paths
import blanketImage1 from '../assets/6.jpeg'; // Replace with your actual image paths

const Products = () => {
  // Sample data for products
  const products = [
    {
      id: 1,
      name: 'Handloom Saree',
      price: 2500,
      description: 'A beautiful handloom saree.',
      imageUrl: productImage1, // Use imported image
    },
    {
      id: 2,
      name: 'Handwoven Scarf',
      price: 1200,
      description: 'A warm handwoven scarf.',
      imageUrl: productImage2, // Use imported image
    },
    {
      id: 3,
      name: 'Handloom Bag - Floral Design',
      price: 2500,
      description: 'A beautiful handloom bag with floral designs.',
      imageUrl: bagImage1, // Use imported image
    },
    {
      id: 4,
      name: 'Handloom Bag - Geometric Design',
      price: 3000,
      description: 'A stylish handloom bag with geometric patterns.',
      imageUrl: bagImage2, // Use imported image
    },
    {
      id: 5,
      name: 'Handloom Blanket - Warm and Cozy',
      price: 4500,
      description: 'A soft handloom blanket perfect for cold nights.',
      imageUrl: blanketImage1, // Use imported image
    },
  ];

  // Applying the background image using inline styles
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
  };

  return (
    <div style={sectionStyle}>
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;

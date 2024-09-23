// src/Components/Search/Search.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import Navbar from '../Navbar/Navbar';
import './Search.css';

export default function Search() {
  const [results, setResults] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllProducts = async () => {
      const querySnapshot = await getDocs(collection(db, 'Products'));
      const products = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setAllProducts(products);
    };

    fetchAllProducts();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const normalizedQuery = searchQuery.toLowerCase();
      const filteredResults = allProducts.filter(product =>
        product.Name.toLowerCase().includes(normalizedQuery)
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [searchQuery, allProducts]);

  return (
    <div className="Search_container">
      <Navbar />
      <div className="Search">
        <h1>Search Results for "{searchQuery}"</h1>
        <div className="products">
          {results.map(product => (
            <div key={product.id} className="product-card" onClick={() => navigate(`/Shop/${product.id}`)}>
              <img className="product-image" src={product.Image} alt={product.Name} />
              <h4 className="product-name">{product.Name} by {product.Brand}</h4>
              <p className="product-price">{product.Price} dh</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import Navbar from "../Navbar/Navbar";
import './WomenShop.css';
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase'
import { useNavigate } from 'react-router-dom';


function MenShop() {

    const [productList, setProductList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getProductList = async () => {
            try {
                const ProductCollectionRef = collection(db, "Products");
                const data = await getDocs(ProductCollectionRef);
                const filteredData = data.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }))
                    .filter(product => product.Gender === "Women");
                setProductList(filteredData);
            } catch (err) {
                console.error(err);
            }
        };

        getProductList();
    }, []);

    return (
        <div className="MenShop_container">
            <Navbar />
            <div className="MenShop">
                <h1 className='Title' >Women Cologne :</h1>
                <div className="products">
                    {productList.map((product) => (
                        <div
                            key={product.id}
                            className="product-card"
                            onClick={() => navigate(`/Shop/${product.id}`)}
                        >
                            <img className="product-image" src={product.Image} alt={product.Name} />
                            <h4 className="product-name">{product.Name} by {product.Brand}</h4>
                            <p className="product-price">{product.Price} dh</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default MenShop;
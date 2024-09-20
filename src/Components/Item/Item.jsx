import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { useEffect, useState } from 'react'
import { db } from '../../config/firebase'
import { getDocs, collection } from 'firebase/firestore'
import './Item.css'
import './button.css'
import { useCart } from '../../contexts/CartContext';

export default function Item() {
    const { id } = useParams();
    const [productList, setProductList] = useState([]);
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const ProductCollectionRef = collection(db, "Products");

    const { addToCart } = useCart();

    useEffect(() => {
        const getProductList = async () => {
            try {
                const data = await getDocs(ProductCollectionRef);
                const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                setProductList(filteredData)
            } catch (err) {
                console.error(err);
            }
        };

        getProductList();
    }, []);

    useEffect(() => {
        const currentProduct = productList.find(product => product.id === id);
        setProduct(currentProduct);
    }, [id, productList]);

    const handleAddToCart = (e) => {
        e.preventDefault(); // Prevent form submission
        if (product) {
            console.log('Adding to cart:', { ...product, quantity });
            addToCart({ ...product, quantity });
        }
    };

    return (
        <div className='item-container'>
            <Navbar />
            <div className='item'>
                {product ? (
                    <>
                        <div className='item-name'>
                            <h1 className='item-title'>{product.Name}</h1>
                            <h1 className='item-brand'><span className='t-span'>by</span> {product.Brand}</h1>
                        </div>
                        <hr className='hrhr' />
                        <form className='ll' onSubmit={handleAddToCart}>
                            <img className='item-img' src={product.Image} alt={product.Name} />
                            <div className='ll_right'>
                                <h2 className='item-price'>Quantity :</h2>
                                <input 
                                    type="number" 
                                    value={quantity} 
                                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                                    min="1"
                                    className='quantity' 
                                />
                                <h2 className='item-price'>{product.Price} <span className='p-span'>DH</span></h2>
                                <button type="submit" className='box shop_now'>ADD TO CART</button>
                            </div>
                        </form>
                    </>
                ) : (
                    <p className='loading'>Loading...</p>
                )}
            </div>
        </div>
    );
}
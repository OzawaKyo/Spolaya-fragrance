import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { useEffect, useState } from 'react';
import { db } from '../../config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import './Item.css';
import './button.css';
import { motion } from 'framer-motion'; // Import Framer Motion
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
                const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setProductList(filteredData);
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
            addToCart({ ...product, quantity });
        }
    };

    // Variants for Framer Motion animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
    };

    return (
        <motion.div
            className='item-container'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <Navbar />
            <div className='item'>
                {product ? (
                    <>
                        <motion.div className='item-name' variants={itemVariants}>
                            <h1 className='item-title'>{product.Name}</h1>
                            <h1 className='item-brand'><span className='t-span'>by</span> {product.Brand}</h1>
                        </motion.div>
                        <motion.hr className='hrhr' variants={itemVariants} />
                        <motion.form className='ll' onSubmit={handleAddToCart} variants={itemVariants}>
                            <motion.img
                                className='item-img'
                                src={product.Image}
                                alt={product.Name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                            />
                            <motion.div className='ll_right' variants={itemVariants}>
                                <h2 className='item-price'>Quantity :</h2>
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                                    min="1"
                                    className='quantity'
                                />
                                <h2 className='item-price'>{product.Price} <span className='p-span'>DH</span></h2>
                                <motion.button
                                    type="submit"
                                    className='box shop_now'
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    ADD TO CART
                                </motion.button>
                            </motion.div>
                        </motion.form>
                    </>
                ) : (
                    <motion.p className='loading' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        Loading...
                    </motion.p>
                )}
            </div>
        </motion.div>
    );
}

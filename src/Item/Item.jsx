
import { useParams } from 'react-router-dom';
import Navbar from '../Homepage/Navbar';
import { useEffect, useState } from 'react'
import { db } from '../config/firebase'
import { getDocs, collection } from 'firebase/firestore'
import './Item.css'

export default function Item() {

    const { id } = useParams();
    const [productList, setProductList] = useState([]);
    const [product, setProduct] = useState(null);
    const ProductCollectionRef = collection(db, "Products");

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

    return (
        <div className='item-container'>
            <Navbar />
            <div className='item'>
                {product ? (
                    <>  <div className='item2'>
                            <div className='item-name'>
                                <h1 className='item-title'>{product.Name}</h1>
                                <h1 className='item-brand'><span className='t-span'>by</span> {product.Brand}</h1>
                            </div>
                            <hr className='hrhr'/>
                            <img className='item-img' src={product.Image} alt={product.Name} />

                            <h2 className='item-price'>{product.Price} <span className='p-span'>DH</span></h2>
                        </div>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            
        </div>
    );
}

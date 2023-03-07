import { useEffect, useState } from 'react'
import {db} from '../config/firebase'
import {getDocs , collection} from 'firebase/firestore'
import './Allmen.css'
import Navbar from "../Homepage/Navbar"
import {useNavigate} from 'react-router-dom'


export default function Allmen(){
    const [productList,setProductList]=useState([]);
    const ProductCollectionRef=collection(db,"Products")
    const navigate = useNavigate();

    useEffect( ()=>{
        const getProductList = async()=>{
            try{
                const data = await getDocs(ProductCollectionRef);
                const filteredData = data.docs.map((doc)=>({...doc.data(), id: doc.id}))
                setProductList(filteredData)
            }catch(err){
                console.error(err);
            }
        };  

        getProductList( );
    },[] )

    const womenProductList = productList.filter(product => product.Gender === "Women");
    return(
        <div>
            <Navbar />
            <hr />
        <div className='allmen'>
            <h3 className='aTitle' >Women Cologne : </h3>
            <div className="products">
                {womenProductList.map((product, index) => (
                    
                    <div onClick={()=>{navigate(`/Shop/${product.id}`);}} className="product" key={index}>
                        <img className='product-image' src={product.Image} alt="" />
                        <h1 className='product-name'>{product.Name} by {product.Brand}</h1>
                        <h2 className='product-price'>{product.Price} dh</h2>
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}
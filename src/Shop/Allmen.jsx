import { useEffect, useState } from 'react'
import {db} from '../config/firebase'
import {getDocs , collection} from 'firebase/firestore'
import './Allmen.css'
import Navbar from "../Homepage/Navbar"


export default function Allmen(){
    const [productList,setProductList]=useState([]);
    const ProductCollectionRef=collection(db,"Products")

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

    const menProductList = productList.filter(product => product.Gender === "Men");
    return(
        <div>
            <Navbar />
            <hr />
        <div className='allmen'>
            <h1 className='aTitle' >Men Cologne : </h1>
            <div className="a-product-list">
                {menProductList.map((product, index) => (
                    
                    <div className="a-product" key={index}>
                        <img className='a-product-image' src={product.Image} alt="" />
                        <h1 className='a-product-name'>{product.Name} by {product.Brand}</h1>
                        <h2 className='product-price'>{product.Price} dh</h2>
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}
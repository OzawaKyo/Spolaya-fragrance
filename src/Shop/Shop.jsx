import { useEffect, useState } from 'react'
import {db} from '../config/firebase'
import {getDocs , collection} from 'firebase/firestore'
import { async } from '@firebase/util';
import './Shop.css'

export default function Shop(){
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
    

    return(
        <div className='products'>
            {productList.slice(0, 4).map((product) =>(
                <div className='productPage'>
                    <img className='product-image' src={product.Image} alt="" />
                    <h1 className='product-name'>{product.Name}</h1>
                    <h1>{product.Brand}</h1>
                    <h1>{product.Price}</h1>
                </div>
            ))}
        </div>
    )
}
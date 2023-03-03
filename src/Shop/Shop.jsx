import { useEffect, useState } from 'react'
import {db} from '../config/firebase'
import {getDocs , collection} from 'firebase/firestore'
import { async } from '@firebase/util';
import './Shop.css'
import {useNavigate} from 'react-router-dom'

export default function Shop(){
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
    
    const menProductList = productList.filter(product => product.Gender === "Men");
    const womenProductList = productList.filter(product => product.Gender === "Women");


    return(
        <div className='shop'>
            <h1 className='Title' >Men Favourites </h1>
            <div onClick={()=>{navigate('/Shop/Men')}} className='view'>
                <h2 className='view-all'  >View all </h2>
                <svg className='arrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M14.59 16.004L5.982 7.397l1.414-1.414 8.607 8.606V7.004h2v11h-11v-2z"/></svg>
            </div>
            <div className='products'>
                {menProductList.slice(0, 4).map((product) =>(
                    <div className='product'>
                        <img className='product-image' src={product.Image} alt="" />
                        <h1 className='product-name'>{product.Name} by {product.Brand}</h1>
                    </div>
                ))}
            </div>
            <h1 className='Title' >Women Favourites </h1>
            <div onClick={()=>{navigate('/Shop/Women')}} className='view'>
                <h2 className='view-all' >View all </h2>
                <svg className='arrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M14.59 16.004L5.982 7.397l1.414-1.414 8.607 8.606V7.004h2v11h-11v-2z"/></svg>
            </div>
            <div className='products'>
                {womenProductList.slice(4, 8).map((product) =>(
                    <div className='product'>
                        <img className='product-image' src={product.Image} alt="" />
                        <h1 className='product-name'>{product.Name} by {product.Brand}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}
import black from "../assets/vibe.jpg"
import './button.css'
import {useNavigate} from 'react-router-dom'
import { useState } from "react";

export default function Home(){
    const navigate = useNavigate();
    return(
        <div className="Home">
            <img className="black" src={black} alt="" />
            <div className="home-text">
                <div className="part1">
                    <h1 className="smell">Take</h1>
                    <h1 className="smell">care of</h1>
                    <h1 className="smell">your smell</h1>
                </div>
                <div className="part2">
                    <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, enim aspernatur. Corporis praesentium tenetur atque aliquid eius dolore similique cumque corrupti autem, facilis non aspernatur consectetur tempora quidem dignissimos hic.</p>
                    <button onClick={()=>{navigate('/Shop')}} className="button-27 shop-now">SHOP NOW</button>
                </div>
            </div>
        </div>
    )
}
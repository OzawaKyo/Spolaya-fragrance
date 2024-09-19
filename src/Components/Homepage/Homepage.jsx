import Navbar from "../Navbar/Navbar"
import './Homepage.css'
import './button.css'
import image from '../../assets/image.jpg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Homepage() {

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="homepage_container">
            <Navbar />
            <div className="homepage">
                <img src={image} className="image" />
                <div className="home_right">
                    <div className="title">
                        <h1>Take</h1>
                        <h1>care of</h1>
                        <h1>your scent</h1>
                    </div>
                    <p>Discover a fragrance that defines you. Our collection is designed to
                        refresh, uplift, and bring confidence to every step you take. Explore
                        our hand-picked selection of premium scents !</p>
                    <button onClick={() => navigate('/Shop')} className="shop_now">SHOP NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Homepage
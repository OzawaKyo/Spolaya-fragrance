import Navbar from "../Homepage/Navbar"
import Auth from "./Auth"
import logo from "../assets/spolaya fragrance 4.png"
import {useNavigate} from 'react-router-dom'
import {auth} from '../config/firebase' 
import User from "./User"

export default function AuthPage(){
    const navigate = useNavigate();

    return(
        <div className="authPage">
            <img onClick={()=>{navigate('/')}} className="log-logo" src={logo} alt="" />
            {/* <Auth /> */}
            <User />
        </div>
    )
}
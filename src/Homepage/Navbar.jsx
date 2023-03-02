import logo from "../assets/spolaya fragrance 3.png"
import {useNavigate} from 'react-router-dom'

export default function Navbar(){

    const navigate = useNavigate();

    return(
        <nav className="navbar">
            <div className="left-nav nav-item">
                <h2 onClick={()=>{navigate('/')}}>HOME</h2>
                <h2 onClick={()=>{navigate('/Shop')}}>SHOP</h2>
            </div>
            
            <img onClick={()=>{navigate('/')}} className="logo-nav nav-item" src={logo} />
            
            <div className="right-nav nav-item">
                <svg className="nav-icons"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z" fill="rgba(144,144,144,1)"/></svg>
                <svg onClick={()=>{navigate('/Shop')}} className="nav-icons"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path fill="none" d="M0 0h24v24H0z"/><path d="M7 8V6a5 5 0 1 1 10 0v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3zm0 2H5v10h14V10h-2v2h-2v-2H9v2H7v-2zm2-2h6V6a3 3 0 0 0-6 0v2z" fill="rgba(144,144,144,1)"/></svg>
            </div>
        </nav>
    )
}   
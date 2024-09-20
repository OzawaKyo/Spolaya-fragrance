import './Navbar.css';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMouseEnter = (i) => {
    if (i === 1) {
      setIsHovered1(true);
    } else if (i === 2) {
      setIsHovered2(true);
    }
  };

  const handleMouseLeave = (i) => {
    if (i === 1) {
      setIsHovered1(false);
    } else if (i === 2) {
      setIsHovered2(false);
    }
  };
  
  // Determine the active page using location.pathname
  const isHomeActive = location.pathname === '/';
  const isShopActive = location.pathname.startsWith('/Shop');

  return (
    <div className="nav_container">
      <nav className="navbar">
        <div className="left">
          <h1 className={isHomeActive ? 'active':''} onClick={() => navigate('/')}>HOME</h1>
          <h1 className={isShopActive ? 'active':''} onClick={() => navigate('/Shop')}>SHOP</h1>
        </div>
        {/* Logo clickable to navigate to home */}
        <img
          className="logo"
          src={logo}
          alt="logo"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        />
        <div className="right">
          <div
            className="icons"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
          >
            <svg
              className={`nav-icons nav-icon1 ${isHovered1 ? 'active' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="36"
              height="36"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"
                fill={isHovered1 ? 'rgba(0,0,0,1)' : 'rgba(144,144,144,1)'}
              />
            </svg>
          </div>
          <div
            className="icons"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
            onClick={() => navigate('/Cart')}
          >
            <svg
              onClick={() => navigate('/Shop')}
              className={`nav-icons nav-icon2 ${isHovered2 ? 'active' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="36"
              height="36"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M7 8V6a5 5 0 1 1 10 0v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3zm0 2H5v10h14V10h-2v2h-2v-2H9v2H7v-2zm2-2h6V6a3 3 0 0 0-6 0v2z"
                fill={isHovered2 ? 'rgba(0,0,0,1)' : 'rgba(144,144,144,1)'}
              />
            </svg>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
}

export default Navbar;

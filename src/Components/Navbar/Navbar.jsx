import './Navbar.css';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null); // Ref for the input
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/Search?q=${searchTerm}`);
      setSearchTerm(''); // Clear input after search
      setIsSearchActive(false); // Hide input after search
    }
  };

  const handleMouseEnter = (i) => {
    if (i === 1) setIsHovered1(true);
    else if (i === 2) setIsHovered2(true);
  };

  const handleMouseLeave = (i) => {
    if (i === 1) setIsHovered1(false);
    else if (i === 2) setIsHovered2(false);
  };

  const isHomeActive = location.pathname === '/';
  const isShopActive = location.pathname.startsWith('/Shop');

  // Focus the input when it becomes active
  useEffect(() => {
    if (isSearchActive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchActive]);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsSearchActive(false); // Hide input when clicking outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <motion.div
      className="nav_container"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <nav className="navbar">
        <div className="left">
          <motion.h1
            className={isHomeActive ? 'active' : ''}
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.1 }}
          >
            HOME
          </motion.h1>
          <motion.h1
            className={isShopActive ? 'active' : ''}
            onClick={() => navigate('/Shop')}
            whileHover={{ scale: 1.1 }}
          >
            SHOP
          </motion.h1>
        </div>
        <motion.img
          className="logo"
          src={logo}
          alt="logo"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
        <div className="right">
          {isSearchActive ? (
            <form onSubmit={handleSearch} className="search-form">
              <input
                ref={inputRef} // Attach ref here
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="search-input"
              />
            </form>
          ) : (
            <motion.div
              className="icons search_icon"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={() => handleMouseLeave(1)}
              onClick={() => setIsSearchActive(true)} // Show input on click
              whileHover={{ scale: 1.1 }}
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
            </motion.div>
          )}
          <motion.div
            className="icons"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
            onClick={() => navigate('/Cart')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
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
          </motion.div>
        </div>
      </nav>
      <hr />
    </motion.div>
  );
}

export default Navbar;

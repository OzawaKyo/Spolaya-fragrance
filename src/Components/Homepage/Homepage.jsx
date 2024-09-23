import Navbar from "../Navbar/Navbar";
import './Homepage.css';
import './button.css';
import image from '../../assets/image.jpg';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';  // Import Framer Motion

function Homepage() {
  const navigate = useNavigate();

  // Variants for the homepage animations
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 20, staggerChildren: 0.3 }
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="homepage_container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Navbar />
      <div className="homepage">
        <motion.img
          src={image}
          className="image"
          variants={imageVariants}  // Animate image
          alt="Fragrance"
        />
        <motion.div className="home_right" variants={textVariants}>
          <div className="title">
            <h1>Take</h1>
            <h1>care of</h1>
            <h1>your scent</h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Discover a fragrance that defines you. Our collection is designed to
            refresh, uplift, and bring confidence to every step you take. Explore
            our hand-picked selection of premium scents!
          </motion.p>
          <motion.button
            onClick={() => navigate('/Shop')}
            className="shop_now"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            SHOP NOW
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Homepage;

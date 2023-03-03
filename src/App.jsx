import './App.css'
import Homepage from './Homepage';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import ShopPage from './Shop/ShopPage';
import Allmen from './Shop/Allmen';
import Allwomen from './Shop/Allwomen';


function App() {

  return (
    <Router >
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Shop' element={<ShopPage />} />
          <Route path='/Shop/Men' element={<Allmen />} />
          <Route path='/Shop/Women' element={<Allwomen />} />
        </Routes>
    </Router>
  );
}

export default App

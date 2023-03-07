import './App.css'
import Homepage from './Homepage';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import ShopPage from './Shop/ShopPage';
import Allmen from './Shop/Allmen';
import Allwomen from './Shop/Allwomen';
import { useParams } from 'react-router-dom';
import Item from './Item/Item';


function App() {

  return (
    <Router >
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Shop' element={<ShopPage />} />
          <Route path='/Shop/Men' element={<Allmen />} />
          <Route path='/Shop/Women' element={<Allwomen />} />
          <Route path='/Shop/:id' element={<Item/>} />
        </Routes>
    </Router>
  );
}

export default App

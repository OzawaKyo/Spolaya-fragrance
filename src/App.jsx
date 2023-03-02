import './App.css'
import Homepage from './Homepage';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import ShopPage from './Shop/ShopPage';

function App() {

  return (
    <Router >
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Shop' element={<ShopPage />} />
        </Routes>
    </Router>
  );
}

export default App

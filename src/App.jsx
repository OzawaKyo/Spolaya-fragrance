import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Homepage from './Components/Homepage/Homepage'
import Shop from './Components/Shop/Shop'
import MenShop from './Components/MenShop/MenShop'
import WomenShop from './Components/WomenShop/WomenShop'
import Item from './Components/Item/Item'
import Cart from './Components/Cart/Cart';


function App() {

  return (
    <Router >
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/Shop/Men' element={<MenShop />} />
          <Route path='/Shop/Women' element={<WomenShop />} />
          <Route path='/Shop/:id' element={<Item/>} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
    </Router>
  )
}

export default App

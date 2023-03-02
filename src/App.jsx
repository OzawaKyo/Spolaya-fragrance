import './App.css'
import Homepage from './Homepage';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import AuthPage from './User/AuthPage';

function App() {

  return (
    <Router >
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Log' element={<AuthPage />} />
        </Routes>
    </Router>
  );
}

export default App

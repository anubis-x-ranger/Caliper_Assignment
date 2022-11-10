import {Routes,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Clients from './pages/Clients';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/clients' element={<Clients/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;

import {Routes,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
// import About from './pages/About';
import Cart from './pages/Cart';
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
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;


import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Services from './Pages/Services/Services';
import Header from './Shared/Header/Header';
import Notfound from './Pages/Notfound/Notfound';

function App() {
  return (
    <div className="App">
       <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/services' element={<Services></Services>}></Route>
          <Route path='/checkout' element={<Checkout></Checkout>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='*' element={<Notfound></Notfound>}></Route>
          
        </Routes>
    </div>
  );
}

export default App;


import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';

import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Header from './Shared/Header/Header';
import Notfound from './Pages/Notfound/Notfound';
import Register from './Pages/Login/Register/Register';

import Footer from './Shared/Footer/Footer';


function App() {
  return (
    <div className="App">
       <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/services/:servicesId' element={<Services></Services>}></Route>
           
          <Route path='/blog' element={<Blog></Blog>}></Route>
          
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='*' element={<Notfound></Notfound>}></Route>
          
        </Routes> 
        <Footer></Footer>


    </div>
  );
}

export default App;

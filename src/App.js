// import styles 
import './styles/style.css';

// import router
import {Routes, Route, Link} from 'react-router-dom';
// import pages component (manggil component)
import Login from './pages/Login'
import Register from './pages/Register'
import Homepage from './pages/Homepage'
import Complain from './pages/Complain'
import Profile from './pages/Profile'
import Product from './pages/Product'
import Category from './pages/Category'
import EditProduct from './pages/EditProduct'
import EditCategory from './pages/EditCategory';
import DetailPage from './pages/DetailPage'
// import DetailProduct from './pages/DetailProduct';

function App()  {
  return(
    
    // define <browswe route> as parent element
    <> 
      <div>
      </div>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/homepage' element={<Homepage/>}></Route>
          <Route path='/complain' element={<Complain/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/product' element={<Product/>}></Route>
          <Route path='/category' element={<Category/>}></Route>
          <Route path='/edit-product' element={<EditProduct/>}></Route>
          <Route path='/edit-category' element={<EditCategory/>}></Route>
          <Route path='./detailpage' element={<DetailPage/>}></Route>  
          {/* <Route path='./detail-product' element={<DetailProduct/>}></Route>       */}
        </Routes>
    </>
  );
}

export default App;
import {BrowserRouter, Routes,Route} from 'react-router-dom'

//Components
import './App.css';
import AddProduct from './components/AddProduct';
import Footer from './components/Footer';
import Login from './components/Login';
import Navbar from './components/Navbar';
import PrivateComponent from './components/PrivateComponent';
import Product from './components/Product';
import SignUp from './components/SignUp';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route element={<PrivateComponent/>}>
          <Route path='/' element={<Product/>}/>
          <Route path='/add' element={<AddProduct/>}/>
          <Route path='/update/:id' element={<Update/>}/>
          <Route path='/profile' element={<h1>Profile</h1>}/>
          <Route path='/logout' element={<h1>Logout</h1>}/>
        </Route>

        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

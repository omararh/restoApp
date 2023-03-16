  import '../src/App.css';
  import { Route, Routes } from 'react-router-dom';
  import NavBar from '../src/componants/NavBar';
  import Products from './componants/Products';
  import About from '../src/componants/About';
  import Home from '../src/pages/home';
  import Footer from './componants/Footer';
  import ProductDetails from './componants/ProductDetails';


  const App = () => {
    return (
      <div className="App">
        <NavBar />
        <Routes>
            <Route path = "/home" element = {<Home /> } />
            <Route path = "/About" element = {<About /> } />
            <Route path = "/details/:productId" element = {<ProductDetails /> } />
            <Route path = "/" element = {<Products /> } />
        </Routes> 

      <Footer />
      </div>
    );
  }

  export default App;

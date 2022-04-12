import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Product /> */}
      <Products />
    </div>
  );
}

export default App;

import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import CheckoutPage from './components/CheckoutPage';
import Navbar from './components/Navbar';
//import Product from './components/Product';
import Products from './components/Products';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/checkout-page">
            <CheckoutPage />
          </Route>
          <Route path="/">
            <Products /> 
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

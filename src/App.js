import './App.css';
import Header from './Header';
import Home from './Home'
import Checkout from './Checkout';
import { BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
        <Switch>
          <Route path="/checkout">
          <Header></Header>
          <Checkout></Checkout>
          </Route>
          <Route exact path="/">
          <Header></Header>
          <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

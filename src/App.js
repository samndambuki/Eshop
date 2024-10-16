import './App.css';
import Header from './Header';
import Home from './Home'
import Checkout from './Checkout';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
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

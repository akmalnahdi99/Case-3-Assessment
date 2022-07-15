import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import "./css/style.css";
import Home from './pages/Home';
import Login from './pages/Login';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './component/PrivateRoute';
import 'react-toastify/dist/ReactToastify.css';
import About from './pages/About';
import product1 from './pages/Product1';
import Product6 from './pages/Product6';
import Product4 from './pages/Product4';
import Product5 from './pages/Product5';
import Product2 from './pages/Product2';
import Product3 from './pages/Product3';


function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
              <Route path="/login" component={Login} />
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/about" component={About} />
              <PrivateRoute exact path="/product1" component={product1} />
              <PrivateRoute exact path="/product6" component={Product6} />
              <PrivateRoute exact path="/product4" component={Product4} />
              <PrivateRoute exact path="/product5" component={Product5} />
              <PrivateRoute exact path="/product2" component={Product2} />
              <PrivateRoute exact path="/product3" component={Product3} />
            </Switch>
          
        </AuthProvider>
      </Router>
    </div>

  );
}

export default App;

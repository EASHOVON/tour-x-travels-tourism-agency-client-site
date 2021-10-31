import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import About from './components/About/About';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import AddAService from './components/AddAService/AddAService';
import MyOrders from './components/MyOrders/MyOrders';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import Header from './components/Home/Header/Header';
import Footer from './components/Home/Footer/Footer';

function App()
{
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/about">
              <Header></Header>
              <About></About>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path="/book/:bookingId">
              <Header></Header>
              <PlaceOrder></PlaceOrder>
              <Footer></Footer>
            </PrivateRoute>
            <Route path="/addAService">
              <Header></Header>
              <AddAService></AddAService>
              <Footer></Footer>
            </Route>
            <Route path="/myOrders">
              <Header></Header>
              <MyOrders></MyOrders>
              <Footer></Footer>
            </Route>
            <Route path="/manageOrders">
              <Header></Header>
              <ManageAllOrders></ManageAllOrders>
              <Footer></Footer>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <Header></Header>
              <NotFound></NotFound>
              <Footer></Footer>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

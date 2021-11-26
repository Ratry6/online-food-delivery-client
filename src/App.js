import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from './pages/components/Home/Home';
import Header from './pages/components/Fixed Route/Header/Header';
import Footer from './pages/components/Fixed Route/Footer/Footer';
import Login from './pages/components/Login/Login';
import AddService from './pages/components/AddService/AddService';
import Services from './pages/components/Home/Services/Services';
import usePlaceholder from 'react-bootstrap/esm/usePlaceholder';
import PlaceOrder from './pages/components/Home/Services/PlaceOrder/PlaceOrder';
import Register from './pages/components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/components/PrivateRoute/PrivateRoute';
import MyOrders from './pages/components/MyOrders/MyOrders';

import ManageAllOrders from './pages/components/ManageAllOrders/ManageAllOrders';
import ErrorPage from './pages/components/ErrorPage/ErrorPage';





function App() {
  return (
    <div className="App">
   <AuthProvider>
   <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/allservices">
          <Services></Services>
        </Route>
        <PrivateRoute path="/placeOrder/:_id">
          <PlaceOrder></PlaceOrder>
        </PrivateRoute>
        <Route path="/login">
        <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <PrivateRoute path="/addservice">
          <AddService></AddService>
        </PrivateRoute>
        <PrivateRoute path="/myallorders">
          <MyOrders></MyOrders>
        </PrivateRoute>
        <PrivateRoute path="/managingAllOrders">
          <ManageAllOrders></ManageAllOrders>
        </PrivateRoute>
        <Route path="*">
         <ErrorPage></ErrorPage>
        </Route>
      </Switch>
     <Footer></Footer>
    </Router>
   </AuthProvider>
    </div>
  );
}

export default App;

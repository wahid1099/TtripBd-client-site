import logo from './logo.svg';
import AuthProvider from "./Context/AuthProvider";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./Component/Log In/Login";
import Register from "./Component/Register/Register";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Home from "./Pages/Homepage/Home";
import Notfound from "./Pages/NotFound/Notfound";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import NewTrips from "./Component/AddNew Service/NewTrips";
import Trips from "./Component/Trips/Trips";
import PrivateRouter from "./Component/Log In/PrivateRouter";
import PlaceOrder from "./Component/PlaceOrder/PlaceOrder";
import MyOrders from "./Component/My Orders/MyOrders";
import ManageAllorders from "./Component/ManageAllOrders/ManageAllorders";




function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
         <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact  path='/Home'>
              <Home></Home>
            </Route>

            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/about">
             <About></About>
            </Route>
            <Route exact path="/trips">
             <Trips></Trips>
            </Route>

            <Route exact path="/contact">
              <Contact></Contact>
            </Route>

              <PrivateRouter exact path="/newtrip">
                  <NewTrips></NewTrips>
              </PrivateRouter>

              <PrivateRouter exact path="/placeorder/:tripid">
                  <PlaceOrder></PlaceOrder>
              </PrivateRouter>
              <PrivateRouter exact path="/myorders">
                  <MyOrders></MyOrders>
              </PrivateRouter>
              <PrivateRouter exact path="/allorder">
                  <ManageAllorders></ManageAllorders>
              </PrivateRouter>
            {/*<PrivateRoute exact path="/:serviceid">*/}
            {/*  /!*<ServiceDetails></ServiceDetails>*!/*/}
            {/*</PrivateRoute>*/}
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>

          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

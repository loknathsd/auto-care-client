import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import { createContext, useState } from 'react';
import Services from './components/Home/Services/Services';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddService from './components/Dashboard/AddService/AddService';
import AddReview from './components/Dashboard/AddReview/AddReview';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import ManageServices from './components/Dashboard/ManageServices/ManageServices';
import BookingList from './components/Dashboard/BookingList/BookingList';
import OrderList from './components/Dashboard/OrderList/OrderList';

export const ContextUser = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <ContextUser.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>

        <Switch>
        <Route path="/dashboard/orderList">
            <OrderList></OrderList>
          </Route>
        <Route path="/dashboard/bookingList">
            <BookingList></BookingList>
          </Route>
        <Route path="/dashboard/manageServices">
            <ManageServices></ManageServices>
          </Route>
        <Route path="/dashboard/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
        <Route path="/dashboard/review">
            <AddReview></AddReview>
          </Route>

          <Route path="/dashboard/addService">
            <AddService></AddService>
          </Route>
          <PrivateRoute path="/dashboard/book/:id">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
        </Switch>

      </Router>
    </ContextUser.Provider>
  );
}

export default App;

import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./components/Register/Register";
import ExplorePlants from './components/Shared/ExplorePlants/ExplorePlants';
import BookPlants from './components/Home/BookPlants/BookPlants';
import NotFound from './components/NotFound/NotFound';
import DashboardPage from './components/Dashboard/DashboardPage/DashboardPage';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/explorePlants'>
            <ExplorePlants></ExplorePlants>
          </Route>
          <PrivateRoute path="/bookPlants/:plantId">
            <BookPlants></BookPlants>
          </PrivateRoute>
          <PrivateRoute path='/dashboardPage'>
            <DashboardPage></DashboardPage>
          </PrivateRoute>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/register'>
            <Register></Register>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;


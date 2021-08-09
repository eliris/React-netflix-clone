import React, { useEffect } from 'react';
import HomeScreen from './screens/HomeScreen';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from "./firebase.js";
import {  useDispatch , useSelector } from "react-redux";
import { logout , login, selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(userAuth => {
    if (userAuth) {
      //logged in
      console.log(userAuth);
      dispatch(login({
        uid: userAuth.uid,
        email: userAuth.email,

      }))
    } else {
      //logged out
      dispatch(logout);
    }

  });

  return unsubscribe;

  }, []);


  return (
    <div className="app">
     
 
      
      <Router>
      {!user ? (
        <LoginScreen />
      ) : (
        <Switch>
          <Route path="/profile"></Route>

          <Route exact path="/">
          <HomeScreen />
          </Route>
        </Switch>
      )}
    </Router>

    </div>
  );
}

export default App;

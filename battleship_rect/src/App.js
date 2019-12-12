import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Login from './components/login'
import Main from './components/main'

const App = () => 
  (
    <Router>
    <Header />
    <Switch>
    <Route path="/login">
            <Login />
      </Route>
      <Route path="/game">
        <Main />
        </Route>
      <Route path="/">
      <p>404 not found</p>
      </Route>
      
    </Switch>
    <Footer />
    </Router>
  );


export default App;

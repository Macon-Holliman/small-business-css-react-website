import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Redirect, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';
import About  from './About/About';
import Explore  from './Explore/Explore';

function App() {
  return (
    <div className="App">

      <Router>

        <NavBar />

        <div class="home">
        <div class="preload"></div>
          <div class="home-wrapper">
            <div class="wrapper-gradient"></div>
          </div>

          <Explore />
          <Contact />
          <About />
          <Home />

        </div>
        <Footer />

      </Router>

    </div>
  );
}

export default App;

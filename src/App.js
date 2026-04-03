import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Me from './components/pages/Me';
import Projects from './components/pages/Projects';
import Videos from './components/pages/Videos';
import Calendar from './mini-apps/calendarApp/Calendar';
import BBapiApp from './mini-apps/BBAPI/BbapiApp';
import Lightbox from './mini-apps/FluidLightbox/Lightbox';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/me" component={Me} />
        <Route path="/projects" component={Projects} />
        <Route path="/videos" component={Videos} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/bbapi" component={BBapiApp} />
        <Route path="/lightbox" component={Lightbox} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

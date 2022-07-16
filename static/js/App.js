import './App.scss';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Navbar from './components/landing/header/Navbar.js';
import useEagerConnect from './hooks/useEagerConnect'

import MoroccoGod from './components/MoroccoGod/MoroccoGod';
import UnderService from './components/UnderService';
import Sidebar from './components/sidebar/Sidebar';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [navActive, setNavActive] = useState(false);
  useEagerConnect()
  return (
    <>
      <Router>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Navbar navActive={navActive} setNavActive={setNavActive} />
        {/* <Audit/> */}
         {/* <Route exact path='/navbar' component={Navbar} /> */}
        <Switch>
         
          <Route exact path='/'><MoroccoGod active={navActive} /></Route>
          <Route exact path='/underService' ><UnderService active={navActive} /></Route>
          <Route exact path='/sidebar' component={Sidebar} />
  
        </Switch>
      </Router>
    </>
  );
}

export default App;

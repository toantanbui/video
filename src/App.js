
import { Audio } from 'react-loader-spinner'
import React, { Component } from 'react';
import './App.css';
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from './redux';
import { path } from './constant/constant';
import Home from './Home/Home';
import Admin from './Admin/Admin';
import Menu from './Menu/Menu';
import DetailedInfor from './DetailedInfor/DetailedInfor';
import Infor from './Infor/Infor';
import Login from './Login/Login';




const App = () => {



  return (
    <>
      <Router history={history}>
        <Switch>

          <Route path={path.HOME} exact component={(Home)} />

          <Route path={path.ADMIN} component={(Admin)} />
          <Route path={path.MENU} component={(Menu)} />
          <Route path={path.DETAILEDINFOR} component={(DetailedInfor)} />
          <Route path={path.INFOR} component={(Infor)} />
          <Route path={path.LOGIN} component={(Login)} />

        </Switch>
      </Router>

    </>
  );
}

export default App;


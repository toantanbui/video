
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
import Elements from './Elements/Elements';
import Elements1 from './Elements1/Elements1';
import Watch from './Watch/Watch';
import SearchKey from './SearchKey/SearchKey';

import { userIsAuthenticated, userIsNotAuthenticated } from './authentication/authentication'



const App = () => {



  return (
    <>
      <Router history={history}>
        <Switch>

          <Route path={path.HOME} exact component={(Home)} />

          <Route path={path.ADMIN} component={userIsAuthenticated(Admin)} />
          <Route path={path.MENU} component={(Menu)} />
          <Route path={path.DETAILEDINFOR} component={(DetailedInfor)} />
          <Route path={path.INFOR} component={(Infor)} />
          <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
          <Route path={path.ELEMENTS} component={(Elements)} />
          <Route path={path.ELEMENTS1} component={(Elements1)} />
          <Route path={path.WATCH} component={(Watch)} />
          <Route path={path.SEARCHKEY} component={(SearchKey)} />


        </Switch>
      </Router>

    </>
  );
}

export default App;


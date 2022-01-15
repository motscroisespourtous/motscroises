import React from 'react';
import { HashRouter } from 'react-router-dom';
import Header from './partial/Header';
import Main from './partial/Main';
import './App.css';
import {useStyles} from './App.styles';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.bg}></div>
      <HashRouter>
        <Header />
        <Main />
      </HashRouter>
    </div>
  );
}



export default App;
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './partial/Header';
import Main from './partial/Main';
import './App.css';
import {useStyles} from './App.styles';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </div>
  );
}



export default App;
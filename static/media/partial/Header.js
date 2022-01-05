import React from 'react';
import { NavLink } from 'react-router-dom';
import {useStyles} from './Header.styles';

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.headerWrapper}>
      <div className={classes.bg}></div>
      <header className={classes.root} role='banner'>  
            <nav>
              <ul>
                <li><NavLink activeClassName='is--active' exact to="/home">Accueil</NavLink></li>
                <li>
                  <NavLink activeClassName='is--active' to="/about">A propos</NavLink >
                </li>                                               
              </ul> 
            </nav>
      </header>
    </div>
  );
}

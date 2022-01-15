import React from 'react';
import { NavLink } from 'react-router-dom';
import {useStyles} from './Header.styles';

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.headerWrapper}>
      <header className={classes.root} role='banner'>  
        <div className={classes.title}>Jeux pour tous</div>
        <nav>
          <ul>
            <li><NavLink activeClassName='is--active' exact to="/home">Mots croises</NavLink></li>
            <li>
              <NavLink activeClassName='is--active' to="/about">Autres</NavLink >
            </li>                                               
          </ul> 
        </nav>
      </header>
    </div>
  );
}

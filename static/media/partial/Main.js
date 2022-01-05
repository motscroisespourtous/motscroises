import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import {useStyles} from './Main.styles';

function Main() {
    const classes = useStyles();
    return (
        <main className={classes.root}>
            <Switch>
                <Route exact path="/" component={Home}>
                    <Redirect to="/home" />
                </Route> 
                <Route path="/home" exact component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        </main>
    );
}
export default Main;


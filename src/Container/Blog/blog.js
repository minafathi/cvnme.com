import React from 'react';
import Login from '../../Components/Login/Login';
import Home from '../../Components/Home/Home';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

const blog = () => {
    return(
        <div>
            <BrowserRouter>
                <Switch>
                        <Route path='/' exact component={Login}></Route>
                        <Route path="/home" component={Home}></Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default blog;
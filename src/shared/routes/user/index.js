import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import UserHomePage from "../../../ui/user/home/UserHomePage";
import UserProfilePage from '../../../ui/user/profile/pages/UserProfilePage';
import UserRoutinesHomePage from '../../../ui/user/routines/pages/UserRoutinesHomePage';
import Navbar from "../../../ui/user/navbar/pages/Navbar";
import UserRegisteredClasesHome from '../../../ui/user/registeredClases/pages/UserRegisteredClasesHome';

function UserSwitch() {
    let profile = localStorage.getItem('data');

    if (profile) {
        return (
            <>
                <Route path='/' > <Navbar /> </Route>
                <Switch>
                    <Route exact path='/'> <UserHomePage /> </Route>
                    <Route exact path='/profile'> <UserProfilePage /> </Route>
                    <Route exact path='/routines'> <UserRoutinesHomePage /> </Route>
                    <Route exact path='/registeredclasses'> <UserRegisteredClasesHome /> </Route>
                    <Redirect to="/" />
                </Switch>
            </>
        )
    } else {
        return (
            <>
                <Switch>
                    <Redirect to="/" />
                </Switch>
            </>
        )
    }
}

export default UserSwitch;
import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import TrainerHomePage from "../../../ui/trainer/home/TrainerHomePage";
import TrainerProfilePage from '../../../ui/trainer/profile/pages/TrainerProfilePage';
import TrainerRoutinesHomePage from '../../../ui/trainer/routines/pages/TrainerRoutinesHomePage';
import Navbar from "../../../ui/trainer/navbar/pages/Navbar";

function TrainerSwitch() {
    let profile = localStorage.getItem('data');

    if (profile) {
        return (
            <>
                <Route path='/' > <Navbar /> </Route>
                <Switch>
                    <Route exact path='/'> <TrainerHomePage /> </Route>
                    <Route exact path='/profile'> <TrainerProfilePage /> </Route>
                    <Route exact path='/routines'> <TrainerRoutinesHomePage /> </Route>
                    <Redirect to="/" />
                </Switch>
            </>
        )
    } else {
        return (
            <Switch>
                <Redirect to="/" />
            </Switch>
        )
    }
}

export default TrainerSwitch;

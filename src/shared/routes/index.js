import React from 'react';

import DefaultSwitch from "./default/index";
import TrainerSwitch from './trainer';
import UserSwitch from './user/index'

function Routes() {
    const type = localStorage.getItem('type');


    if (type === "staff") {
        console.log("staff switch");
        return <TrainerSwitch />
    } else if (type === "customer") {
        console.log("customer switch");
        return <UserSwitch />
    }
    console.log("default switch");
    return <DefaultSwitch />
}

export default Routes;

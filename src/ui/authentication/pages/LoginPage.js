import React from 'react';

import login_side from '../../../shared/images/login_side.webp';
import '../../../shared/css/images.css';

import LandigPageNavbar from '../components/LandingPageNavbar';
import Login from '../components/Login';

const LoginPage = () => {
    return (
        <>
            <LandigPageNavbar />
            <div className="container-fluid pl-0">
                <div className="row">
                    <div className="col-12 col-sm-6 d-none d-sm-block">
                        <img className="img-fluid BackgroundImage" src={login_side} alt="Responsive" />
                    </div>
                    <div className="col-12 col-sm-6 text-center m-0" style={{padding: "9%"}}>
                        <Login/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage;
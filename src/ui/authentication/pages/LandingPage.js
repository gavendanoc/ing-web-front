import React from 'react';

import '../../../shared/css/images.css';

import landing_lage from '../../../shared/images/landing_page.webp';
import whitelogo from '../../../shared/images/whitelogo.webp';

import LandigPageNavbar from '../components/LandingPageNavbar';
import Footer from '../../../shared/components/Footer';



const LandingPage = () => {
  return (
    <>
      <LandigPageNavbar />
      <div className="BackgroundImageContainer">
        <img align="middle" alt="react" src={landing_lage} className="BackgroundDarkImage"/>
        <div className="container ContentOverImage">
          <div className="row text-center align-items-center justify-content-center">
            <div className="col-12 col-md-6 textcenter">
              <img className="d-inline d-md-none" alt="BodySoft" title="BodySoft" src={whitelogo} width="80px"></img>
              <img className="d-none d-md-inline d-lg-none" alt="BodySoft" title="BodySoft" src={whitelogo} width="250px"></img>
              <img className="d-none d-lg-inline d-xl-none" alt="BodySoft" title="BodySoft" src={whitelogo} width="300px"></img>
              <img className="d-none d-xl-inline" alt="BodySoft" title="BodySoft" src={whitelogo} width="350px"></img>
              <h1 className="FontWhiteColor font-italic text-uppercase  mt-1 d-block d-sm-none"> My-Gym</h1>
              <h3 className="FontWhiteColor font-italic text-uppercase HugeTextFont mt-1 d-none d-sm-block"> My-Gym</h3>
            </div>
            <div className="col-12 col-md-6">
              <h1 className="mb-5 FontWhiteColor d-none d-sm-block"> Lo mejor del <strong className="FontMaincolor">fitness</strong>  en un solo lugar</h1>
              <p className=" FontWhiteColor d-none d-sm-block"><strong>My-Gym Web</strong> es la nueva plataforma web del gymnasio My-Gym que te permitirá como persona natural acceder a múltiples servicios relacionados con tu cuenta, que va desde administrar tu perfil hasta inscribir tus clases favoritas.</p>
              <h1 className="mb-5 FontWhiteColor d-block d-sm-none"> Lo mejor del <strong className="FontMaincolor">fitness</strong>  en un solo lugar</h1>
              <p className="FontWhiteColor d-block d-sm-none"><strong>My-Gym Web</strong> es la nueva plataforma web del gymnasio My-Gym que te permitirá como persona natural acceder a múltiples servicios relacionados con tu cuenta, que va desde administrar tu perfil hasta inscribir tus clases favoritas.</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default LandingPage;
import React from 'react';

import blacklogo from '../../../shared/images/blacklogo.webp';
import trainer1 from '../../../shared/images/trainer1.webp';
import trainer2 from '../../../shared/images/trainer2.webp';
import trainer3 from '../../../shared/images/trainer3.webp';
import running_people from '../../../shared/images/running_people.webp';
import fitness_girl from '../../../shared/images/fitness_girl.webp';
import profile_logo from '../../../shared/images/profile_logo.webp';

import Carrousel from '../../../shared/components/Carrousel';
import Footer from '../../../shared/components/Footer';

const UserHomePage = () => {
  return (
    <>
      <Carrousel
        img1={trainer1}
        img2={trainer2}
        img3={trainer3}
        alt1={"BodySoft"}
        alt2={"BodySoft"}
        alt3={"BodySoft"}
      />
      <br />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 text-center">
            <h1 className="FontDarkColor font-italic text-uppercase  mt-1 d-block d-sm-none">My-Gym</h1>
            <h1 className="FontMaincolor font-italic text-uppercase BigTextFont mt-1 d-block d-sm-none">Personal/Entrenador</h1>
            <h1 className="FontDarkColor font-italic text-uppercase BigTextFont mt-1 mb-1 d-none d-sm-block">My-Gym</h1>
            <h1 className="FontMaincolor font-italic text-uppercase MaxTextFont mt-1 d-none d-sm-block">Personal/Entrenador</h1>
            <h3>Con My-Gym vas a hacer que tus conocimientos en el deporte y el fisicoculturismo lleguen a una gran multitud de afiliados.</h3>
            <br />
            <img align="middle" alt="Paseos" src={blacklogo} width="200px" />
          </div>
        </div>
        <br />
        <hr />
        <br />
        <div className="row justify-content-between">
          <div className="col-12 col-md-3 text-center">
            <img align="middle" alt="Paseos" src={running_people} className="mb-3 d-block d-md-none" width="30%" style={{ margin: "auto" }} />
            <img align="middle" alt="Paseos" src={running_people} className="img-fluid mb-3 d-none d-md-block" />
            <h1 className="mb-3">Clases</h1>
            <h5>Vas a poder ofrecer clases a nuestros queridos socios en el tema que mas te guste.</h5>
          </div>
          <div className="col-12 col-md-3 text-center">
            <img align="middle" alt="Paseos" src={profile_logo} className="mb-3 d-block d-md-none" width="30%" style={{ margin: "auto" }} />
            <img align="middle" alt="Paseos" src={profile_logo} className="img-fluid mb-3 d-none d-md-block" />
            <h1 className="mb-3">Perfil</h1>
            <h5>Tendr??s tu propio perfil para que los socios te conozcan mejor y sepan de tus logros.</h5>
          </div>
          <div className="col-12 col-md-3 text-center">
            <img align="middle" alt="Paseos" src={fitness_girl} className="mb-3 d-block d-md-none" width="30%" style={{ margin: "auto" }} />
            <img align="middle" alt="Paseos" src={fitness_girl} className="img-fluid mb-3 d-none d-md-block" />
            <h1 className="mb-3">Rutinas</h1>
            <h5>Podr??s organizar la rutina de ejercicios de los socios del gymnasio.</h5>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </>
  )
}

export default UserHomePage;
import React from 'react';

import blacklogo from '../../../shared/images/blacklogo.webp';
import user1 from '../../../shared/images/user1.webp';
import user2 from '../../../shared/images/user2.webp';
import user3 from '../../../shared/images/user3.webp';
import running_people from '../../../shared/images/running_people.webp';
import fitness_girl from '../../../shared/images/fitness_girl.webp';
import profile_logo from '../../../shared/images/profile_logo.webp';

import Carrousel from '../../../shared/components/Carrousel';
import Footer from '../../../shared/components/Footer';

const UserHomePage = () => {
  return (
    <>
      <Carrousel
        img1={user3}
        img2={user1}
        img3={user2}
        alt1={"BodySoft"}
        alt2={"BodySoft"}
        alt3={"BodySoft"}
      />
      <br />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 text-center">
            <h1 className="FontDarkColor font-italic text-uppercase  mt-1 d-block d-sm-none">My-Gym</h1>
            <h1 className="FontMaincolor font-italic text-uppercase BigTextFont mt-1 d-block d-sm-none">Socio</h1>
            <h1 className="FontDarkColor font-italic text-uppercase BigTextFont mt-1 mb-1 d-none d-sm-block">My-Gym</h1>
            <h1 className="FontMaincolor font-italic text-uppercase MaxTextFont mt-1 d-none d-sm-block">Socio</h1>
            <h3>Con My-Gym web vas a poder gestionar las acividades que deseas hacer en el gymnasio. Aquí podras reservar tiempo para entrenar, inscribirte a clases y muchas cosas más!</h3>
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
            <h5>Con el servicio de Clases vas a poder agendar actividades de tu agrado.</h5>
          </div>
          <div className="col-12 col-md-3 text-center">
            <img align="middle" alt="Paseos" src={profile_logo} className="mb-3 d-block d-md-none" width="30%" style={{ margin: "auto" }} />
            <img align="middle" alt="Paseos" src={profile_logo} className="img-fluid mb-3 d-none d-md-block" />
            <h1 className="mb-3">Perfil</h1>
            <h5>Podrás tener tu propio perfil para administrar tus datos personales. </h5>
          </div>
          <div className="col-12 col-md-3 text-center">
            <img align="middle" alt="Paseos" src={fitness_girl} className="mb-3 d-block d-md-none" width="30%" style={{ margin: "auto" }} />
            <img align="middle" alt="Paseos" src={fitness_girl} className="img-fluid mb-3 d-none d-md-block" />
            <h1 className="mb-3">Rutinas</h1>
            <h5>Con el servicio de Rutinas vas a poder acceder a tu rutina personal de ejercicios.</h5>
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
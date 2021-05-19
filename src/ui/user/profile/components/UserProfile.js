import React from 'react';

const UserProfile = (props) => {
  console.log(props)

  if (!props.userData) {
    return (
      <div className="row justify-content-center text-center">
        <div className="col-12">
          <div className="spinner-border text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  let src;

  if (props.userData.photo !== 'none') {
    src = props.userData.photo;
  } else {
    src = "http://lorempixel.com/400/400/sports/";
  }

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-4 p-0 text-center">
        <img className="img-fluid d-inline d-md-none mb-5" src={src} alt={props.userData.user_name} style={{ width: "150px" }} />
        <img className="img-fluid d-none d-md-inline" src={src} alt={props.userData.user_name} style={{ height: "100%" }} />
      </div>
      <div className="col-12 col-md-4 WhiteColor p-5">
        <h3 className="FontDarkMainColor mt-0">{props.userData.user_name}</h3>
        <hr />
        <p className="mb-1">Nombre:</p>
        <h4>{props.userData.nombre}</h4>
        <p className="mb-1">Correo:</p>
        <h4>{props.userData.correo}</h4>
        <p className="mb-1">Telefono:</p>
        <h4>{props.userData.telefono}</h4>
        <p className="mb-1">Domicilio:</p>
        <h4>{props.userData.domicilio}</h4>
        <p className="mb-1">Corriente de pago:</p>
        <h4>{props.userData.corriente_de_pago ? "Sí" : "No"}</h4>
      </div>
    </div>
  )
}

export default UserProfile;
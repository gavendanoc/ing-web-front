import React from 'react';

const TrainerProfile = (props) => {

  if (!props.trainerData) {
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

  let src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mh-trainer-2-1533576998.png";
  console.log(props.trainerData);


  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-3 p-0 ">
          <div className="card">
            <img className="card-img-top" src={src} alt={props.trainerData.nombre} />
            <div className="card-body">
              <h3 className="card-title FontDarkMainColor mb-4">{props.trainerData.nombre}</h3>
              <h6 className="card-subtitle mb-2 text-muted">Edad:</h6>
              <h5 className="card-text">20</h5>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <div className="WhiteColor border p-3 mb-3">
            <h3 className="FontDarkMainColor">Contacto</h3>
            <p>Telefono:</p>
            <h4>{props.trainerData.telefono}</h4>
            <p>Domicilio:</p>
            <h4>{props.trainerData.domicilio}</h4>
            <h3 className="FontDarkMainColor mt-4">Correo</h3>
            <h6>{props.trainerData.correo}</h6>
            <h3 className="FontDarkMainColor mt-4">dni</h3>
            <h6>{props.trainerData.dni}</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainerProfile;
import React, { useState, useEffect} from 'react';

import box from '../../../../shared/images/box.webp';

import axios from 'axios';
import endpoint from '../../../../server/server';

import CreateRoutine from '../components/CreateRoutine';

import CardRoutine from '../components/CardRoutine';
const TrainerRoutinesHome = (props) => {

  const [pageState, setPageState] = useState('routines');

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [respuestaAPI, setRespuestaAPI] = useState(null);

  let table = [];

  useEffect(() => {
    const consultaAPI = async () => {
        setError(null);
        setLoading(true);

        try {
            // 'data' son los datos que se envían como request body
            // Solo es válido para 'PUT', 'POST', 'DELETE y 'PATCH'
            const consulta = await axios(
              { method: 'GET', 
                url: `${endpoint}/classinfo`
              });
            setRespuestaAPI(consulta);
        } catch (error) {
            setError(error);
        }
        
        setLoading(false);
    };

    consultaAPI();
}, []);

  const goToRoutinesHome = () => {
    setPageState('routines');
  }

  const goToCreateRoutine = () => {
    setPageState('create_routine');
  }

  if(respuestaAPI) {
	table = []
    console.log(respuestaAPI.data);
	respuestaAPI.data.map( (data, index) => {
		table.push(
			<CardRoutine
				key={index}
        nombre = {data.nombre}
				clase =  {data.nombre_clase}
				aforo = {data.aforo}
				inicio = {data.horario_entrada}
				Fin = {data.horario_salida}
				descripcion = {data.descripcion}
			/>)
	
		return null;
	}
	);
  }

  const changedRoutine = (data) => {
	window.location.reload();
    setPageState('routines');
  }

  if (loading) {
    return (
      <div className="spinner-border text-warning" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger m-0" role="alert">
        {error}
      </div>
    );
  }

  switch (pageState) {
    case 'routines':
      return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="WhiteColor border p-4 m-4">
                <h1>Administra todas las clases</h1>
					<button
					type="button"
					className="btn btn-warning"
					style = {{marginBottom:"10px"}}
					onClick={() => { goToCreateRoutine() }}
					>
					Crear Clase
				</button>
					<div className="card-columns">
						{table}
					</div>
                <hr/>
                
              </div>
            </div>
          </div>
        </div>
      );
    case 'create_routine':
      return (
        <div className="BackgroundImageContainer">
          <img align="middle" alt="react" src={box} className="BackgroundDarkImage" />
          <div className="container ContentOverImage">
            <CreateRoutine
              goToRoutinesHome={goToRoutinesHome}
              changedRoutine={changedRoutine}
			  consultaApi = {useEffect}
            />
          </div>
        </div>
      );
    default:
  }
}

export default TrainerRoutinesHome;
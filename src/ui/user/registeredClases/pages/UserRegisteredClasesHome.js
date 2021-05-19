import React, { useState, useEffect} from 'react';

import axios from 'axios';
import endpoint from '../../../../server/server';

import CardRoutine from '../components/CardRoutine';

const UserRegisteredClasesHome = (props) => {

  const [pageState, setPageState] = useState('routines');

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [respuestaAPI, setRespuestaAPI] = useState(null);
  
  const id_socio = JSON.parse(localStorage.getItem('data')).id_socio;;

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
                url: `${endpoint}/classinfo/customer/${id_socio}`
              });
            setRespuestaAPI(consulta);
        } catch (error) {
            setError(error);
        }
        
        setLoading(false);
    };

    consultaAPI();
  }, []);

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
                <h1>Tus clases inscritas!</h1>
					<div className="card-columns">
						{table}
					</div>
                <hr/>
                
              </div>
            </div>
          </div>
        </div>
      );
    default:
  }
}

export default UserRegisteredClasesHome;
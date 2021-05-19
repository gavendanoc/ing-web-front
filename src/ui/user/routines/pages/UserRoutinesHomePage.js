import React, { useState, useEffect} from 'react';

import axios from 'axios';
import UserRoutineCard from '../components/UserRoutineCard';
import endpoint from '../../../../server/server';

const UserRoutinesHomePage = () => {
  const [filter, setFilter] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [respuestaAPI, setRespuestaAPI] = useState(null);
  const profile = JSON.parse(localStorage.getItem('data'));

  const classAddedControler = () => {
    window.location.reload();
  }

  useEffect(() => {
    const consultaAPI = async () => {
        setError(null);
        setLoading(true);

        try {
            // 'data' son los datos que se envían como request body
            // Solo es válido para 'PUT', 'POST', 'DELETE y 'PATCH'
            const consulta = await axios(
              { method: 'POST', 
                url: `${endpoint}/classinfo/forcustomer`,
                data: {
                  "id_customer" : profile.id_socio
                }
              });
            setRespuestaAPI(consulta);
        } catch (error) {
            setError(error);
        }
        
        setLoading(false);
    };

    consultaAPI();
}, []);

  if (loading) {
    return (
      <div className="container mt-4">
        <div className="row justify-content-center text-center">
          <div className="col-12 p-0 m-5 ">
            <div className="spinner-border text-warning m-5" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-12 p-0 ">
            <div className="alert alert-danger m-0" role="alert">
              {error}
            </div>
          </div>
        </div>
      </div>
    );
  }

  let list = [];
  if (respuestaAPI) {
    console.log(respuestaAPI);
    // list = <HomeRoutines
    //  routinesList={data.getRoutinesByType}
    // />
    for (let i = 0; i < respuestaAPI.data.length; i++){
      const card = (<UserRoutineCard 
        key={i} 
        classData={respuestaAPI.data[i]}
        classAddedControler={() => classAddedControler()}
        />);
      list.push(card);
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <div className="WhiteColor border p-4 m-4">
            <div style={{ paddingLeft: "11%", paddingRight: "11%" }}>
              ¡Busca Nuevas clases!
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{display: "flex", flexWrap: "wrap"}}>
        {respuestaAPI && list}
      </div>
    </div>
  );
}

export default UserRoutinesHomePage;
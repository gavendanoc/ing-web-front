import React, { useState, useEffect} from 'react';

import axios from 'axios';
import { Card, Button } from 'antd';

const UserRoutineCard = (props) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [respuestaAPI, setRespuestaAPI] = useState(null);

  console.log(props.classData);

  const subscribeCustomer = async () => {
    const id_socio = JSON.parse(localStorage.getItem('data')).id_socio;
    const id_clase = props.classData.id_clase;

    
    setLoading(true);
    try {
      // 'data' son los datos que se envían como request body
      // Solo es válido para 'PUT', 'POST', 'DELETE y 'PATCH'
      const consulta = await axios(
        { method: 'POST', 
          url: "http://localhost:5000/reservation",
          data: {
            id_class: id_clase,
            id_customer: id_socio
          }
        });

      setRespuestaAPI(consulta);
    } catch (error) {
        setError(error);
    }
    setLoading(false);
  };

  if(error){
    return (<p>Error in server</p>);
  }

  if(respuestaAPI){
    props.classAddedControler();
  }

  return (
      <Card title={`clase de ${props.classData.nombre_clase}`} style={{ width: 300 , marginTop: 5, marginLeft:5}}>
        <p>Con el instructor {props.classData.nombre}</p>
        <p>Descripcion: {props.classData.descripcion}</p>
        <p>Comienza {props.classData.horario_entrada}</p>
        <p>Termina {props.classData.horario_salida}</p>
        <p>Aforo de {props.classData.aforo} personas</p>
        <Button type="primary" loading={loading} onClick={() => subscribeCustomer()}>Inscríbete!</Button>
      </Card>
  );
}

export default UserRoutineCard;
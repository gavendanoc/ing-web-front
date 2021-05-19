import React from 'react';


import CreateRoutineForm from './CreateRoutineForm';
import axios from 'axios';
import endpoint from '../../../../server/server';

const CreateRoutine = (props) => {

    
    const onSubmitRoutine = async values => {
        try {
            const create = await axios(
                { method: 'POST', 
                  url: `${endpoint}/class`,
                  data: {
                    id_staff: JSON.parse(localStorage.getItem('data')).id_personal,
                    name: values.name,
                    description: values.description,
                    enter: values.enter,
                    exit: values.exit,
                    capacity: values.capacity      
                  }
                });

            //props.goToRoutinesHome()

            const routine = { ...values}
            props.changedRoutine(routine);
            console.log("bien")
        } catch (e) {
            console.log("mal")
            console.log(e.message)
         }
    };

    return (
        <>
            <div className="row justify-content-center">
                <div className="col text-center">
                    <h1 className="FontMaincolor">Crear Rutina</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <div className="card text-center py-2" style={{ paddingLeft: "9%", paddingRight: "9%" }}>
                        <CreateRoutineForm
                            onSubmitRoutine={onSubmitRoutine}
                        />
                        <button className="btn btn-link FontBlackLink mb-0" onClick={() => { props.goToRoutinesHome() }}>Volver</button>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateRoutine;
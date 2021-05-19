import React from 'react';

export default function CardRoutine (props){
    return (
    <div className="card bg-light">
        <div className="card-body textcenter">
            <div className="container">
                <div className="row align-items-center text-center">
                    <div className="col-12">
                        <h2 className="font-weight-bold font-italic overflow-hidden" style ={{height:40}}>{props.clase}</h2>
                    </div>
                    <div className="col-12">
                        <h4 className="font-weight-bold text-monospace overflow-hidden" style ={{height:30}}>{`por ${props.nombre}`}</h4>
                    </div>

                    <div className="col-5 col-sm-12 col-lg-5 textcenter">
                        <p className="text-monospace text-muted">Aforo:</p>
                        <h2 className="font-weight-bold">{props.aforo}</h2>
                    </div>
                    <div className="col-7 col-sm-12 col-lg-7">
                        <p className="text-monospace text-muted">Inicio:</p>
                        <p className="font-weight-bold">{props.inicio}</p>
                        <p className="text-monospace text-muted">Fin:</p>
                        <p className="font-weight-bold">{props.Fin}</p>
                    </div>
                    <div className="col-12">
                        <p className="text-monospace text-muted">Descripcion:</p>
                        <p className="font-weight-bold" style ={{height:50}}>{props.descripcion}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
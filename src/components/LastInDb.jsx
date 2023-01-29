import React, { useState, useEffect } from "react";
export default function LastInDb(){
    const [ultimoUsuario, setUltimoUsuario] = useState({});
    const [ultimoServicio, setUltimoServicio] = useState({});

    useEffect ( () => {
        Promise.all([fetch('http://localhost:3050/api/servicios'),
        fetch('http://localhost:3050/api/usuarios')])
		.then(([response1, response2 ])=> {
			return Promise.all([ response1.json(), response2.json()])
		})
		.then(([data1, data2 ])=> {
            let servicio = data1.servicios[data1.count-1];
            let usuario = data2.usuarios[data2.count - 1]
            setUltimoServicio(servicio)
            setUltimoUsuario(usuario)
        })
		.catch( e => console.log(e))
    },[]
    )
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo servicio creado</h5>
                </div>
                <div className="card-body">
                    
                    <h6 className="font-weight-bold">Id: {ultimoServicio.id} </h6>
                    <h6 className="font-weight-bold">Id usuario: {ultimoServicio.idUsuario} </h6>
                    <h6 className="font-weight-bold">Titulo: {ultimoServicio.titulo} </h6>
                    <h6 className="font-weight-bold">Descripción: {ultimoServicio.descripcion} </h6>

                    <a className="btn btn-danger" target="_blank" rel="nofollow" href={`http://localhost:3050/servicio/${ultimoServicio.id}`}>View detail</a>
                </div>
            </div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo usuario registrado</h5>
                </div>
                <div className="card-body">
                    <h6 className="font-weight-bold">Id: {ultimoUsuario.id} </h6>
                    <h6 className="font-weight-bold">Nombre: {ultimoUsuario.nombreCompleto} </h6>
                    <h6 className="font-weight-bold">Correo: {ultimoUsuario.correo} </h6>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href={ultimoUsuario.url}>View detail</a>
                </div>
            </div>
        </div>
        )
}
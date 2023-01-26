import SmallCard from "./SmallCard";
import React, { useState, useEffect } from "react";


export default function ContentRowMovies(props){

    const [usuarios, setUsuarios] = useState(0);
    const [servicios, setServicios] = useState(0);
    const [categorias, setCategorias] = useState(0);
    const [imagenes, setImagenes] = useState(0);
    const [preguntas, setPreguntas] = useState(0);
    const [respuestas, setRespuestas] = useState(0);

    let fetchData = async (url) => {
        let data = await fetch(url);
        let response = await data.json();
        return response.count
        
    };
    const API = 'http://localhost:3050/api'
    useEffect( () => {
        
        let totales = async (urlApi) => {
            try{
            let totalUsuarios = await fetchData(`${urlApi}/usuarios`);
            let totalServicios = await fetchData(`${urlApi}/servicios`);
            let totalCategorias = await fetchData(`${urlApi}/servicios/categorias`);
            let totalImagenes = await fetchData(`${urlApi}/servicios/imagenes`);
            let totalPreguntas = await fetchData(`${urlApi}/servicios/preguntas`);
            let totalRespuestas = await fetchData(`${urlApi}/servicios/respuestas`);
            setUsuarios(totalUsuarios);
            setServicios(totalServicios);
            setCategorias(totalCategorias);
            setImagenes(totalImagenes);
            setPreguntas(totalPreguntas);
            setRespuestas(totalRespuestas);
            } catch (error) { 
                console.error(error)
            }
        }
        totales(API);

    }, []
    );

    let metricas =[
        {
            titulo: 'Usuarios',
            color: 'primary',
            cifra: usuarios,
            icon: 'fa-users'
        },
        {
            titulo: 'Servicios',
            color: 'success',
            cifra: servicios,
            icon: 'fa-clipboard-list'
        },
        {
            titulo: 'Categorias',
            color: 'warning',
            cifra: categorias,
            icon: 'fa-object-group'
        },
        {
            titulo: 'Imagenes',
            color: 'primary',
            cifra: imagenes,
            icon: 'fa-images'
        },
        {
            titulo: 'Preguntas',
            color: 'success',
            cifra: preguntas,
            icon: 'fa-question'
        },
        {
            titulo: 'Respuestas',
            color: 'warning',
            cifra: respuestas,
            icon: 'fa-reply-all'
        }
    ];
    return (
    <div className="row">
        {metricas.map((elemento, i)=>{
            return <SmallCard {...elemento} key={i} />
        })}
    </div>
    )
}
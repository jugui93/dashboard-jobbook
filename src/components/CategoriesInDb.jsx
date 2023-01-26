import React, { useState, useEffect } from 'react';
import Category from './Category';


function CategoriesInDb() {
    const [categorias, setCategorias] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3050/api/servicios`)
        .then(response => response.json())
        .then( data => {
            let response = data.countByCategory;
            setCategorias(response)
        })
        .catch( error => console.error(error))
    }, []
    );


  return (
      <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
              <div className="card-header py-3">
                  <h5 className="m-0 font-weight-bold text-gray-800" >Total servicios por categoría</h5>
              </div>
              <div className="card-body" id='card-body'>
                  <div className="row">
                      {Object.keys(categorias).map((categoria, i) => {
                          return <Category key={i} categoria={categoria} totalServicios={categorias[categoria]} />
                      })}
                  </div>
              </div>
          </div>
      </div>
  )
}

export default CategoriesInDb
import React, { useState, useEffect } from 'react';


function CategoriesInDb() {
    const [categorias, setCategorias] = useState({});

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`)
        .then(response => response.json())
        .then( data => {
			let response = data.Search || [];
            setMovies(response)
        })
        .catch( error => console.error(error))
    }, []
    );


  return (
      <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
              <div className="card-header py-3">
                  <h5 className="m-0 font-weight-bold text-gray-800" onMouseOver={this.overTitle}>Categorias en Base de Datos</h5>
              </div>
              <div className="card-body" id='card-body'>
                  <div className="row">
                      {this.state.genreList.map((genre, i) => {
                          return <Genre {...genre} key={i} />
                      })}
                  </div>
              </div>
          </div>
      </div>
  )
}

export default CategoriesInDb
import React from 'react'

function Category(props) {
  return (
      <a href={`http://localhost:3050/servicio/filtrar/?keywords=${props.categoria}`} target='_blank' className="col-lg-6 mb-4">
          <div className="card bg-dark text-white shadow">
              <div className="card-body">
                  {props.categoria}: {props.totalServicios}
              </div>
          </div>
      </a>
  )
}

export default Category
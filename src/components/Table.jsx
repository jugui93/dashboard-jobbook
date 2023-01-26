import TableContent from "./TableContent";
import TableHeader from "./TableHeader";
import React, { useState, useEffect } from 'react';

export default function Table () {
  const [servicios, setServicios] = useState([]);

  useEffect (()=>{
    fetch('http://localhost:3050/api/servicios')
		.then(response => {
			return response.json()
		})
		.then(data => {
      let response = data.servicios;
			setServicios(response)
		})
		.catch( e => console.log(e))
  }, [])
  

    return (
      <table className="table">
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {servicios.map((movie, i) => <TableContent {...movie} key={i}/>)}
        </tbody>
        <tfoot>
          <TableHeader />
        </tfoot>
      </table>
    )
  
}


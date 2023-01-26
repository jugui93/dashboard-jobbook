import React from "react";

export default function TableContent(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.titulo}</td>
      <td>{props.descripcion}</td>
      <td>{props.categoria.categoria}</td>
    </tr>
  )
}

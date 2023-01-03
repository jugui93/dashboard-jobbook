export default function TableContent(props) {
  return (
    <tr>
    <td>{props.title}</td>
    <td>{props.duration}</td>
    <td>{props.rating}</td>
    <td>
        <ul>
        {props.genres.map((genre)=>
            <li>{genre}</li>
        )}
        </ul>
    </td>
    <td>{props.awards}</td>
  </tr>
  )
}

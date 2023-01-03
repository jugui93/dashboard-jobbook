import TableContent from "./TableContent";
import TableHeader from "./TableHeader";

export default function Table() {
    let movies =[{
        title: 'Billy Elliot',
        duration: 123,
        rating:5,
        genres:['Drama', 'Comedia'],
        awards:2
        },{
        title:'Alicia en el pais de las maravillas',
        duration:142,
        rating:4.8,
        genres:['Drama', 'Acción', 'Comedia'],
        awards:3
        }];
  return (
    <table className="table">
    <TableHeader/>
    {movies.map((movie)=> <TableContent {...movie} />)}
    <TableHeader/>
    </table>
  )
}

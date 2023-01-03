import SmallCard from "./SmallCard"


export default function ContentRowMovies(props){
    let metricas =[
        {
            titulo:'Movies in Data Base',
            color:'primary',
            cifra:21,
            icon:'fa-clipboard-list'},
        {
            titulo:'Total Awards',
            color:'success',
            cifra:79,
            icon:'fa-award'},
        {
            titulo:'Actors Quantity',
            color:'warning',
            cifra:49,
            icon:'fa-user-check'}
    ];
    return (
    <div className="row">
        {metricas.map((elemento, i)=>{
            return <SmallCard {...elemento} key={i} />
        })}
    </div>
    )
}
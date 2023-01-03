import GenreCard from "./GenreCard";

export default function GenresInDb(){
	let genres = ['Acción', 'Animación', 'Aventura', 'Ciencia Ficción', 'Comedia','Documental', 'Drama', 'Fantasia', 'Infantiles', 'Musical']
    return (
		<div class="col-lg-6 mb-4">
			<div class="card shadow mb-4">
				<div class="card-header py-3">
					<h5 class="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
				</div>
				<div class="card-body">
					<div class="row">
						{genres.map((genre, i)=> {
							return <GenreCard genre={genre} key={genre + i}/>
						})}
					</div>
				</div>
			</div>
		</div>
    )
}
import { render } from "@testing-library/react";
import { Component } from "react";
import Genre from "./Genre";

let genres = ['Acción', 'Animación', 'Aventura', 'Ciencia Ficción', 'Comedia','Documental', 'Drama', 'Fantasia', 'Infantiles', 'Musical']
export default class GenresInDb extends Component {
	constructor(){
		super();
		this.state = {
			genreList: []
		}
	}
	componentDidMount(){
		fetch('http://localhost:3031/api/genres')
		.then(response => {
			return response.json()
		})
		.then(genres => {
			this.setState({genreList: genres.data})
		})
		.catch( e => console.log(e))
	}
	
    render(){
	return (
		<div class="col-lg-6 mb-4">
			<div class="card shadow mb-4">
				<div class="card-header py-3">
					<h5 class="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
				</div>
				<div class="card-body">
					<div class="row">
						{this.state.genreList.map((genre, i)=> {
							return <Genre {...genre} key={i}/>
						})}
					</div>
				</div>
			</div>
		</div>
    )
	}
}
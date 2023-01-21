import React, { Component } from "react";
import Genre from "./Genre";

/* let genres = ['Acción', 'Animación', 'Aventura', 'Ciencia Ficción', 'Comedia','Documental', 'Drama', 'Fantasia', 'Infantiles', 'Musical'] */
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

	overTitle(){
		document.querySelector("#card-body").classList.toggle('bg-secondary');
	}
	
    render(){
	return (
		<div className="col-lg-6 mb-4">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h5 className="m-0 font-weight-bold text-gray-800" onMouseOver={this.overTitle}>Genres in Data Base</h5>
				</div>
				<div className="card-body" id='card-body'>
					<div className="row">
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
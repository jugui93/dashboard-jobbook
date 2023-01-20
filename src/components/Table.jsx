import TableContent from "./TableContent";
import TableHeader from "./TableHeader";
import React, { Component } from 'react';

export default class Table extends Component {
  constructor(){
    super();
    this.state = {
			moviesList: []
		}
  }

  componentDidMount(){
    fetch('http://localhost:3031/api/movies')
		.then(response => {
			return response.json()
		})
		.then(movies => {
			this.setState({moviesList: movies.data})
		})
		.catch( e => console.log(e))
  }
  
  render() {
    return (
      <table className="table">
        <TableHeader />
        {this.state.moviesList.map((movie) => <TableContent {...movie} />)}
        <TableHeader />
      </table>
    )
  }
}


import React from "react";
import axios from "axios";
import MoviesList from "../components/Movies/MoviesList";
import data from "../data/top250.json"



export default class MoviePage extends React.Component {
    state = {
        movies: [],
        movieId: [],
        listId: []
    
      };
    
      componentDidMount() {
        this.fetchComment();
      }
    
      fetchComment = () => {
        axios
          .get("http://localhost:8080/movies/top250")
          .then((response) => {
            console.log(response);
            this.setState({
              movies: response.data,
              movieId: response.data[0],
            });
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
      getMoviebyId(id) {
        axios
          .get(`http://localhost:8080/movies/top250/${id}`)
          .then((response) => {
            console.log("message:", response.data);
            this.setState({
              movieId: response.data
            })
          .catch((error) => {
            console.log(error);
          });
      }
          )}
      componentDidUpdate(prevProps, prevState) {
        const { id } = this.props.match.params;
        console.log("In component did update:", id);
        if (id) {
          if (prevState.movieId && prevState.movieId.id !== id) {
            this.getMoviebyId(id);
          }
        }
      }
      

render () {

    return (
      <div>
          <MoviesList movies={this.state.movies} movieId={this.state.movieId}/>
     

      </div>
    )}

    
}

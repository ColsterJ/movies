import React from "react";
import "./App.css";
import axios from "axios";


console.log(axios);

class App extends React.Component {
  constructor() {
    super();

    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=368d1a9e8f4c583baa60f54870cda46b"
      )
      .then(response => {
        console.log("this is the good stuff", response);
        if (response && response.data && response.data.results) {
          this.setState({ movies: response.data.results });
        }
      })
      .catch(error => {
        console.log("this is the error", error);
      });

    this.state = {
      movies: []
    };
  }

  render() {
    return (
      <div className="App">
        <div className="TopText">Bootleg Cinemas</div>
        <div className="MovieBucket">
          {this.state.movies.map(movie => {
            const title = movie.title;
            const image = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
            return <div 
            class="Movie" key={movie.id}>
              <div className='textContainer'>
                <h4>{title}</h4>
              </div>

              <div className='imageContainer'>
                <img src={image}></img>
              </div>
            </div>
          })}
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import $ from "jquery";
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import MovieRow from './components/Main/MovieRow/MovieRow'


class App extends Component {
    state = {
        genres: [
            {"id": 28, "name": "Action"},
            {"id": 12, "name": "Adventure"},
            {"id": 16, "name": "Animation"},
            {"id": 35, "name": "Comedy"},
            {"id": 80, "name": "Crime"},
            {"id": 99, "name": "Documentary"},
            {"id": 18, "name": "Drama"},
            {"id": 10751, "name": "Family"},
            {"id": 14, "name": "Fantasy"},
            {"id": 36, "name": "History"},
            {"id": 27, "name": "Horror"},
            {"id": 10402, "name": "Music"},
            {"id": 9648, "name": "Mystery"},
            {"id": 10749, "name": "Romance"},
            {"id": 878, "name": "Science Fiction"},
            {"id": 10770, "name": "TV Movie"},
            {"id": 53, "name": "Thriller"},
            {"id": 10752, "name": "War"},
            {"id": 37, "name": "Western"}
        ],
        genreList:[],
    };

    inputSearch = (event) => {
        const UrlString = 'https://api.themoviedb.org/3/search/movie?api_key=5874acfd11651a28c55771624f7021f4&query=';

        $.ajax({
            url: UrlString + event.target.value,
            success: (movie_data) =>{
                this.setState(() =>({
                    genreList: movie_data.results
                }));
            },
            error: (xhr, status, err) => {
                console.error('Failed to get data', xhr, status, err)
            }
        })
    };

     GenreSearch = () => {
         let selectedValue = document.getElementById('GenreList').value;
         const UrlGenres ='https://api.themoviedb.org/3/discover/movie?api_key=5874acfd11651a28c55771624f7021f4&language=en-US&sort_by=popularity.desc&with_genres=';

         $.ajax({
             url: UrlGenres + selectedValue,
             success: (data_genres) => {
                 this.setState(() =>({
                     genreList: data_genres.results
                 }));
             },
             error: (xhr, status, err) => {
                 console.error('Failed to get data', xhr, status, err)
             }
         });
    };


  render() {
      return (
      <div className="App" >
        <Header
            genres={this.state.genres}
            genreSearch={this.GenreSearch}
            onChange={this.inputSearch}
        />
          <Main>
              {this.state.genreList.map((movie, index) => {
                  return (
                      <MovieRow
                          name={movie.title}
                          poster={'https://image.tmdb.org/t/p/w185'+ movie.poster_path}
                          overview={movie.overview}
                          key={index}/>
                      )
              })}
          </Main>
      </div>
    );
  }
}

export default App;

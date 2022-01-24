class Storage {
  static addMovieToStorage(newMovie) {
    let movies = this.getMoviesFromStorage();

    movies.push(newMovie);

    localStorage.setItem("films", JSON.stringify(movies));
  }
  static getMoviesFromStorage() {
    //console.log(newMovie)
    let movies;

    if (localStorage.getItem("films") === null) {
      movies = [];
    } else {
      movies = JSON.parse(localStorage.getItem("films"));
    }
    return movies;
  }
  static deleteMovieFromStorage(movieTitle) {
    let movies = this.getMoviesFromStorage();
    movies.forEach(function (movie, index) {
      if (movie.title === movieTitle) {
        movies.splice(index, 1);
      }
    });

    localStorage.setItem("films", JSON.stringify(movies));
  }
  static clearAllMoviesFromStorage() {
    localStorage.removeItem("films");
  }
}

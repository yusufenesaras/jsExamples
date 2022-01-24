function Storage() {}
Storage.prototype.addMovieToStorage = function (newMovie) {
  let movies = this.getMoviesFromStorage();

  movies.push(newMovie);

  localStorage.setItem("films", JSON.stringify(movies));
};
Storage.prototype.getMoviesFromStorage = function () {
  //console.log(newMovie)
  let movies;

  if (localStorage.getItem("films") === null) {
    movies = [];
  } else {
    movies = JSON.parse(localStorage.getItem("films"));
  }
  return movies;
};
Storage.prototype.deleteMovieFromStorage = function(movieTitle){

    let movies = this.getMoviesFromStorage();
     movies.forEach(function(movie,index){
         if(movie.title === movieTitle){
             movies.splice(index,1)
         }
     })

     localStorage.setItem("films",JSON.stringify(movies));
}
Storage.prototype.clearAllMoviesFromStorage = function(){
    localStorage.removeItem("films");
}

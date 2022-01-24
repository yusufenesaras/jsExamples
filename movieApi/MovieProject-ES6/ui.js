class UI {
  static addMovieToUI(newMovie) {
    const movieList = document.getElementById("films");
    movieList.innerHTML += `
  
      <td><img src="${newMovie.url}" class="img-fluid img-thumbnail"></td>
                                              <td>${newMovie.title}</td>
                                              <td>${newMovie.director}</td>
                                              <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                                            </tr>
      
      `;
  }

  static clearInputs(element1, element2, element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
  }

  static displayMessages(message, type) {
    const cardBody = document.querySelector(".card-body");

    const div = document.createElement("div");

    div.className = `alert alert-${type}`;
    div.textContent = message;

    cardBody.appendChild(div);

    setTimeout(function () {
      div.remove();
    }, 2000);
  }

  static loadAllMovies(movies) {
    const movieList = document.getElementById("films");
    movies.forEach(function (movie) {
      movieList.innerHTML += `
  
          <td><img src="${movie.url}" class="img-fluid img-thumbnail"></td>
                                                  <td>${movie.title}</td>
                                                  <td>${movie.director}</td>
                                                  <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                                                </tr>
          
          `;
    });
  }

  static deleteMovieFromUI(element) {
    element.parentElement.parentElement.remove();
  }

  static clearAllMoviesFromUI() {
    const movieList = document.getElementById("films");

    while (movieList.firstElementChild !== null) {
      movieList.firstElementChild.remove();
    }
  }
}

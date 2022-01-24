const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


//tüm eventleri yükleme
eventListener();

function eventListener() {
  form.addEventListener("submit", addMovie);
  document.addEventListener("DOMContentLoaded", function () {
    let movies = Storage.getMoviesFromStorage();
    UI.loadAllMovies(movies);
  });

  cardBody.addEventListener("click", deleteMovie);
  clear.addEventListener("click",clearAllMovies)
}

function addMovie(e) {
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if (title === "" || director === "" || url === "") {
    UI.displayMessages("Tüm alanları doldurun...", "danger");
  } else {
    // new movie
    const newMovie = new Movie(title, director, url);

    UI.addMovieToUI(newMovie); //arayüze film ekleme
    Storage.addMovieToStorage(newMovie);
    UI.displayMessages("Film eklendi!", "success");
  }

  UI.clearInputs(titleElement, urlElement, directorElement);

  e.preventDefault();
}

function deleteMovie(e) {
  //console.log(e.target);
  if (e.target.id === "delete-film") {
    UI.deleteMovieFromUI(e.target);
    Storage.deleteMovieFromStorage(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent
    );
    UI.displayMessages("Silme işlemi başarılı!", "success");
  }
}
function clearAllMovies(){

    if(confirm("Silmek istediğinize emin misiniz?")){

      UI.clearAllMoviesFromUI();
        Storage.clearAllMoviesFromStorage();
    }

}
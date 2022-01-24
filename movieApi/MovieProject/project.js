const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const ui = new UI();
const storage = new Storage();
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");
//tüm eventleri yükleme

eventListener();

function eventListener() {
  form.addEventListener("submit", addMovie);
  document.addEventListener("DOMContentLoaded", function () {
    let movies = storage.getMoviesFromStorage();
    ui.loadAllMovies(movies);
  });

  cardBody.addEventListener("click", deleteMovie);
  clear.addEventListener("click",clearAllMovies)
}

function addMovie(e) {
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if (title === "" || director === "" || url === "") {
    ui.displayMessages("Tüm alanları doldurun...", "danger");
  } else {
    // new movie
    const newMovie = new Movie(title, director, url);

    ui.addMovieToUI(newMovie); //arayüze film ekleme
    storage.addMovieToStorage(newMovie);
    ui.displayMessages("Film eklendi!", "success");
  }

  ui.clearInputs(titleElement, urlElement, directorElement);

  e.preventDefault();
}

function deleteMovie(e) {
  //console.log(e.target);
  if (e.target.id === "delete-film") {
    ui.deleteMovieFromUI(e.target);
    storage.deleteMovieFromStorage(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent
    );
    ui.displayMessages("Silme işlemi başarılı!", "success");
  }
}
function clearAllMovies(){

    if(confirm("Silmek istediğinize emin misiniz?")){

        ui.clearAllMoviesFromUI();
        storage.clearAllMoviesFromStorage();
    }

}
const myKey = "7fc380ff";

async function searchMovies(title) {
  const url = `https://www.omdbapi.com/?s=${title}&apikey=${myKey}`;
  const movies = await fetch(url);
  const movieData = await movies.json();
//   console.log(movieData); console.log pour trouver le Search
  console.log(movieData.Search);
  if (movieData.Response == "True") displayMovie(movieData.Search);
}

function displayMovie(array) {
  const sectionFilms = document.querySelector(".films");

  // Clear any existing content in the section
  sectionFilms.innerHTML = "";
  // Définir la grille CSS
  sectionFilms.style.display = "grid";
  sectionFilms.style.gridTemplateColumns = "repeat(3, 1fr)"; // fractionne l'espace disponible en 3
  sectionFilms.style.gridGap = "20px"; // Ajouter un espacement entre les éléments

  // Loop through each movie object in the array

  array.forEach((movie) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", movie["Poster"]);
    imageElement.setAttribute("alt", movie["Title"]);

    cardElement.appendChild(imageElement);

    const cardBodyElement = document.createElement("div");
    cardBodyElement.classList.add("card-body");

    const titleElement = document.createElement("h5");
    titleElement.classList.add("card-title");
    titleElement.innerHTML = movie["Title"].substring(0, 20); // limite la longueur du titre affiché dans la carte

    cardBodyElement.appendChild(titleElement);

    const pElement = document.createElement("p");
    pElement.classList.add("card-text");
    pElement.innerText = "Year: " + movie["Year"];

    // Create card footer element
    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer", "d-flex", "justify-content-end");

    // Create button element and append it to the card footer
    const btnElement = document.createElement("button");
    btnElement.classList.add("btn", "btn-secondary");
    btnElement.textContent = "More";

    cardFooter.appendChild(btnElement);
    cardBodyElement.appendChild(pElement);
    cardElement.appendChild(cardBodyElement);
    cardElement.appendChild(cardFooter);
    sectionFilms.appendChild(cardElement);
  });
}

const btnSearch = document.getElementById("search-btn");
btnSearch.addEventListener("click", function (event) {
  event.preventDefault(); // This will prevent the default form submission behavior
  const userInput = document.getElementById("search-input").value;
  searchMovies(userInput);
  console.log(userInput);
});
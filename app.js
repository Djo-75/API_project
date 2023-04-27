const myKey = config.API_KEY;

async function getMovieData() {
    const api_url = "https://www.omdbapi.com/?t=gladiator&apikey="+myKey;
    const movies = await fetch(api_url).then(response => response.json());
    console.log(movies);

    // for (let i=0; i < movies.length; i++){

    // const movie = movies[i]

    // Titre film avec balises h2
    const nomMovie = document.createElement("h2")
    nomMovie.innerText = movies.Title
    console.log(nomMovie)
    // Poster du film avec balises img
    const imageElement = document.createAttribute("img")
    imageElement.src = movies.Poster
    console.log(movies.Poster)
    // Descriptif
    const movieYear = document.createElement("p")
    movieYear.innerText = movies.Year
    console.log(movieYear)

    const movieRated = document.createElement("p")
    movieRated.innerText = movies.Rated
    console.log(movieRated)

    const movieReleased = document.createElement("p")
    movieReleased.innerText = movies.Released
    console.log(movieReleased)

    const movieDuration = document.createElement("p")
    movieDuration.innerText = movies.Runtime
    console.log(movieDuration)

    const movieGenre = document.createElement("p")
    movieGenre.innerText = movies.Genre
    console.log(movieGenre)

    const movieDirector = document.createElement("p")
    movieDirector.innerText = movies.Director
    console.log(movieDirector)

    const movieWriter = document.createElement("p")
    movieWriter.innerText = movies.Writer
    console.log(movieWriter)

    const movieActor = document.createElement("p")
    movieActor.innerText = movies.Actors
    console.log(movieActor)

    const moviePlot = document.createElement("p")
    moviePlot.innerText = movies.Plot
    console.log(moviePlot)

    const movieLanguage = document.createElement("p")
    movieLanguage.innerText = movies.Language
    console.log(movieLanguage)

    const movieCountry = document.createElement("p")
    movieCountry.innerText = movies.Country
    console.log(movieCountry)

    const movieAwards = document.createElement("p")
    movieAwards.innerText= movies.Awards
    console.log(movieAwards)

}
// }
getMovieData();
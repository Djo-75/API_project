const myKey = config.API_KEY;

async function getMovieData(search) {
    const api_url = `https://www.omdbapi.com/?t=gladiator&apikey=`+myKey;
    // const api_url = `https://www.omdbapi.com/?t=${search}&apikey=`+myKey;
    const movieData = await fetch(api_url).then(response => response.json());
    console.log(movieData);
    
    const searchMovie = document.getElementById("search").value

    const sectionFiches = document.querySelector(".fiches")

    // Titre film avec balises h2
    const nomMovie = document.createElement("h2")
    nomMovie.innerText = `Nom du film : ${movieData.Title}`
    console.log(nomMovie)
    // Poster du film avec balises img
    const imageElement = document.createElement("img")
    imageElement.src = movieData.Poster
    console.log(imageElement)
    // Descriptif
    const movieYear = document.createElement("p")
    movieYear.innerText = `Année de sortie du film : ${movieData.Year}`
    console.log(movieYear)

    const movieRated = document.createElement("p")
    movieRated.innerText = `Note du film : ${movieData.Rated}`
    console.log(movieRated)

    const movieReleased = document.createElement("p")
    movieReleased.innerText = `Nom du film : ${movieData.Released}`
    console.log(movieReleased)

    const movieDuration = document.createElement("p")
    movieDuration.innerText = `Durée : ${movieData.Runtime}`
    console.log(movieDuration)

    const movieGenre = document.createElement("p")
    movieGenre.innerText = `Genre : ${movieData.Genre}`
    console.log(movieGenre)

    const movieDirector = document.createElement("p")
    movieDirector.innerText = `Réalisateur : ${movieData.Director}`
    console.log(movieDirector)

    const movieWriter = document.createElement("p")
    movieWriter.innerText = `Writers : ${movieData.Writer}`
    console.log(movieWriter)

    const movieActor = document.createElement("p")
    movieActor.innerText = `Acteurs : ${movieData.Actors}`
    console.log(movieActor)

    const moviePlot = document.createElement("p")
    moviePlot.innerText = `Synopsis : ${movieData.Plot}`
    console.log(moviePlot)

    const movieLanguage = document.createElement("p")
    movieLanguage.innerText = `Langue : ${movieData.Language}`
    console.log(movieLanguage)

    const movieCountry = document.createElement("p")
    movieCountry.innerText = `Pays : ${movieData.Country}`
    console.log(movieCountry)

    const movieAwards = document.createElement("p")
    movieAwards.innerText= `Récompenses : ${movieData.Awards}`
    console.log(movieAwards)

    sectionFiches.appendChild(nomMovie)
    sectionFiches.appendChild(imageElement)
    sectionFiches.appendChild(movieYear)
    sectionFiches.appendChild(movieRated)
    sectionFiches.appendChild(movieReleased)
    sectionFiches.appendChild(movieDuration)
    sectionFiches.appendChild(movieGenre)
    sectionFiches.appendChild(movieDirector)
    sectionFiches.appendChild(movieWriter)
    sectionFiches.appendChild(movieActor)
    sectionFiches.appendChild(moviePlot)
    sectionFiches.appendChild(movieLanguage)
    sectionFiches.appendChild(movieCountry)
    sectionFiches.appendChild(movieAwards)

}
getMovieData(search);
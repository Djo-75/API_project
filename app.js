async function getMovieData() {
    const api_url = "https://www.omdbapi.com/?t=gladiator&apikey=7fc380ff";
    const movies = await fetch(api_url).then(response => response.json());
    console.log(movies);
}

getMovieData();
const button = document.querySelector("#getMovieList")
const displayMovies = (data) => {
const movieList = document.querySelector("#movieList")
const cardArray = data.Search.map((movie)=>{
  return` <li class="card">
        <div class="poster">
          <img
            src=${movie.Poster}
            alt=${movie.Title}
        </div>
        <h1>${movie.Title}</h1>
        <h2>${movie.Year}</h2>
      </li>`
})

   movieList.innerHTML = cardArray.join("")
    console.log("movies renderizando")

}
const getHorrorMovies = () => {
  const apiKey = process.env.API_KEY
  const searchQuery = "horror"
  const apiEndPoint = `https://www.omdbapi.com/?s=${searchQuery}&apikey=${apiKey}`
  //fetch es una funcion que nos permite hacer peticiones a una api, y devuelve algo que se llama promesa
  fetch(apiEndPoint).then((response)=>{
    return response.json()
  }).then((data)=>{
displayMovies(data);
  })
}
    
button.addEventListener("click", getHorrorMovies)

displayMovies();
const button = document.querySelector("#getMovieList")

const movieList = document.querySelector("#movieList")
const displayMovies = ()=>{
    const movieList = document.querySelector("#movieList")
    console.log("movies renderizando")
}



const getHorrorMovies = () => {
  const apiKey = "cb657900"
  const searchQuery = "horror"
  const apiEndPoint = `https://www.omdbapi.com/?s=${searchQuery}&apikey=${apiKey}`
  //fetch es una funcion que nos permite hacer peticiones a una api, y devuelve algo que se llama promesa
  fetch(apiEndPoint).then((response)=>{
    return response.json()
  }).then((data)=>{
    const horrorMovies = data.search
    console.log(data)
  })
}
    
button.addEventListener("click", getHorrorMovies)
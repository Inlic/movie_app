const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=36fc55a0ce46207ac9d6afb7b2112f39&page=1'
const IMG_PATH = 'https://image.tmbdb.org/t/p/w1280'
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=36fc55a0ce46207ac9d6afb7b2112f39&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

getMovies(API_URL)

async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()


}

function showMovies(movies) {
  main.innerHTML = ''
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie
  })
  const movieElement = document.createElement('div')
  movieElement.classList.add('movie')
  movie.innerHTML = `
  <div class="movie">
      <img
        src="https://images.unsplash.com/photo-1518173835740-f5d14111d76a?ixlib-rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1154&q=80"
        alt="">
      <div class="movie-info">
        <h3>Movie Title</h3>
        <span class="green">9.8</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, aperiam perspiciatis! Nobis, nemo nulla tenetur
        aperiam enim maiores voluptas accusantium.
      </div>
    </div>  
  `

}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const searchTerm = search.value

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm)
    search.value = ''
  } else {
    window.location.reload()
  }

})
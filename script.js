
const showMoreBtn = document.getElementById("show-more-button")

const state = {
    searchTerm:"",
}
  

async function getMovies(){
    try{
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=d533a25d73d9a6daf34cebdc1a117229`)
        const jsonData = await response.json()
        console.log('hi testing')
        for (let i = 0; i < jsonData.results.length; i++){
            generateCards(jsonData.results[i])
        }
    } catch (error){
        console.log(error)
    }
}

async function getSearchedMovie(userInput){
    try{
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie${searchTerm}?api_key=d533a25d73d9a6daf34cebdc1a117229`)

        `${GIPHY_API_BASE_URL}?q=${searchTerm}&limit=${numResults}&offset=${offset}&api_key=${apiKey}`
        const jsonData = await response.json()

        if (jsonData.results.original_title == userInput){
            generateCards(jsonData.results)

        }
    } catch (error){
        console.log(error)
    }

}

function generateCards(movieObject){
    // create star emoji
   let star = document.createElement('span')
   star.classList.add('star')
   let starContent = document.createTextNode("⭐️")
   star.appendChild(starContent)

   // create rating
   let rating = document.createElement('span')
   rating.classList.add('rating')
   let ratingContent = document.createTextNode(movieObject.vote_average)
   rating.appendChild(ratingContent)

   // create div for rating card
   let avgContainer = document.createElement('div')
   avgContainer.classList.add('average')
   avgContainer.appendChild(star)
   avgContainer.appendChild(rating)

   // document.body.appendChild(avgContainer)

   // create the image
   let image = document.createElement('img')
   image.src = "https://image.tmdb.org/t/p/w342" + movieObject.poster_path
   // document.body.insertBefore(image, avgContainer)

   // create the name of the movie
   let name = document.createElement('div')
   name.classList.add('name')
   name.innerText = movieObject.original_title
   // document.body.insertBefore(name, avgContainer.nextElementSibling) // like an insertAfter thing

   // create the section for the movies
   let moviesContainer = document.createElement('section')
   moviesContainer.classList.add('moviesContainer')

   // adding image, avgContainer and name to moviesContainer
   moviesContainer.appendChild(image)
   moviesContainer.appendChild(avgContainer)
   moviesContainer.appendChild(name)

   const generalContainer = document.getElementById('general-container')
   generalContainer.appendChild(moviesContainer)

}

// generating movies based on users input
let userForm = document.querySelector('#form')
let userInput = document.querySelector('#movie-search')


async function searchMovie(event){
    // if not explicitly handled default action should not be taken
    event.preventDefault()

    state.searchTerm = searchInput.value
    const searchResults = await getSearchedMovie(state.searchTerm)
    generateCards(searchResults)
}


window.onload = function () {
    // calling functions
    getMovies()
    
    showMoreBtn.addEventListener("click", getMovies)
    //userForm.addEventListener("submit", searchMovie)
  }

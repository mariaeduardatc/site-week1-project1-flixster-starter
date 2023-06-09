
const showMoreBtn = document.getElementById("show-more-button")

let apiPage = 1
let searchTerm = "" 

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

async function getMovies(){
    try{
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?page=${apiPage}&api_key=d533a25d73d9a6daf34cebdc1a117229`) // add pages
        const jsonData = await response.json()
        for (let i = 0; i < jsonData.results.length; i++){
            generateCards(jsonData.results[i])
        }
    } catch (error){
        console.log(error)
    }
}

async function getSearchedMovie(userInput){

    try{
        // movieId -> how to get this from the name of the movie??
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?language=en-US&query=${userInput}`)
        const jsonData = await response.json()
        
        generateCards(jsonData.results)
 
    } catch (error){
        console.log(error)
    }

}



// generating movies based on users input
let userForm = document.querySelector('#form')
let userInput = document.querySelector('#movie-search')


async function searchMovie(event){
    // if not explicitly handled default action should not be taken
    event.preventDefault()

    searchTerm = userInput.value
    await getSearchedMovie(searchTerm)
}

const modeButton = document.getElementById("dark-mode")

function darkMode(){
    let element = document.body
    let header = document.querySelector('header')
    let buttonSearch = document.querySelector('#search-button')
    let moreButton = document.querySelector('#show-more-button')
    let darkButton = document.querySelector('#dark-mode')
    let movieSearch = document.getElementById('movie-search')

    element.classList.toggle("dark-mode")
    header.classList.toggle("dark-mode")
    buttonSearch.classList.toggle("button-dark-mode")
    moreButton.classList.toggle("button-dark-mode")
    darkButton.classList.toggle("button-dark-mode")
    movieSearch.classList.toggle("button-dark-mode")

}


window.onload = function () {
    // calling functions
    getMovies()
    
    showMoreBtn.addEventListener("click", ()=>{
        apiPage++;
        getMovies()
    })

    userForm.addEventListener("submit", searchMovie)

    modeButton.addEventListener('click', darkMode)
  }

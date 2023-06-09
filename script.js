let showMoreBtn = document.getElementById("show-more-button")

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
   let ratingContent = document.createTextNode(movieObject?.vote_average)
   rating.appendChild(ratingContent)

   // create div for rating card
   let avgContainer = document.createElement('div')
   avgContainer.classList.add('average')
   avgContainer.appendChild(star)
   avgContainer.appendChild(rating)

   // document.body.appendChild(avgContainer)

   // create the image
   let image = document.createElement('img')
   image.src = "https://image.tmdb.org/t/p/w342/" + movieObject?.poster_path
   // document.body.insertBefore(image, avgContainer)

   // create the name of the movie
   let name = document.createElement('div')
   name.classList.add('name')
   name.innerText = movieObject?.original_title
   // document.body.insertBefore(name, avgContainer.nextElementSibling) // like an insertAfter thing

   // create the section for the movies
   let moviesContainer = document.createElement('section')
   moviesContainer.classList.add('moviesContainer')

   // adding image, avgContainer and name to moviesContainer
   moviesContainer.appendChild(image)
   moviesContainer.appendChild(avgContainer)
   moviesContainer.appendChild(name)

   return moviesContainer

}

function populatingMain(movieObject){
    let cards = generateCards(movieObject)
    let generalContainer = document.getElementById('general-container')
    generalContainer.appendChild(cards)
}



async function getMovies(){
    try{
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?page=${apiPage}&api_key=d533a25d73d9a6daf34cebdc1a117229`) // add pages
        const jsonData = await response.json()
        for (let i = 0; i < jsonData.results.length; i++){
            populatingMain(jsonData.results[i])
        }
    } catch (error){
        console.log(error)
    }
}

async function getSearchedMovie(userInput){

    try{
        // movieId -> how to get this from the name of the movie??
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d533a25d73d9a6daf34cebdc1a117229&language=en-US&query=${userInput}`)
        const jsonData = await response.json() 
        
        for (let i = 0; i < jsonData.results.length; i++){
            populatingModal(jsonData.results[i])
        }
 
    } catch (error){
        console.log(error)
    }

}

const modeButton = document.getElementById("dark-mode")

let element = document.body
let header = document.querySelector('header')
let buttonSearch = document.querySelector('#search-button')
let moreButton = document.querySelector('#show-more-button')
let darkButton = document.querySelector('#dark-mode')
let movieSearch = document.getElementById('movie-search')

function darkMode(){
    element.classList.toggle("dark-mode")
    header.classList.toggle("dark-mode")
    buttonSearch.classList.toggle("button-dark-mode")
    moreButton.classList.toggle("button-dark-mode")
    darkButton.classList.toggle("button-dark-mode")
    movieSearch.classList.toggle("button-dark-mode")

}

// generating movies based on users input
let userForm = document.querySelector('#form')
let userInput = document.querySelector('#movie-search')


async function searchMovie(event){
    // if not explicitly handled default action should not be taken
    event.preventDefault()

    const searchTerm = userInput.value
    await getSearchedMovie(searchTerm)
}

// adding searched movies to a modal

// vars getting info from HTML
const modalContainer = document.getElementById('modal-container')
const modal = document.getElementById('modal')
const closeModalSymbol = document.getElementById('close-modal-symbol')

function populatingModal(movieObject){
    let modalCards = generateCards(movieObject)
    let modalContainer = document.getElementById('modal')
    modalContainer.appendChild(modalCards)
    console.log('populating modal')
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


    // adding visisbility to the modal when we click the search button
    buttonSearch.addEventListener('click', () => {
        modalContainer.classList.add('visible')
    })

    // making the modal invisible when we click outside the modal
    modalContainer.addEventListener('click', () => {
        modalContainer.classList.remove('visible')
        modal.innerHTML = ''
        console.log('closing modal')
    })

    // // making the modal invisible when we click the 'x' button on the modal
    closeModalSymbol.addEventListener('click', () => {
        modalContainer.classList.remove('visible')
        modal.innerHTML = ''
        console.log('closing modal')
    })

    modal.addEventListener('click', (e) => {
        e.stopPropagation()
    })
  }

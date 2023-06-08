const pageSize = 9

const showMoreBtn = document.getElementById("show-more-button")

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTMzYTI1ZDczZDlhNmRhZjM0Y2ViZGMxYTExNzIyOSIsInN1YiI6IjY0ODIwNWFkOTkyNTljMDBlMmYzOTAxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ww6Nz24xg6uTjHrTgH9MXvJKReeG3fHh-C3fjlU-fEM'
    }
    };
    

async function getMovies(){
    try{
        const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=d533a25d73d9a6daf34cebdc1a117229')
        const jsonData = await response.json()
        console.log(jsonData.results)
        for (let i = 0; i < jsonData.results.length; i++){
            generateCards(jsonData.results[i])
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

   // creating the button to generate more movies
   let moreMoviesButton = document.createElement('button')
   moreMoviesButton.classList.add('moreMoviesButton')

   


}

getMovies()


// async function handleShowMore(event) {
//     const results = await getMovies()
//     displayResults(results)
//     state.apiPage += 1
//     console.log('button working')
//   }

// window.onload = function () {
//     const movies = getMovies() // how to get the movies from here? use foreach??
//     displayResults(movies)
    
//     showMoreBtn.addEventListener("click", handleShowMore)
//   }
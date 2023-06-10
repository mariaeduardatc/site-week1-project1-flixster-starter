 📝 **NOTE** Use this template to initialize the contents of a README.md file for your application. As you work on your assignment over the course of the week, update the required or stretch features lists to indicate which features you have completed by changing `[ ]` to `[x]`. (🚫 Remove this paragraph before submitting your assignment.)

## Week 1 Assignment: Flixster

Submitted by: **Maria Eduarda Tavora Carneiro**

Estimated time spent: **6** hours spent in total

Deployed Application (optional): [Flixster Deployed Site](https://mariaeduardatc.github.io/site-week1-project1-flixster-starter/)

### Application Features

#### Core Features

- [x] User can view a list of current movies from The Movie Database API as a grid view
  - The grid element should have an id of `movies-grid`
  - Each movie wrapper element should have a class of `movie-card`
- [x] For each movie displayed, user can see the following details:
  - Title - the element should have a class of `movie-title`
  - Image - the `img` element should have a class of `movie-poster`
  - Votes - the element should have a class of `movie-votes`
- [x] User can load more current movies by clicking a button at the bottom of the list
  - The button should have an id of `load-more-movies-btn`.
  - When clicked, the page should not refresh.
  - New movies should simply be added to the bottom
- [x] Allow users to search for movies and display them in a grid view
  - There should be a search input element with an id of `search-input`
  - Users should be able to type into the input
  - When a user hits 'Enter', it should send a search request to the movies API
  - The results from the search should be displayed on the page
  - There should be a close icon with an id of `close-search-btn` that exits the search, clears results, and shows the current movies displayed previously
- [x] Website accounts for basic HTML/CSS accessibility features
- [x] Website should be responsive

#### Stretch Features

- [x] Deploy website using GitHub Pages.
- [x] Allow user to view more details about a movie within a popup.
- [x] Improve the user experience through CSS & animation.
- [ ] Allow movie video trailers to be played using [embedded YouTube](https://support.google.com/youtube/answer/171780?hl=en)
- [x] Implement anything else that you can get done to improve the app functionality!

### Walkthrough Video

![Screen_Recording_2023-06-09_at_7_01_50_PM_AdobeExpress](https://github.com/mariaeduardatc/site-week1-project1-flixster-starter/assets/81043486/ad5e9c3a-34f1-45e0-a25a-a832b93abd5a)

(I haven't figured out how to make the gif bigger, so here is its link https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNiM2U0NTM3OWU0NGY1N2Q0NjcwNGFkMGQ2YzJiMGY0NGUwNGZlOCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/wDVLv1elQ6wOVE2OAh/giphy-downsized-large.gif)

### Reflection

- Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

The labs gave me a basic understanding of some aspects for the final project. One topic really well covered was how to create HTML elements dinamically in JavaScript. I struggled a bit on how to properly use the data from the API. At first it was hard to work with its response and json, but after this main aspect was clear, the rest was somewhat faster to figure out. 

- If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time I would make the website more responsive, and the modals more aesthetically pleasing. I would also love to create a favorites page so the user could go further in using the website's information.

- Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

I believe I did the data fetching well, but I thought my code would be cleaner than it is right now. I thought we would have more time to work on the project, but we got a bit caught up on other activities from the first week of the internship. Next time, I would like to try to generate responses to the user's search as they type on the input line, and not only when they hit submit.

### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

Shout out to Cesar and David for helping me, and all the advisors from cohort 2.

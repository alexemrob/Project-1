
var movies = [];

function displayMovieInfo() {

  var movie = $("#inputName").val();
  console.log(movie)
  var queryURL = "https://api.themoviedb.org/3/search/movie?api_key=4e2b560fdefd991469f809e56246ffa2&query=" + movie;

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response)

    var arrayCount = response.results.length
        
    for (var i = 0; i < arrayCount; i++){

    var movieTitle = response.results[i].original_title;
    var movieReleased = response.results[i].release_date;
    var moviePlot = response.results[i].overview;
    var movieImgUrl = response.results[i].poster_path;
    var popularity = response.results[i].popularity;

    $("#movieResults").append(`
    <div class="card cardEdit" id="cardMovie">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="https://image.tmdb.org/t/p/w500${movieImgUrl}">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">View Details<i class="material-icons right">more_vert</i></span>
      <p>"${movieTitle}"</p>
      <p>Released: ${movieReleased}</p>
      
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Movie Details<i class="material-icons right">close</i></span>
      <p class="t">Movie Plot:</p>
      <p>"${moviePlot}"</p>
      <p class="t">Popularity (On TMDb):</p>
      <p>${popularity}</p>
    </div>
  </div>
    `)

    }
  });
}

$("#add-movie").on("click", function () {
  $("#movieContainer").removeClass("hide");
  $(".movie").empty();
  $("#movieResults").empty();

  displayMovieInfo();
}); // Storing the title
    var movie2title = response.results[1].original_title;

    // Creating an element to have the title displayed
    var pOne2 = $("<p>").text(movie2title);

    // Displaying the title
    movieDiv.append(pOne2);

    // Storing the release year
    var movie2released = response.results[1].release_date;

    // Creating an element to hold the release year
    var pTwo2 = $("<p>").text("Released: " + movie2released);

    // Displaying the release year
    movieDiv.append(pTwo2);

    // Storing the plot
    var movie2plot = response.results[1].overview;

    // Creating an element to hold the plot
    var pThree2 = $("<p>").text("Plot: " + movie2plot);

    // Appending the plot
    movieDiv.append(pThree2);

    // Retrieving the URL for the image
    var movie2imgURL = response.results[1].poster_path;

    // Creating an element to hold the image
    var image2 = $("<img>").attr("src", "https://image.tmdb.org/t/p/w500" + movie2imgURL);

    // Appending the image
    movieDiv.append(image2);

    // Storing the title
    var movie3title = response.results[2].original_title;

    // Creating an element to have the title displayed
    var pOne3 = $("<p>").text(movie3title);

    // Displaying the title
    movieDiv.append(pOne3);

    // Storing the release year
    var movie3released = response.results[2].release_date;

    // Creating an element to hold the release year
    var pTwo3 = $("<p>").text("Released: " + movie3released);

    // Displaying the release year
    movieDiv.append(pTwo3);

    // Storing the plot
    var movie3plot = response.results[2].overview;

    // Creating an element to hold the plot
    var pThree3 = $("<p>").text("Plot: " + movie3plot);

    // Appending the plot
    movieDiv.append(pThree3);

    // Retrieving the URL for the image
    var movie3imgURL = response.results[2].poster_path;

    // Creating an element to hold the image
    var image3 = $("<img>").attr("src", "https://image.tmdb.org/t/p/w500" + movie3imgURL);

    // Appending the image
    movieDiv.append(image3);

    // Putting the entire movie above the previous movies
    $("#results").prepend(movieDiv);
  });

}

// Function for displaying movie data
function renderButtons() {

  // Deleting the movies prior to adding new movies
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();

  // Looping through the array of movies
  for (var i = 0; i < movies.length; i++) {

    // Then dynamicaly generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of movie-btn to our button
    a.addClass("movie-btn");
    // Adding a data-attribute
    a.attr("data-name", movies[i]);
    // Providing the initial button text
    a.text(movies[i]);
    // Adding the button to the buttons-view div
    $("#buttons-view").append(a);
  }
}

// This function handles events where a movie button is clicked
$("#add-movie").on("click", function (event) {
  event.preventDefault();
  // This line grabs the input from the textbox
  var movie = $("#inputName").val().trim();
  console.log("hi")

  // Adding movie from the textbox to our array
  movies.push(movie);

  // Calling renderButtons which handles the processing of our movie array
  displayMovieInfo();
});

// Adding a click event listener to all elements with a class of "movie-btn"
$(document).on("click", ".movie-btn", displayMovieInfo);

// Calling the renderButtons function to display the initial buttons
renderButtons();
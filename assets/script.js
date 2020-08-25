
var movies = [];

// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayMovieInfo() {

  var movie = $("#inputName").val();
  console.log(movie)
  var queryURL = "https://api.themoviedb.org/3/search/movie?api_key=4e2b560fdefd991469f809e56246ffa2&query=" + movie;

  // Creating an AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)

    // Creating a div to hold the movie
    var movieDiv = $("<div class='movie'>");
    // Storing the title
    var movie1title = response.results[0].original_title;
    // Creating an element to have the title displayed
    var pOne = $("<h2>").text(movie1title);
    // Displaying the title
    movieDiv.append(pOne);
    // Storing the release year
    var movie1released = response.results[0].release_date;
    // Creating an element to hold the release year
    var pTwo = $("<h3>").text("Released: " + movie1released);
    // Displaying the release year
    movieDiv.append(pTwo);
    // Storing the plot
    var movie1plot = response.results[0].overview;
    // Creating an element to hold the plot
    var pThree = $("<p>").text("Plot: " + movie1plot);
    // Appending the plot
    movieDiv.append(pThree);
    // Retrieving the URL for the image
    var movie1imgURL = response.results[0].poster_path;
    // Creating an element to hold the image
    var image1 = $("<img>").attr("src", "https://image.tmdb.org/t/p/w200" + movie1imgURL);
    // Appending the image
    movieDiv.append(image1);

    var movie2title = response.results[1].original_title;
    var pOne2 = $("<h2>").text(movie2title);
    movieDiv.append(pOne2);
    var movie2released = response.results[1].release_date;
    var pTwo2 = $("<h3>").text("Released: " + movie2released);
    movieDiv.append(pTwo2);
    var movie2plot = response.results[1].overview;
    var pThree2 = $("<p>").text("Plot: " + movie2plot);
    movieDiv.append(pThree2);
    var movie2imgURL = response.results[1].poster_path;
    var image2 = $("<img>").attr("src", "https://image.tmdb.org/t/p/w200" + movie2imgURL);
    movieDiv.append(image2);

    var movie3title = response.results[2].original_title;
    var pOne3 = $("<h2>").text(movie3title);
    movieDiv.append(pOne3);
    var movie3released = response.results[2].release_date;
    var pTwo3 = $("<h3>").text("Released: " + movie3released);
    movieDiv.append(pTwo3);
    var movie3plot = response.results[2].overview;
    var pThree3 = $("<p>").text("Plot: " + movie3plot);
    movieDiv.append(pThree3);
    var movie3imgURL = response.results[2].poster_path;
    var image3 = $("<img>").attr("src", "https://image.tmdb.org/t/p/w200" + movie3imgURL);
    movieDiv.append(image3);

    $("#results").prepend(movieDiv);
  });
}

// Function for displaying movie data
function renderButtons() {
  // Deleting the movies prior to adding new movies
  $("#buttons-view").empty();

  // Looping through the array of movies
  for (var i = 0; i < movies.length; i++) {

    // Then dynamicaly generating buttons for each movie in the array
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
  renderButtons();
});

// Adding a click event listener to all elements with a class of "movie-btn"
$(document).on("click", ".movie-btn", displayMovieInfo);

// Calling the renderButtons function to display the initial buttons
renderButtons();
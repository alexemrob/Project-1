var movies = [];

function displayMovieInfo() {

  var movie = $("#inputName").val();
  console.log(movie)
  var queryURL = "https://api.themoviedb.org/3/search/movie?api_key=4e2b560fdefd991469f809e56246ffa2&query=" + movie;

  $.ajax({
    url: queryURL,
    method: "GET"
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
      <img class="activator imgEdit" src="https://image.tmdb.org/t/p/w500${movieImgUrl}">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">view more<i class="material-icons right">more_vert</i></span>
      <p>"${movieTitle}"</p>
      <p>Released: <BR>${movieReleased}</p>
      
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Movie Detail<i class="material-icons right">close</i></span>
      <p class="t" >Movie Plot:</p>
      <p>"${moviePlot}"</p>
      <p class="t" >Popularity (On TMDb):</p>
      <p>${popularity}</p>
    </div>
  </div>
    
    `)

    }
  });
}

$("#add-movie").on("click", function (event) {
  event.preventDefault();
  var movie = $("#inputName").val().trim();
  $("#movieContainer").removeClass("hide");

  $(".movie").empty();
  $("#movieResults").empty();

  displayMovieInfo();
});
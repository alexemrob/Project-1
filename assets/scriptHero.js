function displayHero(event){
  event.preventDefault();
  currentHero();
}

function currentHero(){

jQuery.ajaxPrefilter(function(options) {
  if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
  });
  
  accToken = "10158682699513189"
  var hero = $("#inputName").val()
  var queryURL = "https://superheroapi.com/api/" + accToken +"/search/"+hero
  
  $.ajax({
    url: queryURL,
    method: "GET",
    crossDomain : true,

  }).then(function(response) {
      console.log(response)

      var arrayCount = response.results.length
      
      for (var i = 0; i < arrayCount; i++){


          var iconUrl = response.results[i].image.url;
          var heroName = response.results[i].name;
          var realName = response.results[i].biography["full-name"];
          
          var aliases = response.results[i].biography.aliases;
          var race = response.results[i].appearance.race;
          var birthPlace = response.results[i].biography["place-of-birth"];

          var height = response.results[i].appearance.height[0];
          var weight = response.results[i].appearance.weight[0];
          
          var alignment = response.results[i].biography.alignment;
          var firstApp = response.results[i].biography["first-appearance"];
          var publisher = response.results[i].biography.publisher;


          $("#heroResults").append(`
          <div class="card cardEdit" id="cardHero">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src=${iconUrl} alt="Hero Portrait">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">View Profile<i class="material-icons right">more_vert</i></span>
            <p>${heroName} /<BR> ${realName}</p>
            
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">Hero Profile<i class="material-icons right">close</i></span>
            <p class="t">Hero Name:</p>
            <p>"${heroName}"</p>
            <p class="t">Real Name:</p>
            <p>"${realName}"</p>
            <p class="t">Aliases:</p>
            <p>"${aliases}"</p>
            <p class="t" >Race:</p>
            <p>${race}</p>
            <p class="t" >Alignment:</p> 
            <p>${alignment}</p>
            <p class="t" >Place of Birth:</p> 
            <p>${birthPlace}</p>
            <p class="t" >Height:</p> 
            <p>${height}</p>
            <p class="t" >Weight:</p> 
            <p>${weight}</p>
            <p class="t" >First Comic Appearane:</p> 
            <p>${firstApp}</p>
            <p class="t" >Publisher:</p>
            <p>${publisher}</p>
          </div>
        </div>
          
          `)
      
    
      }

  }
);
}

$("#add-movie").on("click", function(){
  $("#heroContainer").removeClass("hide");

  $("#heroResults").empty();

  currentHero();

})


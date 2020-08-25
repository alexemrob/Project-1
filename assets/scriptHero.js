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
      method: "GET"
    }).then(function(response) {
    if (response === "error"){

    }
      console.log(response)

    for (var i = 0; i < 3; i++){
      var iconUrl = response.results[i].image.url;
      var heroImg = $("<img>").attr("src", iconUrl).addClass("imgEdit");
      var heroName = "<BR>" + response.results[i].name + "<BR>";
      var realName = response.results[i].biography["full-name"] + "<BR>";
      var heroId = "https://superheroapi.com/api/" + accToken + "/" + response.results[i].id;
      var heroLink = $(".heroBtn" + i).attr("href", heroId);
    
    $(".card-img-top" + i).append(heroImg)
    $(".card-title" + i).append(heroName)
    $(".card-text" + i).append(realName)
    $("#heroBtn" + i).append(heroLink)
}
});
}
  
  $("#add-movie").on("click", function(){
    $("#heroResults").removeClass("hide");
    $(".card-deck").removeClass("hide");
    $(".heroCards").removeClass("hide");

    currentHero();
  })
var topics = ["LOL", "OMG", "LMAO", "G2G", "BRB", "XOXO", "FYI", "MFW", "ILY", "IDC"];

function buttonMaker() {
    for (i = 0; i < topics.length; i++) {
        newButton = $("<button>").text(topics[i]);
        $("#button-row").append(newButton);
    }
}

$("#search-button").on("click", function () {
    event.preventDefault();
    term = $("#search-field").val();
    newButton = $("<button>").text(term)
    $("#button-row").append(newButton);
});

var searchGiphy = function(term) {
    var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC"; //api key needed
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        var dataObj = response.data;//     hey david look at this in the morning - dynamic elements solution for rest of code to translate written code to desires variables (dataObj is clumsy, choose somthing else)
        
          for (var i = 0; i < dataObj.length; i++) {

            // Creating and storing a div tag
            var gifDiv = $("<div>");

            // Creating a paragraph tag with the result item's rating
            var para = $("<p>").text("Rating: " + dataObj[i].rating);

            // Creating and storing an image tag
            var animalImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            animalImage.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and image tag to the animalDiv
            animalDiv.append(p);
            animalDiv.append(animalImage);

            // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
            $("#gifs-appear-here").prepend(animalDiv);
          }
    });
    }
buttonMaker();
searchGiphy();
var topics = ["LOL", "OMG", "LMAO", "G2G", "BRB", "XOXO", "FYI", "MFW", "ILY", "IDC"];

function buttonMaker() {
    $("#button-row").empty();
    for (i = 0; i < topics.length; i++) {
        newButton = $("<button>").attr("class", "gator").text(topics[i]);
        $("#button-row").append(newButton);
    }
}

function searchGiphy(term) {
    console.log(term);
    var apikey = "5Tn2dfjMLEvFaViuDXWY8SJhoVNi7WOv";
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apikey + "&q=" + term + "&limit=10&rating=pg-13";
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function(response) {
        var dataReturn = response.data;
        for (var i = 0; i < dataReturn.length; i++) {
            var gifDiv = $("<div>");
            var para = $("<p>").text("Rating: " + dataReturn[i].rating);
            var topicImage = $("<img>");
            topicImage.attr("src", dataReturn[i].images.fixed_width_still.url);
            topicImage.attr("data-state", "still");
            topicImage.attr("data-animate", dataReturn[i].images.fixed_width.url)
            topicImage.attr("data-still", dataReturn[i].images.fixed_width_still.url);
            topicImage.addClass("gator-image");
            gifDiv.append(para);
            gifDiv.append(topicImage);
            $("#image-container").prepend(gifDiv);
            console.log(response.data);
        }
    });
    }
//click handler start/stop gif
$("#image-container").on("click", ".gator-image", function() {
    state = $(this).attr("data-state")
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
})

$("#search-button").on("click", function() {
    event.preventDefault();
    searchTerm = $("#search-field").val();
    topics.push(searchTerm);
    buttonMaker();
});

$("#button-row").on("click", ".gator", function() {
    searchGiphy($(this).text());
})
buttonMaker();
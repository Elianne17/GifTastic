$(document).ready(function () {

   
    var topics = ["Mexico City", "Amsterdam", "Berlin", "Stockholm city", "Rome"];


    function createButton() {
        
        $("#button").empty();

       
        for (var i = 0; i < topics.length; i++) {
            
            var sOption = $("<button>")
            sOption.addClass("treat");
            sOption.attr("data-name", topics[i]);
            sOption.text(topics[i]);
           
            $("#button").append(sOption);
        }

    }
    

   
    function showGifs() {
        $('#images').empty();
       
        var sweet = $(this).attr("data-name");
        var apiKey = "RQfGmUHiwJP4z8sbTfDiI1Sx8BOL9dPD";
        var limitOf = 10;
        var fullUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + sweet + "&limit=" + limitOf + "&offset=0&lang=en";

     
        $.ajax({
            url: fullUrl,
            method: 'GET'
        }).done(function (response) {
           
            console.log(response.data);
            var results = response.data;

            
            for (var i = 0; i < results.length; i++) {
               
                var gifDiv = $("<div class=treats>");
                var showTreat = $("<img>");
               
                showTreat.attr('src', results[i].images.fixed_height_still.url);
                showTreat.attr("data-still", results[i].images.fixed_height_still.url);
                showTreat.attr('data-animate', results[i].images.fixed_height.url);
                showTreat.attr("data-state", "still");
               
                showTreat.addClass('gif');
               
                gifDiv.append(showTreat)
 
                var rating = results[i].rating;
               
                var gifRating = $("<p>").text("Rating: " + rating);
                gifDiv.append(gifRating)

                $("#images").prepend(gifDiv);

            }
        })

    }
 
    $(document).on('click', '.gif', function () {

        var state = $(this).attr('data-state');
 
        if (state == 'still') {
            $(this).attr('src', $(this).data('animate'));
            $(this).attr('data-state', 'animate');
         
        } else {
            $(this).attr('src', $(this).data('still'));
            $(this).attr('data-state', 'still');
        }
    })


    
    $("#submitButton").on("click", function () {
        
        var sweet = $("#userinput").val().trim();
        
        topics.push(sweet)
       
        form.reset();
        
        createButton()

        
        return false;
    })




    $(document).on("click", ".treat", showGifs);


    createButton()


})




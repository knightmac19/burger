$(function() {
    $(".devour").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var newDevour = $(this).data("devoured");
        
        var newDevourState = {
            devoured: newDevour
        };

        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                console.log("changed devour to ", newDevour);
                location.reload();
            }
        );
    });


    $(".add-burger").on("click", function(event) {
        event.preventDefault();
        var newBurger = {
            name: $("#burger-input").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new cat");
                location.reload();
            }
        );
    });


});
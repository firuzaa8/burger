$(document).ready(function () {
    $("#addbutton").on("click", function (event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#addburger").val().trim(),
            devoured: 0
        };
        if(newBurger.burger_name == "") {
            return
        }
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    $(".devourButton").on("click", function (event) {
        event.preventDefault();
        var devoured = {
            id: $(this).attr("id"), 
            devoured: 1
        }
        $.ajax("/api/burgers", {
            type: "PUT",
            data: devoured
        }).then(
            function () {
                console.log("ate DA BURGER");
                // Reload the page to get the updated list
                location.reload();
            }
        );

    });
});

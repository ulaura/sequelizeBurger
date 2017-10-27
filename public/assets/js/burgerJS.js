// Front end JS and jQuery

$(function() {
	// Handling the user entering a new burger (POST)
	$(".create-form").on("submit", function(event) {
		event.preventDefault();

		var newBurger = {
			burger_name: $("#burgerInfo").val().trim()
		};

		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(
			function() {
				// This console.log shows up in the browser's console for
				// a split second. Because of location.reload(), the 
				// logged message disappears instantly
				console.log("Created a new burger.");
				// Reload the page to get the updated list
				location.reload();
			}
		);
	});

	// When the user clicks the "Devour It!!" button (PUT)
	$(".devourBurgerButton").on("click", function(event) {
		var id = $(this).data("id")
		var changeBurger = {
			devoured: 0
		};

		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: changeBurger
		}).then(
			function () {
				console.log("Updated burger status.");
				location.reload();
			}
		);
	});
	

});

		var button = document.querySelector(".choose-hotel-title");
		var test = document.querySelector(".form");



		button.addEventListener("click", function(event) {
			event.preventDefault();
			test.classList.toggle("form-hide");
			console.log("Vasia");

		});

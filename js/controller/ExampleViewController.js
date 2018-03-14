//ExampleViewController Object constructor
var ExampleViewController = function(view, model ) {

	view.plusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	});

	view.minusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	});

	// API TEST - fortsätt försöka få detta att funka!
	view.dishButton.click(function(){
		//console.log(model.getAllDishes('starter'));
		model.getAllDishes2('starter', '', function(dishes){
			console.log(dishes);
			for (key in dishes) {
				if (dishes[key].title == "Cilantro Salsa") {
					console.log(dishes[key].title);
				}
			}
			//SKRIV ALLT HÄR
		}, function(dishes){

		});
	})
}
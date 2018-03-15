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
		model.getAllDishes2('starter', '', function(dishes){	//<-- function(dishes) här blir cb(data.results) från API:et
			//SKRIV ALLT SOM VI SKA GÖRA MED API-DATAN HÄR6u
			console.log(dishes);
			for (key in dishes) {
				console.log(dishes[key].title);
				if (dishes[key].readyInMinutes == 20) {
					console.log(" -- QUICKFOOD");
				}
			}
		}, function(dishes){	//<-- function(dishes) här blir cbError(data)
			console.log("something went wrong :(")
		});
	})
}
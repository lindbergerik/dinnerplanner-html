/** ExampleView Object constructor
 * 
 * It is responsible for:
 * - constructing the view (e.g. if you need to create some HTML elements procedurally) 
 * - populating the view with the data
 * - updating the view when the data changes
 * 
 * You should create a view Object like this for every view in your UI.
 */ 
var ExampleView = function (container, model) {
	// container är alltså "exampleView"-div:en in index där allt ligger
	
	/*
	 * We use the @method find() on @var {jQuery object} container to look for various elements 
	 * inside the view in orther to use them later on. For instance:
	 * 
	 * @var {jQuery object} numberOfGuests is a reference to the <span> element that 
	 * represents the placeholder for where we want to show the number of guests. It's
	 * a reference to HTML element (wrapped in jQuery object for added benefit of jQuery methods)
	 * and we can use it to modify <span>, for example to populate it with dynamic data.
	 * 
	 * We use variables when we want to make the reference private (only available within) the
	 * ExampleView.
	 */
	this.numberOfGuests = container.find("#numberOfGuests");

	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.dishButton = container.find("#getDishes");
	
	/* interaktivitet */
	this.numberOfGuests.html(model.getNumberOfGuests());
	model.addObserver(this);

	// körs igång av notifyObservers i modelen, >> ExampleView.update()
	this.update = function(arg){
		console.log("JAA");
		this.numberOfGuests.html(model.getNumberOfGuests());
	}
	
}
 

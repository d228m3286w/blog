console.log("hello");

var loveMe = function(counter){
	this.counter = counter;

	this.reallyLike = function() {
		this.counter++;
		
		document.getElementById("bad").innerHTML = this.counter;

	}
}

loveMe









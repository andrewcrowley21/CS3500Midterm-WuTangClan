function buyTickets(){

	console.log("IM here")
	var x = document.getElementById("tickets");

	for(i =0; i<x.length; i++){
		console.log(x.elements[i].value);
	}

	console.log(x.length);

	var arr1 = new Array("Washington, DC", "Sydney, AU");

	var arr2= new Array("The Anthem", "Opera House Conert Hall")

	var date = new Array("11/1/2018", "12/8/2018", "12/9/2018", "12/10/2018", "12/11/2018");

	var location = arr1[0];
	var venue = "";

	fname = x.elements[0].value;
	lname = x.elements[1].value;
	email = x.elements[2].value;
	day = x.elements[3].value;
	num = x.elements[4].value;

	price = calcPrice(num);

	// var loctaion = new String();
	// var venue = new String();

	for(i =0; i<arr1.length; i++){
		console.log(arr1[i] + " " + arr2[i]);
	}

	if(day == 1){
		location = arr1[0];
		venue = arr2[0];
	}

	else{
		location = arr1[1];
		venue = arr2[1];

	}



	text = "<h3> Thank you " + fname +" for your purchase!</h3> <br> <hr> <p>" 
			+ "<h4>Ticket Information:</h4><br> " 
			+ "Date: " + date[day-1] + "<br>"
			+ "Loctaion: " + location + "<br>"
			+ "Venue: " + venue + "<br>"
			+ "Number of ticket: " + num+ "<br>"
			+ "Total Price: $" +price + "<br>"
			+ "<br>An email confermation has been sent to "+ email + " (Not Really)</p>";

	document.getElementById("replace").innerHTML = text;

}

function calcPrice(num){
	return num * 50;
}
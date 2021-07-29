//Script file for the payment processing page.

//Test the length of an input. If the input mathces the specified length return true.
function testLength(value, length){
	if(value.length != length)
		return false;
	return true;
}

//Test if a given input is a number. If the input is a number return true.
function testNumber(value){
	if(isNaN(value))
		return false;
	return true;
}

//Validates a numeric field. If the field passes both testNumber and testLenght return true.
function validateControl(control, name, length){
	if(!testLength(control, length)){
		window.alert("Please enter a valid " + name + ", inalid length.");
		return false;
	}

	if(!testNumber(control)){
		window.alert("Please enter a valid " + name + ", not a number.");
		return false;
	}
	return true;
}

/*Validates credit card numbers. Paramaters used are decided by the card number structure of 
 *American Express, Discover, Master Card, and Visa. If the card number fits the specified 
 *parameters return true.*/
function validateCreditCard(value){
	value = value.replace(/\s/g, '');
	if(!testNumber(value)){
		window.alert("Invalid card number.");
		return false;
	}

	if(value[0] == 3){
		if(testLength(value,15))
			return true;
	}
	else if(value[0] == 6 || value[0] == 5 || value[0] == 4){
		if(testLength(value,16))
			return true;
	}

	window.alert("Invalid card number.");
	return false;
}

//Validates that the current date is not passed the expire date. Return true if valid.
function validateDate(value){
	var d = new Date();
	if(value.substring(0,4) > d.getFullYear())
	 	return true;
	else if(value.substring(0,4) == d.getFullYear() && value.substring(5,7) >= d.getMonth()+1)
		return true;
	window.alert("Invalid expiration date");
	return false;
}

//Test that the provided email is of format username@domain.top-levelDomain.
function validateEmail(value){
	var emailRegEx = /\w+[@]\w+[.]\w+/;
	if(!emailRegEx.exec(value)){
		window.alert("Please enter a valid email address.");
		return false;
	}
	return true;
}

/*Checks to see if a state is selected. If the select field is on default "select state" 
 *value is none and return false. Else return true.*/
function validateState(value){
	if(value == "none"){
		window.alert("Please select a state.");
		return false;
	}
	return true;
}

//Function called on submit, validates all required fields on the page.
function validateForm(){

	//Document input fields.
	var firstName = document.getElementById("firstName");
	var lastName = document.getElementById("lastName");
	var address = document.getElementById("address");
	var city = document.getElementById("city");
	var state = document.getElementById("state");
	var zipCode = document.getElementById("zipCode");
	var emailAddress = document.getElementById("emailAddress");
	var nameOnCard = document.getElementById("nameOnCard");
	var cardNumber = document.getElementById("cardNumber");
	var expireDate = document.getElementById("expireDate");
	var securityNumber = document.getElementById("securityNumber");

	//Tests if the first name field is of type string.
	if(!(typeof firstName.value === "string")){
		window.alert("Please enter a valid first name.");
		return false;
	}

	//Tests if the last name field is of type string.
	if(!(typeof lastName.value === "string")){
		window.alert("Please enter a valid last name.");
		return false;
	}

	//Tests if the address field is of type string.
	if(!(typeof address.value === "string")){
		window.alert("Please enter a valid address.");
		return false;
	}

	//Tests if the city field is of type string.
	if(!(typeof city.value === "string")){
		window.alert("Please enter a valid city.");
		return false;
	}

	//Tests if the name on card field is of type string.
	if(!(typeof nameOnCard.value === "string")){
		window.alert("Please enter a valid card holder name.");
		return false;
	}

	//Test if a state is selcted.
	if(!validateState(state.value))	
		return false;

	//Test if the zip code is a number and of length 5.
	if(!validateControl(zipCode.value, "zip code", 5))
		return false;

	//Test the email address for a valid format.
	if(!validateEmail(emailAddress.value))
		return false;

	//Test the card number for a valid form.
	if(!validateCreditCard(cardNumber.value))
		return false;

	//Test if month and year of the expiration date field.
	if(!validateDate(expireDate.value))
		return false;

	//Test if security number is a number and of length 3.
	if(!validateControl(securityNumber.value, "securityNumber", 3))
		return false;

	/*Alerts the user if the paymenmt was successful. If the payment was not successful an
	 *alert specifict to the error is displayed.*/
	window.alert("Payment successfully submitted!")

	//Retuns false as required.
	return false;
}
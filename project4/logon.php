<?php

$EMAIL_ID =779115500 ; // 9-digit integer value (i.e., 123456789)

require_once '/home/common/php/dbInterface.php'; // Add database functionality
require_once '/home/common/php/mail.php'; // Add email functionality
require_once '/home/common/php/p4Functions.php'; // Add Project 4 base functions

processPageRequest(); // Call the processPageRequest() function

// DO NOT REMOVE OR MODIFY THE CODE OR PLACE YOUR CODE ABOVE THIS LINE

function authenticateUser($username, $password) 
{
	$validationStatus = validateUser($username, $password);

	if($validationStatus == NULL)
		return false;

	session_start();

	$_SESSION["userId"] = $validationStatus['ID'];
	$_SESSION["displayName"] = $validationStatus['DisplayName'];
	$_SESSION["emailAddress"] = $validationStatus['Email'];

	return true;

}

function displayLoginForm($message = "")
{
	require_once './templates/logon_form.html';
}

function processPageRequest()
{
	// DO NOT REMOVE OR MODIFY THE CODE OR PLACE YOUR CODE BELOW THIS LINE
	if(session_status() == PHP_SESSION_ACTIVE)
	{
		session_destroy();
	}
	// DO NOT REMOVE OR MODIFY THE CODE OR PLACE YOUR CODE ABOVE THIS LINE

	if(empty($_POST))
		displayLoginForm();
	elseif(!isset($_POST['action']))
		displayLoginForm();
	elseif($_POST['action'] == "login") {
			if(authenticateUser($_POST["username"], $_POST["password"]))
				header("Location: index.php");
			else{
				$errorMessage = "Invalid username and or password!";
				displayLoginForm($errorMessage);
			}
	}

}

?>

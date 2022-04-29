// Copyright (c) 2022 Marcus Wehbi All rights reserved
// Created by: Marcus Wehbi
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"


/**
 * This function displays a response based on the temperature they chose
 */
function displayTemp(){
	// get user input
	let temp = parseInt(document.getElementById('userTemp').value)
  let response = ""

  	// if number is number is equal to random number, display correct response
	if (temp >= 15) {
		response = "The temperature is warm!"
	} 
	// otherwise, if number is not equal to random number, display incorrect response	
	else {
		response = "The temperature is cold!"
	}

  // display the results
  document.getElementById('temp').innerHTML = response
}



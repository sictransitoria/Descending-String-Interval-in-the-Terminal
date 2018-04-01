// Let's shine (*)

var stars = ("* ").repeat(10); // Set variable to repeat *'s
var space = setInterval(function(){ // Set function to create descending *'s from 10 down to 1.
  stars = stars.split(" "); // Put a space in between *'s upon first print out.
  stars.pop(); // .pop() removes the last *, and returns that element.  
  stars = stars.join(" "); // joins *'s, and returns the string
  	console.log(stars); // print *'s to the console.
  if(stars.length === 1) {
  	clearInterval(space); // If the value of the stars variable is equal to one, stop the function.
  
  }

});

// What time is it? Descending time.

function descendingTime(a, b) { // Set function for print out. A, B are placeholders.
  let string = "Hello " // Say Hello to each * as they descend (:
  for(let i = 0; i < b; i++){ // Loop to print out *'s 
  	string = string + a; 
  
  }

  return string; // This return will print out 10 *'s.

}

var number = 11; // Set variable to start at 11.
var printOut = setInterval(function(){
  number--;	// Create function that will minus the number variable by increments of one.
  console.log(descendingTime("*", number)); // print number variable using *'s to console. 
}, 1000);
  
  setTimeout(function(){
  	clearInterval(printOut)

}, 11000); // Write out *'s for 11 seconds
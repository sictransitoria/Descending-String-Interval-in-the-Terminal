// Let's shine

var stars = ("* ").repeat(10);
var space  = setInterval(function(){
  stars = stars.split(" ");
  stars.pop();
  stars = stars.join(" ");
  	console.log(stars);
  if(stars.length === 1) {
  	clearInterval(space);
  
  }

})

// What time is it? Descending time.

function descendingTime(a, b) {
  let string = ""
  for(let i = 0; i < b; i++){
  	string = string + a;
  
  }

  return string;

}

var number = 11;
var printOut = setInterval(function(){
  number--;	
  console.log(descendingTime("*", number));
}, 1000);
  
  setTimeout(function(){
  	clearInterval(printOut)

}, 11000);
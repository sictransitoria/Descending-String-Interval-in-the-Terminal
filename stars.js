// Let's shine ( *'s )

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
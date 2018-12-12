//<button onclick="setTimeout(myFunction, 3000)">Try it</button>


//function myFunction() {
 //alert('Hello');


function start() {
	var timeleft = 3;
	var downloadTimer = setInterval(function(){
  		document.getElementById('button-timer-demo').innerHTML=timeleft--;
  		if(timeleft < 0) {
    		clearInterval(downloadTimer);
    		document.getElementById('button-timer-demo').innerHTML="Go!";
    		this.randCircle();
  		}
	},1000);
}


function randCircle() {
	// Picks a random number between 0-2
	var rand = Math.floor(Math.random() * 3);
	/* document.getElementsByClassName('circle') returns an HTMLCollection containing 3 elements that have class="circle"
	* [rand] picks the element in that collection (either the 0, 1, 2 element)
	* .style.backgroundColor sets the selected circle's background color to green
	*/
	document.getElementsByClassName('round-button-circle_1')[rand].style.background='#ffffff';
}


// Resets all the circles on the page to a blue background color
function resetColours() {
	var circles = document.getElementsByClassName('round-button-circle_1');
	for (var i = 0; i < circles.length; i++) {
		circles[i].style.background='#5AB9EA';
	}
}

// Checks if the clicked button is the correct one
function checkSelectedButton(element) {
	if (element.style.background == 'rgb(255, 255, 255)') {
		alert('Correct');
		this.resetColours();
	} else {
		alert('Try Again');
	}
}

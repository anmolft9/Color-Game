var numSquares = 6;
var color = generateRandomColor(numSquares);
var square = document.querySelectorAll(".square");
var chosenColor = randomColor();
var colorDisplay = document.getElementById("colorSelected");
var resultDisplay = document.getElementById("result");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var modesButton = document.querySelectorAll(".modes");
var h1 = document.querySelector("h1");


colorDisplay.textContent = chosenColor;


for( var i = 0; i < modesButton.length ; i++ ){
	modesButton[i].addEventListener("click",function(){
	modesButton[0].classList.remove("selected");
	modesButton[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
    reget();
	});
}

function reget(){


// // generate random colors
color = generateRandomColor(numSquares);
// // pick a new chosen color
chosenColor = randomColor();
// //display the chosen color on the heading
colorDisplay.textContent = chosenColor;
resetButton.textContent = "New Colors";

resultDisplay.textContent = "";

// // set the background color of the squares
for(var i = 0; i < square.length ; i++){
	if (color[i]){
		// to disable the display "none" function
    square[i].style.display = "block";
	square[i].style.backgroundColor = color[i];	

	} else{

    square[i].style.display = "none"; 

	}
}
h1.style.backgroundColor = "steelblue";	
}



// easyBtn.addEventListener("click",function(){


// easyBtn.classList.add("selected");
// hardBtn.classList.remove("selected");
// numSquares = 3;	
// color = generateRandomColor(numSquares);
// chosenColor = randomColor();
// colorDisplay.textContent = chosenColor;
// for(var i = 0; i<square.length ; i++){
// 	if(color[i]){
// 	square[i].style.backgroundColor = color[i];	
// }else{
// 	square[i].style.display = "none";
// }
	

// }

// });

// hardBtn.addEventListener("click",function(){
	
// hardBtn.classList.add("selected");
// easyBtn.classList.remove("selected");
// numSquares = 6;	
// color = generateRandomColor(numSquares);
// chosenColor = randomColor();
// colorDisplay.textContent = chosenColor;
// for(var i = 0; i<square.length ; i++){
// 	square[i].style.backgroundColor = color[i];
// 	square[i].style.display = "block";
// }
// });


resetButton.addEventListener("click",function(){

	reget();
// 	resetButton.textContent = "New Colors";
// // // generate random colors
// color = generateRandomColor(numSquares);
// // // pick a new chosen color
// chosenColor = randomColor();
// // //display the chosen color on the heading
// colorDisplay.textContent = chosenColor;

// resultDisplay.textContent = "";

// // // set the background color of the squares
// for(var i = 0; i < square.length ; i++){
	
// 	square[i].style.backgroundColor = color[i];

// }
// h1.style.backgroundColor = "steelblue";

});

for(var i = 0; i < square.length ; i++){
	//add initial colors to square
	square[i].style.backgroundColor = color[i];

    //add click listener to squares
	square[i].addEventListener("click",function(){
	//grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare color with the clicked square
    if(clickedColor === chosenColor){
    	resultDisplay.textContent = "CORRECT";
    	colorChange(clickedColor);
    	h1.style.backgroundColor = clickedColor;
    	resetButton.textContent = "Play again?"
    }else{
    	resultDisplay.textContent = "INCORRECT";
    	this.style.backgroundColor = "#232323";
    }
	});
}

function colorChange(color){
//make every color to chosen color
for(var i = 0 ; i < square.length ; i++){
	square[i].style.backgroundColor = color;
}
}
// to choose the random color among random colors generated
function randomColor(){
	var ran = Math.floor(Math.random() * color.length)
	return color[ran];
}


// to generate random colors
function generateRandomColor(num){
	// make an array
	var arr = [];
	// loop num times
	for(var i = 0; i < num; i++){
		// get randomColors and push them into the array
		
		arr.push(ranColors());
	}
    // return array
	return arr;
}


function ranColors(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g + ", " + b + ")";

}
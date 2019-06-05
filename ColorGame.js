var Game={}
Game.init=function(){
	setUpSquares()
    setUpMode()	
}

var color=[]
var num=6
var square =document.querySelectorAll(".square")
var pickedColor=pickColor()
var colorDisplay=document.getElementById("colorDisplay")
var messageDisplay=document.querySelector("#message")
var newColor=document.querySelector("#new")
var h1=document.querySelector("h1")
var modeButton=document.querySelectorAll(".mode")
var credit=document.querySelector("#credit")

Game.init();

function setUpMode(){
	for(var i=0;i<modeButton.length;i++){
	modeButton[i].addEventListener("click",function(){
		modeButton[0].classList.remove("selected")
		modeButton[1].classList.remove("selected")
		this.classList.add("selected")
		this.textContent==="Easy"?num=3:num=6
		reset()
	});
 }
}

function reset(){
	generateRandomColor(num)
	pickedColor=pickColor()
	h1.style.background="steelblue"
	colorDisplay.textContent=pickedColor
	newColor.textContent="New Color"
	messageDisplay.textContent=""
	credit.style.background="steelblue"
	for(var i=0;i<square.length;i++){
		if(i<num){
			square[i].style.display="block"
			square[i].style.background=color[i]
		}
		else{
			square[i].style.display="none"
		}
	}
}

newColor.addEventListener("click",function(){
	reset()
});

function setUpSquares(){
	reset();
	for(var i=0;i<square.length;i++){
	// add click listeners to squares
	square[i].addEventListener("click",function(){
		// grab color of clicked color
		var clickedColor=this.style.background;
		// compare clickedColor to pickedColor
		if(clickedColor==pickedColor){
			messageDisplay.textContent="Correct....!!!!"
			changeColor(clickedColor);
			h1.style.background=pickedColor;
			newColor.textContent="Play Again"
			credit.style.background=pickedColor
		}
		else{
			this.style.background="#232323"
			messageDisplay.textContent="Try Again..!!"
		}
		});	
}
}

function changeColor(color){
	for (var i = 0; i < square.length; i++) {
		square[i].style.background=color;
	}
}

function pickColor(){
	return color[Math.floor(Math.random()*num)]
}
function generateRandomColor(num){
	// create an empty array
	// loop through num times
	for(var i=0;i<num;i++){
		color[i]=randomColor() //generate random color
	}
}
function randomColor(){
	// generate red b/w 0-255
	var r=Math.floor(Math.random()*255)
	// generate green b/w 0-255
	var g=Math.floor(Math.random()*255)
	// generate blue b/w 0-255
	var b=Math.floor(Math.random()*255)

	return "rgb(" + r + ", " + g + ", " + b + ")"
}

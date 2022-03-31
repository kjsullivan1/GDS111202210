// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
var ball;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	ball = new Ball();
	
	//------Declare the Player's speed on the x and y axis------
	ball.vx = 5;
	ball.vy = 0;
	//----------------------------------------------------
	
	timer = setInterval(animate, interval);


function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//----Movement Using the Player's move() function----
	ball.move();
	//---------------------------------------------------
	
	//--------------Bounce off Right----------------------
	if(ball.x > canvas.width - ball.width/2)
	{
		ball.vx = -ball.vx
		ball.vx = 1 + ball.vx
	}

	//---------------------------------------------------
	
	ball.draw();
}

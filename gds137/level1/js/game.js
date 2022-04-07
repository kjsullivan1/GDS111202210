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
	ball.vx = 3;
	ball.vy = 0;
	//----------------------------------------------------
	
	timer = setInterval(animate, interval);


function animate()
{
	ball.move();
	context.clearRect(0,0,canvas.width, canvas.height);	

	if(ball.hitTestObject(player))
	{
		ball.vx= -ball.vx +1

	}
	if(ball.hitTestObject(player))
	{
		if(ball.y <player.y - player.height/6)
		{
			ball.vx=4
			ball.vy = -4
		}
	}
	if(ball.hitTestObject(player))
	{
		if(ball.y>player.y)
		{
			ball.vx=4
			ball.vy=4
		}
	}

	
	//----Movement Using the Player's move() function----
	
	//---------------------------------------------------
	
	//--------------Bounce off Right----------------------
	if(ball.x > canvas.width - ball.width/2)
	{
		ball.x = canvas.width - ball.width/2
		ball.vx = -ball.vx
		ball.vx = ball.vx * Math.floor(Math.random() * 5)-3;
		
	}

 if(ball.x < 0 + ball.width/2) //bounce off left 
	{
		ball.x = 0 + ball.width/2
		ball.x = 
		ball.vx = ball.vx * Math.floor(Math.random() * 5)+2;
	
	}
	
 if (ball.y > canvas.height - ball.height/2)
	{
		ball.y = canvas.height - ball.height/2
		ball.vy = -ball.vy
		ball.vy = ball.vy * Math.floor(Math.random() * 5)-3;
		
	}
 if (ball.y < 0 + ball.height/2)
	{
		ball.y = 0 + ball.height/2
		ball.vy = -ball.vy
		ball.vy = ball.vy * Math.floor(Math.random() * 5) +2;
		
		
		
	}
	//---------------------------------------------------
	
	ball.draw();
}

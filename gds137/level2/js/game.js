// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
var player1;



	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	player1 = new GameObject();
	player1.x = 0;
	player1.width= 30;
	player1.height =150;

	ball = new GameObject
	ball.width = 50


	
	//------Declare the player1's speed on the x and y axis------
	player1.vx = 0;
	player1.vy = 0;

	ball.vx = -3
	ball.vy = 0
	//----------------------------------------------------
	
	timer = setInterval(animate, interval);


function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	ball.move()

	if(w)
	{
		player1.y += -4
	}
	if(s)
	{
		player1.y += 4
	}
	
	
	
	if(ball.hitTestObject(player1))
	{
		ball.vx= -ball.vx +1

	}
	if(ball.hitTestObject(player1))
	{
		if(ball.y <player1.y - player1.height/6)
		{
			ball.vx=4
			ball.vy = -4
		}
	}
	if(ball.hitTestObject(player1))
	{
		if(ball.y>player1.y)
		{
			ball.vx=4
			ball.vy=4
		}
	}
	
	//--------------Loop the Screen----------------------
	if(player1.y > canvas.height - player1.height/2)
	{
		player1.y = canvas.height - player1.height/2	
		
	}
	if(player1.y < 0 + player1.height/2)
	{
		player1.y = 0 + player1.height/2	
		
	}
	
	if(ball.x > canvas.width - ball.width/2)
	{
		ball.x = canvas.width - ball.width/2
		ball.vx = -ball.vx
		ball.vx = ball.vx * Math.floor(Math.random() * 5)-3;
		
	}

 if(ball.x < 0 + ball.width/2)
	{
		ball.x = canvas.width/2
		
		
	
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
	
	ball.drawCircle();
	
	
	player1.drawRect();
	
}

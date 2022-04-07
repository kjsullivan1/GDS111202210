// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
var player;



	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	player = new GameObject();
	player.x = 0;
	player.width= 30;
	player.height =150;

	ball = new GameObject
	ball.width = 50


	
	//------Declare the Player's speed on the x and y axis------
	player.vx = 0;
	player.vy = 0;

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
		player.y += -4
	}
	if(s)
	{
		player.y += 4
	}
	
	
	
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
	
	//--------------Loop the Screen----------------------
	if(player.y > canvas.height - player.height/2)
	{
		player.y = canvas.height - player.height/2	
		
	}
	if(player.y < 0 + player.height/2)
	{
		player.y = 0 + player.height/2	
		
	}
	if(ball.x > canvas.width - ball.width/2)
	{
		ball.x = canvas.width - ball.width/2
		ball.vx = -ball.vx
		ball.vx = ball.vx * Math.floor(Math.random() * 5)-3;
		
	}

 if(ball.x < 0 + ball.width/2)
	{
		ball.x = 0 + ball.width/2
		ball.vx = -ball.vx
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
	
	ball.drawCircle();
	
	
	player.drawRect();
	
}

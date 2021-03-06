// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
var player1;
var player2;
var p1Wins = 0;
var p2Wins = 0;
var img = document.getElementById("ric");



	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	player1 = new GameObject();
	player1.x = 0;
	player1.width= 30;
	player1.height =150;
	player1.color= "gold";

	player2 = new GameObject();
	player2.x = 1024;
	player2.width=30;
	player2.height=150;
	player2.color = "silver";
	

	ball = new GameObject()
	ball.width = 50
	ball.height = ball.width
	ball.color= "black";


	
	//------Declare the player1's speed on the x and y axis------
	player1.vx = 0;
	player1.vy = 0;

	player2.vx = 0;
	player2.vy = 0;

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
	
	if(up)
	{
		player2.y += -4
	}
	if(down)
	{
		player2.y +=4
	}
	
	
	if(ball.hitTestObject(player1))
	{
		ball.vx= -ball.vx +1

		ball.x= player1.x + player1.width/2 + ball.width/2

		if(ball.y <player1.y - player1.height/6)
		{
			
			ball.vy = -4
			ball.x= player1.x + player1.width/2 + ball.width/2
		}
	
		if(ball.y>player1.y)
		{
			ball.x= player1.x + player1.width/2 + ball.width/2
			ball.vy=4
		}
	}

	if(ball.hitTestObject(player2))
	{
		ball.vx= -ball.vx -1

		ball.x= player2.x - player2.width/2 - ball.width/2
	
		if(ball.y <player2.y - player2.height/6)
		{
			ball.vx=-4
			ball.x= player2.x - player2.width/2 - ball.width/2
		}

		if(ball.y>player2.y)
		{
			ball.vx=-4
			ball.x= player2.x - player2.width/2 - ball.width/2
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

	if(player2.y > canvas.height - player2.height/2)
	{
		player2.y = canvas.height - player2.height/2	
		
	}
	if(player2.y < 0 + player2.height/2)
	{
		player2.y = 0 + player2.height/2	
		
	}
	//DRAW SCOREBOARD
	context.font = "45px Times New Roman"
	context.fillText("Player 1 | Player 2", 348,35)

	context.save()

	context.font = "30px Times New Roman" 
	context.fillStyle ="black"
	context.fillText( p1Wins.toString()+"-" + p2Wins.toString(),493,60)
	context.restore();
	
	if(ball.x > canvas.width + ball.width/2)
	{
		ball.x = canvas.width/2
		
		p1Wins = p1Wins +1;
	}

 if(ball.x < 0 - ball.width/2)
	{
		ball.x = canvas.width/2
		
		p2Wins = p2Wins +1;
	
	}
	
 if (ball.y > canvas.height - ball.height/2)
	{
		ball.y = canvas.height - ball.height/2
		ball.vy = -ball.vy
		ball.vy = ball.vy * Math.floor(Math.random() * 3)-2;
		
	}
 if (ball.y < 0 + ball.height/2)
	{
		ball.y = 0 + ball.height/2
		ball.vy = -ball.vy
		ball.vy = ball.vy * Math.floor(Math.random() * 3) +2;
		
		
		
	}

	context.drawImage(img,ball.x - ball.width/2, ball.y - ball.height/2, ball.width, ball.height);	
	//THE NET
	context.save();
	context.strokeStyle = "black"
	context.beginPath()
	context.moveTo(canvas.width/2,0)
	context.lineTo(canvas.width/2,800)
	context.closePath()
	context.lineWidth = 2
	context.stroke()
	context.restore()
	//---------------------------------------------------
	
	
	
	
	player2.drawRect();
	player1.drawRect();

	
	
}

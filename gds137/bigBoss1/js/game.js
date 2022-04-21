var canvas;
var context;
var player
var timer
var interval
var ball
var line
var gravity = 1

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");	
var ctx = canvas.getContext("2d")  

player = new GameObject()
player.x = canvas.width/2
player.y = canvas.height - 50
player.width = 200
player.height = 30
player.color = "#00ffff"

ball = new GameObject()
ball.x= canvas.width/2
ball.y = canvas.height/2
ball.width = 40
ball.height = ball.width
ball.color = "#ff00ff"


player.vx = 0
player.vy = 0


ball.vy += gravity
ball.y += player.vy

 timer = setInterval(animate, interval);

 function animate()
 {
	context.clearRect(0,0,canvas.width, canvas.height);
	if(d)
	{
		player.x  += 4
	}
	if(a)
	{
		player.x += -4
	}


	if(player.x > canvas.width - player.width/2)
	{
		player.x = canvas.width - player.width/2
	}
	if(player.x  < 0 + player.width/2)
	{
		player.x = 0 + player.width/2
	}
	//SCOREBOARD
	
	
	
	player.drawRect()
	ball.drawCircle()
	//LINE
	context.save();
	context.strokeStyle = "black"
	context.beginPath()
	context.moveTo(ball.x,ball.y)
	context.lineTo(player.x,player.y)
	context.closePath()
	context.lineWidth = 2
	context.stroke()
	context.restore()
 }

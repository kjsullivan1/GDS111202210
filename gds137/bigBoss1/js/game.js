var canvas;
var context;
var player
var timer
var interval = 1000/60
var ball
var line
var score


score = 0


canvas = document.getElementById("canvas");
context = canvas.getContext("2d")	
var ctx = canvas.getContext("2d")  

player = new GameObject()
player.x = canvas.width/2
player.y = canvas.height - 50
player.width = 250
player.height = 40
player.color = "#00ffff"
player.ax = 1
player.force = 1



ball = new GameObject()
ball.x= canvas.width/2
ball.y = canvas.height/2
ball.width = 80
ball.height = ball.width
ball.color = "#ff00ff"
ball.force = 5

ball.vx = 5
ball.vy = 0


player.vx = 0
player.vy = 0






 timer = setInterval(animate, interval);

 function animate()
 {
	
	
	


	context.clearRect(0,0,canvas.width, canvas.height);
	ball.vy *=frictionY
	ball.vx *=frictionX
	ball.vy += gravity;

	
	ball.move()
	showBounce()

	
	if(d)
	{
		
		
		player.vx += player.ax * player.force
		
	}
	
	if(a)
	{
		
		
		player.vx +=  player.ax * -player.force
		
	}
	player.vx *= frictionX;
	player.x += player.vx;

	if(player.x > canvas.width - player.width/2)
	{
		player.x = canvas.width - player.width/2
		player.vx = 0
	}
	if(player.x  < 0 + player.width/2)
	{
		player.x = 0 + player.width/2
		player.vx = 0
	}

	if(ball.y<0 + ball.height/2 )
	{
		ball.y = 0 + ball.height/2
		ball.vy = -ball.vy 
		

		
		
	}
	

	if(ball.x > canvas.width -ball.width/2)
	{
		ball.x = canvas.width - ball.width/2
		ball.vx = -ball.vx 
		ball.vy = ball.vy
		
		
	}
	if(ball.x < 0 + ball.width/2)
	{
		ball.x = 0 + ball.width/2
		ball.vx = -ball.vx
		
		
	}

	if(ball.hitTestObject(player))
	{
		ball.y= player.y -player.height/2 -ball.height/2
		
		score = score + 1
		
		ball.vy = -35
		
		
		if(ball.x < player.x - player.width/3)
		{
			
			
			ball.vx = -ball.force*5
			
		}
		else if(ball.x > player.x + player.width/3)
		{
			
		
			ball.vx = ball.force*5
			
		}
		else if (ball.x < player.x - player.width/6)
		{
			ball.y= player.y - player.height/2 - ball.height/2
			ball.vx =-ball.force
		}
		else if(ball.x > player.x + player.width/6)
		{
			ball.y= player.y - player.height/2 - ball.height/2
			ball.vx = ball.force
		}
	}
	
	showBounce()
	


	
	//SCOREBOARD
	
	context.save()
	context.font = "30px Arial" 
	context.fillStyle ="black"
	context.fillText("Score: "+ score.toString(),100,35)
	context.restore();
	
	

	
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

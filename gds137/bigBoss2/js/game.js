var canvas;
var context;
var player
var timer
var interval = 1000/60
var ball
var line
var score
var timer1

var game = false
var game2 = false
score = 0


canvas = document.getElementById("canvas");
context = canvas.getContext("2d")	
var ctx = canvas.getContext("2d")  

player = new GameObject()
player.x = canvas.width/2
player.y = canvas.height - 25
player.width = 50
player.height = 50
player.color = "#ffff00"
player.ax =1
player.force = 1

var fX = .85;
var fY = .97;

var amount = 5
var hazards = []
var items = []

for (var i = 0; i < amount; i++)
{
	hazards[i] = new GameObject();
		hazards[i].x = Math.random() * canvas.width;
		hazards[i].y = -canvas.height - 100
		hazards[i].vy = Math.random() * 10 + 5;
		hazards[i].width = 20
		hazards[i].height = hazards[i].width
}

for (var i = 0; i < amount; i++)
{
	items[i] = new GameObject();
		items[i].x = Math.random() * canvas.width;
		items[i].y = -canvas.height - 100
		items[i].vy = Math.random() * 10 + 5;
		items[i].width = 20
		items[i].height = 20 
}





	player.vx = 0
	player.vy = 0






 timer = setInterval(animate, interval);

 function animate()
 {
	
	


	context.clearRect(0,0,canvas.width, canvas.height);

	
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

	
	//DRAWING 
	for(var p = 0; p < hazards.length; p++)
	{	
		hazards[p].x += hazards[p].vx;
		hazards[p].y += hazards[p].vy;
	
			
	

			if ((hazards[p].y > canvas.height - hazards[p].height/2))
			{
				hazards[p].y = -canvas.height - hazards[p].height;
				hazards[p].vy = Math.random()*(15 - 5) + 5;
				hazards[p].color = "red";
				
			}
		
			if(hazards[p].hitTestObject(player))
			{
				player.color = "red"
				score = 0
				clearTimeout(timer1)
				timer1 = setTimeout (function()
				{
					player.color = "yellow"
				}, 500)
				
				for(var j = 0; j < amount; j++)
				{
					hazards[j].y = -canvas.height - 100
				}
				game = true
			}
		
		hazards[p].drawCircle();
	}

	for(var p = 0; p < items.length; p++)
	{	
		items[p].x += items[p].vx;
		items[p].y += items[p].vy;
		items[p].color = "green"
			
	

			if ((items[p].y > canvas.height - items[p].height/2))
			{
				items[p].y = -canvas.height - items[p].height;
				items[p].vy = Math.random()*(15 - 5) + 5;
				items[p].color = "green";
				
			}
			if(items[p].hitTestObject(player))
			{
				score = score + 1
				player.color = "green"
				clearTimeout(timer1)
				timer1 = setTimeout (function()
				{
					player.color = "yellow"
				}, 500)
			
				
				items[p].y = -canvas.height - 100
			
			}
			
			
			
		
		items[p].drawRect();
	}

	//KEEPING SCORE


	
	context.save()
	context.font = "30px Arial" 
	context.fillStyle ="black"
	context.fillText("Score: "+ score.toString(),100,35)
	context.restore();
	
	player.drawRect()
}
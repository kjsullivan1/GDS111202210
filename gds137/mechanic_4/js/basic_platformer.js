//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;
var player2
var dashing
var shield



	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:100, y:canvas.height/2-100});
	player2 = new GameObject({x:canvas.width -100,y:canvas.height-150})
	shield = new GameObject({x:player.x+100, y:player.y})
	

	

	platform0 = new GameObject();
		platform0.width = canvas.width;
		platform0.x = platform0.width/2;
		platform0.y = canvas.height - platform0.height/2;
		platform0.color = "#66ff33";
		
	goal = new GameObject({width:24, height:50, x:canvas.width-50, y:100, color:"#00ffff"});
	

	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	

	if(w && player.canJump && player.vy ==0)
	{
		player.canJump = false;
		player.vy += player.jumpHeight;
	}

	if(q && player.canJump && player.vy ==0)
	{
		
		player.vy += player.jumpHeight;

		if(q)
		{
			player.vy += player.jumpHeight;
		}

		
	}
	if(a)
	{
		player.vx += -player.ax * player.force;
		if(f)
		{
		f = dashing;
		player.x = player.x - 50
		player.y = player.y -10
		}
	}
	if(d)
	{
		player.vx += player.ax * player.force;
		if(f)
		{
		f = dashing;
		player.x = player.x + 50
		player.y = player.y -10
		}
	}

	if(shift)
	{
		shield.drawRect()
		shield.color = "grey"
		shield.x = player.x + player.width -40
		shield.y = player.y
		shield.width = 20
		shield.height= 150
		if(a ||  d || w || s)
		{
			shift = false
		}
	}

	if (space)
	{
		context.save();
		context.strokeStyle = "black"
		context.beginPath()
		context.moveTo(player.x,player.y)
		context.lineTo(player2.x,player2.y)
		context.closePath()
		context.lineWidth = 2
		context.stroke()
		context.restore()

		var	dx = player.x - player2.x;
		var dy = player.y -player2.y
		var dist = Math.sqrt(dx * dx + dy * dy)
		var radians = Math.atan2(dy, dx);
	
		player2.vx = Math.cos(radians)*player2.force;
		player2.vy = Math.sin(radians)*player2.force;

		player2.x += player2.vx * 10;
		player2.y += player2.vy * 10;
	}

	if(f)
	{
		f = dashing;
		player.x = player.x + 50
		player.y = player.y -10
	}
	
	
	

	player.vx *= fX;
	player.vy *= fY;

	player2.vx *=fX
	player2.vy  *=fY;
	
	player.vy += gravity;
	player2.vy += gravity;
	
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);

	player2.x += Math.round(player2.vx);
	player2.y += Math.round(player2.vy);
	
// PLAYER 1 COLLISIONS
	while(platform0.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform0.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
//	PLAYER2 COLLISIONS
	while(platform0.hitTestPoint(player2.bottom()) && player2.vy >=0)
	{
		player2.y--;
		player2.vy = 0;
		player2.canJump = true;
		player2.color = "green";
	}
	while(platform0.hitTestPoint(player2.left()) && player2.vx <=0)
	{
		player2.x++;
		player2.vx = 0;
	}
	while(platform0.hitTestPoint(player2.right()) && player2.vx >=0)
	{
		player2.x--;
		player2.vx = 0;
	}
	while(platform0.hitTestPoint(player2.top()) && player2.vy <=0)
	{
		player2.y++;
		player2.vy = 0;
	}


//ATTACK ANIMATION
	while(player2.hitTestPoint(player.right())&& player.vx>=0 && space)
	{
		player.x--
		player2.x=player2.x +200
		player2.y = player2.y -10
		player2.color = "blue"
		space = false;
	}
	while(player2.hitTestPoint(player.right()) && f == dashing )
	{
		player.x--
		player2.x = player2.x +100
		player2.y = player2.y -10
		player2.color = "blue"

		player.x = player.x -250
		player.y = player.y -10
		
		
		
		
	}
	while(player2.hitTestPoint(player.left()) && f == dashing )
	{
		player.x--
		player2.x = player2.x -100
		player2.y = player2.y -10
		player2.color = "blue"

		player.x = player.x +250
		player.y = player.y -10
	
		
		
	}
	while(player2.hitTestObject(shield) && shield)
	{
		player2.x++
		
	}

	//ANIMATION FOR PLAYER 2 ATTACKING PLAYER 1
	if(player.x >= player2.x  - 500)
	{
		var	dx = player.x - player2.x;
		var dy = player.y -player2.y
		var dist = Math.sqrt(dx * dx + dy * dy)
		var radians = Math.atan2(dy, dx);
	
		player2.vx = Math.cos(radians)*player2.force;
		player2.vy = Math.sin(radians)*player2.force;

		player2.x += player2.vx * 2;
		player2.y += player2.vy * 2;


	} 
	
	//---------Objective: Treasure!!!!!!!---------------------------------------------------------------------------------------------------- 
	//---------Run this program first.
	//---------Get Creative. Find a new way to get your player from the platform to the pearl. 
	//---------You can do anything you would like except break the following rules:
	//---------RULE1: You cannot spawn your player on the pearl!
	//---------RULE2: You cannot change the innitial locations of platform0 or the goal! 
		
	if(player.hitTestObject(goal))
	{
		goal.y = 10000;
		context.textAlign = "center";
		context.drawText("You Win!!!", canvas.width/2, canvas.height/2);
	}
	
	
	platform0.drawRect();

	//Show hit points
	player.drawRect();
	player2.drawRect();
	goal.drawCircle();
	//LINE
	
}


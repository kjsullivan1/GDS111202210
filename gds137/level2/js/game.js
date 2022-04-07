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


	
	//------Declare the Player's speed on the x and y axis------
	player.vx = 0;
	player.vy = 0;
	//----------------------------------------------------
	
	timer = setInterval(animate, interval);


function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	if(w)
	{
		player.y += -4
	}
	if(s)
	{
		player.y += 4
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
	
	
	player.drawRect();
	LTblock.drawRect()
}

var frictionX = .90;	
var frictionY = .97;
var gravity = .05;
player.force=5
player.ax = 3
ball.force = 5

function showGravity()
{
	
	
	
	//--------------Apply Gravity to the Velocity Y-----------------------------------------
	ball.vy += gravity;
	ball.y += ball.vy;
	//---------------------------------------------------------------------------------------
	
	ball.vx *= frictionX;
	ball.x += ball.vx;
}

function showBounce()
{
	
	
	ball.vy *= frictionY;
	ball.vx *= frictionX;
	
	ball.vy += gravity;
	
	ball.x += ball.vx;
	ball.y += ball.vy;
	
	//--------------------Check Collision------------------------------------------------------
	if(ball.y > canvas.height - ball.height/2)
	{
		
		//--------Bounce the Ball---------------------------------------------------------------
		ball.y = canvas.height - ball.height/2;
		//the decimal is how bouncy you want the object to be
		//It should be a number between 0 and 2;
		ball.vy = -ball.vy * .99;
        score = 0
	}
	
	//-----------------------------------------------------------------------------------------
}

function showAcceleration()
{
	//--------------Use Velocity and Acceleration to move around----------------------
	if(d)
	{	
		player.vx +=  player.ax * player.force;
	}
	if(a)
	{
		player.vx += player.ax * -player.force;
	}

	//---------------------------------------------------------------------------------------
	//player.x += player.vx;
	//player.y += player.vy;
}

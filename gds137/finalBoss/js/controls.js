var w = false;
var a = false;
var s = false;
var d = false;
var space = false;
var f = false;
var shift = false;
var enter = false
var q = false

document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

function press(e)
{
	//---This logs key codes into the browser's console.
	console.log(e.keyCode);
	
	if(e.keyCode == 87)
	{
		w = true;
	}
	if(e.keyCode == 65)
	{
		a = true;
	}
	if(e.keyCode == 83)
	{
		s = true;
	}
	if(e.keyCode == 68)
	{
		d = true;
	}
	if(e.keyCode == 32)
	{
		space = true;
	}
	if(e.keyCode == 70)
	{
		f = true;
	}
	if(e.keyCode == 16)
	{
		shift = true
	}
	if(e.keyCode == 13)
	{
		enter = true
	}
	if(e.keyCode == 81)
	{
		q = true
	}
}

function release(e)
{
	//---This logs key codes into the browser's console.
	//console.log(e.keyCode);
	
	if(e.keyCode == 87)
	{
		w = false;
	}
	if(e.keyCode == 65)
	{
		a = false;
	}
	if(e.keyCode == 83)
	{
		s = false;
	}
	if(e.keyCode == 68)
	{
		d = false;
	}
	if(e.keyCode == 32)
	{
		space = false;
	}
	if(e.keyCode == 70)
	{
		f = false;
	}
	if(e.keyCode == 81)
	{
		q = false
	}
	
	
}

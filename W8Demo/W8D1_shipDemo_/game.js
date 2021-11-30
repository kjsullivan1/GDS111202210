//JS file that runs the game and connects the functionality of ship.js and controls.js to the HTML 

var canvas 
var context

//variable for the animation timer 
var timer 

var ship //the ship!

var friction //slows down velocity 

//function to ready the canvas and starting position of the ship
$(document).ready(function(e){

    //assign the canvas elemnt to the canvas var
    canvas = $("#canvas")//jquery version of document.getElementById("#canvas")
    context = canvas.get(0).getContext("2d")

    ship = new Ship() //Ship() was defined in ship.js

    //fricition and POWER
    friction = .95
    ship.power = 1
    timer = setInterval("animate();", 33) //33 miliseconds (1000 would be 1 second)



})

//LET'S DO STUFF!
function animate(){

    context.clearRect(0,0,canvas.width(), canvas.height())

    //check to see if the keyCode values are up or down [connects to the controls.js]
    if(up){//if the current value of 'up' is TRUE

       //when up key is TRUE (which means we are pressing the key down)
       ship.vy -= ship.ax * ship.power
       //line 40 same as: ship.vy = ship.vy - (ship.ax * ship.power)
       //ship's velocity of y axis is LOWERED by its current acceleration and power 

    }

    if(down) {//current value of 'right' is true 

        ship.vy += ship.ax * ship.power
    
    
    }
    
    if(right){
    
        //add acceleration (moving towards the right!)
        ship.vx += ship.ax * ship.power
    }
    
    if(left){
    
        //subtract acceleration
        ship.vx -= ship.ax * ship.power
    }

    //apply friction to the velocity 
    ship.vx *= friction
    ship.vy *= friction 

    //move and redraw ship! .functions() are from ship.js [Ship()]
    ship.move()
    ship.draw()

    if(ship.x > canvas.width() + 25){
        //if current ship x coord is greater than (beyond) the canvas width + 25 (size of the ship)

        //move ship x coord t
        ship.x = -25
    }

    if(ship.y > canvas.width() + 25){
        //if current ship x coord is greater than (beyond) the canvas width + 25 (size of the ship)

        //move ship x coord t
        ship.y = +25
    }

    
}



//JS file to create a ship in the HTML canvas
function Ship(){

    //the 'this' keyword refrences the current object you are inside of (in the code block) EVERYTHING in javascript is an object SO when we say 'this' we are talking about Ship()

    this.x = 100 //x-axis coord start position 
    this.y = 100 // y-axis coord start position
    this.color = "black" //outline color 
    this.fillStyle = "orange" //interior color

    //velocity variable for the x and y axis 
    this.vx = 0 
    this.vy = 0

    //acceleration variables for the x and y axis
    this.ax = 1
    this.ay = 1

    //function "move" that will add velocity to the position of the ship 
    this.move = function (){

        this.x += this.vx //adds velocity value to x coord point
        this.y += this.vy //adds velocity value to the y coord point 

    }

    this.draw = function(){

        /*
        DRAWING THE SHIP TO THE CANVAS (TRIANGLE)
        -------------------------------------------

        //save the current state of the canvas
        context.save()

        //move the point of origin 0,0 to the ship's x and y coords
        context.translate(this.x, this.y)

        //DRAW THE SHIP
        context.lineStyle = this.color
        context.fillStyle = this.fillStyle

        //start point at current spot designated on line 32
        context.beginPath()

        //draw the triangle! (ship)
        context.moveTo(25,0) //relative to 100,100 not 0,0
        context.lineTo(-25,25)
        context.lineTo(-25,-25)

        context.stroke()
        context.fill()
        context.restore()
        
        */

        //IMAGE AS THE SHIP (X-WING)

        var imageObj = new Image()
        imageObj.src = "images/xwing.png" //PNG FOR TRANSPARENCY

        //save the current state of the canvas
        context.save()

        //move the point of origin 0,0 to the ship's starting x and y coords
        context.translate(this.x,this.y)

        //draw image to the canvas context
        //drawImage(image, x coord of the top left corner, y coord of the top left corner, width of imae, height of image)
        context.drawImage(imageObj, -100, -50, 200, 100)
        context.restore()
        
    }

}
var canvas = document.getElementById("canvas") 
var ctx = canvas.getContext("2d")                

var shapes = new Image()
shapes.src = "images/shapes.png"

shapes.onload = function(){

    
    ctx.drawImage(shapes, 0, 0, 800, 800)

    //Square
    ctx.fillStyle = "yellow"
    ctx.strokeStyle = "black"
    ctx.lineWidth = "5"
}
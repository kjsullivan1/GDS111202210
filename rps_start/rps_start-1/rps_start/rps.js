//RPS Part 1 Javascript -- W6D1

//Create an Array that will store the images being used
//ARRAY: it's just like a variable (so it's a data storage device) BUT it can contain more than one value

var pics = new Array() //creates an empty Array

//assign values to array -- "population"
//[#] denotes index --> it's like a house number and array is the street name; array name + index gives access to the indiv value
pics[0] = "images/rock.jpg"
pics[1] = "images/paper.jpg"
pics[2] = "images/scissors.jpg"

var pics2 = new Array() 

pics2[0] = "images/rock2.jpg"
pics2[1] = "images/paper2.jpg"
pics2[2] = "images/scissors2.jpg"

//arrays that store the player and computer options (one array for each)
//Player ID- pId
var pId = new Array("rock_p", "paper_p", "scissors_p") 
//pId[1] = "paper_p"
//Computer Id - cId
var cId = new Array("rock_c", "paper_c", "scissors_c")

//create a function that will swap the regular images with the highlighed ones (series 2 pics)
function swap(id, image){

    //access the image elements by ID from the HTML dosument 
    document.getElementById(id).src = image

}

//play function
function play(id) {

    //setting up the stored image paths (src) in JS to match the HTML ones
    swap(pId[0], pics[0])
    swap(pId[1], pics[1])
    swap(pId[2], pics[2])
    
    swap(cId[0], pics[0])
    swap(cId[1], pics[1])
    swap(cId[2], pics[2])

    //store the game choices to variables (player and comp)
    var p_choice = id

    //randomize the computer's choice! math.floor and *2.9 limits choice 
    var c_choice = Math.floor(Math.random() * 2.9)

    //swap the starting images with the highlighted ones
    swap(pId[p_choice], pics2[p_choice])
    swap(cId[c_choice], pics2[c_choice])

    //SWITCH TIME - switch give us the option to determine a set of code to run based on predetermined case value\

    switch(p_choice){
        //cases need to be built for *every* option p_choice can be!

        case 0://case for when p_choice ==0
        if(c_choice == 0) {

            //alert the user that there has been a draw
            alert("Bloody hell let's call it a DRAW!")

        }
        else if (c_choice == 1) {//comp is paper
        
            alert("You LOST to the computer")
        }
        else{// comp is scissors
        
            alert("You WIN!")
        }
        break

        case 1:
            if(c_choice == 1) {

                //alert the user that there has been a draw
                alert("Bloody hell let's call it a DRAW!")
    
            }
            else if (c_choice == 2) {
            
                alert("You LOST to the computer")
            }
            else{
            
                alert("You WIN!")
            }

            break
       
            case 2:
                if(c_choice == 2) {

                    //alert the user that there has been a draw
                    alert("Bloody hell let's call it a DRAW!")
        
                }
                else if (c_choice == 0) {
                
                    alert("You LOST to the computer")
                }
                else{
                
                    alert("You WIN!")
                }
                break
    }


}
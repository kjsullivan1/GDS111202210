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

//create array holding button elements
//document.querySelectionAll grabs all of one element type
var btn = document.querySelectorAll("button")

//check your stored data in the console!
console.log(btn) //used for testing, requires the dev tools to be open

//make the buttons clickable and runnable ALSO for the game
//add event listeners to each button 
btn[0].addEventListener("click", function (e) { play(0) })
btn[1].addEventListener("click", function (e) { play(1) })
btn[2].addEventListener("click", function (e) { play(2) })


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
    //swap() CALLS the function --> this gets its code to run
    //values supplied inside of () are passed into the parameter variables 
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
            //callshowResults() and pass correct values for: pChoice cChoice and results
            showResults("Rock!", "Rock!", "It's a DRAW")

        }
        else if (c_choice == 1) {//comp is paper
        
            alert("You LOST to the computer")
            showResults("Rock!", "Paper", "You LOST")
        }
        else{// comp is scissors
        
            alert("You WIN!")
            showResults("Rock!", "Scissors", "You WIN!")
        }
        break

        case 1:
            if(c_choice == 1) {

                //alert the user that there has been a draw
                alert("Bloody hell let's call it a DRAW!")
                showResults("Paper", "Paper!", "It's a DRAW")
    
            }
            else if (c_choice == 2) {
            
                alert("You LOST to the computer")
                showResults("Paper", "Scissors", "You LOST")
            }
            else{
            
                alert("You WIN!")
                showResults("Paper", "Rock!", "You Win")
            }

            break
       
            case 2:
                if(c_choice == 2) {

                    //alert the user that there has been a draw
                    alert("Bloody hell let's call it a DRAW!")
                    showResults("Scissors", "Scissors", "It's a DRAW")
        
                }
                else if (c_choice == 0) {
                
                    alert("You LOST to the computer")
                    showResults("Scissors", "Rock!", "You LOST")
                }
                else{
                
                    alert("You WIN!")
                    showResults("Scissors", "Paper", "You Win")
                }
                break
    }//end switch statement 



}//play() CLOSE


//function that writes the results back to the HTML page
function showResults(pChoice, cChoice, results) {

    document.getElementById("pChoice").innerHTML = pChoice
    document.getElementById("cChoice").innerHTML = cChoice
    document.getElementById("results").innerHTML = results


}
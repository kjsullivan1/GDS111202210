

var pics = new Array() 


pics[0] = "images/British.png"
pics[1] = "images/France.png"
pics[2] = "images/German.png"

var pics2 = new Array() 

pics2[0] = "images/British.png"
pics2[1] = "images/France.png"
pics2[2] = "images/German.png"


var btn = document.querySelectorAll("button")

!
console.log(btn) /

 
btn[0].addEventListener("click", function (e) { play(0) })
btn[1].addEventListener("click", function (e) { play(1) })
btn[2].addEventListener("click", function (e) { play(2) })



var pId = new Array("rock_p", "paper_p", "scissors_p") 

var cId = new Array("rock_c", "paper_c", "scissors_c")

function swap(id, image){

  
    document.getElementById(id).src = image

}


function play(id) {

   
    swap(pId[0], pics[0])
    swap(pId[1], pics[1])
    swap(pId[2], pics[2])
    
    swap(cId[0], pics[0])
    swap(cId[1], pics[1])
    swap(cId[2], pics[2])

    
    var p_choice = id

    
    var c_choice = Math.floor(Math.random() * 2.9)

   
    swap(pId[p_choice], pics2[p_choice])
    swap(cId[c_choice], pics2[c_choice])

    

    switch(p_choice){
       

        case 0:
        if(c_choice == 0) {

           
            
           
            showResults("Bri'ish", "Bri'ish", "We've got a Civil War! It's a Draw")

        }
        else if (c_choice == 1) {//comp is paper
        
            
            showResults("Bri'ish", "French", "You've been had! You Lose!")
        }
        else{// comp is scissors
        
            
            showResults("Bri'ish", "Germans", "It's a massacare! You Win!")
        }
        break

        case 1:
            if(c_choice == 1) {

                
               
                showResults("French", "French", "Someone's gotta surrender! It's a Draw!")
    
            }
            else if (c_choice == 2) {
            
                
                showResults("French", "Germans", "Conquered again. You Lose!")
            }
            else{
            
               
                showResults("French", "Bri'ish", "Down with the Brits! You Win!")
            }

            break
       
            case 2:
                if(c_choice == 2) {

                    
                    
                    showResults("Germans", "Germans", "Not a civil war! It's a Draw!")
        
                }
                else if (c_choice == 0) {
                
                   
                    showResults("Germans", "Bri'ish", "You've been overrun! You Lose!")
                }
                else{
                
                   
                    showResults("Germans", "French", "They wave the flag! You Win!")
                }
                break
    }//end switch statement 



}//play() CLOSE



function showResults(pChoice, cChoice, results) {

    document.getElementById("pChoice").innerHTML = pChoice
    document.getElementById("cChoice").innerHTML = cChoice
    document.getElementById("results").innerHTML = results


}
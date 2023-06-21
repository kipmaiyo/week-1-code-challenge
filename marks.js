//Prompt the user to enter marks
const prompt=require("prompt-sync")({sigint:true}); 
//Enter the student's marks (between 0 and 100)
let marks = prompt("Enter Score:");
//checks for the input to be between 0 & 100
    if(marks >=0  && marks <= 100){
        if (marks > 79){
            console.log("Grade A")
        }
//checks for the input to be between 60 & 79
        else if (marks >= 60 && marks <=79){
        console.log("Grade B")     
        }
//checks for the input to be between 49 & 59        
        else if (marks <= 59 && marks >49){
         console.log("Grade C")
        }
//checks for the input to be between 40 &49        
        else if (marks <= 49 && marks >= 40){
        console.log("Grade D")
        }
        else {
        console.log("Grade E")
        }  
        
    }
//checks for the input is not within range of 0 & 100
    else {
        console.log("Score not within the range")
    }





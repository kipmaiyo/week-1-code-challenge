function gradingstudentmarks(marks) {
    if((marks >=0  && marks <= 100)){
        if (marks > 79){
            return  "A"
}
else if (marks >= 60 && marks >=79){
    return "B"
}
else if (marks <= 59 && marks >49){
    return "C"
}
else if (marks <= 49 && marks >= 40){
    return "D"
}else {
    return "E"
    }  
  }   
}
let marks=parseInt(86);
let grade=calculate(marks);
   console.log(marks);




var a=Math.floor(Math.random()*10)+1
let guess=1;
while(true){
    var b=prompt("Guess the number between 1 and 10")
    
    if(b==a)
        {
            alert("Congragulations! You guessed the correct number " + a +" in " + guess)
            console.log("Congratulations! You guessed the correct number " + a +"in" +guess )
    }
    else if(b>a){
        guess++;
        alert("Too High.Try again")
        console.log("Too High.Try again")
    }
    else{
        guess++;
        alert("Too Low.Try again")
        console.log("Too Low.Try again")
    }
}



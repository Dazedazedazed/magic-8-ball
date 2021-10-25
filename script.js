function shake(){ 

   var ball= document.getElementById("ball")
   var messageText = document.getElementById("message")

   //Remove previous message
   if(messageText != null){
    messageText.parentNode.removeChild(messageText); //Where the message actually is
   } 
   
   //Makes the 8-ball shake
   ball.classList.add("shake");

   //Remove the shake class after it stops shaking
   setTimeout(function(){ ball.classList.remove("shake"); }, 1500);
   
   //Call the fortune function to get your fortune only after 2sec
   setTimeout(function(){ getFortune(); }, 1500);
}

//Generate the answer for the 8-ball
function getFortune(){
    //Array of fortune answers
    var fortunes = ["Certainly my friend",  
                   "Without a doubt", 
                   "Definitely",
                   "Its the move", 
                   "Yes!", 
				   "Yes....for now",
                   "Probably", 
                   "Looks good", 
                   "LOL don't count on it", 
                   "No",
				   "Try again bro",
                   "My sources say nah", 
                   "Outlook not so good", 
                   "Ask again later", 
                   "Ehhhh",
                   "Can't say", 
                   "Ask again... but better"];

    //Get a random fortune message
    var fortune = fortunes[Math.floor(Math.random()*fortunes.length)];

    //Displays the fortune
    var parent = document.getElementById("fortune");
    var newMessage = document.createElement("div");
    newMessage.setAttribute('id', "message");
    newMessage.innerHTML = "\""+fortune+"\"";
    parent.appendChild(newMessage);
}



 

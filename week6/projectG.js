var readlineSync = require('readline-sync');
var playerName = readlineSync.question('May I have your name? ');

var welcomeMessage = `Hello ${playerName}, welcome to the Escape Room Game Simulation!`;
console.log(welcomeMessage);

var alive = true 
var hasKey = false 

while (alive == true){
    const menuOptions = readlineSync.keyIn ("Enter 1 to Put hand in hole \n Enter 2 to find the key \n Enter 3 to Open the door", {limit: '$<1-3>'});
    console.log(menuOptions);
    if (menuOptions == 1){
        console.log ( `${playerName}, Fills Bad, you are dead. Game over.`);
        alive = false;
    }
    else if (menuOptions == 2 && hasKey == false){
        console.log ( `${playerName}, WOW SUPER!!  you have Found the Key successfullly! `);
        hasKey = true; 
    }
    else if (menuOptions == 2 && hasKey == true){
      console.log (`${playerName}, your Already HAVE the KEY. Use Option 3`);   
    }
    else if (menuOptions == 3 && hasKey == false){
      console.log (`${playerName}, YOU NEED TO FIND THE KEY?`);
    }
    else if (menuOptions == 3 && hasKey == true){
        console.log (`${playerName}, You Escaped The Game Room. Congratulations you WIN`);
        alive = false
    }

}
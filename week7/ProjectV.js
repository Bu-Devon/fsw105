const readlineSync = require('readline-sync')

const name = readlineSync.question('May I have your name')

readlineSync.question(`Hello ${name} , Welcome to the Quest of Fate. Where you will fight Evil till your last Breath. Press Enter to Begain.`)

const enemys = ['Demon', 'Shadow Kaster', 'Zombie', 'Goblin'];
const treasure = ['Medkit', 'WICKED COOL ARMOR','Energy Perk', 'health pot'];
var prize = [];
let userHealth = 40; 
const options = ['Walk','Exit','Print'];
let pickUp = treasure[Math.floor(Math.random()*treasure.length)];


function rpgGame (){
    const attackPower = Math.floor(Math.random() * (6 - 5 + 3) + 5)
    const enemy = enemys [Math.floor(Math.random() * enemys.length)];
    let enemyHealth = 40; 
    const enemyPowers = Math.floor(Math.random() * (5 - 4 + 2) + 5);
    
    const index = readlineSync.keyInSelect(options, 'What will your Fate decide?');

    if (options[index] == 'Exit'){
        return userHealth = 0;
    } else if (options[index] == 'Print'){
        console.log(`${name}: \n ${userHealth} \n ${pickUp}`);
    }else if (options[index] === 'Walk'){
        let key = Math.random();
        if (key <= .3){
            console.log ('Walking...');
        }else if (key >= .3){
            console.log (`${enemy} has Appeared`);

            while(enemyHealth > 0 && userHealth > 0) {
                
                const user = readlineSync.question(' what will you do flee? enter "r" to run "a" to attack:');

                switch (user){
                    case 'r': // runaway
                        const run = Math.random();
                        if(run < .5){
                            console.log(`you could not flee ${enemy} attacks you with ${enemyPowers}`);
                        }else {
                            console.log(" You Ran Away !! ");
                            break; 
                        }
                    case 'a': //attack the enemy 
                        enemyHealth -= attackPower; 
                        console.log (`you attaked ${enemy} with ${attackPower} attack power`);
                    
                        userHealth -= enemyPowers;
                        console.log (`Enemy Has attacked you with : ${enemyPowers} attack powers `);

                    if (enemyHealth <= 0){
                        console.log (`you have slayin ${enemy} \n ${enemy} left ${pickUp}`);
                        let loot = Math.random(); 
                        if (loot <= .3) {
                            prize.push (pickUp);
                        }
                        }else if (userHealth <= 0){
                            console.log (`${enemy} HAS ENDDED YOUR LIFE AND THIS WAS YOUR FATE`);
                        }
                }
            }
        }
    }
}

while (userHealth > 0){
    userRestore = function(){
        userActive = true;
        userHealth = 40;
    };
    userRestore();
    rpgGame();
}
var i = 5

if (i > 3){
    console.log("5 is greater than 3 ");
}
 
var cat = 3
if (cat === 3){
    console.log("3 is the length of the cat ");
}
else {
    console.log ("not the length");
}



if ("cat" === "dog")
   console.log('the same');
    
else {
   console.log('not the same');
}

var person = {
    name: "Bobby",
    age : 12   
}

if (person.age >= 18){
    console.log ( person.name + " can go to the movies");
}
else {
    console.log ( person.name + " can't go to the movies");
}


var person = {
    name: "Bobby",
    age : 18
}

if (person.name.charAt(0) === "B" && person.age >= 18 ) {
    console.log ( person.name + " is allowed to go to the movie");
}
else {
    console.log( person.name + " is not allowed to go to the movie");
}

if (1==="1"){
    console.log("Strict"); 
}
else if (1=="1"){
        console.log("loose");
}
else{
    console.log("not equal at all");
}

if ( 1 <= 2 &&  2 === 4 ){
    console.log ("yes")
}
else{
    console.log ("no")
}
